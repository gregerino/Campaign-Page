const TRANSLATIONS = {
  en: {
    "nav.home": "Home",
    "nav.sessions": "Session Log",
    "nav.npcs": "NPCs",
    "nav.locations": "Locations",
    "nav.quests": "Quests",
    "nav.factions": "Factions",
    "home.subtitle": "",
    "home.title": "Phandelver and Below",
    "home.intro": "Four adventurers, bound by fate, coin, and curiosity, travel the roads of the Sword Coast toward the mining town of Phandalin. What began as a simple escort job has pulled them into a web of goblin ambushes, criminal thugs, and a shadowy figure known only as The Spider.",
    "home.objective": "Current Objective",
    "home.objective.text": "Our next destination is Conyberry.",
    "home.party": "The Party",
    "home.latest": "Latest Entry",
    "home.readmore": "Read Full Session Log",
    "home.footer": "A campaign chronicle from the Forgotten Realms, Phandalin, Sword Coast",
    "sessions.title": "Session Log",
    "sessions.subtitle": "A journal of our travels through the Sword Coast",
    "sessions.search": "Search sessions...",
    "cat.where": "Where Did We Go?",
    "cat.who": "Who Did We Meet?",
    "cat.what": "What Did We Do?",
    "cat.learned": "What Did We Find or Learn?",
    "cat.goal": "Next Goal",
    "npcs.title": "NPC Directory",
    "npcs.subtitle": "Souls we have encountered on our journey",
    "npcs.search": "Search by name or location...",
    "npcs.overview": "Appearance",
    "npcs.locations": "Locations",
    "npcs.firstsession": "First appeared: Session",
    "loc.title": "Discovered Locations",
    "loc.subtitle": "Places marked upon our map of the Sword Coast",
    "loc.search": "Search locations...",
    "factions.title": "Factions",
    "factions.subtitle": "Organizations vying for influence across the Sword Coast",
    "factions.members": "Members",
    "factions.contacts": "Known Contacts",
    "goals.title": "Quest Board",
    "goals.subtitle": "",
    "goals.active": "Active Quests",
    "goals.completed": "Completed Quests",
    "goals.from": "From Session",
  },
  sv: {
    "nav.home": "Hem",
    "nav.sessions": "Sessionslogg",
    "nav.npcs": "NPCer",
    "nav.locations": "Platser",
    "nav.quests": "Uppdrag",
    "nav.factions": "Organisationer",
    "home.subtitle": "",
    "home.title": "Phandelver and Below",
    "home.intro": "Fyra äventyrare, bundna av ödet, guld och nyfikenhet, reser längs Sword Coasts vägar mot gruvstaden Phandalin. Det som började som ett enkelt eskortuppdrag har dragit in dem i en väv av goblin-bakhåll, kriminella banditer och en skugggestalt känd som The Spider.",
    "home.objective": "Nuvarande mål",
    "home.objective.text": "Nästa mål är Conyberry.",
    "home.party": "Sällskapet",
    "home.latest": "Senaste anteckning",
    "home.readmore": "Läs hela sessionsloggen",
    "home.footer": "En kampanjkrönika från Forgotten Realms, Phandalin, Sword Coast",
    "sessions.title": "Sessionslogg",
    "sessions.subtitle": "En dagbok från våra resor längs Sword Coast",
    "sessions.search": "Sök i sessioner...",
    "cat.where": "Vart gick vi?",
    "cat.who": "Vilka träffade vi?",
    "cat.what": "Vad gjorde vi?",
    "cat.learned": "Vad hittade eller lärde vi oss?",
    "cat.goal": "Nästa mål",
    "npcs.title": "NPC-katalog",
    "npcs.subtitle": "Själar vi mött på vår resa",
    "npcs.search": "Sök på namn eller plats...",
    "npcs.overview": "Utseende",
    "npcs.locations": "Platser",
    "npcs.firstsession": "Dök upp första gången: Session",
    "loc.title": "Upptäckta platser",
    "loc.subtitle": "Platser markerade på vår karta över Sword Coast",
    "loc.search": "Sök platser...",
    "factions.title": "Organisationer",
    "factions.subtitle": "Organisationer som kämpar om inflytande längs Sword Coast",
    "factions.members": "Medlemmar",
    "factions.contacts": "Kända kontakter",
    "goals.title": "Uppdragstavla",
    "goals.subtitle": "",
    "goals.active": "Aktiva uppdrag",
    "goals.completed": "Avklarade uppdrag",
    "goals.from": "Från session",
  }
};

