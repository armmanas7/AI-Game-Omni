# Vesper — An Atlas of Elsewhere

**Release 1.4.1 — compact mobile instruments and English / 简体中文 play.**

[**Play in your browser — desktop and mobile**](https://armmanas7.github.io/AI-Game-Omni/)

[Download the mobile sharing QR code](screenshots/vesper-play-qr.png).

No account or installation needed. English and 简体中文 are available. Touch controls adapt automatically on phones; landscape orientation is recommended. Progress is saved in the browser on each device.

[简体中文说明](README.zh-CN.md)

[Download the ready-to-play release](https://github.com/armmanas7/AI-Game-Omni/releases/tag/v1.4.1). It includes the compiled game, editable source, models and Mac launchers.

A quiet first-person expedition across a stylized alien planet. Catalogue living specimens and minerals, follow clues, and uncover the ecological stories connecting a forest, ochre desert and luminous crystal caverns.

Vesper is an original TypeScript/Three.js project, built with AI assistance. Gameplay runs locally: no AI account, model API key, cloud backend or internet connection is required once the release has been built.

## Play on Mac

1. Keep this project folder together and double-click **Launch Vesper.command**.
2. The launcher opens `http://127.0.0.1:4174/` after the local server is ready.
3. Choose **Begin expedition** or **Continue expedition**. Click the world to look around.
4. Keep the terminal window open. Press **Control+C** there when finished.

Node.js is needed to run the local server; Node 22.12 or newer is recommended. The launcher checks the usual Homebrew, nvm and Volta locations. It does not download or install anything. If macOS asks how to open a `.command` file, choose Terminal. The manual equivalent, from this folder, is:

```sh
npm start
```

Open the printed URL in a current desktop browser with hardware acceleration enabled. Chrome or Edge is a practical starting point. Desktop keyboard/mouse and adaptive phone/tablet touch controls are available. Opening `dist/index.html` directly as a file is not supported.

## Controls

| Action | Control |
|---|---|
| Walk | W / A / S / D |
| Look | Mouse; arrow keys also work |
| Sprint / jump | Shift / Space |
| Scan or examine | Aim at a specimen and hold E |
| Collect supplies / repair a probe | F |
| Backpack / crafting | B |
| Survey pulse | Q |
| Field atlas / survey map | J / M |
| Pause or resume / release cursor | Esc |
| Recall to landing site | R |
| Enter or leave photo mode | P |
| Download landscape PNG in photo mode | O |

If pointer lock is unavailable, hold the left mouse button and drag to look, or use the arrow keys. On the map, click to place a waypoint; when the map canvas is focused, arrows move the waypoint and Home marks your position. Pause menus provide settings, help, save export/import and a new-expedition confirmation.

## Discoveries and requirements

Aim at a catalogue specimen and **hold E for about one second**, keeping it centred until the progress bar fills. Landmarks take slightly longer. Tapping E starts a scan but does not finish it. The target card now explains when you need to move closer, clear an obstacle, finish three clues or find a different specimen because this individual is already recorded. A tall specimen can also be selected by aiming at its visible canopy or body.

Some trees, rocks and plants are scenery. Q highlights nearby unrecorded specimens and investigation clues; it does not make every decorative object scannable. Supply caches, resin/crystal deposits and damaged survey probes use **F**, within 5 metres with a clear view. For a landmark, record its **three distinct surrounding clues** first, then return and hold E on the landmark. Repeating the same clue does not satisfy the dependency.

## Choose a language

Select **English** or **简体中文** on the title screen, or change Language in the Instruments/Settings menu during an expedition. The interface, field guide, discovery descriptions, ecological insights, crafting requirements and touch controls follow the selection. The choice persists, and save export/import retains it. Language changes preserve research and inventory. World seeds, internal IDs and controls remain stable across languages.

## Field supplies and crafting

Find supply caches, amber resin deposits and conductive crystals. Approach within 5 metres, face the object and press F (or tap Use). Open B to inspect your supplies and craft tools. Each material deposit yields three units; the bag holds 60 total units. Collected nodes stay collected in that expedition. Use Discard 1 on a surplus item to free backpack space.

| Action | Supplies | Result |
|---|---|---|
| Craft pulse cell | 2 crystal + 1 resin | Consume from your bag to trigger a survey pulse immediately |
| Craft survey beacon | 2 alloy + 1 crystal + 1 resin | Deploy on clear dry ground; return from the bag |
| Repair a survey probe | 2 alloy + 1 crystal | 55 research XP once; locate a supply cache |

Only one beacon can be active. Return within 5 metres to pack it and reuse it elsewhere. Use the minimap or full map to find nearby resources; the compass guides you to a waypoint. Mouse travel stops at obstacles; choose a closer point around them or move manually.

## Play on a phone or tablet

Use the same game in a mobile browser; no device-selection screen is required. Controls appear automatically on touch devices. Use the joystick to move and swipe the world with another finger to look. Five lower buttons provide Scan, Use, Jump, Pulse and Run; Bag, Map and Pause sit in the top navigation. Discovery notifications are compact, with full details available through Open record.

For direct play, open the [public game](https://armmanas7.github.io/AI-Game-Omni/) on your phone. For a local-network preview:

1. Connect your computer and phone to the same Wi-Fi.
2. Double-click **Launch Mobile Preview.command**, or run `npm run start:mobile`.
3. Open the printed phone address in Chrome. Keep the computer and terminal running.

The phone launcher uses port 4175 and exposes only the compiled game folder on your local network. The desktop launcher remains on localhost port 4174. Phone saves belong to that browser and address; use Export/Import to transfer an expedition. The public game is hosted on GitHub Pages; saves do not synchronize automatically.

In Settings → Controls, override Auto with Desktop or Touch if needed. Choose keyboard or click-to-walk for desktop movement, then your preferred look method. Touch size, joystick side and swipe sensitivity are adjustable. Balanced automatically uses a lighter 25-chunk render on touch devices; desktop Balanced uses 49. Physical iPhone/Android performance has not yet been tested; see [QA.md](docs/QA.md) for checks completed.

## What is included

- A seeded landscape that expands in 64-metre chunks, with forest, desert and cavern regions.
- **10 habitat types** across the three biomes: meadows, fernwood, willow groves, wetlands, oases, cactus gardens, badlands, crystal gardens, fungal hollows and echo vaults.
- A finite catalogue of **60 discoveries**: 32 forest, 16 desert and 12 cavern records, including the three original rare findings.
- Ten tree silhouettes, six new flower families, varied groundcover and fungi, and **17 fauna records** represented by the original moth model and **15 newer articulated animal models**. Wildlife wanders, forages and watches a nearby explorer.
- Firstlight Lake, a connected meandering river, and regional oasis/pool basins, with shaped banks, reeds, visible swimming fish and three bird forms. Walk into shallow water to wade or deeper water to swim; M offers a nearby-lake waypoint.
- **60 field-atlas PNG portraits**, rendered from the actual original 3D models.
- Investigation sites: scan three nearby clues, then examine their landmark.
- Eight research levels; observations, completed investigations and first visits to desert/cavern biomes earn XP. Levels extend scanner range and shorten the survey pulse cooldown.
- A field atlas, survey map, waypoints, objectives, landing-site recall and clean landscape photographs.
- Original modeled scenery and equipment, procedural ambient sound and instrument tones.
- A live minimap, harvestable alloy/resin/crystal supplies, a 60-slot backpack, two crafting recipes, repairable survey probes and a reusable return beacon.
- Automatic touch controls; configurable keyboard or mouse click-to-walk, pointer lock/drag/arrow look, joystick side/scale, touch sensitivity, minimap orientation, quality, audio and reduced motion.
- Local autosave, a validated backup, and JSON save export/import.
- **74 reusable GLB assets** in [public/models](public/models/README.md), covering 67 world model families, the scanner, landing pod and five field supply/tool forms, with bounds and provenance in their manifest.

The landscape keeps generating, while the discovery catalogue and investigation patterns are finite. This is an exploration game with no combat, survival economy, multiplayer or live-generated AI dialogue.

## Saves and offline use

Progress saves after discoveries, approximately every ten seconds of active play, when pausing, and when the page closes. Browser storage belongs to its **origin**: browser/profile, hostname and port matter. Keep using `127.0.0.1:4174` for the release. Changing to `localhost`, a different port, the development server or another browser creates a separate save location.

Export an expedition JSON from the pause menu before moving the game, clearing browser data or starting a new expedition. Import restores the exported state and replaces the currently loaded expedition. Imports are validated; they must use the Vesper version-1 save format and remain under 8 MB. Release 1.3.0 retains original species and specimen/clue IDs, biome generation and save format. Local terrain is reshaped around new lakes and rivers; the landing route and investigation clearings remain dry. Existing expeditions can continue with the larger catalog, an empty backpack and default values for new control preferences. Backpack contents, harvested supplies, repaired probes and an active beacon are saved with your expedition. If new scenery blocks a restored position, the player is nudged to nearby clear ground. Private browsing, disabled/full storage or cleared site data can prevent persistent saving. There is no cloud sync.

The compiled build includes its scripts, styles and fonts. Models and audio are generated locally at runtime; the atlas portraits are bundled local PNGs. The local server remains necessary while playing, but internet access is not. Rebuilding or installing dependencies may require internet access.

## Development

Use Node 22.12+ and npm. Install from the lockfile and launch:

```sh
npm ci
npm run dev
```

**Launch Development.command** opens the development server on port 5173 when dependencies are already installed. Build a new release with `npm run build`. See [DEVELOPMENT.md](docs/DEVELOPMENT.md) for the code structure, verification commands, troubleshooting and release instructions, and [BIODIVERSITY.md](docs/BIODIVERSITY.md) for the habitat and wildlife guide.

The original project code, models and procedural audio are MIT licensed. Three.js and Phosphor Icons retain their MIT notices; Manrope and Space Grotesk retain SIL Open Font License notices. Complete notices are in [LICENSE](LICENSE). Actual release checks and their limits are recorded in [QA.md](docs/QA.md).
