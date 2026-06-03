#!/usr/bin/env python3
"""
Build campaign data exports from data.js and i18n.js.
Generates:
  - site/campaign.json  (deployable JSON endpoint)
  - campaign-knowledge.md (uploadable to Claude Projects)
"""

import json
import re
import os

SITE_DIR = os.path.join(os.path.dirname(__file__), "site")
DATA_JS = os.path.join(SITE_DIR, "assets/js/data.js")
I18N_JS = os.path.join(SITE_DIR, "assets/js/i18n.js")
OUT_JSON = os.path.join(SITE_DIR, "campaign.json")
OUT_MD = os.path.join(os.path.dirname(__file__), "campaign-knowledge.md")


def extract_js_object(filepath, var_name):
    """Extract a JS object/array assigned to var_name as a Python dict."""
    with open(filepath, "r") as f:
        content = f.read()

    # Find the variable declaration
    pattern = rf'(?:const|let|var)\s+{var_name}\s*=\s*'
    match = re.search(pattern, content)
    if not match:
        return None

    start = match.end()
    # Track braces/brackets to find the end
    depth = 0
    i = start
    first_char = content[i]
    open_char = first_char
    close_char = '}' if first_char == '{' else ']'

    while i < len(content):
        ch = content[i]
        if ch == open_char:
            depth += 1
        elif ch == close_char:
            depth -= 1
            if depth == 0:
                break
        elif ch in ('"', "'", '`'):
            # Skip strings
            quote = ch
            i += 1
            while i < len(content) and content[i] != quote:
                if content[i] == '\\':
                    i += 1
                i += 1
        i += 1

    raw = content[start:i + 1]

    # Convert JS object syntax to JSON
    # Add quotes around unquoted keys
    raw = re.sub(r'(\n\s*)(\w+)\s*:', r'\1"\2":', raw)
    # Replace single quotes with double quotes (careful with apostrophes in text)
    # Instead, handle trailing commas
    raw = re.sub(r',\s*([}\]])', r'\1', raw)
    # Replace undefined with null
    raw = raw.replace('undefined', 'null')

    try:
        return json.loads(raw)
    except json.JSONDecodeError:
        return None


def parse_campaign_data():
    """Parse data.js manually since it uses JS syntax."""
    with open(DATA_JS, "r") as f:
        content = f.read()

    # Use a more robust approach: evaluate with simple regex transforms
    campaign = {}

    # Extract party
    campaign["party"] = extract_js_object(DATA_JS, "CAMPAIGN")
    if campaign["party"]:
        return campaign["party"]

    return None


def parse_with_regex():
    """Fallback: parse key structures with targeted regex."""
    with open(DATA_JS, "r") as f:
        data_content = f.read()
    with open(I18N_JS, "r") as f:
        i18n_content = f.read()

    result = {
        "meta": {
            "title": "Phandelver and Below: The Shattered Obelisk",
            "description": "Campaign data for a D&D 5e campaign set in the Forgotten Realms",
            "generated_by": "build-campaign-data.py",
        }
    }

    # We'll use Python's js2py-free approach: strip the JS wrapper and parse
    # Since data.js is `const CAMPAIGN = { ... };`, extract the object
    js_obj = data_content.strip()
    js_obj = re.sub(r'^const CAMPAIGN\s*=\s*', '', js_obj)
    js_obj = re.sub(r';\s*$', '', js_obj)

    # Fix JS -> JSON: quote unquoted keys, remove trailing commas
    # Quote keys that aren't already quoted
    js_obj = re.sub(r'(?<=[{,\n])\s*(\w+)\s*:', r' "\1":', js_obj)
    # Remove trailing commas before } or ]
    js_obj = re.sub(r',(\s*[}\]])', r'\1', js_obj)

    try:
        campaign = json.loads(js_obj)
    except json.JSONDecodeError as e:
        print(f"JSON parse error: {e}")
        print("Falling back to line-by-line extraction...")
        return None

    # Now extract SESSION_TEXT from i18n.js
    session_text_match = re.search(
        r'const SESSION_TEXT\s*=\s*(\{)', i18n_content
    )
    if session_text_match:
        start = session_text_match.start(1)
        depth = 0
        i = start
        while i < len(i18n_content):
            if i18n_content[i] == '{':
                depth += 1
            elif i18n_content[i] == '}':
                depth -= 1
                if depth == 0:
                    break
            elif i18n_content[i] in ('"', "'"):
                quote = i18n_content[i]
                i += 1
                while i < len(i18n_content) and i18n_content[i] != quote:
                    if i18n_content[i] == '\\':
                        i += 1
                    i += 1
            i += 1
        raw_st = i18n_content[start:i + 1]
        raw_st = re.sub(r'(?<=[{,\n])\s*(\w+)\s*:', r' "\1":', raw_st)
        raw_st = re.sub(r',(\s*[}\]])', r'\1', raw_st)
        try:
            session_text = json.loads(raw_st)
        except json.JSONDecodeError:
            session_text = None
    else:
        session_text = None

    # Merge session recaps into sessions
    if session_text:
        for session in campaign.get("sessions", []):
            sid = session.get("id")
            key = f"s{sid}"
            en_recap = session_text.get("en", {}).get(key, {}).get("recap", "")
            sv_recap = session_text.get("sv", {}).get(key, {}).get("recap", "")
            session["recap_en"] = en_recap
            session["recap_sv"] = sv_recap

    result["campaign"] = campaign
    return result


