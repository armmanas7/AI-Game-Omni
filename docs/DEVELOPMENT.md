# Vesper development guide

## Release and first run

The project includes editable source, the compiled `dist/` build, launchers, 74 original GLB exports, 60 atlas portraits, model documentation and this guide. Use **Launch Vesper.command** for the release; use **Launch Development.command** only when editing source. The release server needs Node but no `node_modules` or package install. Keep `dist/`, `tools/serve.mjs` and the release launcher in the same project folder; retain `LICENSE` when sharing the release.

Manual release launch:

```sh
node tools/serve.mjs dist
```

The server binds to `127.0.0.1:4174`, serves only the selected build directory, blocks traversal and symlink escapes, and shuts down on Control+C. `PORT=4175 node tools/serve.mjs dist` selects another port. A port change also changes the browser save location. `--open` opens the browser on macOS only after the server has successfully bound its port.

The supplied server passed 28 checks across localhost and LAN modes, covering HTML fallback, missing assets, GET/HEAD and method handling, encoded traversal, malformed paths, a symlink escape, GLB/font MIME types, startup messages and clean SIGTERM shutdown. The launchers passed `bash -n`.

## Mobile preview

Double-click **Launch Mobile Preview.command** or run `PORT=4175 node tools/serve.mjs dist --lan`. Connect the phone to the same Wi-Fi and open the printed address. `--lan` deliberately binds on the local network; it serves only the build directory with the same traversal protections. Without that flag the server stays localhost-only. Close the terminal server after the preview. Saves are separate per device/address; export/import for transfer. Use an actual device to assess sustained mobile performance.

## Exploring the starting area

Begin with the seed `VESPER-01`, or import a saved expedition. The first Pearl Lantern is directly ahead, near `(0, -7)`. Aim at it and hold E to record it. Continue north to the introductory investigation near `(0, -35)`: scan its three surrounding clues, then examine the Heartwood Archive. J opens its field records. M opens the survey and lets you place a waypoint. For a quick view of the new variety, look for the Moss Grazer at `(8, -16)` and the Starpetal at `(-7, -15)`. The first grove has meadow, fernwood, willow and wetland patches within a short walk; the atlas records the observed model in a rendered portrait. Use M → Mark nearby lake to find Firstlight Lake, then observe birds and scan fish from the bank or water. The explorer automatically wades or swims according to depth. Desert is east of the landing region; caverns are south. R returns safely to the landing area and preserves research.

To use the field kit, find the starter cache, resin and crystal near the landing area using the minimap. Collect with F, open B and compare recipes. Repair a nearby probe or craft/deploy a beacon, then use Return and Pack. These actions consume distinct supplies and persist in the save.

## Project structure

| File or directory | Responsibility |
|---|---|
| `src/main.ts` | Rendering, input, scan loop, onboarding flow, save integration and photographs |
| `src/player.ts` | Movement, click destinations, terrain following, jump, look and simple horizontal collision |
| `src/controls.ts`, `src/controls.css` | Capability detection, desktop mouse modes and independent multi-touch controls |
| `src/scan-feedback.ts` | Visible-model targeting, scanner readiness and actionable requirement prompts |
| `src/i18n.ts`, `src/ui-translations.ts`, `src/content-translations.ts`, `src/scan-translations.ts` | English/Chinese preference, reversible text localization and complete game copy |
| `src/field-data.ts`, `src/systems/fieldcraft.ts` | Item/recipe definitions and transactional collection, crafting, use, repairs and beacon persistence |
| `src/field-world.ts`, `src/field-models.ts` | Deterministic supply/probe placement, bounded streaming and five original field models |
| `src/minimap.ts` | Cached terrain samples and live navigation markers |
| `src/world.ts` | Chunk streaming, habitat-coloured terrain/roof meshes, prop instancing and distance limits, wildlife integration, markers, fog and scene effects |
| `src/systems/worldgen.ts` | Deterministic terrain, biomes, 10 habitat patches, stable IDs, varied scenery, wildlife specimens and investigation placement |
| `src/systems/terrain.ts` | Preserved base terrain, biome and original placement generation |
| `src/systems/waters.ts` | Deterministic water basins, continuous river routing, depth and bank carving |
| `src/water-surface.ts` | Bank-clipped shared water shader and per-chunk surface geometry |
| `src/aquatic-avian-models.ts` | Three bird and three fish model families, with articulated anatomy |
| `src/systems/state.ts` | Progression, scan records, site completion and validated local/JSON saves |
| `src/data.ts` | 60 discovery descriptions and ecological insights, plus biome/habitat definitions |
| `src/models.ts` | Unified model factory, original model families, equipment and bounds |
| `src/model-kit.ts` | Shared geometry/material cache and procedural construction helpers |
| `src/flora-models.ts` | 27 new botanical/environment model families with three cached sculpted variants |
| `src/fauna-models.ts` | Nine new articulated animal model families and motion metadata |
| `src/wildlife.ts` | Wandering, foraging, visitor attention and joint animation |
| `src/audio.ts` | Synthesized ambient sound, footsteps and survey tones |
| `src/ui.ts`, `src/style.css` | Bilingual interface, map, journal, menus and settings |
| `public/models/` | 74 independent GLB exports and provenance manifest |
| `public/specimens/` | 60 transparent 384 px atlas PNGs rendered from the actual models, plus provenance manifest |
| `tools/export-models.ts` | GLB regeneration and saved-file round-trip checks |
| `tools/render-catalog.mjs`, `tools/catalog-preview.html` | Local rendering of field-atlas portraits from the model library |
| `tools/serve.mjs` | Dependency-free local release server |
| `tests/` | System and browser integration checks; actual counts/results are recorded in QA |
| `docs/QA.md` | Recorded release checks and their practical limits |