// ── Session content translations ──
const SESSION_TEXT = {
  en: {
    s1: {
      recap: "The Triboar Trail, a seemingly ordinary trade road through the wilderness, the kind of path that makes you forget anything could go wrong. We were heading for Phandalin when Faelaris sensed it first. Something in the ground was off, a wrongness that only a ranger's instincts would catch. He moved ahead to scout, slipping into the brush with a silence so complete he might as well have been a ghost, a natural twenty on stealth, the kind of roll that turns a man into a shadow. What he found changed everything: goblins, crouched and waiting, positioned as if they knew exactly when and where we would pass. The fight was quick and brutal. When it was over, most of the goblins lay dead, though one managed to flee into the trees. In the churned mud, Brander found the real story: blood trails, drag marks. Gundren and Sildar had been taken alive.\n\nWe made a decision. We camouflaged the wagon we had been escorting among the trees, tied the ox, and followed the blood trail away from the road and deeper into the wilderness. The hike was brutal: dense forest, snaring undergrowth, and traps laid along the path to discourage exactly the kind of pursuit we were attempting. But we pressed through and reached Cragmaw Hideout, a dark cave cut into a rocky hillside. Sentries stood guard outside. They went down fast. Inside was worse. The tunnels were crawling with wolves, goblins, and snakes, every shadow hiding something with teeth. But we also found what we were looking for: Sildar Hallwinter, beaten and bloodied, but alive.\n\nIt was Yeemik who found us next, stepping out of the dark with a deal on his lips. Yeemik, a cunning goblin boss with ambitions far beyond his station, wanted Klarg, the hulking bugbear who ruled the hideout through fear, dead. And he wanted us to do it. In exchange, he promised Sildar's life. He also let slip something troubling: Gundren was important to someone, somewhere else. Where, he would not say.\n\nThis was no random ambush. The goblins were positioned specifically to intercept travelers heading toward Phandalin, and they had clearly done this before. Yeemik's treachery ran deep; he had been plotting against Klarg for some time, waiting for the right tool to do his dirty work. We were that tool, at least for now. We accepted his bargain and pushed deeper, through more traps, more danger, and a growing sense that we were walking into something much larger than a goblin hideout. At the very back of the cave, in the deepest and darkest chamber, we found Klarg waiting. And there, standing on the edge of the next decisive moment, we prepared to determine both Sildar's fate and the balance of power in Cragmaw Hideout."
    },
    s2: {
      recap: "Klarg went down hard. We honored our deal with Yeemik, or tried to. When we returned with Klarg's blood still on our blades, the goblin changed the terms. He wanted payment for Sildar, as though a life was just another commodity. That was the last mistake he ever made. We killed Yeemik and Eerk where they stood and freed Sildar Hallwinter, battered but unbroken. In Klarg's chamber we found stolen goods marked with the Lionshield Coster emblem, proof that these goblins had been raiding trade caravans systematically, along with an Unbreakable Arrow, a longsword, a shield, and a longbow.\n\nWith the cave behind us and fresh air on our faces, we followed the Triboar Trail south until the treeline parted and a quiet mining town appeared on the horizon: Phandalin. With Sildar on his feet again, the picture darkened considerably. He had come to Phandalin searching for Iarno Albrek, a fellow member of the Lords' Alliance who had gone missing. He confirmed that both he and Gundren had been ambushed, and that Gundren was taken alive. Klarg had been reporting to someone called King Grol at Cragmaw Castle. The goblins had orders, orders from a shadowy figure known as The Spider, to specifically capture Gundren. The reason: Gundren had been carrying a map to Wave Echo Cave, and that map was now stolen, likely on its way to the castle.\n\nSildar also recalled something strange from the attack: a peculiar goblin with an elongated head who did not seem to belong with the others. It had looked at Sildar and spoken words that still echoed: \"You are not what Ruxithid wants.\" Then it simply left.\n\nWe found beds at Stonehill Inn as dusk settled over the rooftops. Toblen Stonehill poured the drinks while his wife Trilena kept the kitchen running and their boy Pip darted between tables. At Barthen's Provisions, Corvus did some shopping with Elmina Barthen. The barmaid Elsa Oresong caught Corvus's eye. But not everyone in town was welcoming. We caught our first glimpse of the Redbrand Ruffians, scarlet-cloaked thugs who moved through the streets like they owned the place. In the corner of the tavern sat Krusk, Phandalin's hunter, who delivers meat to the inn and watches everything with careful eyes. The ale flowed, and so did the rumors. The Redbrands. Glasstaff. Townmaster Harbin Wester offering rewards he probably could not pay. Corvus stayed up late, gathering information his own way. Elsa Oresong joined him upstairs, and whatever he learned, he kept to himself. The townsfolk spoke in low voices of other troubles: marauders camped at Wyvern Tor, and Sister Garaele had recently returned from a journey badly wounded, though no one would say where she had been or what she had been looking for.\n\nPhandalin has a Redbrand problem, and somewhere a man named Iarno has gone missing. Tomorrow we meet Sildar at Townmaster's Hall."
    },
    s3: {
      recap: "Over breakfast, Toblen mentioned he had met a soldier on the road who wore the same emblem as Brander. Brander went quiet, then asked Toblen to keep his presence in Phandalin to himself. It was a small moment, but it said everything about the weight Brander carries.\n\nWe set out to follow every lead we had. At Lionshield Coster, Linene Graywind was cautious but helpful and pointed us to the Townmaster. Harbin Wester confirmed the Redbrands were a problem but gave us nothing useful. Sildar was blunter; he wanted Cragmaw Castle investigated and offered 500 gold pieces for our trouble. We climbed the hill to Tresendar Manor next, hoping the old ruin might reveal a secret. Faelaris searched the place with extraordinary thoroughness, a natural twenty on investigation, leaving no stone unturned, but the manor itself held nothing.\n\nDisappointed, we headed back down into town. Sister Garaele stopped us on the road. She confided that she was searching for something connected to powerful magic, an artifact perhaps, and pressed a silver comb into our hands, asking us to deliver it to a banshee named Agatha in exchange for answers. But when her eyes fell on Lior's ring, something shifted in her expression. Fear. She knew what that sigil meant, or at least suspected. At Edermath Orchard, Daran, an elderly half-elf with a soldier's bearing, reacted the same way to the ring, though with a steadier nerve. He told us something was stirring at Old Owl Well, something that might be connected to what Lior carries.\n\nAt the Miner's Exchange, Halia Thornton confirmed that the Redbrands gathered at the Sleeping Giant, but it was the way she talked that stayed with us. She called both the town's leadership and the Redbrands' leadership weak, as if she were measuring the vacuum for herself. Then she turned to Corvus and began asking questions that cut close to the bone: did he carry knowledge he did not understand? A subtle warning followed: that there are people who find what they are looking for.\n\nOn the way to the Sleeping Giant, we walked into a shouting match between neighbors Brelki Togglecroggle and Amra Venhorn. Brander and Faelaris talked them down, a small act of peace before the violence that followed. Inside the Sleeping Giant, it did not take long. The unpleasant Grista Kettlecop stood behind the bar, her bartender Wheel-Of-Fortune shuffling coins with a sly grin. The Redbrands walked in, mocked us for snooping in their business, and the situation escalated into a full fight. When it was over, we had one of them alive and talking.\n\nWe dragged him to Townmaster's Hall, and under pressure, the picture snapped into focus. Their hideout lies hidden beneath the town itself. Prisoners are kept down there, guarded by skeletons near old crypts, and something far more dangerous, a one-eyed monster, watches over the deeper levels. Their leader, Glasstaff, is almost never seen, but is believed to operate from somewhere near or beneath Tresendar Manor. And behind all of it stands a shadowy figure called The Spider, who pays the Redbrands to keep adventurers and townsfolk in line.\n\nThe Redbrand Hideout is real, it is beneath Tresendar Manor, and it is waiting. Tomorrow, we go in."
    },
    s4: {
      recap: "The night before, Faelaris and Lior had climbed onto the roof of Stonehill Inn, scanning the dark horizon toward Tresendar Manor. Nothing: no lights, no movement, no sign that anything stirred beneath those ruins. Whatever waited down there was well hidden. That evening, Corvus had drawn closer to Elsa, who showed her gratitude for what the group had done against the Redbrands.\n\nOver breakfast the next morning, the group made their decision: today, we go in. We found a hidden passage into the manor's underbelly and began a methodical sweep. The very first room gave us something important: a bag hidden in a water-filled cistern. Someone had packed it and stashed it there, ready for a fast exit. To secure our rear, Lior wedged his Unbreakable Arrow into a doorframe, blocking the route behind us. Faelaris was less fortunate; he triggered a trap in a corridor leading toward the crypt and dropped into a chamber where skeletal hands were already clawing upward. We smashed them apart and pressed deeper.\n\nThe prison cells came next. Mirna Dendrar clutched her children Nirsa and Nars and stared at us with the hollow eyes of someone who had stopped hoping. We killed the Redbrand guards, freed all three, and escorted them safely out of the hideout. Mirna's gratitude came with a lead: a family heirloom hidden in the Ruins of Thundertree, offered as the only reward she could give.\n\nInspiration struck in the armory. We pulled scarlet cloaks from the racks and draped them over our shoulders; if we looked like Redbrands, maybe we could walk like them. The disguise met its first test at Ssarnak's bridge. The creature, a grotesque, one-eyed thing radiating ancient malice from a cavern beneath the complex, demanded a toll. We tossed it a dead Redbrand, and it let us pass, gnawing contentedly. As we crossed, Ssarnak whispered our darkest truths aloud for everyone to hear: Murderer, Thief, Traitor, Deserter. Four words that hung in the air long after we had passed. No one spoke about it, but something cracked open in Lior. Fragments of a past he had been running from surfaced unbidden: a ring, a defected agent, Thay.\n\nFrom there, the cloaks did their work. We walked past Redbrands playing Knucklebones without drawing a glance. We passed four Bugbears who were busy terrorizing a tiny goblin named Droop, who took one look at us and collapsed unconscious on the spot, and did not give us a second look. We strolled unchallenged into Glasstaff's personal workshop and private chambers, and there, on his desk, lay a letter that changed everything.\n\nThe letter was addressed to Iarno \"Glasstaff\" Albrek, and it came from The Spider. Our arrival in Phandalin was already known. We were considered a threat. Glasstaff had orders: capture or kill us, and secure any maps connected to the dwarves and Wave Echo Cave. This was not just a local gang; this was part of something much larger, and The Spider had been watching from the beginning. The bag in the cistern was Glasstaff's escape kit, confirming he was a man who always planned to run.\n\nGlasstaff's quarters are still warm. He is close. We need to find him before he disappears."
    },
    s5: {
      recap: "We were still in Glasstaff's study when Faelaris heard it: sounds from a hidden chamber behind the wall. Not the sounds of someone hiding. The sounds of someone running. Glasstaff was fleeing. Faelaris reacted first, and the chase was on. Corvus burned a Scroll of Hold Person, and the spell caught Glasstaff mid-stride, locking every muscle in place. Faelaris threw a rope around his ankles before he could hit the ground, and the wizard went down face-first. Brander hoisted him over his shoulder like a sack of grain, and we sprinted for the surface.\n\nOutside Tresendar Manor, in the fresh air and daylight, we interrogated Iarno \"Glasstaff\" Albrek. He talked. Through his words a much larger picture emerged: The Spider is a Drow, hunting for the Forge of Spells, an ancient magical forge of immense power. Glasstaff was not working alone, and bugbear reinforcements were on their way. No one in the Lords' Alliance knew about his betrayal. The conspiracy ran deeper than anyone had guessed. But the interrogation was cut short when Lior suddenly doubled over, gripping his hand. The ring was burning, a searing, blinding pain that forced something out of him. He began, haltingly, to question its origin aloud, the first time he had acknowledged it to the group.\n\nWe locked Glasstaff in the cells at Townmaster's Hall, and that night Phandalin celebrated. At Stonehill Inn the ale flowed freely. Toblen poured rounds on the house, Sildar raised a glass with weary relief, Harbin took credit he did not deserve, Elara and Mirna allowed themselves to smile, and young Pip watched it all from between the barstools, wide-eyed. But beneath the laughter each of us carried something heavier. Lior sought out Sister Garaele in a quiet corner, and she told him what she suspected: the sigil on his ring has connections to the Red Wizards of Thay. Corvus sat alone, turning the black glass shard in the firelight, thinking about the strange questions Halia had asked him, and feeling a shame he could not explain. Brander took a lighter path; he challenged both Sildar and Corvus to Dragonchess and won both games, much to his own delight.\n\nSildar took command of the aftermath, announcing that Glasstaff would be transported to Neverwinter for trial. He asked us to be his eyes and ears in the region, and to keep searching for Gundren Rockseeker. Daran Edermath gave us Boots of Elvenkind as thanks for what we did.\n\nThe next morning was preparation. Potions and Alchemist's Fire from Thistlebrook Remedies. Directions from Qelline Alderleaf, who told us her old friend Reidoth, a druid living in the Ruins of Thundertree, knows the way to Cragmaw Castle. She mapped the routes to Thundertree, Conyberry, and Old Owl Well. Supplies from Elmina at Barthen's Provisions. And then we were walking, the town at our backs.\n\nAt the edge of Phandalin, Toblen Stonehill came running after us. He gave us a destination, The Dogwater Inn, and pressed a folded letter into Corvus's hands. Then he turned and walked away without another word. Corvus read the letter, but he has not told the group what it said."
    },
    s6: {
      recap: "The Triboar Trail stretched ahead of us, familiar in the way that danger always is when you have walked it before. We had barely left Phandalin behind when Faelaris noticed the birds. Not their song, their silence, and then the sudden burst of wings from a thicket ahead. Lior read the sign before anyone else could speak. He threw a stone toward the creek to test the stillness, then slipped off the road and into the treeline without a word.\n\nWhat he found froze him in place. Hobgoblins, armored and disciplined, crouched in formation along both sides of the trail. This was not a goblin ambush. This was a military operation. Lior did something none of us expected: he cast Disguise Self, shifted his form into that of a Hobgoblin, and walked straight into their ranks. They showed him a rolled parchment, a bounty poster bearing Faelaris's face, sealed with the unmistakable sigil of a black spider web. The Spider had put a price on us. Lior tried to stall them with a Minor Illusion, tried to convince one group that we were allies. It half-worked: one squad hesitated, confused. The other charged onto the road.\n\nThe fight was sharp and brutal. Steel rang against steel in the forest shade, and when the last Hobgoblin fell, we stood among the bodies catching our breath. Among their belongings we found the bounty poster, confirming what we already feared: The Spider knows exactly where we are and wants us dead.\n\nWe pressed on toward The Dogwater Inn, arriving as the sun dipped below the treeline. The inn was everything Phandalin was not: loud, crowded, and smelling of smoke, roasted meat, and something sour that might have been the Putrid Pint. Roscoe, the broad-shouldered barkeep with a face carved from years of hard living, poured drinks and watched everything. Fleurette Grubbfin, a halfling woman barely taller than the tables she served, bustled between patrons with plates balanced on both arms and a smile that never faltered.\n\nBrander could not resist the Putrid Pint challenge: a drinking contest involving a brew so foul that most challengers were on the floor within seconds. He drained it, slammed the tankard down, and grinned. The inn erupted. Meanwhile, Lior tested his growing power by making a glass slide across the table with nothing but concentration, and Corvus quietly scraped candle wax into his pouch, collecting materials the way he always does, methodically, without explanation.\n\nThe rumors at the inn painted a darker picture of the road ahead. A hunting guide, surrounded by overdressed nobles at a long table, spoke of Cragmaw Castle in grim terms: the goblins there file their teeth to points, and they are aggressive beyond reason. He also mentioned a hunter named Gustaf, known as Falcon, who lives deep in Neverwinter Wood, and a Loggers Camp on the Neverwinter River run by Tibor Wester. A shepherd at a corner table spoke in a shaking voice of something that had attacked his flock: enormous, the size of three warhorses, with wings like a bat. It came from the sky and took a sheep as if it weighed nothing. Two caravan guards whispered about smoke rising from somewhere it should not be. And Roscoe himself, leaning close to Brander, told him of sick people near Old Owl Well, people with rotting flesh, and asked him to look into it.\n\nThe next morning, Roscoe pressed a knife into Lior's hands. No words, just the gesture, and Lior accepted it the same way. We packed our things and set out.\n\nOn the trail east, we met Bramblewick Quickpocket, a halfling merchant whose wagon was a small wonderland of oddities, trinkets, and supplies. His grin was wider than his donkey was long, and his prices were fair enough that we stocked up before moving on.\n\nThe mood shifted when we found the wagon. It sat broken and abandoned at the side of the road, arrows jutting from its frame, goblin arrows. A body lay nearby. We searched the wreckage but found nothing of value, only the story the scene told: goblins from Cragmaw Castle, striking further and further from their stronghold. We buried the dead, set the wagon ablaze, and continued in silence.\n\nThat night, at camp, the quiet became heavy. Brander stared into the fire, haunted by the same nightmare he always carries, a battlefield, someone falling, the dream ending before he can see who. Lior sat in his tent with a candle burning, watching his own shadow on the canvas. The shadow did not mirror him. It moved on its own, sharpening something, a knife perhaps. He watched it with an acceptance that unsettled something deep. Corvus held the black glass shard up to the firelight, turning it slowly, feeling the pull of it, the shame, the whisper of something he cannot name. Faelaris lay in his tent and stared at nothing, replaying the vision that had struck him earlier: a sky turned completely black, the world beneath it silent.\n\nThe next morning, Lior was up first. He built the fire and cooked for everyone without being asked. Brander tried to eat, managing a few bites of the meat he had bought from Bramblewick. Corvus emerged, stretched, and asked if there was food. Faelaris watched the others from a distance, quiet as always. They packed up, doused the fire properly, and walked east toward Conyberry, toward whatever waits there."
    }
  },
  sv: {
    s1: {
      recap: "Triboar Trail, en till synes vanlig handelsväg genom vildmarken, den sortens stig som får en att glömma att något kan gå fel. Vi var på väg mot Phandalin när Faelaris kände det först. Något i marken stämde inte, en felaktighet som bara en rangers instinkter fångar upp. Han rörde sig framåt för att scouta och gled in i buskagen med en tystnad så fullständig att han lika gärna kunde ha varit en skugga, en naturlig tjuga på smygning, den sortens tärningsslag som gör en man till en skugga. Vad han fann förändrade allt: goblins, hukade och väntande, positionerade som om de visste exakt när och var vi skulle passera. Striden blev snabb och brutal. När det var över låg de flesta goblinsarna döda, men en lyckades fly in bland träden. I den upptrampade leran hittade Brander den verkliga berättelsen: blodspår, släpspår. Gundren och Sildar hade tagits levande.\n\nVi fattade ett beslut. Vi kamouflerade vagnen vi eskorterat bland träden, band fast oxen och följde blodspåret bort från vägen och djupare in i vildmarken. Vandringen var brutal: tät skog, snårig undervegetation och fällor utlagda längs stigen för att avskräcka precis den sortens förföljelse vi försökte oss på. Men vi pressade igenom och nådde Cragmaw Hideout, en mörk grotta huggen i en klippsida. Vakter stod utanför. De gick ner snabbt. Inuti var det värre. Tunnlarna kryllade av vargar, goblins och ormar; varje skugga dolde något med tänder. Men vi hittade också det vi letade efter: Sildar Hallwinter, slagen och blodig, men vid liv.\n\nDet var Yeemik som fann oss härnäst, klev ut ur mörkret med en deal på läpparna. Yeemik, en listig goblinboss med ambitioner långt bortom sin rang, ville att Klarg, den massiva bugbearen som styrde gömstället genom skräck, skulle dö. Och han ville att vi skulle göra jobbet. I utbyte lovade han Sildars liv. Han lät också något oroande slinka fram: Gundren var viktig för någon, någon annanstans. Vart ville han inte säga.\n\nDet här var inget slumpmässigt bakhåll. Goblinsarna var specifikt placerade för att fånga upp resande på väg mot Phandalin, och de hade uppenbart gjort det förut. Yeemiks svek gick djupt; han hade konspirerat mot Klarg en längre tid och väntat på rätt verktyg för att göra sitt smutsiga jobb. Vi var det verktyget, åtminstone för tillfället. Vi accepterade hans överenskommelse och tryckte oss djupare in, genom fler fällor, fler faror, och en växande känsla av att vi vandrade in i något mycket större än ett goblingömställe. Längst bak i grottan, i den djupaste och mörkaste kammaren, hittade vi Klarg väntande. Och där, stående på kanten av nästa avgörande ögonblick, förberedde vi oss för att avgöra både Sildars öde och maktbalansen i Cragmaw Hideout."
    },
    s2: {
      recap: "Klarg gick ner hårt. Vi hedrade vår deal med Yeemik, eller försökte. När vi återvände med Klargs blod fortfarande på våra klingor ändrade goblinen villkoren. Han ville ha betalning för Sildar, som om ett liv vore en vara bland andra. Det var det sista misstaget han någonsin begick. Vi dödade Yeemik och Eerk där de stod och befriade Sildar Hallwinter, slagen men obruten. I Klargs kammare hittade vi stöldgods märkt med Lionshield Costers emblem, bevis på att goblinsarna hade plundrat handelskaravaner systematiskt, tillsammans med en Unbreakable Arrow, ett långsvärd, en sköld och en långbåge.\n\nMed grottan bakom oss och frisk luft i ansiktet följde vi Triboar Trail söderut tills trädlinjen öppnade sig och en stilla gruvstad uppenbarade sig vid horisonten: Phandalin. Med Sildar på fötter igen mörknade bilden avsevärt. Han hade kommit till Phandalin för att leta efter Iarno Albrek, en medlem i Lords' Alliance som försvunnit. Han bekräftade att både han och Gundren överfallits, och att Gundren tagits levande. Klarg hade rapporterat till någon som kallas King Grol på Cragmaw Castle. Goblinsarna hade order, order från en skuggfigur känd som The Spider, att specifikt tillfångata Gundren. Anledningen: Gundren bar på en karta till Wave Echo Cave, och den kartan var nu stulen, troligen på väg till borgen.\n\nSildar mindes också något märkligt från attacken: en egendomlig goblin med ett avlångt huvud som inte verkade höra till de andra. Den hade sett på Sildar och sagt ord som fortfarande ekade: \"Du är inte vad Ruxithid vill ha.\" Sedan lämnade den bara.\n\nVi hittade sängar på Stonehill Inn medan skymningen lade sig över hustaken. Toblen Stonehill hällde upp dryckerna medan hans fru Trilena skötte köket och deras pojke Pip kilade mellan borden. Hos Barthen's Provisions passade Corvus på att handla med Elmina Barthen. Bartendern Elsa Oresong fångade Corvus blick. Men inte alla i staden var välkomnande. Vi fick vår första glimt av Redbrand Ruffians, scharlakansklädda banditer som rörde sig genom gatorna som om de ägde stället. I hörnet av krogen satt Krusk, Phandalins jägare som levererar kött till värdshuset och iakttar allt med vakna ögon. Ölet flödade, och så gjorde ryktena. Redbrandsarna. Glasstaff. Townmaster Harbin Wester som erbjöd belöningar han förmodligen inte kunde betala. Corvus stannade uppe sent och samlade information på sitt eget sätt. Elsa Oresong följde med honom upp, och vad han nu fick reda på behöll han för sig själv. Stadsborna talade med låga röster om andra problem: marauders lägrade vid Wyvern Tor, och Sister Garaele hade nyligen återvänt från en resa svårt skadad, fast ingen ville säga var hon hade varit eller vad hon letat efter.\n\nPhandalin har ett Redbrand-problem, och någonstans har en man vid namn Iarno försvunnit. Imorgon möter vi Sildar på Townmaster's Hall."
    },
    s3: {
      recap: "Vid frukosten nämnde Toblen att han träffat en soldat på vägen som bar samma emblem som Brander. Brander blev tyst, bad sedan Toblen att hålla sig lågmäld kring hans vistelse i Phandalin. Det var ett litet ögonblick, men det sa allt om tyngden Brander bär.\n\nVi gav oss ut för att följa varje ledtråd vi hade. På Lionshield Coster var Linene Graywind försiktig men hjälpsam och pekade oss mot stadens ledare. Harbin Wester bekräftade att Redbrandsarna var ett problem men gav oss inget användbart. Sildar var mer rakt på sak; han ville att Cragmaw Castle undersöktes och erbjöd 500 guldmynt för besväret. Vi klättrade upp mot Tresendar Manor härnäst, i hopp om att den gamla ruinen kunde avslöja en hemlighet. Faelaris genomsökte platsen med extraordinär grundlighet, en naturlig tjuga på undersökning, och lämnade ingen sten ovänd, men herrgården själv dolde ingenting.\n\nBesvikna vände vi tillbaka ner mot staden. Sister Garaele stoppade oss på vägen. Hon anförtrodde oss att hon sökte efter något kopplat till kraftfull magi, kanske en artefakt, och tryckte en silverkam i våra händer med bön om att leverera den till en banshee vid namn Agatha i utbyte mot svar. Men när hennes blick föll på Liors ring förändrades något i hennes uttryck. Rädsla. Hon visste vad det sigillet betydde, eller åtminstone anade. Vid Edermath Orchard reagerade Daran, en äldre halvälva med en soldats hållning, på samma sätt inför ringen, om än med stadigare nerver. Han berättade att något rör sig uppe vid Old Owl Well, något som kan vara kopplat till det Lior bär.\n\nPå Miner's Exchange bekräftade Halia Thornton att Redbrandsarna samlades vid Sleeping Giant, men det var sättet hon pratade på som dröjde sig kvar. Hon kallade både stadens och Redbrandsarnas ledarskap svagt, som om hon mätte vakuumet åt sig själv. Sedan vände hon sig till Corvus och började ställa frågor som skar nära benet: bar han på kunskap han inte förstod? En subtil varning följde: att det finns människor som hittar det de letar efter.\n\nPå vägen till Sleeping Giant vandrade vi rakt in i ett skrikande bråk mellan grannarna Brelki Togglecroggle och Amra Venhorn. Brander och Faelaris pratade ner dem, en liten fredshandling innan våldet som följde. Inne på Sleeping Giant dröjde det inte länge. Den otrevliga Grista Kettlecop stod bakom baren, hennes bartender Wheel-Of-Fortune snurrade mynt med ett listigt leende. Redbrandsarna klev in, hånade oss för att vi nosat i deras affärer, och situationen eskalerade till full strid. När det var över hade vi en av dem levande och pratande.\n\nVi släpade honom till Townmaster's Hall, och under press föll bilden på plats. Deras gömställe finns dolt under staden själv. Fångar hålls där nere, vaktade av skelett nära gamla kryptor, och något långt farligare, ett enögt monster, bevakar de djupare nivåerna. Deras ledare, Glasstaff, syns nästan aldrig, men tros operera från någonstans nära eller under Tresendar Manor. Och bakom allt står en skuggfigur kallad The Spider, som betalar Redbrandsarna för att hålla äventyrare och stadsbor i schack.\n\nRedbrand Hideout är verkligt, det ligger under Tresendar Manor, och det väntar. Imorgon går vi in."
    },
    s4: {
      recap: "Kvällen innan hade Faelaris och Lior klättrat upp på taket av Stonehill Inn och spanat mot Tresendar Manor i mörkret vid horisonten. Ingenting: inga ljus, ingen rörelse, inget tecken på att något rörde sig under de där ruinerna. Vad som än väntade där nere var det väl gömt. Den kvällen hade Corvus kommit närmare Elsa, som visade sin uppskattning efter gruppens insatser mot Redbrandsarna.\n\nÖver frukosten nästa morgon fattade gruppen sitt beslut: idag går vi in. Vi hittade en dold passage in i herrgårdens undre delar och började en metodisk genomsökning. Redan i det första rummet fick vi något viktigt: en väska gömd i en vattenfylld cistern. Någon hade packat den och stoppat undan den, redo för en snabb flykt. För att säkra vår rygg killade Lior fast sin Unbreakable Arrow i en dörrkarm och blockerade rutten bakom oss. Faelaris hade mindre tur; han utlöste en fälla i en korridor mot kryptan och föll ner i en kammare där skelettala händer redan klöste uppåt. Vi slog dem i bitar och pressade djupare.\n\nFängelsecellerna kom härnäst. Mirna Dendrar kramade sina barn Nirsa och Nars och stirrade på oss med ihåliga ögon, ögonen hos någon som slutat hoppas. Vi dödade Redbrand-vakterna, befriade alla tre och eskorterade dem säkert ut ur gömstället. Mirnas tacksamhet kom med en ledtråd: en familjearvdel gömd i Ruins of Thundertree, erbjuden som den enda belöning hon kunde ge.\n\nI vapenförrådet slog inspirationen till. Vi drog ner scharlakansröda kåpor från ställningarna och draperade dem över våra axlar; om vi såg ut som Redbrands kanske vi kunde röra oss som dem. Förklädnaden mötte sitt första prov vid Ssarnaks bro. Varelsen, en grotesk, enögd sak som utstrålade uråldrig illvilja från en grotta under komplexet, krävde en avgift. Vi kastade den en död Redbrand, och den släppte förbi oss, tuggande belåtet. Medan vi korsade bron viskade Ssarnak våra mörkaste sanningar högt för alla att höra: Mördare, Tjuv, Förrädare, Desertör. Fyra ord som hängde kvar i luften långt efter att vi passerat. Ingen talade om det, men något sprack upp i Lior. Fragment av ett förflutet han flytt ifrån steg upp utan att han kunde stoppa dem: en ring, en avhoppad agent, Thay.\n\nDärifrån gjorde kåporna jobbet. Vi gick förbi Redbrands som spelade Knucklebones utan att dra en blick. Vi passerade fyra Bugbears som var upptagna med att terrorisera en pytteliten goblin vid namn Droop, som tog en titt på oss och kollapsade medvetslös på fläcken, och som inte ens tittade åt vårt håll. Vi promenerade ogenerat in i Glasstaffs personliga verkstad och privata kammare, och där, på hans skrivbord, låg ett brev som förändrade allt.\n\nBrevet var adresserat till Iarno \"Glasstaff\" Albrek, och det kom från The Spider. Vår ankomst till Phandalin var redan känd. Vi betraktades som ett hot. Glasstaff hade order: tillfångata eller döda oss, och säkra alla kartor kopplade till dvärgarna och Wave Echo Cave. Det här var inte bara ett lokalt gäng; det var en del av något mycket större, och The Spider hade bevakat oss från början. Väskan i cisternen var Glasstaffs flyktkit, en bekräftelse på att han var en man som alltid planerade att springa.\n\nGlasstaffs kvarter är fortfarande varma. Han är nära. Vi måste hitta honom innan han försvinner."
    },
    s5: {
      recap: "Vi var fortfarande i Glasstaffs arbetsrum när Faelaris hörde det: ljud från en gömd kammare bakom väggen. Inte ljud av någon som gömmer sig. Ljud av någon som flyr. Glasstaff var på språng. Faelaris reagerade först och jakten var igång. Corvus brände en Scroll of Hold Person och besvärjelsen fångade Glasstaff mitt i steget och låste varje muskel på plats. Faelaris kastade ett rep runt hans vrister innan han hann landa, och trollkarlen gick i marken med ansiktet först. Brander hävde upp honom över axeln som en säck spannmål och vi sprintade mot ytan.\n\nUtanför Tresendar Manor, i frisk luft och dagsljus, förhörde vi Iarno \"Glasstaff\" Albrek. Han pratade. Genom hans ord framträdde en mycket större bild: The Spider är en Drow som jagar efter Forge of Spells, en uråldrig magisk smedja av enorm makt. Glasstaff arbetade inte ensam, och bugbear-förstärkningar var på väg. Ingen i Lords' Alliance visste om hans förräderi. Konspirationen gick djupare än någon hade gissat. Men förhöret bröts kort när Lior plötsligt vek sig dubbel och grep om sin hand. Ringen brände, en brännande, bländande smärta som tvingade fram något ur honom. Han började, stammande, ifrågasätta dess ursprung högt, första gången han erkänt det för gruppen.\n\nVi låste in Glasstaff i cellerna på Townmaster's Hall, och den kvällen firade Phandalin. På Stonehill Inn flödade ölet fritt. Toblen bjöd på rundor, Sildar höjde ett glas med trött lättnad, Harbin tog åt sig ära han inte förtjänade, Elara och Mirna tillät sig att le, och unge Pip tittade på allt ifrån mellan barstolarna, storögd. Men under skratten bar var och en av oss något tyngre. Lior sökte upp Sister Garaele i ett lugnt hörn, och hon berättade vad hon misstänkte: sigillet på hans ring har kopplingar till Red Wizards of Thay. Corvus satt ensam, vände den svarta glasskärvan i eldsljuset, tänkte på de märkliga frågorna Halia hade ställt till honom, och kände en skam han inte kunde förklara. Brander valde en lättare väg; han utmanade både Sildar och Corvus på Dragonchess och vann båda partierna, mycket till sin egen förtjusning.\n\nSildar tog kommandot över efterspelet och meddelade att Glasstaff ska transporteras till Neverwinter för rättegång. Han bad oss vara hans ögon och öron i regionen, och fortsätta leta efter Gundren Rockseeker. Daran Edermath gav oss Boots of Elvenkind som tack för vad vi gjort.\n\nNästa morgon var förberedelser. Potions och Alchemist's Fire från Thistlebrook Remedies. Vägbeskrivningar från Qelline Alderleaf som berättade att hennes gamla vän Reidoth, en druid som bor i Ruins of Thundertree, kan vägen till Cragmaw Castle. Hon kartlade rutterna till Thundertree, Conyberry och Old Owl Well. Förnödenheter från Elmina på Barthen's Provisions. Och sedan gick vi, med staden i ryggen.\n\nVid kanten av Phandalin kom Toblen Stonehill springande efter oss. Han gav oss en destination, The Dogwater Inn, och tryckte ett vikt brev i Corvus händer. Sedan vände han och gick tillbaka utan ett ord till. Corvus läste brevet, men han har inte berättat för gruppen vad det innehöll."
    },
    s6: {
      recap: "Triboar Trail sträckte sig framför oss, bekant på det sättet fara alltid är när man vandrat den förut. Vi hade knappt lämnat Phandalin bakom oss när Faelaris märkte fåglarna. Inte deras sång, utan deras tystnad, och sedan den plötsliga fladdrande flykten ur ett snår längre fram. Lior läste tecknet innan någon annan hann tala. Han kastade en sten mot bäcken för att testa stillheten, och gled sedan av från vägen och in bland träden utan ett ord.\n\nVad han fann fick honom att stelna till. Hobgoblins, rustade och disciplinerade, hukade i formation längs båda sidor av stigen. Det här var inget goblinbakhåll. Det här var en militär operation. Lior gjorde något ingen av oss hade förväntat: han kastade Disguise Self, förändrade sin form till en Hobgoblin, och gick rakt in i deras led. De visade honom en hoprullad pergamentrulle, en efterlysningsaffisch med Faelaris ansikte, förseglad med det omisskännliga sigillet av ett svart spindelnät. The Spider hade satt ett pris på oss. Lior försökte fördröja dem med en Minor Illusion, försökte övertyga ena gruppen att vi var allierade. Det fungerade halvvägs: en trupp tvekade, förvirrad. Den andra stormade ut på vägen.\n\nStriden var skarp och brutal. Stål slog mot stål i skogens skugga, och när den sista Hobgoblinen föll stod vi bland kropparna och hämtade andan. Bland deras tillhörigheter hittade vi efterlysningen, en bekräftelse på det vi redan fruktade: The Spider vet exakt var vi är och vill att vi dör.\n\nVi tryckte på mot The Dogwater Inn och anlände när solen sjönk bakom trädtopparna. Värdshuset var allt Phandalin inte var: högt, fullpackat, och luktande av rök, stekt kött och något surt som möjligen var Putrid Pint. Roscoe, den bredaxlade barkeepern med ett ansikte mejslat av år av hårt liv, hällde drycker och bevakade allt. Fleurette Grubbfin, en halvlingskvinna knappt längre än borden hon serverade, flängde mellan gästerna med tallrikar balanserade på båda armarna och ett leende som aldrig vacklade.\n\nBrander kunde inte motstå Putrid Pint-utmaningen: en dryckes tävling som involverade en brygd så vidrig att de flesta utmanare låg på golvet inom sekunder. Han tömde den, slog ner sejdeln och flinade. Värdshuset exploderade. Samtidigt testade Lior sin växande kraft genom att få ett glas att glida över bordet med inget annat än koncentration, och Corvus skrapade tyst ljusvax i sin påse, samlande material på det sätt han alltid gör: metodiskt, utan förklaring.\n\nRyktena på värdshuset målade en mörkare bild av vägen framåt. En jaktguide, omgiven av överdressade adelsmän vid ett långbord, talade om Cragmaw Castle i dystra ordalag: goblinsarna där filar sina tänder till spetsar, och de är aggressiva bortom all rimlighet. Han nämnde också en jägare vid namn Gustaf, kallad Falcon, som lever djupt inne i Neverwinter Wood, och ett Loggers Camp vid Neverwinter River som drivs av Tibor Wester. En herde vid ett hörnbord talade med skakig röst om något som attackerat hans flock: enormt, stort som tre arbetshästar, med vingar som en fladdermus. Det kom från himlen och tog ett får som om det inte vägde någonting. Två karavanvakter viskade om rök som steg från någonstans den inte borde. Och Roscoe själv, lutande sig nära Brander, berättade om sjuka människor nära Old Owl Well, människor med ruttnande kött, och bad honom undersöka saken.\n\nNästa morgon tryckte Roscoe en kniv i Liors händer. Inga ord, bara gesten, och Lior tog emot den på samma sätt. Vi packade och gav oss av.\n\nPå stigen österut mötte vi Bramblewick Quickpocket, en halvlingshandlare vars vagn var ett litet underverk av kuriositeter, prydnader och förnödenheter. Hans flin var bredare än hans åsna var lång, och hans priser var rimliga nog att vi fyllde på förråden innan vi fortsatte.\n\nStämningen skiftade när vi hittade vagnen. Den stod trasig och övergiven vid sidan av vägen, pilar stickande ut från ramen: goblinpilar. En kropp låg intill. Vi genomsökte vraket men fann inget av värde, bara berättelsen som scenen avslöjade: goblins från Cragmaw Castle, som slår till längre och längre från sin fästning. Vi begravde den döde, tände eld på vagnen och fortsatte i tystnad.\n\nDen kvällen, vid lägret, blev tystnaden tung. Brander stirrade in i elden, hemsökt av samma mardröm han alltid bär: ett slagfält, någon som faller, drömmen som tar slut innan han ser vem. Lior satt i sitt tält med ett ljus brinnande och tittade på sin egen skugga mot tältduken. Skuggan speglade inte honom. Den rörde sig på egen hand, slipade något, en kniv kanske. Han betraktade den med en acceptans som oroade något djupt. Corvus höll den svarta glasskärvan mot eldljuset, vände den långsamt, kände dragningen av den, skammen, viskningen av något han inte kan ge namn. Faelaris låg i sitt tält och stirrade på ingenting, spelade om visionen som träffat honom tidigare: en himmel helt svartnad, världen under den tyst.\n\nNästa morgon var Lior uppe först. Han byggde elden och lagade mat åt alla utan att bli tillfrågad. Brander försökte äta, lyckades med några tuggor av köttet han köpt av Bramblewick. Corvus klev ut, sträckte på sig och frågade om det fanns mat. Faelaris betraktade de andra på avstånd, tyst som alltid. De packade ihop, släckte elden ordentligt, och vandrade österut mot Conyberry, mot vad som än väntar där."
    }
  }
};

