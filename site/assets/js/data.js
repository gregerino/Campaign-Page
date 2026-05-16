const CAMPAIGN = {
  title: "Phandelver and Below",
  subtitle: "The Shattered Obelisk",
  intro: "Four adventurers, bound by fate, coin, and curiosity, travel the roads of the Sword Coast toward the mining town of Phandalin. What began as a simple escort job has pulled them into a web of goblin ambushes, criminal thugs, and a shadowy figure known only as The Spider.",

  party: [
    {
      name: "Lior Fenn",
      player: "Måns",
      race: "Halfling",
      class: "Rogue",
      motivation: "Sona misstaget som kostade någon livet",
      faction: "Zhentarim / Harpers",
      image: "assets/images/party/lior.png",
      appearance: "A young man with tousled dark brown hair and a roguish smirk, wearing layered brown leather armor with numerous buckles and straps, a red scarf around his neck, holding a coin."
    },
    {
      name: "Brander",
      player: "Olof",
      race: "Goliath",
      class: "Paladin",
      motivation: "Skydda människor som inte kan skydda sig själva",
      faction: "Order of the Gauntlet",
      image: "assets/images/party/brander.png",
      appearance: "A powerfully built man with grey skin, a dark mohawk, tribal tattoos covering his arms and torso, wearing fur-lined leather armor with a greatsword strapped to his back."
    },
    {
      name: "Corvus Blackwell",
      player: "Johan",
      race: "Human",
      class: "Wizard",
      motivation: "Bli mäktig nog att aldrig vara beroende av någon igen",
      faction: "Harpers / Lords Alliance",
      image: "assets/images/party/corvus.png",
      appearance: "A lean young man with messy black hair and pale skin, wearing a dark leather coat with a grey scarf, conjuring flame in one outstretched hand, with a book and vials at his belt."
    },
    {
      name: "Faelaris Starwoven",
      player: "Gustaf",
      race: "Elf",
      class: "Ranger",
      motivation: "Bevisa att han kan vara något annat än bara kungason",
      faction: "Harpers / Emerald Enclave",
      image: "assets/images/party/faelaris.jpeg",
      appearance: "A stern-faced male elf with long dark hair, pointed ears, and tanned skin, wearing ornate brown leather armor with a longbow visible over his shoulder."
    }
  ],

  sessions: [
    {
      id: 1,
      title: "Session 1",
      date: "16 Mars 2026",
      where: "Our journey began along the Triboar Trail, where a goblin ambush awaited us. After surviving the attack, we followed a trail of blood and tracks into the wilderness, eventually discovering the entrance to Cragmaw Hideout, a damp, torchlit cave system nestled in a rocky hillside.",
      who: "Inside the hideout we encountered Yeemik, a scheming goblin who wanted to overthrow Klarg, the bugbear leader of the cave. Yeemik struck a deal with us: kill Klarg, and he would hand over the prisoners.",
      what: "Goblins attacked us on the Triboar Trail, and we fought them off, learning in the process that Gundren Rockseeker and Sildar Hallwinter had been captured. We tracked the goblins to Cragmaw Hideout, killed the sentries standing guard outside, and ventured into the cave system. Deep within, we struck a bargain with Yeemik to take out Klarg in exchange for Sildar's freedom. We pressed further inside and found Klarg waiting for us in the deepest chamber.",
      learned: "We discovered that goblins had set up an ambush along the Triboar Trail, targeting travelers heading toward Phandalin. A trail of blood led us straight to Cragmaw Hideout. Inside, we learned that Yeemik was plotting against Klarg and wanted to seize control of the hideout. We found Klarg in the deepest cavern of the hideout.",
      goal: "Vårt nästa mål är att döda Klarg."
    },
    {
      id: 2,
      title: "Session 2",
      date: "30 Mars 2026",
      where: "We continued our exploration of Cragmaw Hideout, pushing deeper into its damp, goblin-infested tunnels. After clearing the cave, we set out along the Triboar Trail toward Phandalin, finally arriving at the quiet mining town. We settled in at Stonehill Inn for the evening.",
      who: "We confronted Klarg, the bugbear leader, as well as Yeemik and Eerk, two goblin bosses vying for control of the hideout. In Phandalin, we met Elmina Barthen, the kind owner of Barthen's Provisions, and Toblen Stonehill, the innkeeper at Stonehill Inn, along with his wife Trilena and their son Pip. We caught our first glimpse of the Redbrand Ruffians, rough thugs who seem to terrorize the town. We also met Krusk, a formidable half-orc in the tavern.",
      what: "We killed Klarg after promising Yeemik we would handle him. Among Klarg's possessions, we found stolen goods from Lionshield Coster that had been taken during goblin ambushes along the road. When we returned to Yeemik, he demanded payment for Sildar Hallwinter, so we killed him and Eerk for their betrayal and freed Sildar. Together we traveled to Phandalin, where we met Elmina Barthen and Corvus did some shopping. At the Stonehill Inn, we gathered information about the Redbrand threat and the state of the town. Corvus took Elsa Oresong to his room as a way of gathering information.",
      learned: "In the hideout, we recovered an Unbreakable Arrow, a longsword, a shield, and a longbow. We learned about Wyvern Tor and the marauders camped there. We also heard that Sister Garaele had returned injured from several days of traveling.",
      goal: "Är det Iarno eller utpressarna som vi ska ge oss på först? Kan Daran hjälpa oss att hitta informationen vi behöver. Om vi följer Redbrands kanske vi kan hitta fler trådar."
    },
    {
      id: 3,
      title: "Session 3",
      date: "6 April 2026",
      where: "We spent the day investigating Phandalin, visiting Lionshield Coster, Tresendar Manor, Shrine of Luck, Edermath Orchard, Phandalin Miner's Exchange, and finally the Sleeping Giant Inn, the known haunt of the Redbrand Ruffians.",
      who: "We met many of Phandalin's residents: Linene Graywind at the Lionshield Coster, Daran Edermath and his granddaughter Bertrice at the Edermath Orchard, Townmaster Harbin Wester, Sildar Hallwinter, Sister Garaele at the Shrine of Luck, and Halia Thornton at the Miner's Exchange. At the Sleeping Giant, we encountered the Redbrand Ruffians themselves, along with Grista Kettlecop and a tiefling called Wheel-Of-Fortune. We also met Brelki Togglecroggle and Amra Venhorn, two Phandalin residents caught in a neighbor's quarrel.",
      what: "We asked Linene Graywind about Harbin Wester and then visited the Townmaster to learn about the town's problems. We investigated Tresendar Manor but found nothing. Sister Garaele at the Shrine of Luck told us about a book she was searching for and gave us a silver comb to deliver to the banshee Agatha. Daran Edermath at the Orchard pointed us toward Halia and warned that Redbrands gathered at the Sleeping Giant. Halia Thornton confirmed the same. We resolved a neighbor dispute between Brelki and Amra through compromise. Then we went to the Sleeping Giant and fought the Redbrands there. We captured one of them, interrogated him for information about the Redbrand Hideout, and locked him up in the Townmaster's Hall.",
      learned: "Toblen had met someone on the road wearing the same emblem as Brander. We learned that the Redbrands have a base somewhere in town and were directed to speak with Halia Thornton and Daran Edermath. Someone calling themselves the \"Orchard Ghost\" has been sending threatening letters to Daran. Glasstaff is rarely seen in public; some believe he hides near or beneath Tresendar Manor. There is a secret old tunnel in the forest near the manor. Sister Garaele was searching for something tied to magic or an artifact before she was wounded; she gave us a silver comb to deliver to the banshee Agatha. The ring Lior carries bears a sigil that frightened Sister Garaele. The Redbrand Ruffians gather at the Sleeping Giant, but their real base is elsewhere.",
      goal: "Hitta Redbrand Hideout och stoppa Redbrands. Undersöka tunneln nära Tresendar Manor."
    },
    {
      id: 4,
      title: "Session 4",
      date: "20 April 2026",
      where: "After a night at Stonehill Inn, we made our way to Tresendar Manor and descended into the Redbrand Hideout, a sprawling underground complex hidden beneath the ruins.",
      who: "We checked in with Sildar Hallwinter and Harbin Wester before heading out. In the hideout, we rescued Mirna Dendrar and her children Nirsa and Nars from the Redbrand prison cells. We encountered Ssarnak, a grotesque one-eyed creature lurking in a cavern beneath the hideout. We fought Redbrand Ruffians, Skeletons, and found four Bugbears terrorizing a small goblin named Droop, who fainted the moment we entered the room.",
      what: "We climbed onto the roof of Stonehill Inn to look for light from Tresendar Manor; we saw nothing. After breakfast, we headed to the manor and found our way into the Redbrand Hideout. In the entrance cistern we discovered Glasstaff's emergency escape kit. Lior blocked a door with his Unbreakable Arrow to prevent Redbrands from flanking us. Faelaris fell into a trap in the corridor leading to the crypt, where we destroyed a group of skeletons. We found the prison cells and freed Mirna, Nars, and Nirsa, escorting them out safely. In the armory we donned red cloaks to disguise ourselves as Redbrands. We offered Ssarnak a dead Redbrand as food to cross his bridge unharmed. The disguise worked: Redbrands playing Knucklebones ignored us, and even the Bugbears let us pass. We reached Glasstaff's workshop and personal quarters, where we discovered the letter.",
      learned: "We found Glasstaff's emergency kit hidden in the water cistern. Mirna Dendrar told us her family heirloom is in the Ruins of Thundertree, which she offered as a reward for freeing them. We took red cloaks from the armory and used them to move freely through the hideout. Ssarnak whispered our darkest secrets aloud: Mördare, Tjuv, Förrädare, Desertör. And we learned fragments of Lior's past: a ring, a defected agent, Thay. Most importantly, we found a letter from Nezznar \"The Spider\" addressed to Iarno \"Glasstaff\" Albrek, revealing that Iarno is Glasstaff.",
      goal: "Vart tog Glasstaff vägen? Han kan inte ha kommit långt."
    },
    {
      id: 5,
      title: "Session 5",
      date: "4 Maj 2026",
      where: "We rushed from the Redbrand Hideout back to Townmaster's Hall with Glasstaff in custody. Afterward, we celebrated at Stonehill Inn before visiting Thistlebrook Remedies and Barthen's Provisions to stock up for the road ahead. We then left Phandalin, heading out into the countryside.",
      who: "We finally caught Iarno \"Glasstaff\" Albrek and brought him to justice. At the celebration, we saw many of Phandalin's townsfolk: Toblen, Sildar, Harbin, Elara, Mirna, and young Pip among them.",
      what: "We looted Glasstaff's chest and claimed his Staff of Defense. Faelaris heard Glasstaff trying to escape and we gave chase. Corvus cast a Scroll of Hold Person while Faelaris lassoed his feet, and Glasstaff crashed to the ground. Brander threw him over his shoulder and we sprinted out of the hideout. We interrogated Glasstaff outside Tresendar Manor, where Lior collapsed in pain from his ring and began telling the group about it. We locked Glasstaff in the Townmaster's Hall cells. A celebration was held in our honor at Stonehill Inn. Lior spoke with Sister Garaele about the Red Wizards of Thay, Corvus unwrapped the oilcloth to examine the black glass shard he carries and felt shame without understanding why, and Brander played Dragonchess with Sildar and won. We bought healing potions and Alchemist's Fire at Thistlebrook Remedies. Qelline Alderleaf gave us directions to Thundertree, Conyberry, and Old Owl Well. We stocked up at Barthen's Provisions and set out from Phandalin. Toblen stopped us at the town's edge and slipped Corvus a letter.",
      learned: "Lior's pain was caused by his ring. Daran Edermath gifted us Boots of Elvenkind as thanks for dealing with Glasstaff. From interrogating Glasstaff, we learned that \"The Spider\" is a Drow. \"The Spider\" sent four Bugbears to help Glasstaff keep Phandalin's residents in check, but the Redbrands managed without them so far. \"The Spider\" is searching for the Forge of Spells, a magical forge once used by dwarves and gnomes long ago to create magical weapons. No one else in The Lords' Alliance knows about Glasstaff's betrayal. It was Iarno \"Glasstaff\" Albrek's bag that lay in the pool in the entrance room; he had hidden it there in case he needed to flee. Reidoth the Druid is in the Ruins of Thundertree and knows the way to Cragmaw Castle. Sildar wants to restore order in the region and asked for our help with the problems around Phandalin; he wants the party to be his informants regarding progress in Phandalin. Sildar wants to bring Iarno \"Glasstaff\" Albrek to justice in Neverwinter, and asked the party to continue searching for Gundren Rockseeker while he is away. Qelline taught us the routes to Thundertree and Conyberry. Toblen Stonehill pressed a letter into Corvus's hands as we left Phandalin.",
      goal: "Vi begav oss mot nästa destination: The Dogwater Inn."
    }
  ],

  npcs: [
    { name: "Klarg", appearance: "A hulking bugbear with matted dark fur, a brutish face, and heavy bone-and-metal spiked armor, wielding a large battleaxe.", locations: ["Cragmaw Hideout"], firstSession: 1, image: "assets/images/npcs/bugbear.png", dead: true },
    { name: "Sildar Hallwinter", appearance: "A weathered human warrior with short-cropped hair, a stern brow, and a red-and-gold tabard bearing a castle sigil over chainmail, kneeling but unbroken.", locations: ["Cragmaw Hideout", "Phandalin", "Townmaster's Hall", "Stonehill Inn"], firstSession: 1, image: "assets/images/npcs/sildar.jpg" },
    { name: "Elmina Barthen", appearance: "A young human woman with long, wavy red hair and striking features, wearing a purple blouse with an adventurous look.", locations: ["Barthen's Provisions", "Phandalin"], firstSession: 2, image: "assets/images/npcs/elmina.png" },
    { name: "Toblen Stonehill", appearance: "A stocky, balding human man with a thick brown beard, wearing a white shirt with a leather apron, often seen polishing a tankard behind the bar.", locations: ["Stonehill Inn", "Phandalin"], firstSession: 2, image: "assets/images/npcs/toblen.webp" },
    { name: "Trilena Stonehill", appearance: "A warm-faced human woman with curly auburn hair, wearing a white peasant blouse under a brown and gold laced bodice.", locations: ["Stonehill Inn"], firstSession: 2, image: "assets/images/npcs/trilena.png" },
    { name: "Pip Stonehill", appearance: "A young boy with tousled brown hair and freckled cheeks, son of Toblen and Trilena, wearing an oversized white shirt and green knee-length breeches with suspenders.", locations: ["Stonehill Inn", "Phandalin"], firstSession: 2, image: "assets/images/npcs/pip.webp" },
    { name: "Elsa Oresong", appearance: "A young human woman with long, wavy black hair and bright green eyes, wearing an off-shoulder white blouse with a green laced corset.", locations: ["Stonehill Inn"], firstSession: 2, image: "assets/images/npcs/elsa.webp" },
    { name: "Krusk", appearance: "A muscular half-orc with blue-grey skin, dark hair pulled back, and small tusks, wearing a bone-tooth necklace, fur cloak, and leather bracers with a skull pauldron.", locations: ["Stonehill Inn", "Phandalin"], firstSession: 2, image: "assets/images/npcs/krusk.jpg" },
    { name: "Redbrand Ruffians", appearance: "A band of criminals recognizable by their scarlet cloaks, leather armor, and menacing swagger.", locations: ["Phandalin", "Sleeping Giant", "Redbrand Hideout"], firstSession: 2, image: "assets/images/npcs/redbrands.webp" },
    { name: "Linene Graywind", appearance: "A stout human woman with dark curly hair and brown skin, wearing a brown leather merchant's vest over blue clothing, adorned with pouches and a silver brooch.", locations: ["Lionshield Coster", "Phandalin"], firstSession: 3, image: "assets/images/npcs/linene.png" },
    { name: "Minghee Graywind", appearance: "A young woman with straight dark hair, sharp eyes, and a no-nonsense expression, wearing a leather work apron over a simple cream-colored shirt.", locations: ["Lionshield Coster", "Phandalin"], firstSession: 3, image: "assets/images/npcs/minghee.webp" },
    { name: "Daran Edermath", appearance: "An elderly half-elf with long white hair, dark grey skin, and pointed ears, wearing ornate leather armor with a blue cloak.", locations: ["Edermath Orchard", "Phandalin"], firstSession: 3, image: "assets/images/npcs/daran.webp" },
    { name: "Bertrice Edermath", appearance: "A young human woman with curly dark hair and green eyes, wearing a floral headscarf, olive-green dress, and an embroidered apron.", locations: ["Edermath Orchard"], firstSession: 3, image: "assets/images/npcs/bertrice.png" },
    { name: "Harbin Wester", appearance: "A portly, pompous-looking human man with ruddy cheeks and a thin mustache, wearing an elaborate blue noble's coat with fur-trimmed collar.", locations: ["Townmaster's Hall", "Phandalin"], firstSession: 3, image: "assets/images/npcs/harbin.webp" },
    { name: "Sister Garaele", appearance: "An elven woman with long dark hair, pale skin, and pointed ears, wearing an elegant blue and silver clerical robe with ornate embroidery.", locations: ["Shrine of Luck", "Phandalin"], firstSession: 3, image: "assets/images/npcs/garaele.webp" },
    { name: "Halia Thornton", appearance: "A sharp-featured human woman with short, dark swept-back hair and piercing brown eyes, wearing a dark coat with an intense, calculating expression.", locations: ["Phandalin Miner's Exchange", "Phandalin"], firstSession: 3, image: "assets/images/npcs/halia.png" },
    { name: "Grista Kettlecop", appearance: "A stern-looking dwarven woman with blonde hair in twin braids, wearing a blue tunic with a golden geometric symbol on the chest.", locations: ["Sleeping Giant"], firstSession: 3, image: "assets/images/npcs/grista.png" },
    { name: "Wheel-Of-Fortune", appearance: "A ruggedly handsome tiefling man with reddish skin, dark hair, and two curved horns, wearing a leather work apron over a white shirt, holding a coin with a sly grin.", locations: ["Sleeping Giant"], firstSession: 3, image: "assets/images/npcs/wheel.png" },
    { name: "Brelki Togglecroggle", appearance: "A small gnome woman with short blonde hair and pointed ears, wearing layered purple and brown leather clothing festooned with silver jewelry and numerous pouches.", locations: ["Phandalin"], firstSession: 3, image: "assets/images/npcs/brelki.png" },
    { name: "Amra Venhorn", appearance: "A slender elven woman with long golden hair adorned with wildflowers, pointed ears, and a serene smile, wearing a flowing green dress with floral embroidery.", locations: ["Phandalin"], firstSession: 3, image: "assets/images/npcs/amra.png" },
    { name: "Mirna Dendrar", appearance: "A young human woman with dark curly hair and deep brown skin, wearing a simple sage-green garment, with a weary, guarded expression.", locations: ["Redbrand Hideout", "Phandalin"], firstSession: 4, image: "assets/images/npcs/mirna.webp" },
    { name: "Nirsa Dendrar", appearance: "A barefoot young human woman with dark windswept hair, wearing a simple grey skirt and a brown plaid vest over a white blouse.", locations: ["Redbrand Hideout"], firstSession: 4, image: "assets/images/npcs/nirsa.webp" },
    { name: "Nars Dendrar", appearance: "A scrappy young human boy with messy dark brown hair and a dirt-smudged face, wearing a fur-collared brown cloak and rough leather clothing with a knife at his belt.", locations: ["Redbrand Hideout", "Phandalin"], firstSession: 4, image: "assets/images/npcs/nars.png" },
    { name: "Ssarnak", appearance: "A grotesque creature with mottled brown scaly skin, bony spines protruding from its head, one enormous yellow-green eye, a wide toothy maw, and a long pink tongue.", locations: ["Redbrand Hideout"], firstSession: 4, image: "assets/images/npcs/ssarnak.webp" },
    { name: "Droop", appearance: "A small, scrawny goblin with greenish skin, large yellow eyes, and oversized pointed ears, wearing a tattered red vest and baggy pants, carrying a staff.", locations: ["Redbrand Hideout"], firstSession: 4, image: "assets/images/npcs/droop.webp" },
    { name: "Iarno \"Glasstaff\" Albrek", appearance: "A bearded human man in a long fur-collared white and gold coat, carrying a glowing multicolored staff and a book.", locations: ["Redbrand Hideout", "Tresendar Manor", "Townmaster's Hall"], firstSession: 4, image: "assets/images/npcs/glasstaff.png" },
    { name: "Qelline Alderleaf", appearance: "A dark-skinned halfling woman with voluminous curly brown hair, wearing a fur-collared cloak over a rust-orange tunic with a golden spiral necklace.", locations: ["Alderleaf Farm", "Phandalin"], firstSession: 5, image: "assets/images/npcs/qelline.png" },
    { name: "Elara Thistlebrook", appearance: "A freckled human woman with red hair in a long braid, wearing a green shawl over a brown laced bodice, warmly smiling while holding a glowing blue potion bottle.", locations: ["Thistlebrook Remedies", "Phandalin"], firstSession: 5, image: "assets/images/npcs/elara.png" }
  ],

  locations: [
    {
      name: "Triboar Trail",
      sessions: [1, 2],
      events: [
        "Goblins were killed in an ambush (S1).",
        "A blood trail was found leading to Cragmaw Hideout (S1).",
        "The party traveled along the trail toward Phandalin (S2)."
      ]
    },
    {
      name: "Cragmaw Hideout",
      sessions: [1, 2],
      events: [
        "The party entered and killed the goblin sentries (S1).",
        "Met Yeemik who wanted the party to kill Klarg (S1).",
        "Klarg was found and killed (S2).",
        "Yeemik and Eerk betrayed the party and were killed (S2).",
        "Sildar Hallwinter was rescued (S2).",
        "Unbreakable Arrow, longsword, shield and longbow were found (S2).",
        "Stolen goods from Lionshield Coster were found (S2)."
      ]
    },
    {
      name: "Phandalin",
      sessions: [2, 3, 4, 5],
      events: [
        "The party arrived after rescuing Sildar (S2).",
        "First encounter with the Redbrand Ruffians (S2).",
        "The party investigated the town and spoke with residents (S3).",
        "The neighbor dispute was resolved through compromise (S3).",
        "Glasstaff was imprisoned in Townmaster's Hall (S5).",
        "A celebration was held in the party's honor at Stonehill Inn (S5).",
        "The party shopped and prepared for further travels (S5)."
      ]
    },
    {
      name: "Stonehill Inn",
      sessions: [2, 3, 4, 5],
      events: [
        "The party gathered information about the Redbrands and the town (S2).",
        "Overnight stay before infiltrating the Redbrand Hideout (S4).",
        "Celebration in the party's honor after Glasstaff was captured (S5).",
        "Brander played Dragonchess with Sildar and Corvus (S5)."
      ]
    },
    {
      name: "Lionshield Coster",
      sessions: [3],
      events: [
        "The party met Linene Graywind and asked about Harbin Wester (S3)."
      ]
    },
    {
      name: "Tresendar Manor",
      sessions: [3, 4, 5],
      events: [
        "The party investigated but found nothing (S3).",
        "Entrance to the Redbrand Hideout was found (S4).",
        "Glasstaff was captured outside (S5)."
      ]
    },
    {
      name: "Shrine of Luck",
      sessions: [3],
      events: [
        "The party met Sister Garaele who told them about the book she is searching for (S3).",
        "Sister Garaele gave the party a silver comb to deliver to the banshee Agatha (S3)."
      ]
    },
    {
      name: "Edermath Orchard",
      sessions: [3],
      events: [
        "The party met Daran Edermath and received information about Halia and the Sleeping Giant (S3)."
      ]
    },
    {
      name: "Phandalin Miner's Exchange",
      sessions: [3],
      events: [
        "The party met Halia Thornton who confirmed Redbrands gather at the Sleeping Giant (S3)."
      ]
    },
    {
      name: "Sleeping Giant",
      sessions: [3],
      events: [
        "The party fought the Redbrands (S3).",
        "A Redbrand was captured and interrogated (S3)."
      ]
    },
    {
      name: "Townmaster's Hall",
      sessions: [3, 4, 5],
      events: [
        "The party imprisoned a Redbrand (S3).",
        "Glasstaff was imprisoned in the cells (S5).",
        "Sildar received Glasstaff for justice (S5)."
      ]
    },
    {
      name: "Redbrand Hideout",
      sessions: [4, 5],
      events: [
        "Glasstaff's emergency kit was found in the cistern (S4).",
        "Skeletons were destroyed in the crypt (S4).",
        "Mirna, Nars and Nirsa Dendrar were rescued from prison (S4).",
        "Ssarnak was encountered in the cavern (S4).",
        "The armory was found; the party took red cloaks (S4).",
        "The letter from Nezznar \"The Spider\" to Glasstaff was found (S4).",
        "Glasstaff was chased and captured after fleeing (S5)."
      ]
    },
    {
      name: "Thistlebrook Remedies",
      sessions: [5],
      events: [
        "The party bought healing potions and Alchemist's Fire (S5)."
      ]
    },
    {
      name: "Barthen's Provisions",
      sessions: [2, 5],
      events: [
        "Corvus shopped with Elmina Barthen (S2).",
        "The party stocked up on supplies for the road (S5)."
      ]
    },
    {
      name: "Alderleaf Farm",
      sessions: [5],
      events: [
        "The party spoke with Qelline and received directions to Thundertree, Conyberry and Old Owl Well (S5)."
      ]
    }
  ],

  factions: [
    {
      id: "harpers",
      name: "Harpers",
      icon: "🎵",
      description: "A scattered network of spellcasters and spies who covertly oppose any abuse of power. They gather intelligence and work behind the scenes to balance the forces of the Realms.",
      descriptionSv: "Ett spritt nätverk av trollkarlar och spioner som i hemlighet motverkar allt maktmissbruk. De samlar underrättelser och arbetar bakom kulisserna för att balansera makternas krafter i riket.",
      contacts: ["Sister Garaele"]
    },
    {
      id: "lords-alliance",
      name: "Lords' Alliance",
      icon: "🏰",
      description: "A coalition of rulers from cities across the Sword Coast who band together to ensure mutual security and prosperity. They seek to maintain civilization and order against threats from the wilderness.",
      descriptionSv: "En koalition av härskare från städer längs Sword Coast som sluter sig samman för att säkerställa ömsesidig säkerhet och välstånd. De strävar efter att upprätthålla civilisation och ordning mot hot från vildmarken.",
      contacts: ["Sildar Hallwinter", "Iarno \"Glasstaff\" Albrek"]
    },
    {
      id: "order-gauntlet",
      name: "Order of the Gauntlet",
      icon: "⚔️",
      description: "A devoted group of faithful and vigilant seekers of justice who protect others from the depredations of evildoers. Members are driven by their oath to smite evil wherever it is found.",
      descriptionSv: "En hängiven grupp troende och vaksamma rättvisesökare som skyddar andra från ondskans härjningar. Medlemmar drivs av sin ed att slå ner ondska varhelst den finns.",
      contacts: ["Daran Edermath"]
    }
  ],

  goals: [
    { id: 0, text: "Get to The Dogwater Inn.", session: 5, status: "active" },
    { id: 1, text: "Find Gundren Rockseeker.", session: 2, status: "active" },
    { id: 2, text: "Find Cragmaw Castle.", session: 2, status: "active" },
    { id: 3, text: "Deliver the silver comb to the banshee Agatha.", session: 3, status: "active" },
    { id: 4, text: "Find Mirna's heirloom in the Ruins of Thundertree.", session: 4, status: "active" },
    { id: 9, text: "Find Reidoth the Druid in the Ruins of Thundertree.", session: 5, status: "active" },
    { id: 10, text: "Investigate Old Owl Well to find out what is going on there.", session: 3, status: "active" },
    { id: 5, text: "Kill Klarg.", session: 1, status: "completed" },
    { id: 6, text: "Stop the Redbrand Ruffians.", session: 2, status: "completed" },
    { id: 7, text: "Find the Redbrand Hideout.", session: 3, status: "completed" },
    { id: 8, text: "Capture Glasstaff.", session: 4, status: "completed" }
  ]
};
