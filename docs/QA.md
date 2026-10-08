# Vesper 1.4.1 — release verification

The mobile interface update was checked on 8 October 2026. The browser integration suite passed all 18 tests, including trusted simultaneous touch input and top-menu activation. The compiled mobile suite passed 76 bilingual layout checks and eight photo downloads in Chromium and WebKit. TypeScript and the production build passed. The updated public site also passed six anonymous desktop/phone cases; see [mobile-public-browser-tests.log](mobile-public-browser-tests.log) and [hosting-public-check.json](hosting-public-check.json).

The focused HUD report covers **864 layout cases** and four real discovery/Atlas cases. The data in [mobile-hud-check.json](mobile-hud-check.json) covers phone sizes from 320 × 568 to 844 × 390, both languages, joystick sides, control scales and combinations of scan, supply, discovery and error feedback. It uses real first discovery/Atlas interactions plus frozen copies of the real UI for deterministic layout measurements. The aiming area and thumb controls remain clear; visible action targets remain at least 44 × 44 CSS pixels. Recorded-state feedback yields to the new discovery banner, and an older banner yields to a new interaction’s requirements.

The original model, save-format, server and desktop performance results below were recorded for version 1.4.0 on 3 October 2026; those systems and assets are unchanged. Physical iPhone and Android devices have not yet been tested.

| Check | Result |
|---|---|
| TypeScript and production build | Passed |
| System tests | **97 passed**, zero failures; [raw TAP output](system-tests.log) |
| Browser integration | **18 passed** in one final suite: controls, exploration, field kit, scanner requirements and bilingual play; [combined output](browser-tests.log) |
| Compiled desktop release | Passed first scan, atlas, export/import, resume, English/Chinese round-trip, five Chinese copy audits and 12 habitat/water viewpoints through visible controls |
| Compiled mobile release | **76 layout checks passed** across WebKit 26.6 and Chromium 153, in portrait and landscape; [full report](mobile-check.json) |
| Mobile photographs | Eight native PNG downloads passed; valid PNG headers and unobstructed button centres |
| Offline runtime | Zero external requests, failed requests or browser errors in compiled desktop and mobile checks |
| Developer API | Absent from production |
| Original 3D exports | **74 GLBs**; prior GLTFLoader round-trips retained; unchanged source hashes and binary integrity reverified |
| Atlas portraits | **60** transparent 384 × 384 PNGs; decoded pixels, PNG CRCs and source hashes verified |
| Compiled asset copies | All **137** model/portrait files and manifests match public source bytes |
| Formatting | Passed |
| Local server | Prior **28 checks passed**, covering the unchanged localhost/LAN server; [raw results](server-check.json) |
| Mac launchers | All three pass shell syntax checks |
| Public GitHub Pages site | **Six anonymous desktop/phone cases passed** across Chromium and WebKit; [public-site report](hosting-public-check.json) |

## Behavior exercised

The exploration browser suite covers movement, jumping, held scanning, duplicate rewards, three-clue investigations, research levels, atlas/map navigation, waypoints, three biomes, bounded streaming, moving wildlife, swimming, bird/fish observations, autosave/resume, validated JSON transfer, invalid saves, reset confirmation, settings, reduced motion, photography, smaller desktop layout and storage denial.

Field-kit tests use real F interactions and backpack buttons to collect all three materials, reject duplicate collection, craft/use a pulse cell, discard surplus supplies, repair a probe for 55 XP once, reveal a cache and craft/deploy/return/pack a survey beacon. Reload and export/import preserve inventory, collected nodes, repaired probes and an active beacon. System tests also check atomic crafting/harvesting, full-bag recovery, deterministic placement, save migration, field-model geometry and bounds.

Controls tests cover free-cursor click-to-walk, obstacle stopping, manual movement cancellation, right-drag/arrow look and persisted settings. Phone-sized tests use trusted simultaneous joystick/look and Scan/Bag touches, verify cancellation when menus open, and exercise the guard against a handled Pause touch clicking through into its new overlay. Explicit Auto/Desktop/Touch modes and automatic lighter rendering are checked.

The browser suites use development-only helpers to position and aim the explorer, while retaining actual rendering, input and mutation paths. The compiled-release runs use visible controls and validated save import without a developer helper. The final compiled mobile checks cover both languages in both engines. The desktop release also audits visible Chinese copy in the atlas, backpack, map, guide and settings, while retaining literal key names, brand names and XP units.

## Discovery clarity and bilingual checks

Seven focused scanner system tests cover visible tall-model selection, aligned range/occlusion feedback, foreground selection independent of array order and dependency gating. Three browser checks use real E/F/Q input to exercise locked landmarks, three distinct clues, successful unlocks, repeat observations, range/held-scan requirements, supply reach, repair materials and pulse recharge notices.

Three bilingual browser tests verify reversible title/guide copy without changing a seed, real discovery/collection followed by Chinese atlas/bag/map/settings, preserved XP/inventory through language changes, and reload/export/import. Chinese overlays also fit 390-pixel and 360-pixel portrait and 844-pixel landscape screens. Four content coverage tests verify all sixty species and procedural content translations while preserving source-world identities; language tests validate legacy saves, identifiers, quantities and denied browser storage.

Two initial failures were test-selector ambiguities: language selectors also matched language-tagged containers, and a pause selector also matched the app container. They were scoped to the intended buttons/sections. The final complete 18-test run passed. A compiled copy audit preserves literal keyboard key names such as Home instead of treating them as untranslated prose.