// Goal translations
const GOALS_TEXT = {
  en: [
    "Get to The Dogwater Inn.",
    "Find Gundren Rockseeker.",
    "Find Cragmaw Castle.",
    "Deliver the silver comb to the banshee Agatha.",
    "Find Mirna's heirloom in the Ruins of Thundertree.",
    "Kill Klarg.",
    "Stop the Redbrand Ruffians.",
    "Find the Redbrand Hideout.",
    "Capture Glasstaff.",
    "Find Reidoth the Druid in the Ruins of Thundertree.",
    "Investigate Old Owl Well to find out what is going on there.",
    "Get to Conyberry.",
    "Get to The Dogwater Inn."
  ],
  sv: [
    "Nästa mål är Conyberry.",
    "Hitta Gundren Rockseeker.",
    "Hitta Cragmaw Castle.",
    "Ge silverkammen till bansheen Agatha.",
    "Hitta Mirnas arvegods i Ruins of Thundertree.",
    "Döda Klarg.",
    "Stoppa Redbrand Ruffians.",
    "Hitta Redbrand Hideout.",
    "Tillfångata Glasstaff.",
    "Hitta Reidoth the Druid i Ruins of Thundertree.",
    "Undersök Old Owl Well för att ta reda på vad som pågår där.",
    "Ta oss till Conyberry.",
    "Ta oss till The Dogwater Inn."
  ]
};

