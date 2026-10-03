# Browser hosting

- The game is publicly playable on GitHub Pages, with adaptive desktop/mobile controls and no account requirement.
- Relative asset paths support the project URL and local release servers.
- GitHub Actions tests, builds and publishes updates from main.

---

# Vesper 1.4.0 — clear discoveries, in English or Chinese

- A language picker on the title screen and in Settings switches between English and Simplified Chinese. Menus, instructions, discovery descriptions, ecological insights, crafting requirements, accessibility labels and touch controls follow the selection.
- Language changes retain the current screen, seed, discoveries, research and backpack. The preference persists in the browser and in exported saves; older saves default to English.
- Scanner targeting accepts visible parts of tall models. Exact crosshair hits prioritize the nearest specimen, including an already recorded foreground specimen.
- Target cards explain scanner range, blocked sightlines, prior observations and the three-clue requirement. Pressing E without a ready specimen explains holding E, using Q or using F for supplies. Releasing a scan early explains how to finish it.
- Supply/probe prompts explain the 5-metre reach, sightline, repair ingredients and backpack capacity. A recharging pulse explains waiting or consuming a crafted pulse cell.
- The field guide includes a practical scan checklist and the order for investigating landmarks. Decorative scenery remains distinct from the finite authored catalogue.
- Added a natural Chinese player guide and bilingual browser checks. Physical phones are not covered by the recorded browser emulations.

## Existing expeditions

Save format 1, catalogue identities and procedural models remain unchanged. Imported language values are validated. Switching language never awards XP or recreates collected supplies.

---

# Vesper 1.3.0 — a field kit for longer expeditions

- A live minimap follows position and heading, showing nearby supplies/probes, the landing pod, waypoint and active beacon. Settings can hide it or rotate it with your heading.
- Supply caches, lumen-resin deposits and conductive crystals can be collected into a 60-unit backpack. Harvested nodes stay collected. Deterministic new resources appear as the planet expands.
- Craft pulse cells for an immediate survey pulse or survey beacons for a reusable return point. Repair a probe with alloy and crystal for 55 research XP once and a supply-cache waypoint.
- The backpack shows quantities, ingredient costs, missing supplies, available actions and the active beacon. Surplus items can be discarded to prevent a full bag blocking collection. Only one beacon can be deployed; return within 5 metres to pack it.
- One adaptive build supports desktop and touch devices. Settings override automatic detection and configure click-to-walk, pointer-lock/drag/arrow look, joystick side/size and swipe sensitivity.
- Touch controls support simultaneous movement and look, held scanning and dedicated action buttons. Overlays/cancellation clear held inputs. Phone layouts include portrait, landscape and safe-area spacing.
- Desktop mouse travel uses visible terrain, stops at scenery and cancels with manual movement. It does not implement pathfinding around obstacles.
- Touch Balanced uses 25 chunks with a lower render resolution and no shadows; desktop Balanced retains 49 chunks. High remains selectable.
- Five original field supply/tool GLBs bring the model library to 74 exports. The discovery atlas remains 60 species.
- A separate local-network preview launcher prints phone-accessible addresses. The normal desktop launcher remains localhost-only. No public hosting or deployment was added.

## Existing expeditions

Save format 1 and `vesper-expedition-v1` remain unchanged. Earlier saves receive an empty field kit and defaults for the new controls; existing findings, XP and position remain available. New inventory counts and field history are validated. Settings survive a new expedition. Use the same browser/profile/origin to Continue; export/import when changing devices or ports.

## Scope

The field kit includes collection, backpack storage, crafting, probe repair and survey beacons. Terrain continues to generate; the authored catalogue remains finite. Physical mobile-browser/device performance is separate from the recorded automated layout/input checks.

---

# Vesper 1.2.0 — water and sky

This update adds more reasons to explore the landscape: slightly denser vegetation, water habitats, visible swimming fish and distinct flying animals.

- Canopy placement targets rise by about 8%, and shrub/groundcover targets by about 15%. Clear routes, tree spacing and research-subject clearances remain in place.
- Firstlight Lake connects to the meandering Willowrun. Additional forest basins, desert oases and cavern pools appear in the seeded landscape. Basin terrain is carved locally, with shaped shorelines rather than full-chunk water sheets.
- Reeds, ferns and lilies add detail around the banks. Shared transparent water uses depth color, rippled surface normals and directional glints, with fish visible beneath it.
- Three birds—Canopy Swift, Suncrest Bird and Reed Heron—join three fish—Ribbon Fish, Glass Koi and Lantern Eel. Wings, fins and tails are articulated; fish remain within sufficiently deep parts of their own water body.
- Walking into water automatically switches to wading or swimming. Swimming is slower than walking, keeps the viewpoint above the surface, and suppresses sprinting and jumping in deep water. Footsteps have a softer water sound.
- The survey map shows water in blue and offers **Mark nearby lake**. Habitat text identifies the current water body and traversal mode. Survey pulses remain visible over water.
- The atlas now contains 60 discoveries and model-rendered portraits. The supplied model library has 69 self-contained GLB exports: 67 world forms, a scanner and a landing pod.
- Focused wildlife pauses its travel for scanning; reduced motion quiets wildlife and water ripples. Established wildlife transforms stay fixed while the expedition is paused.

## Existing expeditions

Continue using the same browser/profile and release origin, `http://127.0.0.1:4174/`, then choose Continue expedition. The save format/key, original species IDs and original specimen/clue anchor records remain unchanged. Basins reshape local terrain, while landing routes and investigation clearings remain dry. Original grounded specimens affected by water are rendered on a nearby dry bank with the same identity; new scans record the visible location. Existing discoveries continue to count. New aquatic/avian encounters use the separate `waterlife:` namespace.

In rare tightly obstructed layouts, the planner safely omits the river instead of failing; the nearby lake and regional pools remain available. Two such layouts occurred in the 5,000-seed audit.

Export a JSON backup from the pause menu when moving between origins. If surrounding scenery blocks a restored player, the game finds nearby clear ground. A position within deep water restores above the surface.

The catalog is finite; terrain and repeated encounters continue to generate. Collision and swimming are lightweight approximations. Gameplay runs locally without an AI API or cloud backend. Actual verification results and hardware limits belong in QA.md.
