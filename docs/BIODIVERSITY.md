# Vesper biodiversity expansion

Vesper now contains **60 authored discoveries**, compared with the original 21. The catalog includes 32 forest discoveries, 16 desert discoveries and 12 cavern discoveries. Seventeen entries describe wildlife: two original moth species, nine terrestrial/gliding animals, three birds and three fish. The three rare investigation landmarks remain part of the original catalog.

The model library contains **67 world model families**, plus the scanner and landing pod. The two expansions add 27 botanical/environment families and 15 animal families. Eight new tree families join the original canopy and ribbon trees, giving ten distinct tree silhouettes. Six flower families add starflowers, bells, orchids, sunbursts, lotus blooms and foxglove spikes. Groundcover, fungi, cactus forms, logs and stone stacks provide smaller changes in shape and scale. All models are original geometry authored in TypeScript; the live game does not download models or textures.

There are 58 unique model families among the 60 catalog entries because the original forest/cavern moths and the two memory shards share model families. Scenery also contains uncatalogued groundcover and environmental forms. A field specimen is an individually placed research subject; not every decorative flower or tree contributes a separate atlas entry.

## Habitat guide

Habitat identity comes from world-coordinate patches rather than a fresh random roll in each chunk. Farther from the landing area, jittered 64 m anchors create coherent clusters. Each habitat has its own canopy, shrub, groundcover and rock weights. Dense flower colonies alternate with open routes, while tree sizes and rotations vary within a restrained visual palette.

| Biome | Habitat | Character |
|---|---|---|
| Forest | Starpetal Meadows | Open grass, colourful flower colonies, pale branching trees and occasional coralwood |
| Forest | The Fernwood | Spirepines, tree ferns, ribbon trees, layered understory and fallen timber |
| Forest | Veilwillow Grove | Trailing willow crowns, silver trunks, bells, orchids and broad leaves |
| Forest | Sporelight Wetlands | Reeds, fungi, low lily forms and moisture-loving forest growth |
| Desert | Sunwell Oasis | Fan palms, cycads, aloes and warm flowering beds |
| Desert | The Cactus Garden | Branched glass flora, rounded barrels and flat succulent paddles |
| Desert | Ochre Badlands | Weathered stacks, spires, sparse succulents and occasional arches |
| Caverns | Prism Gardens | Blue crystal beds, coral growth and mineral grazers |
| Caverns | The Fungal Hollow | Glowing caps, puffballs and overlapping shelf colonies |
| Caverns | Echo Vaults | Tall mineral columns, open passages and drifting rays |

Firstlight is deliberately composed to show the differences early. The meadow anchor is at `(0, 15)`, fernwood at `(-48, -12)`, willow grove at `(48, -12)` and wetland at `(0, -65)`. Ten contrasting tree forms are seeded around this first grove. A Moss Grazer begins at `(8, -16)` and a Starpetal specimen at `(-7, -15)`. Individual site clearances and rendering distance can affect how many forms are visible from one viewpoint.

## Wildlife

| New animal | Primary environment | Behavioural identity |
|---|---|---|
| Moss Grazer | Meadows, fernwood and wetlands | Slow grazing and short wandering journeys |
| Fern Hopper | Meadows and forest understory | Small bounds between sheltering plants |
| Pearl Shellback | Willow groves and wetlands | Patient movement under a segmented shell |
| Glass Stag | Willow groves and fernwood | Tall browsing silhouette with a branching crest |
| Dune Runner | Oasis and desert ridges | Long-legged movement between pockets of shade |
| Sand Beetle | Cactus gardens and badlands | Low crawling among succulent plants |
| Crystal Beetle | Crystal and fungal gardens | A small faceted mineral grazer |
| Cavern Ray | Cavern passages | Broad wings and low, quiet drifting flight |
| Meadow Ray | Meadows and willow groves | Gentle gliding above flower colonies |

Animals use distinct articulated anatomy. The runtime animates legs, wings, head and tail where those parts exist, including wandering, foraging pauses and attention to a nearby visitor. A focused animal pauses its travel so observations remain practical. Reduced-motion settings suppress wandering and joint animation. The ecological descriptions are fictional worldbuilding and observations within Vesper’s invented ecosystem.

## Generation, performance and saves

Each chunk adds three or four biodiversity specimens to its original discoveries, normally including one or two animals. New IDs use a separate `biodiversity:` namespace. The original 21 species IDs, biome generation, introductory flower, investigation clues and original normal-specimen coordinates are preserved. New water basins reshape local terrain around those anchors, while the landing route and investigation clearings remain dry. Existing scan records can still refer to the same original subjects; the visible surrounding scenery has changed.

Dense decorative vegetation uses shared geometry/material resources and instancing. The renderer retains taller silhouettes farther away while limiting detailed groundcover and individually animated wildlife to nearer distances. Trunks have small collision radii rather than using the full crown width, leaving walkable spaces beneath the canopy.

A historical v1.1 CPU layout review across three seeds found 28–41 trees within 65 m of the origin, with minimum trunk separations of 5.81–6.24 m and no severe canopy crowding. The balanced-distance rules retained approximately 617–712 decorative placements around the origin before camera-frustum rejection. These are layout/resource estimates, not a frame-rate benchmark; browser performance should be checked on the target computer after integration.

The catalog is finite at 60 authored discoveries. Terrain, habitat patches, repeated specimen encounters and investigation sites continue through the seeded world as the explorer travels. Endless exploration does not imply an unlimited number of new species or generated scientific descriptions.

Generation tests cover deterministic regeneration, biome/habitat consistency, clustered habitat identity, ten nearby tree forms, animal availability, reachability of every catalog entry, stable IDs and exact compatibility of representative original specimens and clues.

## Water and sky expansion

Release 1.2 adds approximately 8% to canopy placement targets and 15% to shrub/groundcover targets, with clear routes and specimen clearances still applied. Bank plants add a narrow ribbon of reeds, ferns and lilies. These are placement targets, rather than a promise that every chunk receives identical density.

Firstlight Lake appears near the landing area, shifting between deterministic candidates to avoid an original investigation. The Willowrun flows from it along a continuous meandering route. Regional pools appear in later forest, desert and cavern landscapes. Blue areas on the survey map indicate water, and its toolbar can mark the nearby lake.

Canopy Swifts, Suncrest Birds and Reed Herons provide different flying silhouettes. Ribbon Fish, Glass Koi and Lantern Eels inhabit water basins; their swim paths are constrained to deep wet areas of their home body. They remain practical scanning subjects because focus pauses translation. Water is transparent enough to reveal fish, with depth coloring and small surface ripples. The player wades in shallow water and automatically swims in deeper water.

The additional encounters use stable `waterlife:` IDs, separate from the original and biodiversity subjects. The expanded atlas now has 60 finite records; river bends and repeated wildlife encounters provide new places to explore without claiming an unlimited number of unique species.
