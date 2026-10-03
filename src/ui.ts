import "@fontsource/space-grotesk/latin-400.css";
import "@fontsource/space-grotesk/latin-500.css";
import "@fontsource/space-grotesk/latin-600.css";
import "@fontsource/space-grotesk/latin-700.css";
import "@fontsource/manrope/latin-400.css";
import "@fontsource/manrope/latin-500.css";
import "@fontsource/manrope/latin-600.css";
import { HABITATS, SPECIES, SPECIES_BY_ID } from "./data";
import { getHabitat, CHUNK_SIZE } from "./systems/worldgen";
import { getHomeLake, waterAt } from "./systems/waters";
import { LEVEL_THRESHOLDS } from "./systems/state";
import { BAG_CAPACITY, ITEM_IDS, ITEMS, RECIPES } from "./field-data";
import { canCraft, inventoryTotal } from "./systems/fieldcraft";
import { createMinimap, drawFieldMarker } from "./minimap";
import {
  getLanguage,
  localizeElement,
  setLocalizedHTML,
  setLocalizedText,
  t,
  type Language,
} from "./i18n";
import type {
  Category,
  GameUI,
  Position,
  Screen,
  SpeciesDef,
  UIHandlers,
  UISnapshot,
  DiscoveryRecord,
  ItemId,
  RecipeId,
  Settings,
} from "./types";

const biomeNames = {
  forest: "The verdant reach",
  desert: "The amber expanse",
  caves: "The luminous deep",
};
const biomeColors = { forest: "#547e73", desert: "#b98966", caves: "#536a88" };
const categories: Array<Category | "all"> = [
  "all",
  "flora",
  "mineral",
  "relic",
  "fauna",
];
const rankNames = [
  "Arrival",
  "Field observer",
  "Pathfinder",
  "Naturalist",
  "Surveyor",
  "Researcher",
  "Archivist",
  "Atlas keeper",
];

function escapeText(value: string | number): string {
  return String(value).replace(
    /[&<>"']/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        character
      ]!,
  );
}
function coordinates(position: Position): string {
  return `${Math.round(position.x)} E · ${Math.round(-position.z)} N`;
}
function setText(node: Element | null, value: string | number) {
  if (node) setLocalizedText(node, String(value));
}
function timeLabel(seconds: number): string {
  const minutes = Math.floor(Math.max(0, seconds) / 60);
  return `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;
}

function itemGlyph(id: ItemId): string {
  const paths: Record<ItemId, string> = {
    alloy: '<path d="m12 3 8 5v8l-8 5-8-5V8Zm-8 5 8 5 8-5M12 13v8"/>',
    "lumen-resin":
      '<path d="M12 3C9 7 5 11 5 15a7 7 0 0 0 14 0c0-4-4-8-7-12Z"/><path d="M8 15a4 4 0 0 0 4 4"/>',
    crystal: '<path d="m12 2 7 8-7 12-7-12Zm-7 8h14M12 2v20"/>',
    "pulse-cell": '<path d="m13 2-9 12h7l-1 8 10-13h-7Z"/>',
    "survey-beacon":
      '<path d="M12 11v10m-4 0h8M8 7a6 6 0 0 0 0 8m8-8a6 6 0 0 1 0 8M5 4a10 10 0 0 0 0 14M19 4a10 10 0 0 1 0 14"/><circle cx="12" cy="11" r="1"/>',
  };
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[id]}</svg>`;
}