def generate_markdown(data):
    """Generate a Claude Projects knowledge markdown file."""
    c = data["campaign"]
    lines = []

    lines.append("# Phandelver and Below: The Shattered Obelisk")
    lines.append("")
    lines.append(f"> {c.get('intro', '')}")
    lines.append("")

    # Party
    lines.append("## The Party")
    lines.append("")
    for pc in c.get("party", []):
        lines.append(f"### {pc['name']} ({pc['race']} {pc['class']}, Level {pc.get('level', '?')})")
        lines.append(f"- **Player:** {pc.get('player', 'Unknown')}")
        lines.append(f"- **Motivation:** {pc.get('motivation', '')}")
        lines.append(f"- **Faction:** {pc.get('faction', '')}")
        lines.append(f"- **Appearance:** {pc.get('appearance', '')}")
        lines.append("")

    # Sessions
    lines.append("## Session Log")
    lines.append("")
    for s in c.get("sessions", []):
        lines.append(f"### {s['title']} ({s['date']})")
        lines.append("")
        recap = s.get("recap_en", "")
        if recap:
            for para in recap.split("\n"):
                if para.strip():
                    lines.append(para.strip())
                    lines.append("")
        else:
            # Fallback to category fields
            for key in ["where", "who", "what", "learned", "goal"]:
                if s.get(key):
                    lines.append(f"**{key.title()}:** {s[key]}")
                    lines.append("")

    # NPCs
    lines.append("## NPCs")
    lines.append("")
    for npc in c.get("npcs", []):
        dead = " (DEAD)" if npc.get("dead") else ""
        lines.append(f"### {npc['name']}{dead}")
        lines.append(f"- **Appearance:** {npc.get('appearance', '')}")
        lines.append(f"- **Locations:** {', '.join(npc.get('locations', []))}")
        lines.append(f"- **First appeared:** Session {npc.get('firstSession', '?')}")
        lines.append("")

    # Locations
    lines.append("## Locations")
    lines.append("")
    for loc in c.get("locations", []):
        sessions_str = ", ".join(f"S{s}" for s in loc.get("sessions", []))
        lines.append(f"### {loc['name']} ({sessions_str})")
        for event in loc.get("events", []):
            lines.append(f"- {event}")
        lines.append("")

    # Factions
    lines.append("## Factions")
    lines.append("")
    for f in c.get("factions", []):
        lines.append(f"### {f.get('icon', '')} {f['name']}")
        lines.append(f"{f.get('description', '')}")
        contacts = f.get("contacts", [])
        if contacts:
            lines.append(f"- **Known contacts:** {', '.join(contacts)}")
        lines.append("")

    # Quests
    lines.append("## Quests")
    lines.append("")
    active = [g for g in c.get("goals", []) if g.get("status") == "active"]
    completed = [g for g in c.get("goals", []) if g.get("status") == "completed"]

    if active:
        lines.append("### Active")
        for g in active:
            lines.append(f"- {g['text']} (from Session {g['session']})")
        lines.append("")

    if completed:
        lines.append("### Completed")
        for g in completed:
            lines.append(f"- ~~{g['text']}~~ (from Session {g['session']})")
        lines.append("")

    return "\n".join(lines)


def main():
    print("Building campaign data exports...")

    data = parse_with_regex()
    if not data:
        print("ERROR: Failed to parse campaign data")
        return

    # Write JSON
    with open(OUT_JSON, "w") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    print(f"  -> {OUT_JSON}")

    # Write Markdown
    md = generate_markdown(data)
    with open(OUT_MD, "w") as f:
        f.write(md)
    print(f"  -> {OUT_MD}")

    # Stats
    c = data["campaign"]
    print(f"\nStats:")
    print(f"  Sessions: {len(c.get('sessions', []))}")
    print(f"  NPCs: {len(c.get('npcs', []))}")
    print(f"  Locations: {len(c.get('locations', []))}")
    print(f"  Quests: {len(c.get('goals', []))}")
    print(f"  Factions: {len(c.get('factions', []))}")


if __name__ == "__main__":
    main()