## Mobile verification

WebKit **26.6** simulated iPhone Chrome rendering at **390 × 844** and **844 × 390**. Chromium **153.0.8010.12** simulated Android/Pixel 7 at **393 × 851** and **851 × 393**. Each engine passed 19 layout checks per language (38 per engine, 76 total), including gameplay, backpack, map, pause, atlas, guide, settings, photography and new-expedition confirmation. Native touch taps exercise menu navigation, minimap off/on, Desktop-to-Auto overrides, confirmation cancellation and save resume. Action targets meet 44 × 44 CSS pixels, and panels remain within the viewport without horizontal overflow.

Eight native photo downloads passed, in both orientations, languages and engines. Centre hit-testing confirms Save and Return remain accessible above the joystick. The mobile release tool uses simulated pointer holds for Scan; the separate Chromium browser suite covers trusted multi-touch input. Reports distinguish these input methods rather than treating them as identical.

These are browser emulations on a Mac. They do not validate actual iPhone Chrome browser chrome, safe-area insets, thermal limits, Android hardware or sustained phone performance. Physical-device testing remains necessary. Balanced automatically lowers touch rendering to 25 chunks with no shadows; Low and High remain selectable. The LAN preview serves the compiled game on the same local network; physical phone reachability has not been tested.

## Public hosting verification

The published [GitHub Pages game](https://armmanas7.github.io/AI-Game-Omni/) passed six fresh-browser cases without signing in: Chromium desktop in English and Chinese, plus Chromium and WebKit phone emulations in portrait English and landscape Chinese. Each case checked automatic desktop/touch controls, a first discovery, saved progress and a loaded atlas portrait. No page errors, failed asset responses or assets outside the published project path were reported. The recorded results are in [hosting-public-check.json](hosting-public-check.json); the local subdirectory results are in [hosting-local-check.json](hosting-local-check.json).

These are hosting smoke checks, separate from the earlier full release suites. Phone scans used simulated pointer holds; physical phones have not yet been tested.

## Local desktop performance sample

Chromium **153.0.8010.12**, Metal rendering, **1440 × 900**, Balanced quality. Each location settled before sampling 120 animation frames:

| Habitat / water body | Mean frame rate | 95th-percentile frame duration |
|---|---:|---:|
| Starpetal Meadows | 60 FPS | 16.7 ms |
| The Fernwood | 60 FPS | 16.7 ms |
| Veilwillow Grove | 60 FPS | 16.8 ms |
| Sporelight Wetlands | 60 FPS | 16.7 ms |
| Sunwell Oasis | 60 FPS | 16.8 ms |
| The Cactus Garden | 60 FPS | 16.7 ms |
| Ochre Badlands | 60 FPS | 16.8 ms |
| Prism Gardens | 60 FPS | 16.7 ms |
| The Fungal Hollow | 60 FPS | 16.7 ms |
| Echo Vaults | 60 FPS | 16.8 ms |
| Firstlight Lake · Swimming | 60 FPS | 16.7 ms |
| The Willowrun · Swimming | 60 FPS | 16.7 ms |

These short settled samples describe this Mac and browser. They do not benchmark every streaming transition or predict other hardware. Raw results are in [release-check.json](release-check.json).

## Compatibility and limits

Save format/version 1 and existing keys remain in use. Older expeditions migrate with an empty field kit and default new control preferences. Missing language values default to English; unsupported values are rejected. A title-screen language preference persists separately, and exports include the expedition language. Original species, specimen IDs, clue anchors and biome generation remain stable; past discoveries and observation coordinates remain historical records. Phone saves belong to their browser and address; Export/Import transfers progress between devices.

The prior v1.2 generator audit checked 5,000 seeds with no generation exception or broken partial river; two safely omitted obstructed rivers while preserving other water features. That audit remains applicable to the unchanged watershed and is not a new v1.4 sweep. Independent reviews and resolved integration findings are recorded in [QUALITY_REVIEW.md](QUALITY_REVIEW.md).

The catalogue is finite at 60 authored records. Terrain and seeded encounters continue procedurally. Water, cave roofs and collision use lightweight approximations. Click-to-walk stops at obstacles rather than finding a path around them. Multiplayer, cloud sync and runtime AI integration are not included. Desktop Safari and Firefox were not validated; the WebKit checks described above cover simulated mobile rendering.

Vite reports a bundle-size advisory for the **852.89 KB** uncompressed JavaScript bundle (**247.33 KB gzip**), primarily Three.js and the game; the build passes. Required scripts, styles, fonts and portraits are local. Asset details are in [asset-check.json](asset-check.json).

## Reproduce

```sh
npm ci
npm run check
npm test
npm run models:export
npx playwright install chromium webkit
npm run dev -- --port 4173
```

With Vite running, use a separate terminal:

```sh
npm run test:browser
npm run build
npm run format:check
node --import tsx tools/verify-assets.mjs
node tools/verify-server.mjs
```

Run `npm start` in another terminal, then execute compiled checks sequentially:

```sh
node tools/verify-release.mjs
node tools/verify-mobile.mjs
```

Use `npm run specimens:render` only when rebuilding the atlas portraits after model changes. The release includes the verified portraits. GPU-intensive browser checks should run sequentially so they do not distort one another's performance samples. Public-site checks are reproduced with `node tools/verify-hosting.mjs`; see [HOSTING.md](HOSTING.md) for the URL and report environment variables.
