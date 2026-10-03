# Vesper 1.4.0 model library

All geometry and materials in `src/models.ts`, `src/flora-models.ts`, `src/fauna-models.ts`, `src/aquatic-avian-models.ts`, `src/field-models.ts` and their shared `src/model-kit.ts` are original, authored directly in TypeScript. No downloaded models, textures, raster substitutes, external modeling service, or runtime asset requests are required. Models are actual closed/surface 3D geometry with volumetric leaves, sculptural botanical silhouettes and six-sided crystals. The three regions share a quiet material language: sage and pearl botany, mineral ochre and amber, cold stone and luminous cyan.

## Integration

- `createModel(kind, seed)` returns a group of direct `THREE.Mesh` children. All 67 `ModelKind` values are implemented. Geometry/material objects are cached and shared across calls. New botanical families reuse three deterministic sculpted variants rather than allocating new geometry for each placement. The 60 discovery records use 58 distinct model families, while the remaining forms provide environmental scenery.
- The lowest visible geometry of every world model is normalized to **y=0**. Set its world y to terrain height for ground subjects. Birds apply their hover metadata; fish must instead be placed beneath the water surface, respecting their measured full height and body-center offset. Props have no nested mesh groups, no embedded lights and no external textures. Call `updateMatrixWorld(true)` before reading transforms.
- To globally instance a template, combine each child's local matrix with the placement matrix. Use `geometry` **and** `material` identity as the batch key. A multi-material mesh also carries geometry material groups; preserve those groups. Material sharing is deliberate; changing one emissive intensity changes all users of that material. Use a separate cloned material only for an independently animated hero/object, with independent ownership.
- Remove chunks/instances without disposing their shared geometry/material. The geometry library owns its resources for the game's lifetime. Temporary construction copies are disposed safely.
- `MODEL_BOUNDS` describes conservative full visible envelopes. For trees this includes the canopy; it is **not** a trunk collider. The runtime configures trunk-sized colliders in `src/world.ts`, with a larger trunk radius for the baobab; reeds, flowers and most ferns are nonblocking. An arch requires separate pier colliders so its opening stays traversable. The capsule requires a cylinder/box collider plus feet if desired.
- Meshes cast and receive shadows. For large prop batches, turn off shadow casting outside a near radius/at lower quality instead of adding lights to individual discoveries. Gentle emissive materials look luminous without demanding hundreds of point lights.
- Animal models expose articulated direct mesh children such as `leg-*`, `head`, `tail`, `wing-left` and `wing-right`, with resting transforms and motion metadata. `src/wildlife.ts` animates wandering, grazing, hopping, crawling, gliding and attention to the visitor. Animals remain individual groups; nearby focus pauses their travel to support scanning. Reduced-motion settings suppress movement and joint animation. `moth` retains its named wings and hover metadata; `harmonic-core` retains its gentle resonance hint.

## Inventory

| Region/function | Models and visual identity |
|---|---|
| Forest environment | `canopy-tree`: umbrella tiers, crooked spine, buttress roots; `ribbon-tree`: tall twisting spine and elongated sculptural crown; `fan-fern`: nested lenticular fans; `reed`: grouped seed pods and narrow leaves |
| Desert environment | `desert-spire`: wind-bent stone with amber tip; `arch-rock`: real walk-through wind-carved arch and strata; `dune-rock`: broad faceted rubble |
| Cave environment | `crystal-cluster`: several tilted quartz columns; `cave-column`: rock pillar with luminous mineral vein |
| Ancient environment | `ruin-arch`: slender ceramic arch with inlay; `ruin-ring`: broken elevated ring on pedestal |
| Forest atlas | `lantern-bloom`: pearl-petal crown and golden lantern; `spore-crown`: umbrella fungus with hanging fringe; `prism-fern`: radial crystal blades; `moth`: winged survey fauna with eyespots |
| Desert atlas | `glass-cactus`: branched amber stems with mineral bands; `sun-stone`: faceted mineral and seam ring; `sand-rose`: layered mineral-petal rosette |
| Cave atlas | `echo-crystal`: tall prism with resonance rings; `cave-coral`: branching stems and luminous polyps; `memory-shard`: thin ceramic fragment with vertical data seam |
| Investigations/rare | `survey-monolith`: ceramic survey marker; `heartwood`: warm mineral heart inside a woody rib cage; `sun-dial`: marked disc, angled gnomon and suspended ring; `harmonic-core`: cyan octahedron enclosed by three orbital rings |
| New tree families | `spire-pine`, `silver-birch`, `veil-willow`, `coral-tree`, `baobab-tree`, `spiral-tree`, `tree-fern`, `fan-palm`: eight distinct crown/trunk silhouettes, alongside the two original tree forms |
| New flowering families | `starflower`, `bellflower`, `orchid`, `sunburst-flower`, `lotus`, `foxglove`: shaped petals, bells, layered flowers and upright flower spikes |
| New understory/desert forms | `berry-bush`, `cycad`, `aloe`, `barrel-cactus`, `prickly-pear`: varied shrubs, succulent rosettes and cactus bodies |
| New fungi/ground scenery | `puffball`, `shelf-fungus`, `glowcap`, `grass-tuft`, `flower-carpet`, `fallen-log`, `lily-pad`, `boulder-stack`: fungal colonies, clustered vegetation, fallen timber and stacked terrain forms |
| New forest wildlife | `moss-grazer`, `fern-hopper`, `shellback`, `glass-stag`, `sky-ray`: articulated terrestrial creatures and a broad-winged glider |
| New desert/cavern wildlife | `dune-runner`, `sand-beetle`, `crystal-beetle`, `cave-ray`: long-legged runner, six-legged beetles and a quiet cavern glider |


