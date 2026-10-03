# Independent integration review

## v1.0 historical review

The review below describes the original v1.0 release. Its model-export counts and validation scope are historical; the v1.1 review follows separately.

Reviewed the menu/input, save/import/reset, world collision/scanning, audio and interface paths in `src/main.ts`, `src/player.ts`, `src/world.ts`, `src/audio.ts` and `src/ui.ts`. This was a source audit with focused CPU reproductions, not an additional full browser test run. Final browser results and release metrics belong in `QA.md`.

### Findings resolved and independently rechecked

| Finding | Correction | Independent validation |
|---|---|---|
| Footstep timing survived a new expedition | **Resolved.** `Soundscape.step()` resets its previous-step timestamp when expedition time moves backwards. | Fresh source inspection and the fake-audio-context reproduction now produce a sound at both 100 seconds and the new expedition's 1-second mark. A call at 1.1 seconds remains suppressed by the normal cooldown; 1.5 seconds produces the next sound. All assertions passed. |
| Failed persistence received a misleading message | **Resolved.** The active expedition's menu now displays “Could not save on this device — export a backup” when `snapshot.saved` is false. The runtime also raises an explicit storage-failure toast once per failure streak; a successful save re-enables future warnings. | Fresh inspection confirmed the false-save branch in `updateInstruments()`, its matching overlay status, the neutral pre-expedition message, and the `saveNow()` failure/notification reset branches. This validation was source-based; it does not claim an additional browser storage-failure run. |

No unresolved finding remains from this independent audit.

### Checks with no additional blocker found

- Dynamic save/seed text reaches `textContent`; journal HTML escapes interpolated strings. Save validation rebuilds record dictionaries and rejects invalid coordinates before replacing state.
- Menu Escape handling runs in capture phase and stops propagation before returning to play. Pause clears held movement/scan input; pointer-lock rejection retains drag and arrow-key look. New/imported expeditions now clear transient scan, waypoint and cooldown state.
- Scanner targets now follow the rendered object's height, including hovering fauna. Landmark activation still requires all three distinct saved clues. Shared model resources survive chunk removal; chunk-owned terrain resources are disposed.
- The live game uses the cached code-authored model library. The 27 GLB files are reusable exports rather than runtime downloads. Independent header/content/checksum inspection matched every manifest entry, found valid GLB 2.0 mesh content, and found no external buffers, images or required extensions.
- No additional player-controller test was added: the reviewed code and existing browser jump/movement coverage did not reveal a new major controller risk requiring one.

## v1.1 biodiversity integration review

Reviewed the expanded world, wildlife, scanner and interface paths in `src/world.ts`, `src/wildlife.ts`, `src/main.ts` and `src/ui.ts`, with targeted inspection of generation and save validation. This review used source inspection and focused CPU reproductions. It did not repeat the full browser suite or independently measure GPU frame rate. Browser, distribution and release results remain documented in `QA.md`.

### Finding resolved and independently rechecked

| Finding | Correction | Independent validation |
|---|---|---|
| Completed landmarks kept rotating and hovering with reduced motion enabled | **Resolved.** Completed landmarks now retain their original heading and a constant elevation. Flora returns to its resting tilt; signal markers stop bobbing. The title camera uses a fixed orbit parameter and cloud drift stops. | A fresh CPU reproduction found identical landmark rotation and height at expedition times 4 and 6 seconds with reduced motion enabled. The focused `completed landmarks stay static when reduced motion is enabled` regression also passed independently. Fresh source inspection confirmed the flora, marker, title-camera and atmospheric-uniform branches. |

### Focused checks performed

