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
    "home.intro": "Four adventurers — bound by fate, coin, and curiosity — travel the roads of the Sword Coast toward the mining town of Phandalin. What began as a simple escort job has pulled them into a web of goblin ambushes, criminal thugs, and a shadowy figure known only as The Spider.",
    "home.objective": "Current Objective",
    "home.objective.text": "We set out toward our next destination: The Dogwater Inn.",
    "home.party": "The Party",
    "home.latest": "Latest Entry",
    "home.readmore": "Read Full Session Log",
    "home.footer": "A campaign chronicle from the Forgotten Realms — Phandalin, Sword Coast",
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
    "home.intro": "Fyra äventyrare — bundna av ödet, guld och nyfikenhet — reser längs Sword Coasts vägar mot gruvstaden Phandalin. Det som började som ett enkelt eskortuppdrag har dragit in dem i en väv av goblin-bakhåll, kriminella banditer och en skugggestalt känd som The Spider.",
    "home.objective": "Nuvarande mål",
    "home.objective.text": "Vi begav oss mot nästa destination: The Dogwater Inn.",
    "home.party": "Sällskapet",
    "home.latest": "Senaste anteckning",
    "home.readmore": "Läs hela sessionsloggen",
    "home.footer": "En kampanjkrönika från Forgotten Realms — Phandalin, Sword Coast",
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
      where: "Our journey began along the Triboar Trail, where a goblin ambush awaited us. After surviving the attack, we followed a trail of blood and tracks into the wilderness, eventually discovering the entrance to Cragmaw Hideout — a damp, torchlit cave system nestled in a rocky hillside.",
      who: "Inside the hideout we encountered Yeemik, a scheming goblin who wanted to overthrow Klarg, the bugbear leader of the cave. Yeemik struck a deal with us: kill Klarg, and he would hand over the prisoners.",
      what: "Goblins attacked us on the Triboar Trail, and we fought them off — learning in the process that Gundren Rockseeker and Sildar Hallwinter had been captured. We tracked the goblins to Cragmaw Hideout, killed the sentries standing guard outside, and ventured into the cave system. Deep within, we struck a bargain with Yeemik to take out Klarg in exchange for Sildar's freedom. We pressed further inside and found Klarg waiting for us in the deepest chamber.",
      learned: "We discovered that goblins had set up an ambush along the Triboar Trail, targeting travelers heading toward Phandalin. A trail of blood led us straight to Cragmaw Hideout. Inside, we learned that Yeemik was plotting against Klarg and wanted to seize control of the hideout. We found Klarg in the deepest cavern of the hideout.",
      goal: "Our next goal is to kill Klarg."
    },
    s2: {
      where: "We continued our exploration of Cragmaw Hideout, pushing deeper into its damp, goblin-infested tunnels. After clearing the cave, we set out along the Triboar Trail toward Phandalin, finally arriving at the quiet mining town. We settled in at Stonehill Inn for the evening.",
      who: "We confronted Klarg, the bugbear leader, as well as Yeemik and Eerk — two goblin bosses vying for control of the hideout. In Phandalin, we met Elmina Barthen, the kind owner of Barthen's Provisions, and Toblen Stonehill, the innkeeper at Stonehill Inn, along with his wife Trilena and their son Pip. We caught our first glimpse of the Redbrand Ruffians — rough thugs who seem to terrorize the town. We also met Krusk, a formidable half-orc in the tavern.",
      what: "We killed Klarg after promising Yeemik we would handle him. Among Klarg's possessions, we found stolen goods from Lionshield Coster that had been taken during goblin ambushes along the road. When we returned to Yeemik, he demanded payment for Sildar Hallwinter — so we killed him and Eerk for their betrayal and freed Sildar. Together we traveled to Phandalin, where we met Elmina Barthen and Corvus did some shopping. At the Stonehill Inn, we gathered information about the Redbrand threat and the state of the town. Corvus took Elsa Oresong to his room as a way of gathering information.",
      learned: "In the hideout, we recovered an Unbreakable Arrow, a longsword, a shield, and a longbow. We learned about Wyvern Tor and the marauders camped there. We also heard that Sister Garaele had returned injured from several days of traveling.",
      goal: "Should we go after Iarno or the Redbrands first? Perhaps Daran can help us find the information we need. If we follow the Redbrands, we may find more threads to pull."
    },
    s3: {
      where: "We spent the day investigating Phandalin, visiting Lionshield Coster, Tresendar Manor, Shrine of Luck, Edermath Orchard, Phandalin Miner's Exchange, and finally the Sleeping Giant Inn — the known haunt of the Redbrand Ruffians.",
      who: "We met many of Phandalin's residents: Linene Graywind at the Lionshield Coster, Daran Edermath and his granddaughter Bertrice at the Edermath Orchard, Townmaster Harbin Wester, Sildar Hallwinter, Sister Garaele at the Shrine of Luck, and Halia Thornton at the Miner's Exchange. At the Sleeping Giant, we encountered the Redbrand Ruffians themselves, along with Grista Kettlecop and a tiefling called Wheel-Of-Fortune. We also met Brelki Togglecroggle and Amra Venhorn, two Phandalin residents caught in a neighbor's quarrel.",
      what: "We asked Linene Graywind about Harbin Wester and then visited the Townmaster to learn about the town's problems. We investigated Tresendar Manor but found nothing. Sister Garaele at the Shrine of Luck told us about a book she was searching for and gave us a silver comb to deliver to the banshee Agatha. Daran Edermath at the Orchard pointed us toward Halia and warned that Redbrands gathered at the Sleeping Giant. Halia Thornton confirmed the same. We resolved a neighbor dispute between Brelki and Amra through compromise. Then we went to the Sleeping Giant and fought the Redbrands there. We captured one of them, interrogated him for information about the Redbrand Hideout, and locked him up in the Townmaster's Hall.",
      learned: "Toblen had met someone on the road wearing the same emblem as Brander. We learned that the Redbrands have a base somewhere in town and were directed to speak with Halia Thornton and Daran Edermath. Someone calling themselves the \"Orchard Ghost\" has been sending threatening letters to Daran. Glasstaff is rarely seen in public — some believe he hides near or beneath Tresendar Manor. There is a secret old tunnel in the forest near the manor. Sister Garaele was searching for something tied to magic or an artifact before she was wounded — she gave us a silver comb to deliver to the banshee Agatha. The ring Lior carries bears a sigil that frightened Sister Garaele. The Redbrand Ruffians gather at the Sleeping Giant, but their real base is elsewhere.",
      goal: "Find the Redbrand Hideout and stop the Redbrands. Investigate the tunnel near Tresendar Manor."
    },
    s4: {
      where: "After a night at Stonehill Inn, we made our way to Tresendar Manor and descended into the Redbrand Hideout — a sprawling underground complex hidden beneath the ruins.",
      who: "We checked in with Sildar Hallwinter and Harbin Wester before heading out. In the hideout, we rescued Mirna Dendrar and her children Nirsa and Nars from the Redbrand prison cells. We encountered Ssarnak, a grotesque one-eyed creature lurking in a cavern beneath the hideout. We fought Redbrand Ruffians, Skeletons, and found four Bugbears terrorizing a small goblin named Droop, who fainted the moment we entered the room.",
      what: "We climbed onto the roof of Stonehill Inn to look for light from Tresendar Manor — we saw nothing. After breakfast, we headed to the manor and found our way into the Redbrand Hideout. In the entrance cistern we discovered Glasstaff's emergency escape kit. Lior blocked a door with his Unbreakable Arrow to prevent Redbrands from flanking us. Faelaris fell into a trap in the corridor leading to the crypt, where we destroyed a group of skeletons. We found the prison cells and freed Mirna, Nars, and Nirsa, escorting them out safely. In the armory we donned red cloaks to disguise ourselves as Redbrands. We offered Ssarnak a dead Redbrand as food to cross his bridge unharmed. The disguise worked — Redbrands playing Knucklebones ignored us, and even the Bugbears let us pass. We reached Glasstaff's workshop and personal quarters, where we discovered the letter.",
      learned: "We found Glasstaff's emergency kit hidden in the water cistern. Mirna Dendrar told us her family heirloom is in the Ruins of Thundertree, which she offered as a reward for freeing them. We took red cloaks from the armory and used them to move freely through the hideout. Ssarnak whispered our darkest secrets aloud — Murderer, Thief, Traitor, Deserter — and we learned fragments of Lior's past: a ring, a defected agent, Thay. Most importantly, we found a letter from Nezznar \"The Spider\" addressed to Iarno \"Glasstaff\" Albrek, revealing that Iarno is Glasstaff.",
      goal: "Where did Glasstaff go? He can't have gotten far."
    },
    s5: {
      where: "We rushed from the Redbrand Hideout back to Townmaster's Hall with Glasstaff in custody. Afterward, we celebrated at Stonehill Inn before visiting Thistlebrook Remedies and Barthen's Provisions to stock up for the road ahead. We then left Phandalin, heading out into the countryside.",
      who: "We finally caught Iarno \"Glasstaff\" Albrek and brought him to justice. At the celebration, we saw many of Phandalin's townsfolk — Toblen, Sildar, Harbin, Elara, Mirna, and young Pip among them.",
      what: "We looted Glasstaff's chest and claimed his Staff of Defense. Faelaris heard Glasstaff trying to escape and we gave chase — Corvus cast a Scroll of Hold Person while Faelaris lassoed his feet, and Glasstaff crashed to the ground. Brander threw him over his shoulder and we sprinted out of the hideout. We interrogated Glasstaff outside Tresendar Manor, where Lior collapsed in pain from his ring and began telling the group about it. We locked Glasstaff in the Townmaster's Hall cells. A celebration was held in our honor at Stonehill Inn — Lior spoke with Sister Garaele about the Red Wizards of Thay, Corvus unwrapped the oilcloth to examine the black glass shard he carries and felt shame without understanding why, and Brander played Dragonchess with Sildar and won. We bought healing potions and Alchemist's Fire at Thistlebrook Remedies. Qelline Alderleaf gave us directions to Thundertree, Conyberry, and Old Owl Well. We stocked up at Barthen's Provisions and set out from Phandalin. Toblen stopped us at the town's edge and slipped Corvus a letter.",
      learned: "Lior's pain was caused by his ring. Daran Edermath gifted us Boots of Elvenkind as thanks for dealing with Glasstaff. From interrogating Glasstaff, we learned that \"The Spider\" is a Drow. \"The Spider\" sent four Bugbears to help Glasstaff keep Phandalin's residents in check, but the Redbrands managed without them so far. \"The Spider\" is searching for the Forge of Spells, a magical forge once used by dwarves and gnomes long ago to create magical weapons. No one else in The Lords' Alliance knows about Glasstaff's betrayal. It was Iarno \"Glasstaff\" Albrek's bag that lay in the pool in the entrance room — he had hidden it there in case he needed to flee. Reidoth the Druid is in the Ruins of Thundertree and knows the way to Cragmaw Castle. Sildar wants to restore order in the region and asked for our help with the problems around Phandalin — he wants the party to be his informants regarding progress in Phandalin. Sildar wants to bring Iarno \"Glasstaff\" Albrek to justice in Neverwinter, and asked the party to continue searching for Gundren Rockseeker while he is away. Qelline taught us the routes to Thundertree and Conyberry. Toblen Stonehill pressed a letter into Corvus's hands as we left Phandalin.",
      goal: "We set out toward our next destination: The Dogwater Inn."
    }
  },
  sv: {
    s1: {
      where: "Vår resa började längs Triboar Trail, där ett goblin-bakhåll väntade oss. Efter att ha överlevt attacken följde vi ett blodspår in i vildmarken och upptäckte till slut ingången till Cragmaw Hideout — ett fuktigt, fackelbyst grottssystem inbäddat i en klippig bergsida.",
      who: "Inne i gömstället mötte vi Yeemik, en beräknande goblin som ville störta Klarg, bugbearen som ledde grottan. Yeemik slog en deal med oss: döda Klarg, och han skulle lämna över fångarna.",
      what: "Goblins attackerade oss på Triboar Trail och vi slog tillbaka — vi fick samtidigt reda på att Gundren Rockseeker och Sildar Hallwinter hade tillfångatagits. Vi spårade goblinsarna till Cragmaw Hideout, dödade vakterna utanför och tog oss in i grottsystemet. Djupt inne slog vi en deal med Yeemik om att ta hand om Klarg i utbyte mot Sildars frihet. Vi pressade oss längre in och hittade Klarg väntande i den djupaste kammaren.",
      learned: "Vi upptäckte att goblins hade lagt ett bakhåll längs Triboar Trail med resande mot Phandalin som mål. Ett blodspår ledde oss rakt till Cragmaw Hideout. Inne lärde vi oss att Yeemik konspirerade mot Klarg och ville ta kontroll över gömstället. Vi hittade Klarg i den djupaste grottan.",
      goal: "Vårt nästa mål är att döda Klarg."
    },
    s2: {
      where: "Vi fortsatte vår utforskning av Cragmaw Hideout och trängde djupare in i de fuktiga, goblin-infesterade tunnlarna. Efter att ha rensat grottan gav vi oss iväg längs Triboar Trail mot Phandalin och anlände till slut till den stilla gruvstaden. Vi slog oss ner på Stonehill Inn för natten.",
      who: "Vi konfronterade Klarg, bugbear-ledaren, samt Yeemik och Eerk — två goblin-bossar som kämpade om kontrollen över gömstället. I Phandalin träffade vi Elmina Barthen, den vänliga ägaren av Barthen's Provisions, och Toblen Stonehill, värdshusägaren på Stonehill Inn, tillsammans med hans fru Trilena och deras son Pip. Vi fick vår första glimt av Redbrand Ruffians — grova banditer som tycks terrorisera staden. Vi träffade även Krusk, en kraftfull halvork i krogen.",
      what: "Vi dödade Klarg efter att vi lovat Yeemik att vi skulle ta hand om honom. Bland Klargs ägodelar hittade vi stöldgods från Lionshield Coster som tagits under goblin-bakhåll längs vägen. När vi återvände till Yeemik krävde han betalning för Sildar Hallwinter — så vi dödade honom och Eerk för deras bedrägeri och befriade Sildar. Tillsammans reste vi till Phandalin, där vi träffade Elmina Barthen och Corvus handlade. På Stonehill Inn samlade vi information om Redbrand-hotet och stadens tillstånd. Corvus tog med sig Elsa Oresong till sitt rum som ett sätt att samla information.",
      learned: "I gömstället hittade vi en Unbreakable Arrow, ett långsvärd, en sköld och en långbåge. Vi fick veta om Wyvern Tor och marauders som lägrade där. Vi hörde även att Sister Garaele hade kommit tillbaka skadad efter flera dagars resande.",
      goal: "Ska vi ge oss på Iarno eller Redbrands först? Kanske kan Daran hjälpa oss hitta informationen vi behöver. Om vi följer Redbrands kanske vi kan hitta fler trådar att dra i."
    },
    s3: {
      where: "Vi tillbringade dagen med att undersöka Phandalin och besökte Lionshield Coster, Tresendar Manor, Shrine of Luck, Edermath Orchard, Phandalin Miner's Exchange och slutligen Sleeping Giant Inn — Redbrand Ruffians kända tillhåll.",
      who: "Vi träffade många av Phandalins invånare: Linene Graywind på Lionshield Coster, Daran Edermath och hans barnbarn Bertrice vid Edermath Orchard, Townmaster Harbin Wester, Sildar Hallwinter, Sister Garaele vid Shrine of Luck och Halia Thornton vid Miner's Exchange. Vid Sleeping Giant mötte vi Redbrand Ruffians själva, tillsammans med Grista Kettlecop och en tiefling vid namn Wheel-Of-Fortune. Vi träffade även Brelki Togglecroggle och Amra Venhorn, två invånare i Phandalin som var indragna i ett grannbråk.",
      what: "Vi frågade Linene Graywind om Harbin Wester och besökte sedan Townmaster för att ta reda på stadens problem. Vi undersökte Tresendar Manor men hittade inget. Sister Garaele vid Shrine of Luck berättade om en bok hon letade efter och gav oss en silverkam att leverera till bansheen Agatha. Daran Edermath vid fruktodlingen pekade oss mot Halia och varnade att Redbrands samlades vid Sleeping Giant. Halia Thornton bekräftade detsamma. Vi löste ett grannbråk mellan Brelki och Amra genom kompromiss. Sedan tog vi oss till Sleeping Giant och slogs med Redbrands där. Vi tillfångatog en av dem, förhörde honom om Redbrand Hideout och låste in honom i Townmaster's Hall.",
      learned: "Toblen hade träffat någon på vägen som bar samma emblem som Brander. Vi fick veta att Redbrands har en bas någonstans i staden och blev styrda till att prata med Halia Thornton och Daran Edermath. Någon som kallar sig \"Orchard Ghost\" har skickat hotbrev till Daran. Glasstaff syns sällan offentligt — vissa tror att han gömmer sig nära eller under Tresendar Manor. Det finns en hemlig gammal tunnel i skogen nära herrgården. Sister Garaele letade efter något kopplat till magi eller en artefakt innan hon skadades — hon gav oss en silverkam att ge till bansheen Agatha. Ringen som Lior bär har ett sigill som skrämde Sister Garaele. Redbrand Ruffians samlas vid Sleeping Giant, men deras riktiga bas är någon annanstans.",
      goal: "Hitta Redbrand Hideout och stoppa Redbrands. Undersöka tunneln nära Tresendar Manor."
    },
    s4: {
      where: "Efter en natt på Stonehill Inn tog vi oss till Tresendar Manor och klättrade ner i Redbrand Hideout — ett utbrett underjordiskt komplex gömt under ruinerna.",
      who: "Vi stämde av med Sildar Hallwinter och Harbin Wester innan vi gav oss iväg. I gömstället räddade vi Mirna Dendrar och hennes barn Nirsa och Nars från Redbrand-fängelset. Vi mötte Ssarnak, en grotesk enögd varelse som lurpassade i en grotta under gömstället. Vi slogs mot Redbrand Ruffians, skelett och hittade fyra Bugbears som terroriserade en liten goblin vid namn Droop, som svimmade i samma ögonblick vi klev in i rummet.",
      what: "Vi klättrade upp på taket på Stonehill Inn för att se om vi kunde se ljus från Tresendar Manor — vi såg inget. Efter frukosten begav vi oss till herrgården och hittade vägen in till Redbrand Hideout. I cisternen vid ingången upptäckte vi Glasstaffs nödflyktsutrustning. Lior blockerade en dörr med sin Unbreakable Arrow för att hindra Redbrands från att flankera oss. Faelaris föll i en fälla i korridoren mot kryptan, där vi förstörde en grupp skelett. Vi hittade fängelsecellerna och befriade Mirna, Nars och Nirsa, och eskorterade dem ut i säkerhet. I vapenförrådet tog vi på oss röda kåpor för att förklä oss till Redbrands. Vi erbjöd Ssarnak en död Redbrand som mat för att passera hans bro oskadd. Förklädnaden fungerade — Redbrands som spelade Knucklebones ignorerade oss, och till och med Bugbears lät oss passera. Vi nådde Glasstaffs verkstad och privata rum, där vi upptäckte brevet.",
      learned: "Vi hittade Glasstaffs nödutrustning gömd i vattencisternen. Mirna Dendrar berättade att hennes familjs arvedel finns i Ruins of Thundertree, som hon erbjöd som belöning för att vi befriade dem. Vi tog röda kåpor från vapenförrådet och använde dem för att röra oss fritt genom gömstället. Ssarnak viskade våra mörkaste hemligheter högt — Mördare, Tjuv, Förrädare, Desertör — och vi fick reda på fragment av Liors förflutna: en ring, en avhoppad agent, Thay. Viktigast av allt hittade vi ett brev från Nezznar \"The Spider\" adresserat till Iarno \"Glasstaff\" Albrek, som avslöjade att Iarno är Glasstaff.",
      goal: "Vart tog Glasstaff vägen? Han kan inte ha kommit långt."
    },
    s5: {
      where: "Vi rusade från Redbrand Hideout tillbaka till Townmaster's Hall med Glasstaff i förvar. Efteråt firade vi på Stonehill Inn innan vi besökte Thistlebrook Remedies och Barthen's Provisions för att fylla på för vägen framåt. Vi lämnade sedan Phandalin och gav oss ut på landsbygden.",
      who: "Vi fångade till slut Iarno \"Glasstaff\" Albrek och ställde honom inför rätta. Under firandet såg vi många av Phandalins stadsbor — Toblen, Sildar, Harbin, Elara, Mirna och unge Pip bland dem.",
      what: "Vi plundrade Glasstaffs kista och tog hans Staff of Defense. Faelaris hörde Glasstaff försöka fly och vi satte efter — Corvus kastade en Scroll of Hold Person medan Faelaris lassade hans fötter, och Glasstaff störtade till marken. Brander kastade honom över axeln och vi sprintade ut ur gömstället. Vi förhörde Glasstaff utanför Tresendar Manor, där Lior kollapsade av smärta från sin ring och började berätta om den för gruppen. Vi låste in Glasstaff i Townmaster's Halls celler. En fest hölls till vår ära på Stonehill Inn — Lior pratade med Sister Garaele om Red Wizards of Thay, Corvus vecklade upp oljeduken för att undersöka den svarta glasskärvan han bär och kände skam utan att förstå varför, och Brander spelade Dragonchess med Sildar och vann. Vi köpte healing potions och Alchemist's Fire på Thistlebrook Remedies. Qelline Alderleaf gav oss vägbeskrivningar till Thundertree, Conyberry och Old Owl Well. Vi fyllde på förråden hos Barthen's Provisions och gav oss av från Phandalin. Toblen stoppade oss vid stadsranden och stoppade ett brev i Corvus hand.",
      learned: "Liors smärta orsakades av hans ring. Daran Edermath gav oss Boots of Elvenkind som tack för att vi tagit itu med Glasstaff. Under förhöret av Glasstaff fick vi veta att \"The Spider\" är en Drow. \"The Spider\" skickade fyra Bugbears för att hjälpa Glasstaff hålla Phandalins invånare i schack, men Redbrands har klarat sig utan dem hittills. \"The Spider\" letar efter Forge of Spells, en magisk smedja som användes av dvärgar och gnomer för längesedan för att skapa magiska vapen. Ingen annan i The Lords' Alliance vet om Glasstaffs förräderi. Det var Iarno \"Glasstaff\" Albreks väska som låg i poolen i entrérummet — han hade gömt den för att fly ifall han skulle behöva. Reidoth the Druid befinner sig i Ruins of Thundertree och kan vägen till Cragmaw Castle. Sildar vill återställa ordningen i regionen och bad om vår hjälp med problemen runtomkring Phandalin — han vill att gruppen är hans informanter gällande framgång i Phandalin. Sildar vill ställa Iarno \"Glasstaff\" Albrek inför rätta i Neverwinter och bad gruppen att fortsätta leta efter Gundren Rockseeker medan han är borta. Qelline lärde oss vägarna till Thundertree och Conyberry. Toblen Stonehill tryckte ett brev i Corvus händer när vi lämnade Phandalin.",
      goal: "Vi begav oss mot nästa destination: The Dogwater Inn."
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
    "Investigate Old Owl Well to find out what is going on there."
  ],
  sv: [
    "Ta oss till The Dogwater Inn.",
    "Hitta Gundren Rockseeker.",
    "Hitta Cragmaw Castle.",
    "Ge silverkammen till bansheen Agatha.",
    "Hitta Mirnas arvegods i Ruins of Thundertree.",
    "Döda Klarg.",
    "Stoppa Redbrand Ruffians.",
    "Hitta Redbrand Hideout.",
    "Tillfångata Glasstaff.",
    "Hitta Reidoth the Druid i Ruins of Thundertree.",
    "Undersök Old Owl Well för att ta reda på vad som pågår där."
  ]
};

// NPC appearance translations (keyed by NPC name)
const NPC_APPEARANCES = {
  sv: {
    "Klarg": "En massiv bugbear med tovigt mörkt päls, ett brutalt ansikte och tung rustning av ben och metall med spikar, beväpnad med en stor stridsyxa.",
    "Sildar Hallwinter": "En väderbitnen krigare med kortklippt hår, en sträng blick och en röd-och-guld tabard med ett borgvapen över ringbrynja — knäböjande men obruten.",
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
    "Elara Thistlebrook": "En fräknig kvinna med rött hår i en lång fläta, klädd i en grön sjal över ett brunt snörlivstycke, med ett varmt leende medan hon håller en glödande blå dryckesflaska."
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
      "Gruppen reste längs stigen mot Phandalin (S2)."
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
      "Armory hittades — gruppen tog röda cloaks (S4).",
      "Brevet från Nezznar \"The Spider\" till Glasstaff hittades (S4).",
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