## Procedural design and practical limits

The same world seed and chunk coordinates regenerate the same terrain and placements. Global-coordinate height sampling keeps neighboring terrain edges continuous. Biome anchors establish predictable forest, desert and cavern regions near the start; farther regions reuse the same systems. The renderer streams a neighborhood of 64-metre chunks and removes distant terrain. Scenery shares cached geometries/materials and uses instanced rendering, while interactive specimens remain individual groups. Groundcover forms colonies, tree sizes vary and each local habitat selects its own weighted vegetation. Detailed groundcover and animals have nearer rendering limits than taller silhouettes. See [BIODIVERSITY.md](BIODIVERSITY.md) for habitat and wildlife counts.

“Expanding world” means new combinations of existing forms and authored records. It does not mean infinite unique species, narratives, underground tunnel topology or live AI creation. Caverns are roofed terrain regions. Collision is a lightweight horizontal approximation rather than a complete physics simulation. Very distant coordinates and very long saves have practical precision, validation and browser-storage limits.

## Save handling

The primary local key is `vesper-expedition-v1`; a previously validated save is retained as `vesper-expedition-v1-backup`. If the primary record is damaged, load attempts the backup. JSON exports include backpack contents, collected/repaired field IDs, an active beacon, language and control preferences, seed, position/orientation, settings, elapsed time, scan/discovery records, completed investigations, visited regions and XP. They do not store generated meshes: these regenerate from the seed. The separate `vesper-language` key remembers title-screen language before an expedition starts; storage denial leaves language switching usable for the current session.

The parser accepts version 1 only, checks known specimen IDs and field ranges, requires matching discovery/scan counts and investigation clues, and rejects unsafe structures. Import is limited to 8 MB. Record counts are capped, so a save is not an unlimited archive. Export is the practical transfer/backup mechanism; future format or generation changes would need an explicit migration plan. Release 1.3.0 preserves the original 21 species IDs, original specimen and clue coordinates, biome generation and save keys. Water basins reshape local terrain. The dry landing route and investigation clearings are protected. New discoveries use separate `biodiversity:` and `waterlife:` namespaces. Existing saves gain access to the expanded 60-entry catalog; generated scenery changes around the preserved original subjects. A restored player is nudged to nearby clear ground if new scenery blocks the saved location. Browser storage can be denied or cleared. Use the same origin for the release, and export before resets or distribution changes.

## Rebuild and verify

Install the locked dependencies once, then rebuild:

```sh
npm ci
npm run build
```

Relevant checks are:

```sh
npm run check
npm test
npm run test:browser
node tools/verify-mobile.mjs
node tools/verify-server.mjs
node --import tsx tools/export-models.ts
# With the local Vite development server running on port 4173:
node tools/render-catalog.mjs http://127.0.0.1:4173
node --import tsx tools/verify-assets.mjs
node --check tools/serve.mjs
bash -n "Launch Vesper.command" "Launch Development.command" "Launch Mobile Preview.command"
```

Browser tests require the Playwright browser installation. Keep the actual test output with the release when making verification claims; a command's presence is not evidence that it passed. The GLB exporter verifies every saved binary header and parses each asset back through `GLTFLoader`, comparing rendered primitive/triangle counts and bounds. Material-group meshes may split into several mesh nodes during glTF import, so raw JavaScript mesh counts are recorded but are not required to match. See [MODELS.md](MODELS.md) for transform/caching details. After changing model source, regenerate GLBs and atlas portraits, then rebuild to refresh the copied `dist/models` and `dist/specimens` files. The portrait renderer needs the local Vite server and Playwright browser; it renders the project’s actual geometry and does not use external imagery.

Before sharing, check a clean release start, first scan, three-clue unlock, map/journal, recall, photo download, autosave/resume and JSON export/import. Retain the original license notices. The public game and deployment workflow are documented in [HOSTING.md](HOSTING.md).

## Troubleshooting

| Symptom | Action |
|---|---|
| Launcher cannot find Node | Install Node 22.12+ or run the command manually from a terminal where Node is available |
| Build missing | Run `npm ci` and `npm run build` from the project folder |
| Port already used | Stop the earlier Vesper terminal, or select another PORT and use export/import to transfer the save |
| Blank screen or 3D warning | Enable hardware acceleration; use a current desktop browser; inspect its console if needed |
| Mouse does not lock | Click the world again; use click-drag or arrow-key look as fallback |
| Low frame rate | Pause, open Instruments, choose Low quality; close other GPU-heavy tabs |
| Silent audio | Begin/resume with a click and raise Master volume; check browser/system output |
| Progress seems missing | Check browser/profile and exact hostname/port; import your exported JSON if moving origins |
| Browser save denied/full | Continue playing and export manually; persistence requires available browser storage |
| A specimen will not activate | Check scanner range and hold E; landmarks require their three local clues first |
