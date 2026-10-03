import type { BiomeId, HabitatId, HabitatDef, SpeciesDef } from "./types";

export const BIOMES: Record<
  BiomeId,
  { id: BiomeId; name: string; subtitle: string; color: string; hint: string }
> = {
  forest: {
    id: "forest",
    name: "Canopy Forest",
    subtitle: "A living network beneath the leaves",
    color: "#78bca4",
    hint: "Pearl blooms and swaying fronds shelter beneath the canopy.",
  },
  desert: {
    id: "desert",
    name: "Glass Desert",
    subtitle: "Wind, mineral and patient light",
    color: "#e5aa75",
    hint: "Look for glass flora among the warm stone ridges.",
  },
  caves: {
    id: "caves",
    name: "Resonant Caverns",
    subtitle: "A luminous world of slow echoes",
    color: "#8cbce5",
    hint: "Pale crystals and coral-like growths mark the quieter hollows.",
  },
};

export const HABITATS: Record<HabitatId, HabitatDef> = {
  "wildflower-meadow": {
    id: "wildflower-meadow",
    name: "Starpetal Meadows",
    biome: "forest",
    ground: "#8ea179",
    accent: "#e4bca5",
    description:
      "Open grass and layered flower beds draw pollinators into the light.",
  },
  fernwood: {
    id: "fernwood",
    name: "The Fernwood",
    biome: "forest",
    ground: "#55765e",
    accent: "#86af8c",
    description:
      "Tall spires, tree ferns and fallen timber shelter a dense understory.",
  },
  "willow-grove": {
    id: "willow-grove",
    name: "Veilwillow Grove",
    biome: "forest",
    ground: "#6b8b80",
    accent: "#b6d3ce",
    description:
      "Trailing silver-green branches shade quiet lily and bellflower beds.",
  },
  "spore-wetland": {
    id: "spore-wetland",
    name: "Sporelight Wetlands",
    biome: "forest",
    ground: "#507c74",
    accent: "#bca7d6",
    description:
      "Reeds, broad leaves and soft fungi follow shallow moisture channels.",
  },
  "sun-oasis": {
    id: "sun-oasis",
    name: "Sunwell Oasis",
    biome: "desert",
    ground: "#ad956c",
    accent: "#a9b986",
    description:
      "Palms, cycads and bright flowers gather where the sand holds moisture.",
  },
  "cactus-garden": {
    id: "cactus-garden",
    name: "The Cactus Garden",
    biome: "desert",
    ground: "#c89b78",
    accent: "#a1bd91",
    description:
      "Branching glass flora and rounded reservoirs form a patient desert garden.",
  },
  "stone-badlands": {
    id: "stone-badlands",
    name: "Ochre Badlands",
    biome: "desert",
    ground: "#af8064",
    accent: "#d9b39a",
    description:
      "Weathered stacks and occasional arches frame sparse pockets of life.",
  },
  "crystal-garden": {
    id: "crystal-garden",
    name: "Prism Gardens",
    biome: "caves",
    ground: "#3b5661",
    accent: "#8ecad6",
    description:
      "Dense blue prisms support coral growth and tiny mineral grazers.",
  },
  "fungal-hollow": {
    id: "fungal-hollow",
    name: "The Fungal Hollow",
    biome: "caves",
    ground: "#3d464f",
    accent: "#c8a1d3",
    description:
      "Glowing caps, shelf colonies and round puffballs occupy the damp dark.",
  },
  "echo-vault": {
    id: "echo-vault",
    name: "Echo Vaults",
    biome: "caves",
    ground: "#32444f",
    accent: "#a6bbd3",
    description:
      "Tall mineral columns leave open passages for drifting cavern rays.",
  },
};