// NPC appearance translations (keyed by NPC name)
const NPC_APPEARANCES = {
  sv: {
    "Klarg": "En massiv bugbear med tovigt mörkt päls, ett brutalt ansikte och tung rustning av ben och metall med spikar, beväpnad med en stor stridsyxa.",
    "Sildar Hallwinter": "En väderbitnen krigare med kortklippt hår, en sträng blick och en röd-och-guld tabard med ett borgvapen över ringbrynja, knäböjande men obruten.",
    "Elmina Barthen": "En ung kvinna med långt, vågigt rött hår och slående drag, klädd i en lila blus med ett äventyrligt utseende.",
    "Toblen Stonehill": "En satt, flintskalllig man med ett tjockt brunt skägg, klädd i en vit skjorta med läderförkläde, ofta sedd polerande en ölsejdel bakom baren.",
    "Trilena Stonehill": "En varmhjärtad kvinna med lockigt kastanjebrunt hår, klädd i en vit bondblus under ett brunt och guldfärgat snörlivstycke.",
    "Pip Stonehill": "En ung pojke med rufsigt brunt hår och fräkniga kinder, son till Toblen och Trilena, klädd i en överdimensionerad vit skjorta och gröna knälånga byxor med hängslen.",
    "Elsa Oresong": "En ung kvinna med långt, vågigt svart hår och klargrönögon, klädd i en off-shoulder vit blus med ett grönt snörkorsett.",
    "Krusk": "En muskulös halvork med blågrå hud, mörkt hår draget bakåt och små betar, bärande ett halsband av ben och tänder, en pälsmantel och läderskydd med en skallaxelplatta.",
    "Redbrand Ruffians": "Ett gäng brottslingar igenkännbara på sina scharlakansröda mantlar, läderrustningar och hotfulla attityd.",
    "Linene Graywind": "En kraftig kvinna med mörkt lockigt hår och brun hud, klädd i en brun lädervästhandlare över blå kläder, prydd med påsar och en silverbrosch.",
    "Minghee Graywind": "En ung kvinna med rakt mörkt hår, skarpa ögon och ett bestämt uttryck, klädd i ett läderarbetsförkläde över en enkel gräddvit skjorta.",
    "Daran Edermath": "En äldre halvälva med långt vitt hår, mörkgrå hud och spetsiga öron, klädd i utsmyckad läderrustning med en blå mantel.",
    "Bertrice Edermath": "En ung kvinna med lockigt mörkt hår och gröna ögon, bärande en blommig huvudduk, en olivgrön klänning och ett broderat förkläde.",
    "Harbin Wester": "En korpulent, uppblåst man med röda kinder och en tunn mustasch, klädd i en utarbetad blå adelskappa med pälskantad krage.",
    "Sister Garaele": "En älvisk kvinna med långt mörkt hår, blek hud och spetsiga öron, klädd i en elegant blå och silverfärgad prästkåpa med utsmyckade broderier.",
    "Halia Thornton": "En skarpskuren kvinna med kort, mörkt bakåtslickat hår och genomträngande bruna ögon, klädd i en mörk kappa med ett intensivt, beräknande uttryck.",
    "Grista Kettlecop": "En strängt utseende dvärkvinna med blont hår i dubbla flätor, klädd i en blå tunika med en gyllene geometrisk symbol på bröstet.",
    "Wheel-Of-Fortune": "En ruffigt snygg tieflingman med rödaktig hud, mörkt hår och två böjda horn, bärande ett läderarbetsförkläde över en vit skjorta, hållande ett mynt med ett listigt leende.",
    "Brelki Togglecroggle": "En liten gnomkvinna med kort blont hår och spetsiga öron, klädd i lager av lila och bruna läderkläder, fullhängd med silversmycken och otaliga påsar.",
    "Amra Venhorn": "En smärt älvisk kvinna med långt gyllene hår prytt med vildblommor, spetsiga öron och ett fridfullt leende, klädd i en flödande grön klänning med blombroderi.",
    "Mirna Dendrar": "En ung kvinna med mörkt lockigt hår och djupt brun hud, klädd i ett enkelt salviaggrönt plagg, med ett trött, vaksamt uttryck.",
    "Nirsa Dendrar": "En barfota ung kvinna med mörkt vindpinat hår, klädd i en enkel grå kjol och en brun rutig väst över en vit blus.",
    "Nars Dendrar": "En tuff ung pojke med stökigt mörkbrunt hår och ett smutsigt ansikte, klädd i en pälskantad brun mantel och grov läderklädsel med en kniv vid bältet.",
    "Ssarnak": "En grotesk varelse med fläckig brun fjällig hud, beniga taggar som sticker ut från huvudet, ett enormt gulgrönaktigt öga, en bred tandrik käft och en lång rosa tunga.",
    "Droop": "En liten, mager goblin med grönaktig hud, stora gula ögon och överdimensionerade spetsiga öron, klädd i en trasig röd väst och pösiga byxor, bärande en stav.",
    "Iarno \"Glasstaff\" Albrek": "En skäggig man i en lång pälskantad vit och guldfärgad kappa, bärande en glödande flerfärgad stav och en bok.",
    "Qelline Alderleaf": "En mörkhyad halvlingskvinna med fylligt lockigt brunt hår, klädd i en pälskantad mantel över en rostoranger tunika med ett gyllene spiralhalsband.",
    "Elara Thistlebrook": "En fräknig kvinna med rött hår i en lång fläta, klädd i en grön sjal över ett brunt snörlivstycke, med ett varmt leende medan hon håller en glödande blå dryckesflaska.",
    "Roscoe": "En bred, skallig man med ett tjockt mörkt skägg och ett strängt väderbittet ansikte, klädd i ett brunt läderförkläde över en enkel skjorta, hållande en skummande sejdel bakom baren.",
    "Fleurette Grubbfin": "En glad halvlingskvinna med lockigt rött hår uppsatt med bestick, rosiga kinder och ett varmt leende, klädd i en gul blus under ett brunt läderförkläde, bärande en tallrik med gryta och bröd.",
    "Bramblewick Quickpocket": "En flinande halvlingsman med lockigt kastanjebrunt hår och en busig glimt i ögat, klädd i en rikt broderad grön och brun kappa över en rostfärgad väst, snurrande ett guldmynt bredvid sin handelsvagn."
  }
};