- **Pause and wildlife:** A real `PlanetWorld` was streamed to 49 chunks. All 66 loaded fauna retained identical root positions, root rotations and child-joint rotations across eight updates with `dt = 0` and a fixed expedition time. This checks the paused update path rather than browser focus handling.
- **Pause and atmosphere:** Fresh source inspection confirmed the atmospheric shader uses expedition time during active play, which stops advancing while paused. Reduced motion supplies a constant zero time to the shader, stopping its procedural cloud drift.
- **Moving scanner targets:** After displacing a rendered grazer, `getEntityPosition()` returned its current object X/Z coordinates. Source inspection confirmed both targeting and target-distance text use the current rendered animal position, and a focused animal stops wandering while it is observed. Target selection precedes animation by one frame; focus and proximity keep observations stable.
- **Observation persistence:** A grazer observation recorded at its displaced coordinates survived strict export/`parseSave()` round-trip with the same first-observed location. Entity anchors and stable IDs remain separate from the current wildlife position, preserving duplicate-scan behavior.
- **Legacy generation:** The focused `v1 original specimen and clue generation remains exactly compatible` test passed independently. It checks six recorded v1.0 specimen fixtures and a clue selection fixture. Source inspection confirmed original generation still uses `LEGACY_SPECIES` and its original random stream; added specimens use a separate `biodiversity:` ID namespace and random stream.
- **Saved-position clearance:** The loaded-world helper moved the blocked landing-pod position `(-8, 5)` to the nearby clear point `(-5, 5)`. Source inspection confirmed start/import wait until scenery and colliders settle before applying this helper, then save the adjusted position. This CPU check validates the helper; the browser import flow is covered by the separate browser suite.
- **Prop batching and culling:** Fresh source inspection confirmed scenery is grouped by shared geometry/material identity into `InstancedMesh` batches. Detailed groundcover uses shorter distance limits than tall silhouettes. Rebuilds release instance resources; chunk removal releases chunk-owned terrain, roof and water geometry without disposing shared model resources. This audit did not independently profile GPU allocation or draw-call totals.
- **Interface data:** Habitat labels and map colors use the same `getHabitat()` data as the world. Catalogue totals derive from `SPECIES.length`. Saved and generated text remains escaped or assigned through `textContent`; portraits use known species IDs. New-game confirmation, pause/input clearing and strict save validation remain present.

### Practical limitations

- Fallen logs currently use a circular collision approximation around their center. Their visible length extends beyond that circle, so the ends can overlap the player. This is a physical approximation, not a save or progression blocker.
- Reduced motion quiets wildlife, camera bob, title orbit, flora, landmark motion, signal-marker bob, procedural cloud drift and interface transitions. The user-triggered survey pulse still expands as a functional scanning effect.

No unresolved progression, pause, moving-target or save-restoration blocker was found in this review. The limitations above are retained explicitly rather than claiming exact physical collision or an entirely static scene.

## Water extension independent review

Reviewed the actual water renderer, current watershed and animated fish in a disposable browser scene using the production modules. `tools/review-water.mjs` reproduces this review without changing gameplay or saved expeditions. It creates the same 64 m, 24-segment terrain meshes as the game, five water surfaces, the actual atmosphere and six fish using all three fish models. It deliberately omits vegetation and the interface to expose the banks. The generated screenshots and JSON report were inspected.

- **Banks and chunk seams:** All three focused water-surface tests passed against the current watershed. Clipped shore vertices and surface elevations match across chunk edges. Across 3,727 wet home-lake probes, none were covered by the rendered terrain's triangle interpolation; this included 2,916 probes deeper than 0.5 m. The worst shallow probe still had 6.3 mm of surface clearance. Overview and ground-level screenshots showed continuous, softly clipped banks without square gaps.
- **Fish visibility and surface appearance:** The surface uses a cooler blue depth gradient, restrained crest bands, 0.54 base opacity and no depth writes. Close screenshots showed distinct ribbon-fish, glass-koi and lantern-eel silhouettes through the water. This is stylized translucent water; the renderer does not claim physically accurate reflections or underwater optics.
- **Shared resources and motion:** All five surfaces used the same material. Pausing the scene left the water shader clock and all six fish positions unchanged. Reduced motion supplied a shader clock of zero. Chunk geometry is owned individually; the cached material remains shared.
- **Generation cost:** On this machine, the optimized watershed produced tested wet chunk meshes in 5.4–6.6 ms with 320–637 triangles and a dry chunk in approximately 0.5 ms. Ten thousand near-lake queries took approximately 32 ms for `waterAt()` and 16 ms for carved ground height. These are local CPU observations rather than platform-independent budgets.
- **Browser result:** No console or shader error occurred. The isolated scene reported 67 draw calls, 31,892 triangles and a mean frame interval of 16.4 ms. This deliberately small scene does not measure full-game frame rate; full-game browser checks remain separate in `QA.md`.