/** The original catalog is retained so v1 discovery records and specimens remain valid. */
export const LEGACY_SPECIES: SpeciesDef[] = [
  {
    id: "pearl-lantern",
    name: "Pearl Lantern",
    subtitle: "A flower that stores the dusk",
    biome: "forest",
    category: "flora",
    rarity: "common",
    model: "lantern-bloom",
    color: "#efca9d",
    xp: 18,
    description:
      "A translucent bloom cupped around a warm, pearl-like centre. Its stem bends towards reflected light beneath the canopy.",
    insight:
      "The bloom appears to hold daylight in a waxy membrane, offering nearby insects a steady guide after sunset.",
  },
  {
    id: "crownspore",
    name: "Crownspore",
    subtitle: "A suspended seed chamber",
    biome: "forest",
    category: "flora",
    rarity: "uncommon",
    model: "spore-crown",
    color: "#c5a5dc",
    xp: 28,
    description:
      "A ring of soft pods floats above a narrow stalk. Tiny particles drift between the pods without reaching the ground.",
    insight:
      "Its spores use the sheltered air beneath taller trees. A small change in wind may carry an entire new colony.",
  },
  {
    id: "prism-frond",
    name: "Prism Frond",
    subtitle: "Light divided into living colour",
    biome: "forest",
    category: "flora",
    rarity: "uncommon",
    model: "prism-fern",
    color: "#83d6bf",
    xp: 28,
    description:
      "Angular leaflets split stray beams into green and blue. Their edges are firm, while the central ribs move freely.",
    insight:
      "The frond redirects light towards its shaded lower leaves, sharing energy between different layers of the plant.",
  },
  {
    id: "whisper-reed",
    name: "Whisper Reed",
    subtitle: "A listener along the forest floor",
    biome: "forest",
    category: "flora",
    rarity: "common",
    model: "reed",
    color: "#98c79c",
    xp: 18,
    description:
      "Slender hollow stems gather in small groups. Each carries a thin ribbon that turns with the slightest breeze.",
    insight:
      "Its hollow stems disperse moisture along the root bed. The familiar rustle is evidence of this hidden exchange.",
  },
  {
    id: "copperfan",
    name: "Copperfan",
    subtitle: "A folded rain collector",
    biome: "forest",
    category: "flora",
    rarity: "common",
    model: "fan-fern",
    color: "#c6ba80",
    xp: 18,
    description:
      "Wide leaves unfold from a compact spiral, their copper-coloured tips catching drops falling from above.",
    insight:
      "The grooves return captured water to the central root. This little reservoir supports the surrounding moss.",
  },
  {
    id: "lumen-moth",
    name: "Lumen Moth",
    subtitle: "A traveller between lanterns",
    biome: "forest",
    category: "fauna",
    rarity: "uncommon",
    model: "moth",
    color: "#f1d8af",
    xp: 28,
    description:
      "A delicate glider with four pearl-coloured wings. It settles briefly near luminous flowers before rising again.",
    insight:
      "Dust on its wings matches several forest plants. Its short journeys connect blooms that never receive direct sunlight.",
  },
  {
    id: "heartwood-archive",
    name: "Heartwood Archive",
    subtitle: "The forest remembers its seasons",
    biome: "forest",
    category: "relic",
    rarity: "rare",
    model: "heartwood",
    color: "#f6dba3",
    xp: 85,
    description:
      "Living wood encloses a suspended golden seed. Three root channels converge beneath its weathered outer shell.",
    insight:
      "Nearby specimens reveal a shared water cycle. The archive preserves that exchange: a record of a forest surviving together.",
  },
  {
    id: "glass-cactus",
    name: "Glass Cactus",
    subtitle: "A reservoir behind translucent ribs",
    biome: "desert",
    category: "flora",
    rarity: "common",
    model: "glass-cactus",
    color: "#95cbbf",
    xp: 18,
    description:
      "Transparent ribs protect a narrow green core. Sand settles against the lowest branches but never buries their tips.",
    insight:
      "The ribs scatter intense sunlight while the shaded core retains water. Growth is slow but remarkably resilient.",
  },
  {
    id: "sun-stone",
    name: "Sun Stone",
    subtitle: "A mineral warmed from within",
    biome: "desert",
    category: "mineral",
    rarity: "common",
    model: "sun-stone",
    color: "#f2bd79",
    xp: 18,
    description:
      "A rounded amber mineral with a bright seam. The seam follows the surface like the outline of an older crystal.",
    insight:
      "Different layers absorb and release heat at different rates. Their slow expansion creates the stone’s distinctive seam.",
  },
  {
    id: "sand-rose",
    name: "Sand Rose",
    subtitle: "Petals shaped by the wind",
    biome: "desert",
    category: "flora",
    rarity: "uncommon",
    model: "sand-rose",
    color: "#dfa28d",
    xp: 28,
    description:
      "A low rosette of thick, terracotta petals shelters a tiny pale centre. Fine grains collect along the outer folds.",
    insight:
      "The outer petals sacrifice themselves to abrasive winds. Protected inner growth can survive between the rare rains.",
  },
  {
    id: "dune-memory",
    name: "Dune Memory",
    subtitle: "A fragment of an older route",
    biome: "desert",
    category: "relic",
    rarity: "uncommon",
    model: "memory-shard",
    color: "#dab88a",
    xp: 28,
    description:
      "A slender shard carries parallel markings beneath its surface. One edge is polished smooth by moving sand.",
    insight:
      "The markings follow the spacing of local ridges. Someone once mapped these dunes before the wind rearranged them.",
  },
  {
    id: "wind-needle",
    name: "Wind Needle",
    subtitle: "Stone sculpted into a slender sail",
    biome: "desert",
    category: "mineral",
    rarity: "common",
    model: "desert-spire",
    color: "#ce9671",
    xp: 18,
    description:
      "A narrow upright formation rises from a broad base. Its curved face looks almost soft, despite the dense material.",
    insight:
      "Repeated gusts remove softer layers. The remaining spine records the direction of generations of prevailing winds.",
  },
  {
    id: "ochre-geode",
    name: "Ochre Geode",
    subtitle: "A quiet chamber beneath the dust",
    biome: "desert",
    category: "mineral",
    rarity: "uncommon",
    model: "dune-rock",
    color: "#c8a276",
    xp: 28,
    description:
      "A cracked outer shell conceals tiny sparkling faces. The surrounding sand is finer than that found on open dunes.",
    insight:
      "The protected chamber forms during brief wet periods. Its growth is a mineral diary of the desert’s rare storms.",
  },
  {
    id: "heliograph-dial",
    name: "Heliograph Dial",
    subtitle: "An instrument for a changing horizon",
    biome: "desert",
    category: "relic",
    rarity: "rare",
    model: "sun-dial",
    color: "#f2cc83",
    xp: 85,
    description:
      "A stone instrument frames a suspended disc. Three channels lead towards worn markers around its base.",
    insight:
      "Wind, heat and old markings agree on a seasonal rhythm. The dial once measured that rhythm, helping travellers find water.",
  },
  {
    id: "echo-crystal",
    name: "Echo Crystal",
    subtitle: "A lattice that carries a soft pulse",
    biome: "caves",
    category: "mineral",
    rarity: "common",
    model: "echo-crystal",
    color: "#9bd5ed",
    xp: 18,
    description:
      "A tall blue crystal bears a pale internal line. Nearby pieces align themselves along the same direction.",
    insight:
      "Vibrations travel along its inner lattice. A small movement can be carried far beyond the visible crystal cluster.",
  },
  {
    id: "cave-coral",
    name: "Cave Coral",
    subtitle: "A garden beyond the sun",
    biome: "caves",
    category: "flora",
    rarity: "common",
    model: "cave-coral",
    color: "#b5a3df",
    xp: 18,
    description:
      "Branching violet growths cling to cool ground. Their rounded tips brighten where moisture gathers.",
    insight:
      "This colony feeds on dissolved minerals. It grows along the same water routes that supply the surrounding crystals.",
  },
  {
    id: "ice-bouquet",
    name: "Ice Bouquet",
    subtitle: "Many faces, one hidden root",
    biome: "caves",
    category: "mineral",
    rarity: "common",
    model: "crystal-cluster",
    color: "#b6d9eb",
    xp: 18,
    description:
      "Several short prisms rise from a shared base. Their faces appear almost colourless until viewed from the side.",
    insight:
      "The prisms grow from one solution pocket. Changes in their angles reveal how water once circulated through this hollow.",
  },
  {
    id: "tide-column",
    name: "Tide Column",
    subtitle: "A layered history of flowing water",
    biome: "caves",
    category: "mineral",
    rarity: "uncommon",
    model: "cave-column",
    color: "#9dabc7",
    xp: 28,
    description:
      "A smooth pillar narrows between a broad foot and a rounded crown. Pale bands circle its sides.",
    insight:
      "Each band marks a period of mineral deposition. The long column was built by countless small drops rather than one great event.",
  },
  {
    id: "hollow-memory",
    name: "Hollow Memory",
    subtitle: "An etched fragment in the blue dark",
    biome: "caves",
    category: "relic",
    rarity: "uncommon",
    model: "memory-shard",
    color: "#b8bfeb",
    xp: 28,
    description:
      "A cool shard displays a repeating sequence of arcs. The pattern resembles the nearby branching mineral channels.",
    insight:
      "The arcs may describe resonance rather than words. Their intervals mirror the pulses carried by local crystal lattices.",
  },
  {
    id: "glimmer-moth",
    name: "Glimmer Moth",
    subtitle: "A small keeper of the hollows",
    biome: "caves",
    category: "fauna",
    rarity: "uncommon",
    model: "moth",
    color: "#aad9e8",
    xp: 28,
    description:
      "Broad blue wings carry a row of luminous points. The glider pauses beside mineral-fed colonies.",
    insight:
      "Its wing dust transports nutrients between isolated colonies, joining the cavern’s living and mineral networks.",
  },
  {
    id: "harmonic-heart",
    name: "Harmonic Heart",
    subtitle: "The hollow answers as one",
    biome: "caves",
    category: "relic",
    rarity: "rare",
    model: "harmonic-core",
    color: "#b7e5f0",
    xp: 85,
    description:
      "A bright core rests within a ring of dark mineral supports. Three surrounding channels converge beneath it.",
    insight:
      "Crystal, water and living colonies share a rhythm. The heart reveals a cavern connected by resonance as well as by its unseen streams.",
  },
];