function getNpcAppearance(npcName) {
  const lang = getLang();
  if (lang === 'sv' && NPC_APPEARANCES.sv[npcName]) {
    return NPC_APPEARANCES.sv[npcName];
  }
  return null; // use default from data.js (English)
}

// Location event translations (keyed by location name)
const LOCATION_EVENTS = {
  sv: {
    "Triboar Trail": [
      "Goblins dödades i ett bakhåll (S1).",
      "Blodspår hittades som ledde till Cragmaw Hideout (S1).",
      "Gruppen reste längs stigen mot Phandalin (S2).",
      "En Hobgoblin-trupp överföll gruppen; Lior använde Disguise Self för att infiltrera dem (S6).",
      "En efterlysningsaffisch med Faelaris ansikte, förseglad med The Spiders märke, hittades (S6).",
      "Bramblewick Quickpockets handelsvagn påträffades (S6).",
      "En förstörd vagn med goblinpilar och en död kropp hittades och brändes (S6)."
    ],
    "Cragmaw Hideout": [
      "Gruppen gick in och dödade goblins på vakt (S1).",
      "Mötte Yeemik som ville att gruppen dödar Klarg (S1).",
      "Klarg hittades och dödades (S2).",
      "Yeemik och Eerk bedrog gruppen och dödades (S2).",
      "Sildar Hallwinter räddades (S2).",
      "Unbreakable Arrow, longsword, shield och longbow hittades (S2).",
      "Stulen loot från Lionshield Coster hittades (S2)."
    ],
    "Phandalin": [
      "Gruppen anlände efter att ha räddat Sildar (S2).",
      "Första mötet med Redbrand Ruffians (S2).",
      "Gruppen undersökte staden och pratade med invånare (S3).",
      "Grannbråket löstes genom kompromiss (S3).",
      "Glasstaff fängslades i Townmaster's Hall (S5).",
      "Fest i gruppens ära på Stonehill Inn (S5).",
      "Gruppen handlade och förberedde sig för vidare resor (S5)."
    ],
    "Stonehill Inn": [
      "Gruppen fick information om Redbrands och staden (S2).",
      "Övernattning inför infiltration av Redbrand Hideout (S4).",
      "Fest i gruppens ära efter att Glasstaff tillfångatogs (S5).",
      "Brander spelade Dragonchess med Sildar och Corvus (S5)."
    ],
    "Lionshield Coster": [
      "Gruppen träffade Linene Graywind och frågade om Harbin Wester (S3)."
    ],
    "Tresendar Manor": [
      "Gruppen undersökte utan att hitta något (S3).",
      "Ingång till Redbrand Hideout hittades (S4).",
      "Glasstaff tillfångatogs utanför (S5)."
    ],
    "Shrine of Luck": [
      "Gruppen träffade Sister Garaele som berättade om boken hon letar efter (S3).",
      "Sister Garaele gav gruppen en silverkam att ge till Bansheen Agatha (S3)."
    ],
    "Edermath Orchard": [
      "Gruppen träffade Daran Edermath och fick information om Halia och Sleeping Giant (S3)."
    ],
    "Phandalin Miner's Exchange": [
      "Gruppen träffade Halia Thornton som berättade att Redbrands hänger på Sleeping Giant (S3)."
    ],
    "Sleeping Giant": [
      "Gruppen slogs med Redbrands (S3).",
      "En Redbrand tillfångatogs och förhördes (S3)."
    ],
    "Townmaster's Hall": [
      "Gruppen fängslade en Redbrand (S3).",
      "Glasstaff fängslades i cellerna (S5).",
      "Sildar fick Glasstaff utlämnad för rättvisa (S5)."
    ],
    "Redbrand Hideout": [
      "Glasstaffs emergency kit hittades i cisternen (S4).",
      "Skelett dödades i kryptan (S4).",
      "Mirna, Nars och Nirsa Dendrar räddades ur fängelset (S4).",
      "Ssarnak möttes i grottan (S4).",
      "Armory hittades; gruppen tog röda cloaks (S4).",
      "Brevet från \"The Spider\" till Glasstaff hittades (S4).",
      "Glasstaff jagades och tillfångatogs efter flykt (S5)."
    ],
    "Thistlebrook Remedies": [
      "Gruppen köpte healing potions och Alchemist's Fire (S5)."
    ],
    "Barthen's Provisions": [
      "Corvus handlade med Elmina Barthen (S2).",
      "Gruppen köpte proviant inför resandet (S5)."
    ],
    "Alderleaf Farm": [
      "Gruppen pratade med Qelline och fick vägbeskrivningar till Thundertree, Conyberry och Old Owl Well (S5)."
    ],
    "The Dogwater Inn": [
      "Gruppen anlände efter Hobgoblin-bakhållet på Triboar Trail (S6).",
      "Brander vann Putrid Pint-drickstävlingen (S6).",
      "Roscoe gav Lior en kniv som gåva (S6).",
      "Rykten samlades om Cragmaw Castle, Old Owl Well, ett spöke nära Conyberry och ett flygande monster (S6)."
    ]
  }
};