## Equipment

`createScanner()` returns a compact modeled field instrument, approximately 0.30m long. Its aperture faces local **-Z**, with camera-local grip, view screen, ceramic shell, ventilation ribs and status lamp. Suggested camera attachment `(0.34, -0.28, -0.53)`, then tune for aspect ratio. Camera near plane should be ≤0.05m. Group name is `Vesper / Lumen field scanner`, aperture child name `sensor-aperture`. The scanner is not ground-normalized because it uses an equipment-local origin.

`createLandingPod()` returns a ~4.2m high expedition capsule with ceramic shell, dark door/window, four spread outriggers, landing shoes, stairs and beacon. Root y=0, overall foot spread ~4.5m diameter. The door faces **+Z**. At spawn, rotate/place it so stairs do not obstruct the player's initial forward route. Beacon child is named `beacon`.

All part transforms remain editable. Preserve the deliberate material palette and limit ad hoc random colors to keep the environment visually coherent.

## Validation

The focused model tests check finite positions/normals, conservative `MODEL_BOUNDS`, ground origins, shared GPU resources and anatomy. All three sculpted variants of the 27 new botanical families are inspected; the nine new animal families are checked across 12 seeds. Groundcover has triangle budgets, fauna retains independent joint pivots, and ray wings are checked for closed volume, outward upper normals and mirrored anatomy. Runtime wildlife checks cover motion, observation pauses, biome boundaries and reduced-motion behavior.

New botanical groups use 2–4 direct meshes, while articulated animal groups use 7–14. Their higher part counts preserve independent legs and wings. The original models generally use 3–6 meshes; scanner uses 11 and capsule uses 15. Source geometry correctness and browser lighting, movement, visibility and performance are separate checks; actual integrated release results belong in [QA.md](QA.md).

## Reusable GLB assets

`public/models/` contains 74 self-contained binary glTF files: all 67 world model families, `scanner.glb`, `landing-pod.glb` and five field supply/tool models. These are actual mesh assets with embedded PBR materials, suitable for importing into Blender, game engines and glTF viewers. They have no external texture, model or network dependency. `manifest.json` records original provenance, dimensions, conservative world envelopes, mesh/triangle counts, SHA-256 checksums and verification results.

Regenerate all exports from the project root:

```sh
node --import tsx tools/export-models.ts
```

The exporter uses Three.js `GLTFExporter` and a minimal Node `FileReader` shim. Each saved GLB is checked for its magic bytes, version, length and embedded binary chunk, then imported again through `GLTFLoader`; its rendered primitive count, triangle count and bounds must match the source. A glTF material group may import as a separate mesh node, so the exporter records source/imported mesh counts without requiring those raw scene-node counts to match. The GLB variants use seed 0. The live game continues using the cached code-authored library to retain deterministic seed variation and shared GPU resources; it does not fetch these GLB files during gameplay. Changes to the source require regeneration to update the exported assets.


## Field-atlas portraits

`public/specimens/` contains 60 transparent 384 × 384 PNG portraits, one for each catalog record, rendered from these actual models in a consistent orthographic three-quarter view. The PNGs support the atlas interface; they do not replace 3D geometry in the world. Its `manifest.json` records the source model, rendering dimensions, model seed and provenance. The release bundles these files for local/offline use.

With the Vite development server running on port 4173, regenerate the portraits:

```sh
node tools/render-catalog.mjs http://127.0.0.1:4173
```

The renderer uses Playwright and `tools/catalog-preview.html`. Regenerate both portraits and GLB assets after model changes, then run `npm run build` to copy them into the release.

## Avian and aquatic families

`aquatic-avian-models.ts` adds Canopy Swift (forked tail), Suncrest Bird (warm crest), Reed Heron (long neck and trailing legs), Ribbon Fish (flowing fins), Glass Koi (rounded patterned body) and Lantern Eel (curved luminous body). Every model faces local −Z and exposes wings, fins and/or tails for articulation. Metadata records flight height or preferred swimming depth and body center. The wildlife runtime confines fish to sufficiently deep parts of their own water body; reduced motion restores resting joints, and pause freezes established transforms. The water surface is procedural geometry with a shared transparent shader; it is not a GLB model export.

## Field supply and tool forms

`src/field-models.ts` exports `field-cache`, `field-resin`, `field-crystal`, `field-probe` and `field-beacon`. Each model rests at y=0, uses shared cached geometry/materials and has a conservative radius/height envelope. The probe indicator changes when repaired; the beacon marks a persisted player-selected return point. These forms are separate from the 60-entry species catalogue. GLB assets retain editable parts and embedded materials.