export const BIODIVERSITY_SPECIES: SpeciesDef[] = [
  {
    id: "spirepine",
    name: "Spirepine",
    subtitle: "A canopy of overlapping needles",
    biome: "forest",
    category: "flora",
    rarity: "common",
    model: "spire-pine",
    color: "#73998a",
    xp: 18,
    habitats: ["fernwood"],
    description:
      "A slender trunk carries tiered crowns of dense blue-green needles. Older lower branches make wide shelves above the understory.",
    insight:
      "Its layered silhouette catches drifting mist at several heights, returning droplets to the sheltered roots below.",
  },
  {
    id: "silver-birch",
    name: "Silver Birch",
    subtitle: "Pale trunks in the meadow light",
    biome: "forest",
    category: "flora",
    rarity: "common",
    model: "silver-birch",
    color: "#d5d8ba",
    xp: 18,
    habitats: ["wildflower-meadow", "willow-grove"],
    description:
      "Pale branching trunks lift small clusters of soft leaves. Warm bands mark the bark where old branches have fallen.",
    insight:
      "Its thin leaves thrive in openings between larger crowns. The bright bark reflects some of the light that would otherwise warm the trunk.",
  },
  {
    id: "veilwillow",
    name: "Veilwillow",
    subtitle: "A curtain of living rain",
    biome: "forest",
    category: "flora",
    rarity: "uncommon",
    model: "veil-willow",
    color: "#a3c7b6",
    xp: 28,
    habitats: ["willow-grove", "spore-wetland"],
    description:
      "Long leafy streamers hang from arched branches. The soft curtain parts above damp patches of ground.",
    insight:
      "Water follows each hanging strand before reaching the soil. These small shaded reservoirs give neighbouring lilies a place to grow.",
  },
  {
    id: "coralwood",
    name: "Coralwood",
    subtitle: "Branches shaped like a reef",
    biome: "forest",
    category: "flora",
    rarity: "uncommon",
    model: "coral-tree",
    color: "#d99d91",
    xp: 28,
    habitats: ["wildflower-meadow", "fernwood"],
    description:
      "A warm rose-coloured crown branches into a network of rounded fingers. Tiny buds nestle between the forks.",
    insight:
      "Open gaps admit light to plants underneath. Its unusual crown offers landing places to the meadow’s smaller gliders.",
  },
  {
    id: "cistern-baobab",
    name: "Cistern Baobab",
    subtitle: "A living store beneath a broad crown",
    biome: "forest",
    category: "flora",
    rarity: "uncommon",
    model: "baobab-tree",
    color: "#aa9978",
    xp: 28,
    habitats: ["wildflower-meadow", "spore-wetland"],
    description:
      "A heavy rounded trunk supports several low spreading branches. Its bark folds around a swollen central chamber.",
    insight:
      "The trunk appears to hold water through the dry season. Moss gathers around the shallow grooves where stored moisture slowly returns.",
  },
  {
    id: "spiralwood",
    name: "Spiralwood",
    subtitle: "A tree that follows the turning light",
    biome: "forest",
    category: "flora",
    rarity: "uncommon",
    model: "spiral-tree",
    color: "#b7b982",
    xp: 28,
    habitats: ["wildflower-meadow", "willow-grove"],
    description:
      "A twisting trunk rises into offset fans of leaves. Successive branches face different directions around the central spiral.",
    insight:
      "The arrangement spreads the canopy across several angles of sunlight. Smaller leaves occupy the openings left by older growth.",
  },
  {
    id: "crown-fern",
    name: "Crown Fern",
    subtitle: "An understory that became a canopy",
    biome: "forest",
    category: "flora",
    rarity: "common",
    model: "tree-fern",
    color: "#83aa75",
    xp: 18,
    habitats: ["fernwood", "spore-wetland"],
    description:
      "A narrow textured stem lifts a wide umbrella of divided fronds. Tightly rolled young leaves sit at the crown.",
    insight:
      "Elevating its fronds helps this fern reach the damp air above groundcover while keeping its new growth shaded.",
  },
  {
    id: "sunfan-palm",
    name: "Sunfan Palm",
    subtitle: "A green compass above the sand",
    biome: "desert",
    category: "flora",
    rarity: "common",
    model: "fan-palm",
    color: "#a6b58b",
    xp: 18,
    habitats: ["sun-oasis"],
    description:
      "A ringed trunk ends in a circle of stiff fan-shaped leaves. Loose older fronds hang below the freshest crown.",
    insight:
      "Leaf grooves funnel brief rainfall towards the trunk. The standing fans break the hot wind before it reaches the soil below.",
  },
  {
    id: "starpetal",
    name: "Starpetal",
    subtitle: "Colour scattered across the meadow",
    biome: "forest",
    category: "flora",
    rarity: "common",
    model: "starflower",
    color: "#e5b3cc",
    xp: 18,
    habitats: ["wildflower-meadow"],
    description:
      "Five broad petals surround a bright central disc. Small colonies make overlapping stars along the grass.",
    insight:
      "The open flowers welcome both low grazers and passing pollinators. Their small root mats stabilise exposed soil between taller plants.",
  },
  {
    id: "dew-bells",
    name: "Dew Bells",
    subtitle: "A chime-shaped shelter for pollen",
    biome: "forest",
    category: "flora",
    rarity: "common",
    model: "bellflower",
    color: "#b5b8e0",
    xp: 18,
    habitats: ["willow-grove", "wildflower-meadow"],
    description:
      "Drooping lavender bells hang along a curved stalk. Their shaded interiors remain cool after the meadow warms.",
    insight:
      "The downward openings protect pollen from falling droplets. Small hoppers pause under the bells during the brightest part of the day.",
  },
  {
    id: "ribbon-orchid",
    name: "Ribbon Orchid",
    subtitle: "A small flourish in the shade",
    biome: "forest",
    category: "flora",
    rarity: "uncommon",
    model: "orchid",
    color: "#e7b5a7",
    xp: 28,
    habitats: ["fernwood", "willow-grove"],
    description:
      "Wide paired petals frame a folded centre above glossy narrow leaves. The stalk leans towards a gap in the canopy.",
    insight:
      "A narrow trail of scent seems to attract specific forest gliders. The orchid’s position matters as much as its colour.",
  },
  {
    id: "sunburst",
    name: "Sunburst",
    subtitle: "The oasis wears a warmer colour",
    biome: "desert",
    category: "flora",
    rarity: "common",
    model: "sunburst-flower",
    color: "#efc27b",
    xp: 18,
    habitats: ["sun-oasis", "cactus-garden"],
    description:
      "Numerous slender golden petals radiate from a dark centre. Tough leaves remain close to the cooler ground.",
    insight:
      "The outer petals shade the reproductive centre during midday. Short roots rapidly absorb the moisture from brief showers.",
  },
  {
    id: "moon-lotus",
    name: "Moon Lotus",
    subtitle: "A pale bloom above the roots",
    biome: "forest",
    category: "flora",
    rarity: "uncommon",
    model: "lotus",
    color: "#ddd2df",
    xp: 28,
    habitats: ["willow-grove", "spore-wetland"],
    description:
      "Layered pale petals open from a broad low rosette. Its smooth leaves overlap to form a sheltered inner bowl.",
    insight:
      "The bowl traps moisture and organic dust. In this invented ecosystem, the plant thrives in damp soil without needing a deep pool.",
  },
  {
    id: "foxglove-spire",
    name: "Foxglove Spire",
    subtitle: "Many little rooms on one stem",
    biome: "forest",
    category: "flora",
    rarity: "common",
    model: "foxglove",
    color: "#d3a4cb",
    xp: 18,
    habitats: ["wildflower-meadow", "fernwood"],
    description:
      "Rows of small hanging cups climb a tall stem. Lower flowers open first, leaving younger buds at the top.",
    insight:
      "Staggered flowering keeps food available to pollinators over several days. The plant acts as a reliable waypoint in a shifting meadow.",
  },
  {
    id: "amberberry",
    name: "Amberberry",
    subtitle: "A bright harvest inside a thicket",
    biome: "forest",
    category: "flora",
    rarity: "common",
    model: "berry-bush",
    color: "#d7a774",
    xp: 18,
    habitats: ["fernwood", "wildflower-meadow"],
    description:
      "Dense rounded leaves enclose clusters of amber fruit. The outer branches bend gently under the ripening berries.",
    insight:
      "Grazer tracks often gather around mature bushes. Carried seeds may explain the new colonies appearing at the edges of nearby clearings.",
  },
  {
    id: "oasis-cycad",
    name: "Oasis Cycad",
    subtitle: "A low crown built for patient growth",
    biome: "desert",
    category: "flora",
    rarity: "common",
    model: "cycad",
    color: "#91aa79",
    xp: 18,
    habitats: ["sun-oasis"],
    description:
      "Stiff divided fronds rise from a short thick base. Older leaves form a protective skirt near the soil.",
    insight:
      "The compact crown reduces exposure to dry wind. Its shaded base shelters seedlings that could not survive on the open sand.",
  },
  {
    id: "silver-aloe",
    name: "Silver Aloe",
    subtitle: "A rosette sealed against the heat",
    biome: "desert",
    category: "flora",
    rarity: "common",
    model: "aloe",
    color: "#a4c1b4",
    xp: 18,
    habitats: ["sun-oasis", "cactus-garden", "stone-badlands"],
    description:
      "Thick pointed leaves spiral around a closed centre. Their pale surface is marked by shallow longitudinal grooves.",
    insight:
      "The fleshy leaves serve as reservoirs. Their reflective skin and tight arrangement slow the loss of the water collected during rare rain.",
  },
  {
    id: "barrel-cactus",
    name: "Copper Barrel",
    subtitle: "A rounded reservoir in the dunes",
    biome: "desert",
    category: "flora",
    rarity: "common",
    model: "barrel-cactus",
    color: "#b0bb84",
    xp: 18,
    habitats: ["cactus-garden"],
    description:
      "A squat ribbed globe holds a small warm flower at its crown. Short pale spines follow the curved ribs.",
    insight:
      "The ribs can widen after rainfall, providing room for stored water. Its rounded body exposes relatively little surface to dry air.",
  },
  {
    id: "prickly-sail",
    name: "Prickly Sail",
    subtitle: "Flat green paddles above the sand",
    biome: "desert",
    category: "flora",
    rarity: "uncommon",
    model: "prickly-pear",
    color: "#96b59a",
    xp: 28,
    habitats: ["cactus-garden", "sun-oasis"],
    description:
      "Oval green pads branch from a compact central stem. Tiny warm buds appear along the edges of older pads.",
    insight:
      "Each pad stores water and captures light. Fallen pieces sometimes establish a new plant, leaving small colonies around the parent.",
  },
  {
    id: "velvet-puffball",
    name: "Velvet Puffball",
    subtitle: "A round chamber in the cool dark",
    biome: "caves",
    category: "flora",
    rarity: "common",
    model: "puffball",
    color: "#cebad4",
    xp: 18,
    habitats: ["fungal-hollow"],
    description:
      "Soft round chambers gather around a low stem. Fine darker flecks mark the surface of the largest bulb.",
    insight:
      "A gentle touch releases a dust of spores. Air moved by cavern rays may carry them into new sheltered mineral beds.",
  },
  {
    id: "shelf-colony",
    name: "Shelf Colony",
    subtitle: "A staircase for the cavern’s recyclers",
    biome: "caves",
    category: "flora",
    rarity: "common",
    model: "shelf-fungus",
    color: "#c695ab",
    xp: 18,
    habitats: ["fungal-hollow", "crystal-garden"],
    description:
      "Broad semicircular shelves grow in overlapping tiers. Each rim has a lighter band of fresh growth.",
    insight:
      "The shelves increase the colony’s feeding surface along damp stone. Small beetles shelter between their dry upper faces.",
  },
  {
    id: "violet-glowcap",
    name: "Violet Glowcap",
    subtitle: "A lantern for the underground garden",
    biome: "caves",
    category: "flora",
    rarity: "uncommon",
    model: "glowcap",
    color: "#b59ce0",
    xp: 28,
    habitats: ["fungal-hollow"],
    description:
      "A broad violet cap lifts above a fine pale stalk. Its underside glows softly through a row of thin gills.",
    insight:
      "The light gathers tiny mineral grazers near the colony. Their passing bodies carry spores between isolated patches.",
  },
  {
    id: "mirrorleaf",
    name: "Mirrorleaf",
    subtitle: "A floating-looking carpet at ground level",
    biome: "forest",
    category: "flora",
    rarity: "common",
    model: "lily-pad",
    color: "#9bbd9c",
    xp: 18,
    habitats: ["willow-grove", "spore-wetland"],
    description:
      "Broad circular leaves rest close to the damp soil. A narrow notch guides collected droplets towards the stem.",
    insight:
      "Overlapping leaves create a cool surface beneath larger willows. Their raised rims retain water after the surrounding ground begins to dry.",
  },
  {
    id: "balanced-stone",
    name: "Balanced Stone",
    subtitle: "A sculpture assembled by patient erosion",
    biome: "desert",
    category: "mineral",
    rarity: "uncommon",
    model: "boulder-stack",
    color: "#c9a589",
    xp: 28,
    habitats: ["stone-badlands"],
    description:
      "Rounded stones sit in a narrow leaning stack. Different bands of warm colour cross each weathered face.",
    insight:
      "Softer surrounding layers have eroded first. The surviving stack reveals how unevenly this terrain responds to the wind.",
  },
  {
    id: "moss-grazer",
    name: "Moss Grazer",
    subtitle: "A slow gardener beneath the canopy",
    biome: "forest",
    category: "fauna",
    rarity: "common",
    model: "moss-grazer",
    color: "#9cb38b",
    xp: 18,
    habitats: ["wildflower-meadow", "fernwood", "spore-wetland"],
    description:
      "A rounded four-legged animal carries a soft ridged back and a broad low muzzle. It wanders between grass and berry beds.",
    insight:
      "Its patient grazing keeps meadow openings from closing completely. Seeds cling to the textured coat as it moves between patches.",
  },
  {
    id: "fern-hopper",
    name: "Fern Hopper",
    subtitle: "A small leap between the leaves",
    biome: "forest",
    category: "fauna",
    rarity: "common",
    model: "fern-hopper",
    color: "#b4c49d",
    xp: 18,
    habitats: ["fernwood", "wildflower-meadow", "willow-grove"],
    description:
      "Long rear legs and upright ears give this small creature an alert silhouette. It pauses before short playful bounds.",
    insight:
      "Its quick changes of direction keep it among the sheltering fronds. Dust carried on its feet connects nearby flower colonies.",
  },
  {
    id: "pearl-shellback",
    name: "Pearl Shellback",
    subtitle: "A travelling shelter on little feet",
    biome: "forest",
    category: "fauna",
    rarity: "uncommon",
    model: "shellback",
    color: "#b1c5bc",
    xp: 28,
    habitats: ["willow-grove", "spore-wetland"],
    description:
      "A low animal carries a broad pale segmented shell. Its tiny head emerges beneath the raised front rim.",
    insight:
      "The shell gathers dew during quiet nights. Slow journeys along moist ground distribute small fungal spores and leaf fragments.",
  },
  {
    id: "glass-stag",
    name: "Glass Stag",
    subtitle: "A quiet silhouette in the silver grove",
    biome: "forest",
    category: "fauna",
    rarity: "uncommon",
    model: "glass-stag",
    color: "#bed3cf",
    xp: 28,
    habitats: ["willow-grove", "fernwood"],
    description:
      "A slender four-legged browser carries a branching translucent crest. Its narrow head turns towards movement in the understory.",
    insight:
      "The crest may help it display in dim light. Its longer reach lets it browse foliage that smaller meadow animals leave untouched.",
  },
  {
    id: "dune-runner",
    name: "Dune Runner",
    subtitle: "A light step across the warm ridges",
    biome: "desert",
    category: "fauna",
    rarity: "common",
    model: "dune-runner",
    color: "#cfae86",
    xp: 18,
    habitats: ["sun-oasis", "stone-badlands", "cactus-garden"],
    description:
      "Long legs support a narrow warm-coloured body and an extended tail. Its small head rises above the desert shrubs.",
    insight:
      "Raised feet reduce time spent on the hot surface. It follows the scattered shade of palms and rock formations between feeding stops.",
  },
  {
    id: "sand-beetle",
    name: "Sand Beetle",
    subtitle: "A polished shell close to the ground",
    biome: "desert",
    category: "fauna",
    rarity: "common",
    model: "sand-beetle",
    color: "#c1ad89",
    xp: 18,
    habitats: ["cactus-garden", "stone-badlands", "sun-oasis"],
    description:
      "Six short legs surround a smooth oval carapace. A faint seam divides the back into two glossy plates.",
    insight:
      "The shell sheds abrasive sand. Tracks converge around succulent plants, suggesting a diet built around the desert’s small pockets of life.",
  },
  {
    id: "crystal-beetle",
    name: "Crystal Beetle",
    subtitle: "A jewel moving between the prisms",
    biome: "caves",
    category: "fauna",
    rarity: "common",
    model: "crystal-beetle",
    color: "#94c1d4",
    xp: 18,
    habitats: ["crystal-garden", "fungal-hollow"],
    description:
      "A faceted blue shell rests on six fine legs. Small pale ridges mirror the neighbouring crystal formations.",
    insight:
      "Its mouthparts scrape thin mineral films from damp stone. The beetle’s journeys keep traces of the cavern’s chemistry in circulation.",
  },
  {
    id: "cavern-ray",
    name: "Cavern Ray",
    subtitle: "A quiet wing in the blue dark",
    biome: "caves",
    category: "fauna",
    rarity: "uncommon",
    model: "cave-ray",
    color: "#9eb4d2",
    xp: 28,
    habitats: ["echo-vault", "crystal-garden", "fungal-hollow"],
    description:
      "Broad soft wings spread from a flattened body and a tapering tail. The creature drifts above the mineral floor.",
    insight:
      "Its slow wingbeats stir air through sheltered galleries. That movement carries spores between colonies that otherwise remain isolated.",
  },
  {
    id: "meadow-ray",
    name: "Meadow Ray",
    subtitle: "A little sail above the flowers",
    biome: "forest",
    category: "fauna",
    rarity: "uncommon",
    model: "sky-ray",
    color: "#d6b7cb",
    xp: 28,
    habitats: ["wildflower-meadow", "willow-grove"],
    description:
      "A rosy broad-winged creature glides low over the flower beds. Its long tail follows each gentle banking turn.",
    insight:
      "Low flight brings its underside close to exposed blooms. It appears to follow the same flowering routes from one habitat patch to another.",
  },
];