No additional water rendering blocker was found. These results cover the home-lake scene, focused geometry seams and rendering behavior; they do not imply that every generated shoreline was visually inspected.

## v1.2 water, wildlife and save integration review

Reviewed the current `src/world.ts`, `src/main.ts`, `src/player.ts`, `src/wildlife.ts`, watershed and save parser. This review combined fresh source inspection with a disposable CPU reproduction using the production `PlanetWorld`, `Explorer` and `ExpeditionState`; it did not repeat the full browser suite or measure full-game GPU performance. Browser results remain separate in `QA.md`.

### Finding resolved and independently rechecked

| Finding | Correction | Independent validation |
|---|---|---|
| Some custom seeds could fail during river planning, preventing the world from loading | **Resolved.** The planner retries from positions inside the lake with wider clearance searches, checks the interpolated curve against protected areas, and caches a safe river omission when every bounded route is blocked. The home lake and regional pools remain available. | The previously failing `aquatic-audit-17` seed now regenerates a continuously wet river. A sweep of 5,000 `aquatic-audit-` seeds found no exception, no partial river and no dry home lake; two seeds safely omitted their obstructed river. The protected-corridor bend in seed `aquatic-audit-4223` remained connected after correction. The VESPER-01 river fixture at X = 145 retained Z = 48.28125. All 19 focused watershed/world-generation checks and TypeScript checking passed in this review. |

### Focused checks performed

- **Original subjects and dry banks:** A balanced-quality world was streamed to 49 chunks around the lake and river. All 188 loaded grounded research specimens rendered on dry ground. Three original subjects moved to banks by approximately 2–5 m; their original entity data, IDs and anchors still matched the preserved legacy generator exactly. Scanner positions followed the rendered models. Decorative scenery avoids the rescued positions, and collision checks use the actual model coordinates.
- **Observation and save continuity:** One rescued original subject and all six home fish were recorded at their rendered coordinates. Seven distinct scans survived strict export/`parseSave()` import with the same observation positions and matching first-discovery records. Scanning each original anchor identity again remained a duplicate. A separate legacy-coordinate save reproduction also imported successfully: observing that subject at its new bank remained a duplicate, and its original first-observed coordinates stayed intact. Fresh source inspection confirmed the save format and `vesper-expedition-v1` storage keys remain unchanged; ordinary original anchors and clue identities still use the preserved generation stream. Earlier saved first-observation coordinates remain historical records rather than being rewritten to a new bank position.
- **Fish targeting and visibility:** All six home fish had unobstructed production `canObserve()` sightlines from nearby swimming viewpoints, at approximately 2.3–2.5 m. Three of the six were also within the initial 13 m scanner range from sampled dry-bank viewpoints. The other fish remained visible from banks but required entering the lake or increasing scanner range. Target selection, distance text and observation records use current object coordinates; focused fish hold their position during an observation.
- **Pause and reduced motion:** All 20 visible fauna retained identical positions, root rotations and child poses across eight paused updates with a fixed expedition clock. The shared water-material clock also stayed unchanged. After enabling reduced motion, the same visible fauna remained static across subsequent advancing-clock updates, and water shader time remained zero. Fresh inspection confirmed the active-frame loop stops expedition time and passes `dt = 0` while paused.
- **Actual lake movement:** The production controller was placed in Firstlight Lake with the same carved-height and water callbacks used by the game. After updates with sprint and jump input, swimming remained active, sprinting stayed off, and the camera settled 0.85 m above the actual surface. Deep-water jumps remained suppressed. Fresh inspection confirmed import/start uses this surface-aware player height, so an old saved position inside a new lake begins above the water rather than under the bed.
- **Aquatic boundaries and flying wildlife:** Source inspection confirmed fish fit their measured mesh bounds between the sampled bed and surface, sample their full footprint, and reject movement across dry banks, shallow shelves or another water-body identity. Impossible aquatic placements hide safely instead of using a terrestrial fallback. Birds and legacy moths use the water surface as their flight floor. These source checks supplement the wildlife regressions; they are not a new exhaustive visual audit of every animal placement.
- **Shared field and resources:** Terrain carving, water meshes, player immersion, shoreline rescue and wildlife all consume the same deterministic watershed. Water chunks dispose their geometry while retaining the shared material. Investigation areas and the introductory walking route remain protected, including the bank transition; their original clues and terrain remain dry.