export function createUI(root: HTMLElement, handlers: UIHandlers): GameUI {
  root.className = "vesper-ui";
  root.innerHTML = `
    <div class="world-vignette" aria-hidden="true"></div>
    <section class="game-hud" aria-label="Expedition instruments" hidden>
      <div class="hud-top">
        <div class="location-instrument"><span class="eyebrow">Vesper · expedition 01</span><strong id="hud-region">The verdant reach</strong><span class="habitat-label" id="hud-habitat">Starpetal Meadows</span><div class="instrument-meta"><span id="hud-coordinates">0 E · 0 N</span><i></i><span id="hud-time">00:00</span></div></div>
        <div class="compass" aria-label="Compass"><span class="compass-direction" id="compass-west">NW</span><div class="compass-center"><span id="compass-bearing">000°</span><div class="compass-ticks" aria-hidden="true"></div><b id="compass-heading">N</b></div><span class="compass-direction" id="compass-east">NE</span></div>
        <nav class="hud-nav" aria-label="Field tools"><button data-open="backpack" aria-label="Open backpack (B)"><kbd>B</kbd><span>Bag</span><span class="hud-bag-count" id="hud-bag-count">0</span></button><button data-open="journal" aria-label="Open field atlas (J)"><kbd>J</kbd><span>Atlas</span></button><button data-open="map" aria-label="Open survey map (M)"><kbd>M</kbd><span>Map</span></button><button data-open="pause" aria-label="Pause expedition"><kbd>Esc</kbd><span>Pause</span></button></nav>
      </div>
      <button class="minimap-instrument" data-open="map" aria-label="Open survey map. Mini map shows nearby terrain, water, supplies, probes and your waypoint."><span class="minimap-heading"><span>Local survey</span><span id="minimap-orientation">North up</span></span><canvas id="minimap-canvas" width="216" height="216" aria-hidden="true"></canvas><span class="minimap-footer"><span id="minimap-distance">160 m view</span><span>Map ↗</span></span></button>
      <div class="field-instrument" hidden><div><span class="eyebrow" id="field-type">Field supplies</span><span id="field-distance"></span></div><h2 id="field-title"></h2><p id="field-detail"></p><button class="field-action" data-action="interact"><kbd>F</kbd><span id="field-prompt">Collect supplies</span><span aria-hidden="true">↗</span></button></div>
      <div class="bag-instrument"><button data-open="backpack" aria-label="Open backpack"><span class="bag-glyph" aria-hidden="true">▣</span><span id="bag-status">Backpack · 0 / 60</span><kbd>B</kbd></button><span id="field-goal">Collect supplies · craft tools · restore survey probes</span></div>
      <div class="objective-instrument"><span class="eyebrow">Current research</span><h2 id="objective-title">A first impression</h2><p id="objective-detail">Approach the specimen near the landing pod.</p><div class="objective-foot"><div class="meter"><i id="objective-meter"></i></div><span id="objective-count">0 / 1</span></div></div>
      <div class="waypoint-instrument" hidden><span class="waypoint-arrow" aria-hidden="true">↑</span><span id="waypoint-distance">Waypoint · 0 m</span></div>
      <div class="crosshair" aria-hidden="true"><i></i><i></i><i></i><i></i><b></b></div>
      <div class="target-instrument" hidden><div class="target-topline"><span class="eyebrow" id="target-type">Field specimen</span><span id="target-distance">0 m</span></div><h2 id="target-title"></h2><p id="target-detail"></p><div class="scan-meter"><i id="scan-meter"></i></div><div class="target-prompt"><kbd>E</kbd><span id="target-prompt">Hold to scan</span><span id="scan-percent"></span></div></div>
      <div class="hud-bottom"><div class="research-instrument"><span class="eyebrow">Field atlas</span><strong><span id="hud-discovered">0</span><small> / ${SPECIES.length} specimens</small></strong><div class="rank-line"><span id="hud-rank">01 · Arrival</span><span id="hud-xp">0 XP</span></div><div class="meter"><i id="xp-meter"></i></div></div><div class="sensor-instrument"><div class="sensor-symbol" aria-hidden="true"><i></i><i></i><b></b></div><div><span class="eyebrow">Survey sensor</span><div class="sensor-status"><kbd>Q</kbd><span id="pulse-status">Pulse ready</span></div><span class="instrument-meta" id="scanner-range">Scan range · 8 m</span></div></div></div>
      <div class="pointer-hint" hidden><span>Click the world to look around</span><span><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> Move <kbd>E</kbd> Scan</span></div>
    </section>
    <main class="title-screen" data-screen="title">
      <div class="title-topline"><span class="eyebrow">Independent planetary survey</span><div class="title-tools"><span class="title-coordinate">Outer atlas / 001</span><div class="language-picker" role="group" aria-label="Choose your language"><button type="button" data-language="en" aria-pressed="true" lang="en">English</button><button type="button" data-language="zh-CN" aria-pressed="false" lang="zh-CN">简体中文</button></div></div></div>
      <div class="title-composition"><div class="planet-designation"><i></i><span>Uncharted. Inhabited. Interconnected.</span></div><h1>VESPER<span>AN ATLAS OF ELSEWHERE</span></h1><p class="title-description">Explore an alien world, catalogue its living specimens, and uncover the story connecting them.</p><div class="title-actions"><button class="button button-primary title-continue" data-action="continue" hidden>Continue expedition <span>↗</span></button><button class="button button-primary title-start" data-action="start">Begin expedition <span>↗</span></button><button class="button button-text" data-action="title-help">Field instructions <span>?</span></button></div><div class="seed-field"><label for="expedition-seed">World seed <span>Optional — the same seed returns to the same world</span></label><div><input id="expedition-seed" type="text" maxlength="80" placeholder="Let the atlas choose" autocomplete="off" spellcheck="false"><button class="seed-random" data-action="random-seed" aria-label="Generate a world seed">↻</button></div></div><div class="title-save-note" hidden><i></i><span>Your expedition is saved on this device.</span></div></div>
      <div class="title-bottomline"><span>Take your time. There is no combat, and no timer.</span><span>Headphones recommended <i></i> <span id="title-control-label">Keyboard + mouse</span></span></div>
    </main>
    <div class="overlay-shell" hidden>
      <section class="overlay-panel" role="dialog" aria-modal="true" aria-labelledby="overlay-heading">
        <header class="overlay-header"><div><span class="eyebrow">Vesper / field instruments</span><h1 id="overlay-heading">Expedition paused</h1></div><button class="close-overlay" data-action="close" aria-label="Return to expedition"><span>Return</span><kbd>Esc</kbd></button></header>
        <div class="overlay-body">
          <section data-screen="pause" class="pause-screen" hidden><div class="pause-summary"><div class="pause-emblem" aria-hidden="true"><i></i><i></i><i></i></div><span class="eyebrow">A moment in the field</span><h2 id="pause-region">The verdant reach</h2><p id="pause-position">0 E · 0 N</p><div class="pause-stats"><div><strong id="pause-discoveries">0</strong><span>Specimens</span></div><div><strong id="pause-sites">0</strong><span>Sites resolved</span></div><div><strong id="pause-level">1</strong><span>Research level</span></div></div><p class="save-status"><i></i><span id="save-status">Local save ready</span></p></div><div class="pause-actions"><button class="button button-primary" data-action="resume">Resume expedition <span>↗</span></button><div class="menu-row"><button data-open="journal"><span><b>Field atlas</b><small>Specimens & research</small></span><kbd>J</kbd></button><button data-open="map"><span><b>Survey map</b><small>Regions & waypoints</small></span><kbd>M</kbd></button></div><div class="menu-row"><button data-open="backpack"><span><b>Backpack</b><small>Supplies, crafting & field tools</small></span><kbd>B</kbd></button><button data-open="settings"><span><b>Instruments</b><small>Audio, controls & map</small></span><span>↗</span></button></div><div class="menu-row"><button data-open="help"><span><b>Field guide</b><small>How to explore</small></span><span>?</span></button></div><button class="menu-line" data-action="photo"><span>Enter photo mode</span><kbd>P</kbd></button><button class="menu-line" data-action="recall"><span>Recall to landing pod</span><kbd>R</kbd></button><div class="save-actions"><button data-action="export">Export expedition</button><button data-action="import">Import a save</button></div><button class="button button-text new-expedition" data-action="new">Begin a new expedition <span>↗</span></button></div></section>
          <section data-screen="journal" class="journal-screen" hidden><div class="journal-toolbar"><p id="atlas-count">Your catalogue begins with curiosity.</p><div class="category-filters" role="group" aria-label="Filter specimens">${categories.map((category) => `<button data-filter="${category}" aria-pressed="${category === "all"}">${category === "all" ? "All records" : category}</button>`).join("")}</div></div><div class="journal-layout"><div class="species-list" aria-label="Specimen records"></div><article class="species-detail" aria-label="Selected specimen"></article></div><div class="research-milestones"><div><span class="eyebrow">Research progression</span><p id="research-summary">Level 1 · Arrival</p></div><div class="milestone-list"></div></div></section>
          <section data-screen="map" class="map-screen" hidden><div class="map-toolbar"><p>Click the survey to place a waypoint.</p><button class="button button-small" data-action="lake-waypoint">Mark nearby lake ↗</button><div class="map-scale-controls"><button data-action="map-in" aria-label="Zoom map in">+</button><span id="map-scale">256 m span</span><button data-action="map-out" aria-label="Zoom map out">−</button></div></div><div class="survey-map"><canvas id="survey-canvas" width="1000" height="640" tabindex="0" role="img" aria-label="Survey map showing forest, desert and cavern regions, explored areas, landing pod, your position and waypoint. Use arrow keys to move your waypoint; Home marks your current position." aria-describedby="map-instructions"></canvas><span class="map-north">N<i></i></span><div class="map-key"><span><i style="background:#547e73"></i>Forest</span><span><i style="background:#b98966"></i>Desert</span><span><i style="background:#536a88"></i>Caverns</span><span><i style="background:#72a9b5"></i>Water</span></div></div><div class="map-footer"><div><span class="eyebrow">Current position</span><strong id="map-position">0 E · 0 N</strong></div><div><span class="eyebrow">Waypoint</span><strong id="waypoint-position">None set</strong></div><button class="button button-small" data-action="clear-waypoint">Clear waypoint</button></div><div class="field-map-key"><span><i class="marker-cache"></i>Supplies</span><span><i class="marker-resin"></i>Resin</span><span><i class="marker-crystal"></i>Crystal</span><span><i class="marker-probe"></i>Survey probe</span><span><i class="marker-beacon"></i>Return beacon</span></div><p class="fine-print" id="map-instructions">Bright sectors have been visited. The surrounding terrain is predicted by the atlas. Color variations mark different habitats; blue channels and pools mark water. The circle marks your landing pod. Field resources are shown within 80 m; your return beacon remains marked. With the map focused, arrow keys move your waypoint; Home marks your position.</p></section>
          <section data-screen="backpack" class="backpack-screen" hidden><div class="backpack-overview"><div><span class="eyebrow">Your field kit</span><h2>Take something useful.</h2><p>Gather supplies, build survey tools, and bring silent research probes back online.</p></div><div class="bag-capacity"><strong id="bag-capacity-count">0 <small>/ 60</small></strong><span>items carried</span><div class="meter"><i id="bag-capacity-meter"></i></div></div></div><div class="backpack-layout"><div><div class="kit-section-title"><span class="eyebrow">Backpack contents</span><span>Materials & ready tools</span></div><div class="item-grid"></div><div class="beacon-status" hidden></div></div><div class="crafting-column"><div class="kit-section-title"><span class="eyebrow">Field crafting</span><span>No workbench needed</span></div><div class="recipe-list"></div><div class="field-kit-note"><span class="eyebrow">Continue the expedition</span><p>Look for supply caches, amber resin deposits and blue crystal outcrops. Repair damaged survey probes with 2 alloy and 1 conductive crystal. Nearby field resources appear on your mini map. Discard surplus items from your bag to make room for new supplies.</p><strong id="probe-progress">0 survey probes restored</strong></div></div></div></section>
          <section data-screen="settings" class="settings-screen" hidden><p class="screen-intro">Set your instruments for a comfortable expedition. Changes save automatically.</p><div class="settings-list"><label class="setting"><span><b>Interface language</b><small>Switch at any time; your expedition stays unchanged</small></span><select id="language"><option value="en" lang="en">English</option><option value="zh-CN" lang="zh-CN">简体中文</option></select></label><div class="settings-group-label"><span class="eyebrow">Controls</span><p id="control-summary">Keyboard movement and mouse look.</p></div><label class="setting"><span><b>Control layout</b><small>Auto adapts to your device; override at any time</small></span><select id="controlScheme"><option value="auto">Automatic</option><option value="desktop">Desktop controls</option><option value="touch">Touch controls</option></select></label><label class="setting"><span><b>Desktop movement</b><small>Click a clear piece of ground to walk there</small></span><select id="movementMode"><option value="keyboard">Keyboard</option><option value="mouse">Click to walk</option></select></label><label class="setting"><span><b>Desktop look</b><small>Click to walk supports right-drag or arrow-key look</small></span><select id="mouseLook"><option value="pointer-lock">Mouse capture</option><option value="drag">Right-button drag</option><option value="arrows">Arrow keys</option></select></label><label class="setting"><span><b>Look sensitivity</b><small>Mouse movement speed</small></span><div class="slider-field"><input type="range" min="0.2" max="2.5" step="0.05" id="sensitivity" aria-label="Look sensitivity"><output id="sensitivity-value">1.00×</output></div></label><label class="setting"><span><b>Touch look sensitivity</b><small>Swipe speed for looking around</small></span><div class="slider-field"><input type="range" min="0.25" max="3" step="0.05" id="touchSensitivity" aria-label="Touch look sensitivity"><output id="touchSensitivity-value">1.00×</output></div></label><label class="setting"><span><b>Touch control size</b><small>Resize the joystick and action buttons</small></span><div class="slider-field"><input type="range" min="0.8" max="1.4" step="0.05" id="touchScale" aria-label="Touch control size"><output id="touchScale-value">100%</output></div></label><label class="setting"><span><b>Movement joystick</b><small>Swipe the opposite side of the world to look</small></span><select id="joystickSide"><option value="left">Left side</option><option value="right">Right side</option></select></label><div class="settings-group-label"><span class="eyebrow">Map & comfort</span></div><label class="setting"><span><b>Show mini map</b><small>Nearby terrain, water and field resources</small></span><input class="switch" type="checkbox" id="showMinimap"></label><label class="setting"><span><b>Rotate mini map</b><small>Keep your facing direction at the top</small></span><input class="switch" type="checkbox" id="minimapRotate"></label><label class="setting"><span><b>Master volume</b><small>Ambient sound & survey instruments</small></span><div class="slider-field"><input type="range" min="0" max="1" step="0.01" id="volume" aria-label="Master volume"><output id="volume-value">60%</output></div></label><label class="setting"><span><b>Render quality</b><small>Lower quality improves performance</small></span><select id="quality"><option value="low">Low</option><option value="balanced">Balanced</option><option value="high">High</option></select></label><label class="setting"><span><b>Invert vertical look</b><small>Move the mouse down to look up</small></span><input class="switch" type="checkbox" id="invertY"></label><label class="setting"><span><b>Reduced motion</b><small>Quieter camera & interface movement</small></span><input class="switch" type="checkbox" id="reducedMotion"></label></div><div class="settings-footnote"><span class="eyebrow">Local & private</span><p>Your settings and expedition stay in this browser. Export a save to carry your discoveries to another device.</p></div></section>
          <section data-screen="help" class="help-screen" hidden><div class="help-introduction"><div><span class="eyebrow">The purpose of the expedition</span><h2>Look closer.<br>Everything is connected.</h2></div><p>Explore ten habitats across three regions, from flower meadows and willow groves to desert oases and fungal caverns. Watch wandering grazers, hoppers, birds and gliding rays. Follow the river to clear pools, look beneath the surface for fish, and wade or swim across water. The map can mark the nearby lake. Catalogue ordinary specimens to build your atlas. At investigation sites, scan three nearby clues, then examine the landmark to uncover a rare finding.</p></div><div class="help-columns"><div><span class="eyebrow">Movement</span><div class="key-row"><span>Walk</span><div><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd></div></div><div class="key-row"><span>Look around</span><kbd data-translatable="true">Mouse / arrows</kbd></div><div class="key-row"><span>Sprint</span><kbd>Shift</kbd></div><div class="key-row"><span>Jump</span><kbd>Space</kbd></div><div class="key-row"><span>Pause / release cursor</span><kbd>Esc</kbd></div></div><div><span class="eyebrow">Field instruments</span><div class="key-row"><span>Hold to scan / examine</span><kbd>E</kbd></div><div class="key-row"><span>Collect / repair</span><kbd>F</kbd></div><div class="key-row"><span>Backpack & crafting</span><kbd>B</kbd></div><div class="key-row"><span>Sensor pulse</span><kbd>Q</kbd></div><div class="key-row"><span>Field atlas</span><kbd>J</kbd></div><div class="key-row"><span>Survey map</span><kbd>M</kbd></div><div class="key-row"><span>Photo mode / save image</span><kbd>P / O</kbd></div><div class="key-row"><span>Recall to landing pod</span><kbd>R</kbd></div></div></div><div class="control-guide"><span class="eyebrow">Choose your way to explore</span><p><b>Desktop.</b> Walk with WASD and look with the mouse. Choose click-to-walk in Settings to move by clicking the ground, then hold the right mouse button and drag to look around. Arrow-key look is also available.</p><p><b>Phone or tablet.</b> Touch controls appear automatically: move with the joystick, swipe the other side to look, and use the action buttons to scan, collect, jump or open your bag. You can change joystick side, size and swipe sensitivity in Settings.</p><p><b>Build a field kit.</b> Gather alloy, lumen resin and conductive crystals. Open your backpack to craft pulse cells or a survey beacon. Use a cell to recharge the sensor; place a beacon to create a personal return point. Repair damaged probes using supplies from your bag. Discard surplus items if you need room for different materials.</p></div><div class="scan-guide"><span class="eyebrow">Why a scan may not start</span><ul><li><b>Hold, rather than tap.</b> Keep E held for about one second, or hold Scan on a touch screen. Keep the target centred until the meter fills.</li><li><b>Check the target card.</b> Move closer if it says you are out of range. If something blocks the scan, step around it. Recorded specimens are already in your atlas.</li><li><b>Scenery and supplies are different.</b> Some trees, flowers and rocks are scenery. Q highlights nearby unrecorded catalogue specimens. Collect supplies and repair probes with F (Use on touch), within 5 m.</li><li><b>Investigate in order.</b> A landmark stays locked until you scan its three distinct nearby clues. Follow the target card’s clue count, then hold E on the landmark.</li></ul></div><div class="guide-notes"><p><b>Scan with intention.</b> Bring a specimen into range, centre it in the crosshair, and hold E until the scan is complete.</p><p><b>Follow the pulse.</b> Q reveals nearby discoveries. The sensor needs a short time to recharge.</p><p><b>Leave a marker.</b> Open the map with M, then click to set a waypoint. R safely returns you to your landing pod.</p></div><p class="fine-print">Your expedition saves locally. The catalogue is finite; the planet continues beyond the horizon.</p></section>
        </div>
        <footer class="overlay-footer"><span id="overlay-seed">World seed · Vesper</span><span id="overlay-save">Saved on this device</span></footer>
      </section>
    </div>
    <div class="confirmation-shell" hidden><section class="confirmation" role="alertdialog" aria-modal="true" aria-labelledby="confirmation-heading"><span class="eyebrow">New expedition</span><h2 id="confirmation-heading">Leave this atlas behind?</h2><p>A new expedition replaces the save on this device. Export your expedition first to keep a copy of your discoveries.</p><div><button class="button button-primary" data-action="confirm-new">Begin new expedition</button><button class="button" data-action="cancel-new">Keep exploring</button></div><button class="button button-text" data-action="export">Export current expedition ↗</button></section></div>
    <div class="photo-instrument" hidden><span class="eyebrow">Photo mode · your view of Vesper</span><div><button data-action="capture">Save photograph <kbd>O</kbd></button><button data-action="photo-return">Return to expedition <kbd>P / Esc</kbd></button></div></div>
    <div class="toast-stack" aria-live="polite" aria-atomic="false"></div>
    <aside class="discovery-card" hidden aria-live="polite"><button class="discovery-close" data-action="dismiss-discovery" aria-label="Dismiss discovery">×</button><span class="eyebrow">Added to your field atlas</span><div class="discovery-title"><div class="discovery-glyph" aria-hidden="true"></div><div><h2></h2><p></p></div></div><div class="discovery-footer"><span class="discovery-category"></span><button data-action="discovery-journal">Open record <kbd>J</kbd></button></div></aside>
    <input class="import-file" type="file" accept=".json,application/json" tabindex="-1" aria-hidden="true">
  `;

  localizeElement(root);

  const find = <T extends Element = HTMLElement>(selector: string) =>
    root.querySelector<T>(selector)!;
  const hud = find<HTMLElement>(".game-hud");
  const title = find<HTMLElement>(".title-screen");
  const shell = find<HTMLElement>(".overlay-shell");
  const dialog = find<HTMLElement>(".overlay-panel");
  const confirmation = find<HTMLElement>(".confirmation-shell");
  const photo = find<HTMLElement>(".photo-instrument");
  const targetElement = find<HTMLElement>(".target-instrument");
  const discoveryCard = find<HTMLElement>(".discovery-card");
  const importInput = find<HTMLInputElement>(".import-file");
  const seedInput = find<HTMLInputElement>("#expedition-seed");
  const mapCanvas = find<HTMLCanvasElement>("#survey-canvas");
  const miniMap = createMinimap(find<HTMLCanvasElement>("#minimap-canvas"));
  const miniMapElement = find<HTMLElement>(".minimap-instrument");
  const fieldElement = find<HTMLElement>(".field-instrument");
  let screen: Screen = "title";
  let snapshot: UISnapshot | null = null;
  let category: Category | "all" = "all";
  let selectedSpecies: string | null = null;
  let journalSignature = "";
  let backpackSignature = "";
  let lastUpdate = 0;
  let lastMap = 0;
  let mapSpan = 256;
  let discoveryTimer: ReturnType<typeof setTimeout> | undefined;
  let confirmationAction: (() => void) | null = null;
  let returnScreen: Screen = "playing";
  const headings: Record<Screen, string> = {
    title: "",
    playing: "",
    pause: "Expedition paused",
    journal: "Field atlas",
    map: "Survey map",
    settings: "Your instruments",
    help: "Field guide",
    backpack: "Backpack & field crafting",
    photo: "",
  };

  function openScreen(next: Screen) {
    if (screen === "title") returnScreen = "title";
    else if (screen === "playing" || screen === "photo")
      returnScreen = "playing";
    handlers.pause();
    setScreen(next);
  }
  function returnToWorld() {
    if (returnScreen === "title") {
      setScreen("title");
      return;
    }
    handlers.resume();
    setScreen("playing");
  }
  function focusFirst() {
    requestAnimationFrame(() => {
      const parent = !confirmation.hidden
        ? confirmation
        : screen === "title"
          ? title
          : dialog;
      parent
        .querySelector<HTMLElement>(
          "button:not([hidden]):not([disabled]), input, select",
        )
        ?.focus({ preventScroll: true });
    });
  }
  function setScreen(next: Screen) {
    if (next === "playing" || next === "photo") returnScreen = "playing";
    if (next === "title") returnScreen = "title";
    screen = next;
    root.dataset.screen = next;
    const overlay = next !== "title" && next !== "playing" && next !== "photo";
    title.hidden = next !== "title";
    shell.hidden = !overlay;
    hud.hidden = next !== "playing";
    photo.hidden = next !== "photo";
    discoveryCard.classList.toggle("temporarily-hidden", next !== "playing");
    root
      .querySelectorAll<HTMLElement>(".overlay-body > [data-screen]")
      .forEach((section) => {
        section.hidden = section.dataset.screen !== next;
      });
    setText(find("#overlay-heading"), headings[next]);
    if (next === "journal") {
      journalSignature = "";
      renderJournal();
    }
    if (next === "map") {
      lastMap = 0;
      drawMap();
    }
    if (next === "backpack") {
      backpackSignature = "";
      renderBackpack();
    }
    if (overlay || next === "title") focusFirst();
    if (snapshot) updateInstruments(snapshot);
  }
  function askNew(action: () => void) {
    confirmationAction = action;
    confirmation.hidden = false;
    focusFirst();
  }
  function beginNew() {
    const seed = seedInput.value.trim() || undefined;
    const action = () => {
      handlers.start(seed, true);
      setScreen("playing");
    };
    if (snapshot?.hasSave) askNew(action);
    else action();
  }

  root.addEventListener("click", (event) => {
    const button = (event.target as HTMLElement).closest<HTMLButtonElement>(
      "button",
    );
    if (!button || !root.contains(button)) return;
    if (button.dataset.language) {
      handlers.setSettings({ language: button.dataset.language as Language });
      return;
    }
    if (button.dataset.open) {
      openScreen(button.dataset.open as Screen);
      return;
    }
    if (button.dataset.filter) {
      category = button.dataset.filter as Category | "all";
      root
        .querySelectorAll<HTMLButtonElement>("[data-filter]")
        .forEach((item) => {
          item.setAttribute(
            "aria-pressed",
            String(item.dataset.filter === category),
          );
        });
      journalSignature = "";
      renderJournal();
      return;
    }
    if (button.dataset.species) {
      selectedSpecies = button.dataset.species;
      journalSignature = "";
      renderJournal();
      root
        .querySelectorAll<HTMLButtonElement>("[data-species]")
        .forEach((item) => {
          if (item.dataset.species === selectedSpecies)
            item.focus({ preventScroll: true });
        });
      return;
    }
    if (button.dataset.recipe) {
      handlers.craft(button.dataset.recipe as RecipeId);
      return;
    }
    if (button.dataset.item) {
      handlers.useItem(button.dataset.item as ItemId);
      return;
    }
    if (button.dataset.discard) {
      handlers.discardItem(button.dataset.discard as ItemId);
      return;
    }
    switch (button.dataset.action) {
      case "start":
        beginNew();
        break;
      case "continue":
        handlers.start(undefined, false);
        setScreen("playing");
        break;
      case "random-seed":
        seedInput.value = `VESPER-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
        break;
      case "title-help":
        openScreen("help");
        break;
      case "close":
      case "resume":
        returnToWorld();
        break;
      case "export":
        handlers.exportSave();
        break;
      case "import":
        importInput.click();
        break;
      case "new":
        askNew(() => {
          handlers.reset();
          setScreen("playing");
        });
        break;
      case "cancel-new":
        confirmation.hidden = true;
        confirmationAction = null;
        focusFirst();
        break;
      case "confirm-new": {
        const action = confirmationAction;
        confirmation.hidden = true;
        confirmationAction = null;
        action?.();
        break;
      }
      case "recall":
        handlers.recall();
        handlers.resume();
        setScreen("playing");
        break;
      case "interact":
        handlers.interact();
        break;
      case "beacon-recall":
        handlers.recallBeacon();
        break;
      case "beacon-pack":
        handlers.packBeacon();
        break;
      case "lake-waypoint":
        if (snapshot) handlers.setWaypoint(getHomeLake(snapshot.seed));
        break;
      case "photo":
        handlers.photo();
        setScreen("photo");
        break;
      case "photo-return":
        handlers.resume();
        setScreen("playing");
        break;
      case "capture":
        handlers.capture();
        break;
      case "map-in":
        mapSpan = Math.max(128, mapSpan / 2);
        drawMap();
        break;
      case "map-out":
        mapSpan = Math.min(2048, mapSpan * 2);
        drawMap();
        break;
      case "clear-waypoint":
        placeWaypoint(null);
        break;
      case "dismiss-discovery":
        discoveryCard.hidden = true;
        break;
      case "discovery-journal":
        selectedSpecies = discoveryCard.dataset.species ?? null;
        openScreen("journal");
        break;
    }
  });
  importInput.addEventListener("change", () => {
    const file = importInput.files?.[0];
    if (file) handlers.importSave(file);
    importInput.value = "";
  });
  root.addEventListener("input", (event) => {
    const input = event.target as HTMLInputElement;
    if (
      ["sensitivity", "volume", "touchSensitivity", "touchScale"].includes(
        input.id,
      )
    ) {
      const value = Number(input.value);
      handlers.setSettings({ [input.id]: value });
      setText(
        find(`#${input.id}-value`),
        input.id === "sensitivity" || input.id === "touchSensitivity"
          ? `${value.toFixed(2)}×`
          : `${Math.round(value * 100)}%`,
      );
    }
  });
  root.addEventListener("change", (event) => {
    const input = event.target as HTMLInputElement;
    if (
      [
        "language",
        "quality",
        "controlScheme",
        "movementMode",
        "mouseLook",
        "joystickSide",
      ].includes(input.id)
    )
      handlers.setSettings({ [input.id]: input.value } as Partial<Settings>);
    if (
      ["invertY", "reducedMotion", "showMinimap", "minimapRotate"].includes(
        input.id,
      )
    )
      handlers.setSettings({ [input.id]: input.checked });
  });
  document.addEventListener(
    "keydown",
    (event) => {
      if (
        !confirmation.hidden &&
        event.key !== "Escape" &&
        event.key !== "Tab"
      ) {
        event.stopImmediatePropagation();
        return;
      }
      if (screen === "playing" || screen === "photo") return;
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopImmediatePropagation();
        if (!confirmation.hidden) {
          confirmation.hidden = true;
          confirmationAction = null;
          focusFirst();
        } else if (screen !== "title") returnToWorld();
        return;
      }
      if (event.key !== "Tab") return;
      const parent = !confirmation.hidden
        ? confirmation
        : screen === "title"
          ? title
          : dialog;
      const focusable = [
        ...parent.querySelectorAll<HTMLElement>(
          'button:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex="0"]',
        ),
      ].filter((element) => element.getClientRects().length > 0);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    },
    true,
  );
  function placeWaypoint(position: Position | null) {
    handlers.setWaypoint(position);
    if (snapshot) snapshot = { ...snapshot, waypoint: position };
    drawMap();
    if (snapshot)
      setText(
        find("#waypoint-position"),
        position ? coordinates(position) : "None set",
      );
  }
  mapCanvas.addEventListener("click", (event) => {
    if (!snapshot) return;
    const rect = mapCanvas.getBoundingClientRect();
    placeWaypoint({
      x:
        snapshot.position.x +
        ((event.clientX - rect.left) / rect.width - 0.5) * mapSpan,
      z:
        snapshot.position.z +
        ((event.clientY - rect.top) / rect.height - 0.5) *
          mapSpan *
          (mapCanvas.height / mapCanvas.width),
    });
  });
  mapCanvas.addEventListener("keydown", (event) => {
    if (
      !snapshot ||
      !["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Home"].includes(
        event.key,
      )
    )
      return;
    event.preventDefault();
    event.stopPropagation();
    const position = { ...(snapshot.waypoint ?? snapshot.position) };
    const step = mapSpan / 16;
    if (event.key === "ArrowUp") position.z -= step;
    if (event.key === "ArrowDown") position.z += step;
    if (event.key === "ArrowLeft") position.x -= step;
    if (event.key === "ArrowRight") position.x += step;
    placeWaypoint(event.key === "Home" ? { ...snapshot.position } : position);
  });

  function updateInstruments(value: UISnapshot) {
    root.dataset.language = getLanguage();
    root
      .querySelectorAll<HTMLButtonElement>("[data-language]")
      .forEach((button) => {
        button.setAttribute(
          "aria-pressed",
          String(button.dataset.language === getLanguage()),
        );
      });
    root.dataset.touch = String(value.touchControls);
    root.dataset.mobile = String(value.mobileDevice);
    root.style.setProperty("--touch-scale", String(value.settings.touchScale));
    const discovered = Object.keys(value.discoveries).length;
    const heading = ((((-value.heading * 180) / Math.PI) % 360) + 360) % 360;
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    const headingIndex = Math.round(heading / 45) % 8;
    setText(find("#hud-region"), value.region || biomeNames[value.biome]);
    setText(
      find("#hud-habitat"),
      value.waterName
        ? `${value.waterName} · ${value.swimming ? "Swimming" : "Wading"}`
        : HABITATS[value.habitat].name,
    );
    setText(find("#hud-coordinates"), coordinates(value.position));
    setText(find("#hud-time"), timeLabel(value.time));
    setText(
      find("#compass-bearing"),
      `${String(Math.round(heading)).padStart(3, "0")}°`,
    );
    setText(find("#compass-heading"), directions[headingIndex]);
    setText(find("#compass-west"), directions[(headingIndex + 7) % 8]);
    setText(find("#compass-east"), directions[(headingIndex + 1) % 8]);
    find<HTMLElement>(".waypoint-instrument").hidden = !value.waypoint;
    if (value.waypoint) {
      const dx = value.waypoint.x - value.position.x;
      const dz = value.waypoint.z - value.position.z;
      const bearing = (Math.atan2(dx, -dz) * 180) / Math.PI;
      const relativeBearing = ((bearing - heading + 540) % 360) - 180;
      setText(
        find("#waypoint-distance"),
        `Waypoint · ${Math.round(Math.hypot(dx, dz))} m`,
      );
      find<HTMLElement>(".waypoint-arrow").style.transform =
        `rotate(${relativeBearing}deg)`;
    }
    const carried = inventoryTotal(value.fieldKit);
    setText(find("#hud-bag-count"), carried);
    setText(find("#bag-status"), `Backpack · ${carried} / ${BAG_CAPACITY}`);
    setText(
      find("#field-goal"),
      value.fieldKit.repaired.length
        ? `${value.fieldKit.repaired.length} survey probe${value.fieldKit.repaired.length === 1 ? "" : "s"} restored · explore for more supplies`
        : "Collect supplies · craft tools · restore survey probes",
    );
    miniMapElement.hidden = !value.settings.showMinimap;
    if (screen === "playing" && value.settings.showMinimap) miniMap.draw(value);
    setText(
      find("#minimap-orientation"),
      value.settings.minimapRotate ? "Heading up" : "North up",
    );
    setText(
      find("#minimap-distance"),
      value.waypoint
        ? `Waypoint · ${Math.round(Math.hypot(value.waypoint.x - value.position.x, value.waypoint.z - value.position.z))} m`
        : "160 m view",
    );
    fieldElement.hidden = !value.fieldTarget;
    root.classList.toggle("has-field-target", !!value.fieldTarget);
    if (value.fieldTarget) {
      const field = value.fieldTarget;
      setText(
        find("#field-type"),
        field.kind === "probe" ? "Survey infrastructure" : "Field supplies",
      );
      setText(find("#field-distance"), `${field.distance.toFixed(1)} m`);
      setText(find("#field-title"), field.title);
      setText(find("#field-detail"), field.detail);
      setText(
        find("#field-prompt"),
        field.prompt
          .replace(/^(?:F|Use)\s*·\s*/i, "")
          .replace(/^\w/, (letter) => letter.toUpperCase()),
      );
      find<HTMLButtonElement>(".field-action").disabled = !field.available;
      fieldElement.classList.toggle("is-unavailable", !field.available);
    }
    setText(find("#hud-discovered"), discovered);
    setText(
      find("#hud-rank"),
      `${String(value.level).padStart(2, "0")} · ${rankNames[Math.min(value.level - 1, rankNames.length - 1)] ?? "Researcher"}`,
    );
    setText(find("#hud-xp"), `${value.xp} XP`);
    const floor = LEVEL_THRESHOLDS[value.level - 1] ?? 0;
    const ceiling = LEVEL_THRESHOLDS[value.level];
    const xpProgress = ceiling
      ? Math.max(0, Math.min(1, (value.xp - floor) / (ceiling - floor)))
      : 1;
    find<HTMLElement>("#xp-meter").style.transform = `scaleX(${xpProgress})`;
    setText(find("#objective-title"), value.objective.title);
    setText(
      find("#objective-detail"),
      value.touchControls
        ? value.objective.detail.replace(/hold E/gi, "hold Scan")
        : value.objective.detail,
    );
    setText(
      find("#objective-count"),
      `${value.objective.progress} / ${value.objective.total}`,
    );
    find<HTMLElement>("#objective-meter").style.transform =
      `scaleX(${Math.min(1, value.objective.progress / Math.max(1, value.objective.total))})`;
    setText(
      find("#pulse-status"),
      value.pulseCooldown > 0
        ? `Recharging · ${Math.ceil(value.pulseCooldown)}s`
        : "Pulse ready",
    );
    root.classList.toggle("pulse-ready", value.pulseCooldown <= 0);
    setText(
      find("#scanner-range"),
      `Scan range · ${value.scannerRange.toFixed(0)} m`,
    );
    targetElement.hidden = !value.target;
    root.classList.toggle("has-target", !!value.target);
    root.classList.toggle("target-locked", !!value.target?.locked);
    if (value.target) {
      const target = value.target;
      targetElement.dataset.scanStatus =
        target.scanStatus ??
        (target.locked ? "locked" : target.scanned ? "recorded" : "ready");
      const progress = Math.max(0, Math.min(1, target.progress));
      setText(
        find("#target-type"),
        target.scanned ? "Catalogued specimen" : target.subtitle,
      );
      setText(find("#target-distance"), `${target.distance.toFixed(1)} m`);
      setText(find("#target-title"), target.title);
      setText(find("#target-detail"), target.detail);
      setText(
        find("#target-prompt"),
        value.touchControls
          ? target.prompt.replace(/hold E/gi, "Hold Scan")
          : target.prompt,
      );
      setText(
        find("#scan-percent"),
        progress > 0 ? `${Math.round(progress * 100)}%` : "",
      );
      find<HTMLElement>("#scan-meter").style.transform = `scaleX(${progress})`;
      targetElement.style.setProperty("--specimen-color", target.color);
      targetElement.classList.toggle(
        "is-scanning",
        progress > 0 && progress < 1,
      );
      targetElement.classList.toggle("is-scanned", target.scanned);
    }
    find<HTMLElement>(".title-continue").hidden = !value.hasSave;
    find<HTMLElement>(".title-save-note").hidden = !value.hasSave;
    find<HTMLElement>(".title-start").classList.toggle(
      "button-primary",
      !value.hasSave,
    );
    setText(
      find(".title-start"),
      value.hasSave ? "Begin a new expedition ↗" : "Begin expedition ↗",
    );
    setText(find("#pause-region"), value.region || biomeNames[value.biome]);
    setText(find("#pause-position"), coordinates(value.position));
    setText(find("#pause-discoveries"), discovered);
    setText(find("#pause-sites"), value.sitesCompleted);
    setText(find("#pause-level"), value.level);
    const expeditionActive = screen !== "title" && returnScreen !== "title";
    const saveStatus = value.saved
      ? "Expedition saved on this device"
      : expeditionActive
        ? "Could not save on this device — export a backup"
        : "Expedition not started";
    setText(find("#save-status"), saveStatus);
    setText(find("#overlay-seed"), `World seed · ${value.seed}`);
    setText(
      find("#overlay-save"),
      value.saved ? "Saved on this device" : saveStatus,
    );
    setText(find("#map-position"), coordinates(value.position));
    setText(
      find("#waypoint-position"),
      value.waypoint ? coordinates(value.waypoint) : "None set",
    );
    setText(
      find("#title-control-label"),
      value.touchControls ? "Touch controls ready" : "Keyboard + mouse",
    );
    setText(
      find("#control-summary"),
      value.touchControls
        ? `${value.settings.joystickSide === "left" ? "Left" : "Right"} joystick to move; swipe the other side to look.`
        : value.settings.movementMode === "mouse"
          ? value.settings.mouseLook === "arrows"
            ? "Click the ground to walk; use the arrow keys to look around."
            : "Click the ground to walk; hold the right mouse button and drag to look."
          : value.settings.mouseLook === "arrows"
            ? "WASD movement with arrow-key look."
            : value.settings.mouseLook === "drag"
              ? "WASD movement; hold the right mouse button and drag to look."
              : "WASD movement; click the world to capture the mouse and look around.",
    );
    const pointerLines = find(".pointer-hint").querySelectorAll("span");
    setText(
      pointerLines[0],
      value.settings.movementMode === "mouse"
        ? value.settings.mouseLook === "arrows"
          ? "Click clear ground to walk · arrow keys to look"
          : "Click clear ground to walk · right-drag to look"
        : value.settings.mouseLook === "drag"
          ? "Hold the right mouse button and drag to look"
          : value.settings.mouseLook === "arrows"
            ? "Use arrow keys to look around"
            : "Click the world to look around",
    );
    for (const key of [
      "language",
      "sensitivity",
      "volume",
      "quality",
      "invertY",
      "reducedMotion",
      "controlScheme",
      "movementMode",
      "mouseLook",
      "touchSensitivity",
      "touchScale",
      "joystickSide",
      "showMinimap",
      "minimapRotate",
    ] as const) {
      const input = find<HTMLInputElement | HTMLSelectElement>(`#${key}`);
      if (document.activeElement !== input) {
        if (input instanceof HTMLInputElement && input.type === "checkbox")
          input.checked = value.settings[key] as boolean;
        else input.value = String(value.settings[key]);
      }
    }
    setText(
      find("#sensitivity-value"),
      `${value.settings.sensitivity.toFixed(2)}×`,
    );
    setText(
      find("#volume-value"),
      `${Math.round(value.settings.volume * 100)}%`,
    );
    setText(
      find("#touchSensitivity-value"),
      `${value.settings.touchSensitivity.toFixed(2)}×`,
    );
    setText(
      find("#touchScale-value"),
      `${Math.round(value.settings.touchScale * 100)}%`,
    );
    root.classList.toggle("reduced-motion", value.settings.reducedMotion);
    if (screen === "journal") renderJournal();
    if (screen === "backpack") renderBackpack();
    if (screen === "map" && performance.now() - lastMap > 750) drawMap();
  }

  function renderBackpack() {
    if (!snapshot) return;
    const kit = snapshot.fieldKit;
    const beaconDistance = kit.beacon
      ? Math.hypot(
          kit.beacon.x - snapshot.position.x,
          kit.beacon.z - snapshot.position.z,
        )
      : Infinity;
    const signature = JSON.stringify([
      getLanguage(),
      kit.inventory,
      kit.beacon,
      kit.repaired.length,
      Math.round(beaconDistance),
    ]);
    if (signature === backpackSignature) return;
    backpackSignature = signature;
    const focused = document.activeElement as HTMLElement | null;
    const focusedItem = focused?.dataset.item;
    const focusedRecipe = focused?.dataset.recipe;
    const focusedDiscard = focused?.dataset.discard;
    const carried = inventoryTotal(kit);
    setLocalizedHTML(
      find("#bag-capacity-count"),
      `${carried} <small>/ ${BAG_CAPACITY}</small>`,
    );
    find<HTMLElement>("#bag-capacity-meter").style.transform =
      `scaleX(${carried / BAG_CAPACITY})`;
    setLocalizedHTML(
      find(".item-grid"),
      ITEM_IDS.map((id) => {
        const item = ITEMS[id];
        const quantity = kit.inventory[id];
        const useLabel =
          id === "pulse-cell" ? "Recharge sensor" : "Deploy beacon";
        return `<article class="item-card ${quantity ? "" : "item-empty"}" data-inventory-item="${id}" tabindex="-1" aria-label="${escapeText(item.name)} · ${quantity} carried" style="--item-color:${escapeText(item.color)}"><div class="item-card-top"><span class="item-symbol">${itemGlyph(id)}</span><span class="item-quantity" aria-label="${quantity} items">${quantity}<small>in bag</small></span></div><span class="item-category">${item.usable ? "Field tool" : "Crafting material"}</span><h3>${escapeText(item.name)}</h3><p>${escapeText(item.description)}</p>${item.usable ? `<button class="button button-small item-use" data-item="${id}" ${quantity ? "" : "disabled"}>${useLabel}<span>↗</span></button>` : '<span class="item-material-note">Used in crafting & repairs</span>'}${quantity ? `<button class="item-discard" data-discard="${id}" aria-label="Discard 1 ${escapeText(item.name)}">Discard 1<span aria-hidden="true">−</span></button>` : ""}</article>`;
      }).join(""),
    );
    setLocalizedHTML(
      find(".recipe-list"),
      Object.values(RECIPES)
        .map((recipe) => {
          const ready = canCraft(kit, recipe.id);
          const missing = Object.entries(recipe.cost).filter(
            ([id, amount]) => kit.inventory[id as ItemId] < amount!,
          );
          const reason = missing.length
            ? `Need ${missing.map(([id, amount]) => `${amount! - kit.inventory[id as ItemId]} ${ITEMS[id as ItemId].name.toLowerCase()}`).join(" and ")}`
            : !ready && carried >= BAG_CAPACITY
              ? "No room in your backpack"
              : "Materials ready";
          const costs = Object.entries(recipe.cost)
            .map(([id, amount]) => {
              const item = ITEMS[id as ItemId];
              const available = kit.inventory[id as ItemId];
              return `<span class="recipe-cost ${available >= amount! ? "cost-ready" : "cost-missing"}" title="${available} carried · ${amount} required"><span>${escapeText(item.name)}</span><b>${Math.min(available, amount!)} / ${amount}</b></span>`;
            })
            .join("");
          return `<article class="recipe-card"><div class="recipe-heading"><span class="item-symbol" style="--item-color:${escapeText(ITEMS[recipe.output].color)}">${itemGlyph(recipe.output)}</span><div><h3>${escapeText(recipe.name)}</h3><span>Creates 1 field tool</span></div></div><p>${escapeText(recipe.description)}</p><div class="recipe-costs">${costs}</div><div class="recipe-action"><span class="recipe-feedback ${ready ? "is-ready" : ""}">${escapeText(reason)}</span><button class="button button-small" data-recipe="${recipe.id}" ${ready ? "" : "disabled"}>Craft<span>+</span></button></div></article>`;
        })
        .join(""),
    );
    const beacon = find<HTMLElement>(".beacon-status");
    beacon.hidden = !kit.beacon;
    if (kit.beacon) {
      const packable = beaconDistance <= 5 && carried < BAG_CAPACITY;
      setLocalizedHTML(
        beacon,
        `<span class="item-symbol">${itemGlyph("survey-beacon")}</span><div><span class="eyebrow">Return beacon active</span><strong>${escapeText(coordinates(kit.beacon))} · ${Math.round(beaconDistance)} m away</strong><p>Return here from anywhere on the planet.</p></div><div class="beacon-actions"><button class="button button-small" data-action="beacon-recall">Return to beacon<span>↗</span></button><button class="button button-small" data-action="beacon-pack" ${packable ? "" : "disabled"}>Pack beacon<span>↓</span></button></div><p class="beacon-pack-note">${packable ? "Pack your beacon to reuse it elsewhere." : carried >= BAG_CAPACITY ? "Your backpack needs one free slot to pack the beacon." : "Return within 5 m to pack your beacon."}</p>`,
      );
    }
    setText(
      find("#probe-progress"),
      `${kit.repaired.length} survey probe${kit.repaired.length === 1 ? "" : "s"} restored`,
    );
    if (focusedDiscard) {
      const nextFocus =
        root.querySelector<HTMLElement>(`[data-discard="${focusedDiscard}"]`) ??
        root.querySelector<HTMLElement>(
          `[data-inventory-item="${focusedDiscard}"]`,
        );
      nextFocus?.focus({ preventScroll: true });
    } else if (focusedItem || focusedRecipe) {
      root
        .querySelector<HTMLButtonElement>(
          focusedItem
            ? `[data-item="${focusedItem}"]`
            : `[data-recipe="${focusedRecipe}"]`,
        )
        ?.focus({ preventScroll: true });
    }
  }

  function renderJournal() {
    if (!snapshot) return;
    const discoveries = snapshot.discoveries;
    const signature = `${getLanguage()}:${category}:${selectedSpecies}:${Object.entries(
      discoveries,
    )
      .map(([id, record]) => `${id}-${record.count}`)
      .join(",")}:${snapshot.level}`;
    if (journalSignature === signature) return;
    journalSignature = signature;
    const visible = SPECIES.filter(
      (species) => category === "all" || species.category === category,
    );
    if (
      !selectedSpecies ||
      !visible.some((species) => species.id === selectedSpecies)
    )
      selectedSpecies =
        visible.find((species) => !!discoveries[species.id])?.id ??
        visible[0]?.id ??
        null;
    const count = Object.keys(discoveries).length;
    setText(
      find("#atlas-count"),
      `${count} of ${SPECIES.length} specimens catalogued · ${snapshot.sitesCompleted} research sites resolved`,
    );
    setLocalizedHTML(
      find(".species-list"),
      visible
        .map((species, index) => {
          const discovered = !!discoveries[species.id];
          return `<button class="species-row ${discovered ? "is-discovered" : "is-unknown"} ${species.id === selectedSpecies ? "is-selected" : ""}" data-species="${escapeText(species.id)}" aria-pressed="${species.id === selectedSpecies}"><span class="record-number">${String(index + 1).padStart(2, "0")}</span><span class="species-mark ${species.category}" style="--specimen-color:${escapeText(species.color)}" aria-hidden="true"></span><span class="record-name"><b>${escapeText(discovered ? species.name : "Uncatalogued specimen")}</b><small>${escapeText(species.biome)} / ${escapeText(species.category)}</small></span><span class="record-state">${discovered ? (species.rarity === "rare" ? "Rare" : "Filed") : "—"}</span></button>`;
        })
        .join(""),
    );
    const species = selectedSpecies ? SPECIES_BY_ID[selectedSpecies] : null;
    const detail = find(".species-detail");
    if (!species) {
      setLocalizedHTML(detail, "<p>No records in this category.</p>");
      return;
    }
    const record = discoveries[species.id];
    setLocalizedHTML(
      detail,
      `<div class="specimen-plate ${record ? "" : "plate-unknown"}" style="--specimen-color:${escapeText(species.color)}"><span class="plate-label">${record ? "Field record" : "Unresolved record"}</span>${record ? `<img class="specimen-portrait" src="/specimens/${escapeText(species.id)}.png" alt="${escapeText(species.name)} — rendered field specimen" width="384" height="384">` : `<div class="specimen-diagram ${species.category}" aria-hidden="true"><i></i><i></i><i></i><i></i><b></b></div>`}<span class="plate-number">${record ? escapeText(species.rarity) : "Awaiting observation"}</span></div><div class="record-copy"><span class="eyebrow">${escapeText(species.biome)} / ${escapeText(species.category)}</span><h2>${escapeText(record ? species.name : "A world still unfolding")}</h2><p class="record-subtitle">${escapeText(record ? species.subtitle : "This specimen has not yet entered your atlas.")}</p><p>${escapeText(record ? species.description : `Explore ${biomeNames[species.biome].toLowerCase()} and follow the survey pulse to find new specimens.`)}</p>${record ? `<div class="field-insight"><span class="eyebrow">Ecological insight</span><p>${escapeText(species.insight)}</p></div><dl class="record-meta"><div><dt>First observed</dt><dd>${escapeText(coordinates(record.firstFound))}</dd></div><div><dt>Observations</dt><dd>${record.count}</dd></div></dl>` : '<div class="field-insight"><span class="eyebrow">A note for the field</span><p>Rare findings are revealed by completing investigation sites. Scan their three clues before examining the landmark.</p></div>'}</div>`,
    );
    setText(
      find("#research-summary"),
      `Level ${snapshot.level} · ${rankNames[Math.min(snapshot.level - 1, rankNames.length - 1)] ?? "Researcher"}`,
    );
    setLocalizedHTML(
      find(".milestone-list"),
      LEVEL_THRESHOLDS.map(
        (xp, index) =>
          `<div class="milestone ${snapshot!.xp >= xp ? "is-achieved" : ""}" title="${escapeText(rankNames[index] ?? "Research milestone")} · ${xp} XP"><span>${String(index + 1).padStart(2, "0")}</span><i></i><small>${xp} XP</small></div>`,
      ).join(""),
    );
  }

  function drawMap() {
    if (!snapshot) return;
    const context = mapCanvas.getContext("2d");
    if (!context) return;
    lastMap = performance.now();
    const w = mapCanvas.width;
    const h = mapCanvas.height;
    const metresPerPixel = mapSpan / w;
    const left = snapshot.position.x - mapSpan / 2;
    const top = snapshot.position.z - (h * metresPerPixel) / 2;
    const visited = new Set(snapshot.visitedChunks);
    context.fillStyle = "#1a272b";
    context.fillRect(0, 0, w, h);
    const cell = 16;
    for (let py = 0; py < h; py += cell) {
      for (let px = 0; px < w; px += cell) {
        const wx = left + (px + cell / 2) * metresPerPixel;
        const wz = top + (py + cell / 2) * metresPerPixel;
        const habitat = getHabitat(snapshot.seed, wx, wz);
        const key = `${Math.floor(wx / CHUNK_SIZE)},${Math.floor(wz / CHUNK_SIZE)}`;
        const alternate = `${Math.floor(wx / CHUNK_SIZE)}:${Math.floor(wz / CHUNK_SIZE)}`;
        const seen = visited.has(key) || visited.has(alternate);
        context.globalAlpha = seen ? 0.84 : 0.24;
        context.fillStyle = waterAt(snapshot.seed, wx, wz)
          ? "#72a9b5"
          : HABITATS[habitat].ground;
        context.fillRect(px, py, cell + 1, cell + 1);
      }
    }
    context.globalAlpha = 1;
    context.strokeStyle = "rgba(235,234,219,.1)";
    context.lineWidth = 1;
    const grid = CHUNK_SIZE / metresPerPixel;
    const firstX = (((-left / metresPerPixel) % grid) + grid) % grid;
    const firstZ = (((-top / metresPerPixel) % grid) + grid) % grid;
    context.beginPath();
    for (let x = firstX; x < w; x += grid) {
      context.moveTo(x, 0);
      context.lineTo(x, h);
    }
    for (let y = firstZ; y < h; y += grid) {
      context.moveTo(0, y);
      context.lineTo(w, y);
    }
    context.stroke();
    const point = (position: Position) => ({
      x: (position.x - left) / metresPerPixel,
      y: (position.z - top) / metresPerPixel,
    });
    const pod = point({ x: 0, z: 0 });
    context.strokeStyle = "#f0eedd";
    context.lineWidth = 2;
    context.beginPath();
    context.arc(pod.x, pod.y, 8, 0, Math.PI * 2);
    context.stroke();
    context.font =
      '15px "Space Grotesk", "PingFang SC", "Microsoft YaHei", sans-serif';
    context.fillStyle = "#f0eedd";
    context.fillText(t("LANDING POD"), pod.x + 16, pod.y + 5);
    for (const record of Object.values(snapshot.discoveries)) {
      const location = point(record.firstFound);
      context.fillStyle = "rgba(240,238,221,.55)";
      context.beginPath();
      context.arc(location.x, location.y, 3, 0, Math.PI * 2);
      context.fill();
    }
    for (const marker of snapshot.fieldMarkers) {
      if (
        Math.hypot(
          marker.x - snapshot.position.x,
          marker.z - snapshot.position.z,
        ) > 80 &&
        marker.kind !== "beacon"
      )
        continue;
      const location = point(marker);
      if (location.x < 0 || location.y < 0 || location.x > w || location.y > h)
        continue;
      drawFieldMarker(
        context,
        marker.kind,
        location.x,
        location.y,
        marker.kind === "beacon" ? 6 : 4,
      );
    }
    if (snapshot.waypoint) {
      const waypoint = point(snapshot.waypoint);
      context.strokeStyle = "#efc493";
      context.setLineDash([4, 7]);
      context.beginPath();
      context.moveTo(w / 2, h / 2);
      context.lineTo(waypoint.x, waypoint.y);
      context.stroke();
      context.setLineDash([]);
      context.save();
      context.translate(waypoint.x, waypoint.y);
      context.rotate(Math.PI / 4);
      context.strokeRect(-7, -7, 14, 14);
      context.restore();
    }
    context.save();
    context.translate(w / 2, h / 2);
    context.rotate(-snapshot.heading);
    context.fillStyle = "#f6f2de";
    context.beginPath();
    context.moveTo(0, -13);
    context.lineTo(9, 10);
    context.lineTo(0, 6);
    context.lineTo(-9, 10);
    context.closePath();
    context.fill();
    context.restore();
    setText(find("#map-scale"), `${mapSpan} m span`);
  }

  function notify(
    titleText: string,
    body = "",
    type: "info" | "success" | "error" = "info",
  ) {
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    const mark = document.createElement("span");
    mark.className = "toast-mark";
    mark.textContent = type === "error" ? "!" : type === "success" ? "+" : "·";
    mark.setAttribute("aria-hidden", "true");
    const copy = document.createElement("div");
    const heading = document.createElement("strong");
    setText(heading, titleText);
    copy.append(heading);
    if (body) {
      const paragraph = document.createElement("p");
      setText(paragraph, body);
      copy.append(paragraph);
    }
    const close = document.createElement("button");
    close.textContent = "×";
    close.setAttribute("aria-label", "Dismiss notification");
    localizeElement(close);
    close.addEventListener("click", () => toast.remove());
    toast.append(mark, copy, close);
    const stack = find(".toast-stack");
    stack.append(toast);
    while (stack.children.length > 4) stack.firstElementChild?.remove();
    setTimeout(
      () => {
        toast.classList.add("toast-leaving");
        setTimeout(() => toast.remove(), 220);
      },
      type === "error" ? 12000 : 8000,
    );
  }
  function showDiscovery(species: SpeciesDef, record: DiscoveryRecord) {
    if (discoveryTimer) clearTimeout(discoveryTimer);
    discoveryCard.hidden = false;
    discoveryCard.dataset.species = species.id;
    discoveryCard.style.setProperty("--specimen-color", species.color);
    setText(discoveryCard.querySelector("h2"), species.name);
    setText(
      discoveryCard.querySelector(".discovery-title p"),
      species.subtitle,
    );
    setText(
      discoveryCard.querySelector(".discovery-category"),
      `${species.category} / ${species.rarity} · ${record.count} observation${record.count === 1 ? "" : "s"}`,
    );
    const glyph = discoveryCard.querySelector(".discovery-glyph")!;
    glyph.className = `discovery-glyph ${species.category}`;
    discoveryTimer = setTimeout(() => {
      discoveryCard.hidden = true;
    }, 11000);
  }
  document.addEventListener("vesper-languagechange", () => {
    root.dataset.language = getLanguage();
    localizeElement(root);
    journalSignature = "";
    backpackSignature = "";
    if (snapshot) updateInstruments(snapshot);
    if (screen === "map") drawMap();
  });
  setScreen("title");
  return {
    update(value) {
      snapshot = value;
      if (performance.now() - lastUpdate < 90) return;
      lastUpdate = performance.now();
      updateInstruments(value);
    },
    setScreen,
    notify,
    showDiscovery,
    isOverlayOpen: () => screen !== "playing" && screen !== "photo",
    getScreen: () => screen,
  };
}