/** Water and flight subjects use their own placement rules, rather than the
 * ordinary land-specimen pool. */
export const WATER_SKY_SPECIES: SpeciesDef[] = [
  {
    id: "canopy-swift",
    name: "Canopy Swift",
    subtitle: "A forked silhouette above the treetops",
    biome: "forest",
    category: "fauna",
    rarity: "common",
    model: "canopy-swift",
    color: "#9baebe",
    xp: 24,
    habitats: ["fernwood", "willow-grove"],
    description:
      "Swept wings and a deeply forked tail carry this small bird between the upper branches. Its light belly flashes when it banks.",
    insight:
      "Watch the open spaces between trees. Swifts follow those corridors instead of flying through the dense crown.",
  },
  {
    id: "suncrest-bird",
    name: "Suncrest Bird",
    subtitle: "A bright visitor to flowering groves",
    biome: "forest",
    category: "fauna",
    rarity: "uncommon",
    model: "suncrest-bird",
    color: "#e3b26f",
    xp: 28,
    habitats: ["wildflower-meadow", "willow-grove"],
    description:
      "A warm crest, short curved beak and colored tail distinguish this small flier from the swift. It circles low over flowering plants.",
    insight:
      "The brightest flowers make useful places to watch its low, repeating flight routes.",
  },
  {
    id: "reed-heron",
    name: "Reed Heron",
    subtitle: "Long wings over still water",
    biome: "forest",
    category: "fauna",
    rarity: "uncommon",
    model: "reed-heron",
    color: "#b7d2d1",
    xp: 30,
    habitats: ["willow-grove", "spore-wetland"],
    description:
      "A slender waterbird has a long beak, folded neck and trailing legs. Broad feathered wings sweep above the banks.",
    insight:
      "Its flights follow the shoreline. The lake edge offers an easier view than the trees inland.",
  },
  {
    id: "ribbon-fish",
    name: "Ribbon Fish",
    subtitle: "A silver ribbon beneath the ripples",
    biome: "forest",
    category: "fauna",
    rarity: "common",
    model: "ribbon-fish",
    color: "#80bfc7",
    xp: 24,
    description:
      "A slender silver body and delicate fins move in small turns under the surface. Its bright flank catches light through the water.",
    insight:
      "Look down from a shallow bank. Clear water and a close view reveal details that are hidden from the far shore.",
  },
  {
    id: "glass-koi",
    name: "Glass Koi",
    subtitle: "Warm patches in a cool pool",
    biome: "forest",
    category: "fauna",
    rarity: "uncommon",
    model: "glass-koi",
    color: "#e7c295",
    xp: 30,
    description:
      "A broad-bodied fish carries warm patches along its pearl flank. Its rounded tail and paired fins turn slowly in sheltered water.",
    insight:
      "Deeper pockets give the koi room to turn; the calmer parts of a lake are a useful place to begin a survey.",
  },
  {
    id: "lantern-eel",
    name: "Lantern Eel",
    subtitle: "A moving thread of pale light",
    biome: "forest",
    category: "fauna",
    rarity: "uncommon",
    model: "lantern-eel",
    color: "#a5d8c4",
    xp: 32,
    description:
      "A long tapering body curves through the darker water, with a thin fin ridge and small luminous nodes along its side.",
    insight:
      "Follow the light below the surface. The eel stays submerged and turns back before reaching dry banks.",
  },
];

export const SPECIES: SpeciesDef[] = [
  ...LEGACY_SPECIES,
  ...BIODIVERSITY_SPECIES,
  ...WATER_SKY_SPECIES,
];

export const SPECIES_BY_ID: Record<string, SpeciesDef> = Object.fromEntries(
  SPECIES.map((species) => [species.id, species]),
);