### Practical limitations

- Rare enclosed outlet layouts may omit the home river. In the 5,000-seed sample this affected two seeds; it is a deliberate safe fallback, not an assertion that every possible seed has a river. `riverCentreAt()` remains a finite coordinate helper in that case; consumers must use `waterAt()` to establish that water exists.
- The initial scanner range does not reach every home fish from dry land. Wading/swimming and later scanner upgrades provide access; this review does not claim all six can be recorded from one shore position.
- The catalogue contains 60 authored discoveries. Terrain and seeded placements continue as exploration proceeds; the catalogue itself is finite.

No unresolved world-loading, aquatic-observation, pause, reduced-motion or save-continuity blocker was found in this review. The CPU checks verify integration behavior; browser gameplay and compiled-release checks are recorded separately in `QA.md`.

## v1.3 inventory, navigation and input integration review

Source review of the integrated field-kit and control loop found and corrected four field interactions: an occluded supply could be used through scenery; packing a beacon left its removed waypoint; distant beacon returns needed a clearance check after destination chunks streamed; and a beacon footprint could straddle water even when its centre was dry. The integrated code now verifies observation sightlines, clears a matching removed waypoint, defers the final clearance check until streaming settles and checks the beacon footprint before consuming the item.

The control review aligned explicit drag settings with right-button input and made swipe sensitivity independent of the mouse slider. A trusted multi-touch browser test then exposed reliance on synthesized clicks for the second finger: a Bag tap while holding Scan did not open the bag. Touch action buttons now use direct pointer lifecycles. A document capture guard prevents a handled Pause touch from clicking a different button in the newly opened overlay. The test also corrected which finger its CDP partial-release call named. The final three control tests pass, including trusted simultaneous joystick/look, holding Scan while opening Bag, and native Pause → Settings without an accidental confirmation dialog. Separate lifecycle checks preserve genuine fresh taps and keyboard activation.

The backpack review also identified a potential dead end if one material occupied all 60 units without ingredients for a recipe. A standard Discard 1 action now frees capacity; a full-bag recovery unit and a real bag-button integration test pass. Inventory mutations remain atomic and do not partially harvest deposits.

Mobile engine checks also found landscape controls whose touch targets fell below 44 px and a photo toolbar overlapped by the joystick. The interface now applies minimum target sizes at all touch viewport widths; the photo toolbar now sits in the top safe area. Final compiled checks passed 38 layouts across both engines, with four native PNG photo downloads and reachable Save/Return button centres. Layout checks use both WebKit and Chromium rather than relying on a narrow desktop window. Final compiled results and limitations are in QA.md.

## v1.4 scanner and localization review

The scanner review confirmed that single-point selection near the base of a tall model could ignore its visible canopy. The new selection uses bounded mesh raycasts plus a forgiving point fallback. A separate review found that rewarding selection of an unrecorded target could pick a mesh behind an already recorded foreground specimen. Exact crosshair hits now prioritize the nearest hit, with an order-independent CPU regression. Range, visibility, recorded-state and clue dependencies gate scanning before progress or rewards. All seven focused scanner CPU checks pass.

Readiness is visible on the target card. Failed E/Scan interactions explain whether to hold, approach, clear a sightline, collect distinct clues, find another specimen or use F/Use. Supply prompts retain the five-metre gate and state ingredients/capacity. The field guide names decorative scenery and the role of Q. Recharging pulses now explain waiting or using a pulse cell.

Bilingual copy uses original English text stored separately from rendered translations, keeping language switches reversible. All sixty species have translated names, subtitles, descriptions and ecological insights; habitats, regions, site hints, supplies and controls are covered. Save-language values are validated, older saves default to English and title language has a separate persistence key. Source coverage audits checked both interface and content translations. Final browser and compiled-device results are recorded in QA.md; they distinguish emulation from actual phones.
