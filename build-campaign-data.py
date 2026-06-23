#!/usr/bin/env python3
"""
Generate campaign-knowledge.md from campaign.json.
campaign.json is the single source of truth — edit it directly.
"""

import json
import os

BASE_DIR = os.path.dirname(__file__)
IN_JSON = os.path.join(BASE_DIR, "site", "campaign.json")
OUT_MD = os.path.join(BASE_DIR, "campaign-knowledge.md")


def generate_markdown(data):
    c = data["campaign"]
    lines = []

    lines.append("# Phandelver and Below: The Shattered Obelisk")
    lines.append("")
    lines.append(f"> {c.get('intro', '')}")
    lines.append("")

    lines.append("## The Party")
    lines.append("")
    for pc in c.get("party", []):
        lines.append(f"### {pc['name']} ({pc['race']} {pc['class']}, Level {pc.get('level', '?')})")
        lines.append(f"- **Player:** {pc.get('player', 'Unknown')}")
        lines.append(f"- **Motivation:** {pc.get('motivation', '')}")
        lines.append(f"- **Faction:** {pc.get('faction', '')}")
        lines.append(f"- **Appearance:** {pc.get('appearance', '')}")
        lines.append("")

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
            for key in ["where", "who", "what", "learned", "goal"]:
                if s.get(key):
                    lines.append(f"**{key.title()}:** {s[key]}")
                    lines.append("")

    lines.append("## NPCs")
    lines.append("")
    for npc in c.get("npcs", []):
        dead = " (DEAD)" if npc.get("dead") else ""
        lines.append(f"### {npc['name']}{dead}")
        lines.append(f"- **Appearance:** {npc.get('appearance', '')}")
        lines.append(f"- **Locations:** {', '.join(npc.get('locations', []))}")
        lines.append(f"- **First appeared:** Session {npc.get('firstSession', '?')}")
        lines.append("")

    lines.append("## Locations")
    lines.append("")
    for loc in c.get("locations", []):
        sessions_str = ", ".join(f"S{s}" for s in loc.get("sessions", []))
        lines.append(f"### {loc['name']} ({sessions_str})")
        for event in loc.get("events", []):
            lines.append(f"- {event}")
        lines.append("")

    lines.append("## Factions")
    lines.append("")
    for f in c.get("factions", []):
        lines.append(f"### {f.get('icon', '')} {f['name']}")
        lines.append(f"{f.get('description', '')}")
        contacts = f.get("contacts", [])
        if contacts:
            lines.append(f"- **Known contacts:** {', '.join(contacts)}")
        lines.append("")

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
    print("Generating campaign-knowledge.md from campaign.json...")

    with open(IN_JSON, "r") as f:
        data = json.load(f)

    md = generate_markdown(data)
    with open(OUT_MD, "w") as f:
        f.write(md)
    print(f"  -> {OUT_MD}")

    c = data["campaign"]
    print(f"\nStats:")
    print(f"  Sessions: {len(c.get('sessions', []))}")
    print(f"  NPCs: {len(c.get('npcs', []))}")
    print(f"  Locations: {len(c.get('locations', []))}")
    print(f"  Quests: {len(c.get('goals', []))}")
    print(f"  Factions: {len(c.get('factions', []))}")


if __name__ == "__main__":
    main()