function getLocationEvents(locationName) {
  const lang = getLang();
  if (lang === 'sv' && LOCATION_EVENTS.sv[locationName]) {
    return LOCATION_EVENTS.sv[locationName];
  }
  return null; // use default from data.js (English)
}

function getLang() {
  return localStorage.getItem('campaign-lang') || 'en';
}

function setLang(lang) {
  localStorage.setItem('campaign-lang', lang);
  applyLang(lang);
}

function t(key) {
  const lang = getLang();
  return TRANSLATIONS[lang]?.[key] || TRANSLATIONS['en']?.[key] || key;
}

function getSessionText(sessionId) {
  const lang = getLang();
  const key = `s${sessionId}`;
  return SESSION_TEXT[lang]?.[key] || SESSION_TEXT['en']?.[key];
}

function getGoalTexts() {
  const lang = getLang();
  return GOALS_TEXT[lang] || GOALS_TEXT['en'];
}

function applyLang(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const text = TRANSLATIONS[lang]?.[key] || TRANSLATIONS['en']?.[key];
    if (text) el.textContent = text;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    const text = TRANSLATIONS[lang]?.[key] || TRANSLATIONS['en']?.[key];
    if (text) el.placeholder = text;
  });

  const toggle = document.querySelector('.lang-toggle');
  if (toggle) {
    toggle.textContent = lang === 'en' ? 'SV' : 'EN';
    toggle.title = lang === 'en' ? 'Byt till svenska' : 'Switch to English';
  }

  document.documentElement.lang = lang === 'sv' ? 'sv' : 'en';
  window.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}

function initI18n() {
  const lang = getLang();
  applyLang(lang);

  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const current = getLang();
      setLang(current === 'en' ? 'sv' : 'en');
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  initI18n();
}
