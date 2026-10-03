import * as THREE from "three";
import { createUI } from "./ui";
import {
  getLanguage,
  readLanguagePreference,
  setLanguage,
  localizeElement,
} from "./i18n";
import "./style.css";
import "./controls.css";
import {
  createControls,
  effectiveMouseLook,
  isMobileDevice,
  touchEnabled,
} from "./controls";
import { FieldWorld } from "./field-world";
import {
  BAG_CAPACITY,
  FIELD_NODE_NAMES,
  ITEMS,
  RECIPES,
  PROBE_REPAIR_COST,
} from "./field-data";
import {
  collectNode,
  craftItem,
  consumeItem,
  repairProbe,
  placeBeacon,
  packBeacon,
  inventoryTotal,
} from "./systems/fieldcraft";
import { Explorer } from "./player";
import { PlanetWorld, createAtmosphere } from "./world";
import { createScanner, MODEL_BOUNDS } from "./models";
import {
  selectScanTarget,
  getScanStatus,
  scanFeedback,
  fieldScanFeedback,
  noScanTargetFeedback,
  adaptScanText,
  type ScanStatus,
} from "./scan-feedback";
import { Soundscape } from "./audio";
import { getHomeLake, waterAt } from "./systems/waters";
import { SPECIES, SPECIES_BY_ID } from "./data";
import {
  CHUNK_SIZE,
  getBiome,
  getHabitat,
  getRegionName,
  heightAt,
} from "./systems/worldgen";
import { ExpeditionState, parseSave } from "./systems/state";
import type {
  UISnapshot,
  Position,
  Settings,
  TargetInfo,
  Objective,
  FieldTargetInfo,
  ItemId,
  RecipeId,
} from "./types";

const canvas = document.querySelector<HTMLCanvasElement>("#world")!;
const app = document.querySelector<HTMLElement>("#app")!;
let renderer: THREE.WebGLRenderer;
try {
  renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    powerPreference: "high-performance",
  });
} catch {
  app.innerHTML =
    '<main style="padding:10vh 8vw;color:#edf3df;background:#162729;min-height:100vh;font-family:system-ui"><h1>Vesper needs a 3D-capable browser.</h1><p>Enable hardware acceleration and open this page in a current desktop browser.</p><p>Your expedition save will stay on this device.</p></main>';
  setLanguage(getLanguage());
  localizeElement(app);
  throw new Error("WebGL renderer could not initialize.");
}
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
renderer.setSize(innerWidth, innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.18;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
const scene = new THREE.Scene();
scene.fog = new THREE.Fog("#b5c5b0", 100, 225);
const camera = new THREE.PerspectiveCamera(
  68,
  innerWidth / innerHeight,
  0.08,
  510,
);
scene.add(camera);
const explorer = new Explorer(camera);
const ambient = new THREE.HemisphereLight("#d9eadf", "#587466", 2.1);
scene.add(ambient);
const sun = new THREE.DirectionalLight("#ffdfad", 3.1);
sun.position.set(-60, 80, -50);
sun.castShadow = true;
sun.shadow.mapSize.set(1024, 1024);
sun.shadow.camera.left = -45;
sun.shadow.camera.right = 45;
sun.shadow.camera.top = 45;
sun.shadow.camera.bottom = -45;
sun.shadow.camera.near = 1;
sun.shadow.camera.far = 200;
sun.shadow.normalBias = 0.08;
sun.shadow.bias = -0.0001;
scene.add(sun, sun.target);
const headlight = new THREE.PointLight("#a3d6e7", 0, 65, 1.6);
scene.add(headlight);
const atmosphere = createAtmosphere(scene);
const scanner = createScanner();
camera.add(scanner);
scanner.scale.setScalar(0.78);
scanner.position.set(0.32, -0.29, -0.64);
scanner.rotation.set(0.04, -0.06, 0);
const sound = new Soundscape();
const saved = ExpeditionState.load();
let state = new ExpeditionState(saved?.seed ?? "VESPER-01", saved ?? undefined);
state.data.settings.language =
  readLanguagePreference() ?? saved?.settings.language ?? "en";
setLanguage(state.data.settings.language);
function effectiveSettings(): Settings {
  const settings = state.data.settings;
  return touchEnabled(settings) && settings.quality === "balanced"
    ? { ...settings, quality: "low" }
    : settings;
}
let world = new PlanetWorld(scene, state.data.seed, effectiveSettings());
let fieldWorld = new FieldWorld(state.data.seed);
scene.add(fieldWorld.group);
let started = false,
  paused = true,
  saveOK = !!saved,
  scanHeld = false,
  clickScanUntil = 0,
  scanProgress = 0,
  lastTarget = "",
  lastScanFeedbackAt = -10;
let saveFailureNotified = false;
let elapsed = state.data.time,
  pulseCooldown = 0,
  lastSave = 0,
  lastUI = 0,
  lastFrame = performance.now(),
  fps = 60;
let waypoint: Position | null = null;
let targetEntry: ReturnType<PlanetWorld["getEntities"]>[number] | null = null;
let targetDistance = 0;
let targetStatus: ScanStatus = "ready";
let restoreClearancePending = false;
let ui: ReturnType<typeof createUI>;
let controls: ReturnType<typeof createControls> | undefined;
const scratch = new THREE.Vector3(),
  lookDirection = new THREE.Vector3(),
  moonOffset = new THREE.Vector3(-170, 118, -330);

function playerHeightAt(seed: string, x: number, z: number) {
  const water = waterAt(seed, x, z);
  return Math.max(heightAt(seed, x, z), water ? water.level - 0.95 : -Infinity);
}
function currentRange() {
  return 13 + (state.getLevel() - 1) * 3;
}
function clearTransient() {
  waypoint = null;
  targetEntry = null;
  targetDistance = 0;
  targetStatus = "ready";
  scanProgress = 0;
  lastTarget = "";
  scanHeld = false;
  clickScanUntil = 0;
  pulseCooldown = 0;
  lastScanFeedbackAt = -10;
  lastSave = 0;
  explorer.clearKeys();
}
function storePosition() {
  state.data.position = { x: explorer.position.x, z: explorer.position.z };
  state.data.heading = explorer.yaw;
  state.data.pitch = explorer.pitch;
  state.data.time = elapsed;
}
function saveNow() {
  if (!started) return;
  storePosition();
  saveOK = state.save();
  lastSave = elapsed;
  if (!saveOK && !saveFailureNotified) {
    saveFailureNotified = true;
    ui.notify(
      "Your expedition could not be saved",
      "Browser storage is unavailable or full. Export your expedition from the pause menu to keep a backup.",
      "error",
    );
  }
  if (saveOK) saveFailureNotified = false;
}
function exitPointer() {
  if (document.pointerLockElement === canvas) document.exitPointerLock();
}
async function requestPointer() {
  if (paused) return;
  controls?.sync(
    state.data.settings,
    ui.getScreen() === "playing" || ui.getScreen() === "photo",
  );
  await controls?.requestPointer();
}
function pause(
  screen:
    "pause" | "journal" | "map" | "settings" | "help" | "backpack" = "pause",
) {
  if (!started) return;
  paused = true;
  explorer.clearKeys();
  controls?.reset();
  scanHeld = false;
  clickScanUntil = 0;
  saveNow();
  exitPointer();
  ui.setScreen(screen);
  controls?.sync(state.data.settings, false);
}
function resume() {
  if (!started) return;
  paused = false;
  ui.setScreen("playing");
  sound.start();
  void requestPointer();
}
function start(seed?: string, newGame = false) {
  const shouldCreate =
    newGame || (!started && seed !== undefined && seed !== state.data.seed);
  if (shouldCreate) {
    const next = (
      seed?.trim().replace(/[<>\u0000-\u001f]/g, "") ||
      `VSP-${Math.random().toString(36).slice(2, 7).toUpperCase()}`
    ).slice(0, 64);
    try {
      localStorage.removeItem("vesper-expedition-v1");
      localStorage.removeItem("vesper-expedition-v1-backup");
    } catch {
      /* Export remains available if local storage is denied. */
    }
    const preferences = { ...state.data.settings };
    state = new ExpeditionState(next);
    state.data.settings = preferences;
    world.dispose();
    fieldWorld.dispose();
    scene.remove(fieldWorld.group);
    world = new PlanetWorld(scene, next, effectiveSettings());
    fieldWorld = new FieldWorld(next);
    scene.add(fieldWorld.group);
    elapsed = 0;
    clearTransient();
  }
  if (!started || shouldCreate) {
    explorer.teleport(
      state.data.position,
      (x, z) => playerHeightAt(state.data.seed, x, z),
      state.data.heading,
      state.data.pitch,
    );
    started = true;
    restoreClearancePending = !shouldCreate;
  }
  applySettings({});
  resume();
  saveNow();
  ui.notify(
    "Expedition active",
    Object.keys(state.data.discoveries).length
      ? "Your field atlas is ready. Continue where you left off."
      : touchEnabled(state.data.settings)
        ? "Follow the green signal ahead. Aim and hold Scan to make your first observation."
        : "Follow the green signal ahead. Hold E to make your first observation.",
  );
}
function applySettings(patch: Partial<Settings>) {
  state.data.settings = { ...state.data.settings, ...patch };
  setLanguage(state.data.settings.language);
  const settings = effectiveSettings();
  const ratios = { low: 1, balanced: 1.5, high: 2 };
  const mobile = touchEnabled(state.data.settings);
  renderer.setPixelRatio(
    Math.min(devicePixelRatio, ratios[settings.quality], mobile ? 1.25 : 2),
  );
  renderer.shadowMap.enabled = settings.quality !== "low" && !mobile;
  world.setQuality(settings);
  controls?.sync(
    state.data.settings,
    started &&
      !paused &&
      (ui.getScreen() === "playing" || ui.getScreen() === "photo"),
  );
  sound.setVolume(settings.volume);
  if (started) saveNow();
}
function download(name: string, blob: Blob) {
  const url = URL.createObjectURL(blob),
    a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}
function capture() {
  renderer.render(scene, camera);
  canvas.toBlob((blob) => {
    if (blob) {
      download(`vesper-${Math.floor(elapsed)}.png`, blob);
      ui.notify(
        "Field photograph saved",
        "A clean image of the current landscape.",
      );
    }
  }, "image/png");
}
ui = createUI(app, {
  start,
  resume,
  pause: () => pause(),
  scan: () => {
    if (!paused) {
      requestScan(false);
      clickScanUntil = performance.now() + 1700;
      sound.start();
    }
  },
  pulse: () => pulse(),
  interact,
  craft: craft,
  useItem,
  discardItem: (item) => {
    if (!started) return;
    const result = consumeItem(state.data.fieldKit, item);
    if (!result.ok) {
      ui.notify("No item to discard", result.reason ?? "Your bag is empty.");
      return;
    }
    refreshFieldKit();
    ui.notify(
      "One item discarded",
      `${ITEMS[item].name} · backpack space freed.`,
    );
  },
  recallBeacon,
  packBeacon: recoverBeacon,
  setWaypoint: (point) => {
    waypoint = point;
    if (point)
      ui.notify("Waypoint placed", "Your compass will guide you there.");
  },
  setSettings: applySettings,
  exportSave: () => {
    saveNow();
    download(
      `vesper-${state.data.seed.replace(/[^a-z0-9-]/gi, "_")}.json`,
      new Blob([state.export()], { type: "application/json" }),
    );
    ui.notify(
      "Atlas exported",
      "Keep this file as a backup or import it on another browser.",
    );
  },
  importSave: async (file) => {
    try {
      if (file.size > 8_000_000) throw new Error("Save file is too large.");
      const data = parseSave(await file.text());
      world.dispose();
      fieldWorld.dispose();
      scene.remove(fieldWorld.group);
      state = new ExpeditionState(data.seed, data);
      world = new PlanetWorld(scene, data.seed, effectiveSettings());
      fieldWorld = new FieldWorld(data.seed);
      scene.add(fieldWorld.group);
      elapsed = data.time;
      clearTransient();
      started = true;
      restoreClearancePending = true;
      explorer.teleport(
        data.position,
        (x, z) => playerHeightAt(data.seed, x, z),
        data.heading,
        data.pitch,
      );
      applySettings({});
      saveNow();
      pause();
      ui.notify(
        "Expedition restored",
        `${Object.keys(data.discoveries).length} findings restored to your field atlas.`,
        "success",
      );
    } catch (error) {
      ui.notify(
        "Could not restore this atlas",
        error instanceof Error
          ? error.message
          : "Please choose a valid Vesper save file.",
        "error",
      );
    }
  },
  reset: () => {
    started = false;
    start(undefined, true);
  },
  recall: () => {
    if (!started) return;
    explorer.teleport(
      { x: 0, z: 0 },
      (x, z) => playerHeightAt(state.data.seed, x, z),
      0,
      0,
    );
    waypoint = null;
    saveNow();
    ui.notify(
      "Returned to the landing site",
      "Your discoveries and research are preserved.",
    );
    resume();
  },
  photo: () => {
    if (!started) return;
    if (ui.getScreen() === "photo") {
      ui.setScreen("playing");
    } else {
      paused = false;
      ui.setScreen("photo");
      void requestPointer();
    }
  },
  capture,
});
const groundRay = new THREE.Raycaster();
controls = createControls(canvas, explorer, {
  getSettings: () => state.data.settings,
  canPlay: () =>
    started &&
    !paused &&
    (ui.getScreen() === "playing" || ui.getScreen() === "photo"),
  pickGround: (clientX, clientY) => {
    const rect = canvas.getBoundingClientRect();
    groundRay.setFromCamera(
      new THREE.Vector2(
        ((clientX - rect.left) / rect.width) * 2 - 1,
        -((clientY - rect.top) / rect.height) * 2 + 1,
      ),
      camera,
    );
    const hit = groundRay.intersectObjects(world.getTerrainMeshes(), false)[0];
    if (
      !hit ||
      Math.hypot(
        hit.point.x - explorer.position.x,
        hit.point.z - explorer.position.z,
      ) > 80
    )
      return null;
    if (world.isBlocked(hit.point.x, hit.point.z)) {
      ui.notify(
        "Choose open ground",
        "That spot is occupied by scenery. Try nearby ground.",
      );
      return null;
    }
    return { x: hit.point.x, z: hit.point.z };
  },
  actions: {
    scanHeld: (held) => {
      if (held) requestScan();
      else releaseScan();
    },
    interact,
    pulse,
    backpack: () => pause("backpack"),
    map: () => pause("map"),
    pause: () => pause(),
  },
  onActivity: () => sound.start(),
  onNotice: (title, detail) => ui.notify(title, detail),
});
ui.setScreen("title");
applySettings({});

function pulse(force = false) {
  if (!started || (!force && paused)) return;
  if (!force && pulseCooldown > 0) {
    ui.notify(
      "Sensor still recharging",
      "Wait until the survey sensor says Pulse ready, or use a crafted pulse cell from your backpack.",
    );
    return;
  }
  sound.start();
  sound.pulse();
  world.pulse(elapsed, explorer.position);
  pulseCooldown = Math.max(3, 7 - state.getLevel() * 0.4);
  ui.notify(
    "Survey pulse",
    "Nearby specimens are marked. Check the map for field supplies and damaged probes.",
  );
}
function fieldTarget(): FieldTargetInfo | null {
  const node = fieldWorld.nearestTarget(camera, explorer.position, 12);
  if (!node) return null;
  const kit = state.data.fieldKit;
  const distance = Math.hypot(
    node.x - explorer.position.x,
    node.z - explorer.position.z,
  );
  const key = touchEnabled(state.data.settings) ? "Use" : "F";
  const inReach = distance <= 5;
  const visible = world.canObserve(
    camera.position,
    fieldWorld.getPosition(node),
  );
  const blockedPrompt = !inReach
    ? "Move within 5 m · collect / repair"
    : !visible
      ? "Move around the obstacle · clear view needed"
      : null;
  if (node.kind === "probe") {
    const available = Object.entries(PROBE_REPAIR_COST).every(
      ([item, count]) => kit.inventory[item as ItemId] >= count!,
    );
    return {
      id: node.id,
      kind: node.kind,
      title: FIELD_NODE_NAMES[node.kind],
      distance,
      available: available && inReach && visible,
      detail:
        "Repair with 2 alloy + 1 crystal. Earn 55 research XP and locate a supply cache.",
      prompt:
        blockedPrompt ??
        (available
          ? `${key} · repair probe`
          : "Needs 2 alloy + 1 crystal · collect supplies first"),
    };
  }
  const rewards = Object.entries(node.rewards);
  const available =
    inventoryTotal(kit) + rewards.reduce((sum, [, count]) => sum + count!, 0) <=
    BAG_CAPACITY;
  return {
    id: node.id,
    kind: node.kind,
    title: FIELD_NODE_NAMES[node.kind],
    distance,
    available: available && inReach && visible,
    detail: rewards
      .map(([item, count]) => `${count} × ${ITEMS[item as ItemId].name}`)
      .join(" · "),
    prompt:
      blockedPrompt ??
      (available
        ? `${key} · collect supplies`
        : "Backpack full · craft, use or discard supplies"),
  };
}
function refreshFieldKit() {
  fieldWorld.update(
    explorer.position,
    state.data.fieldKit,
    elapsed,
    effectiveSettings(),
  );
  saveNow();
  ui.update(snapshot());
}
function interact() {
  if (!started || paused) return;
  const node = fieldWorld.nearestTarget(camera, explorer.position);
  if (!node) {
    const nearby = fieldWorld.nearestTarget(camera, explorer.position, 12);
    ui.notify(
      nearby ? "Move closer to the field supply" : "Nothing in reach",
      "Move within 5 metres of a field supply or damaged probe and face it. Hold E scans specimens; F collects supplies and repairs probes.",
    );
    return;
  }
  if (!world.canObserve(camera.position, fieldWorld.getPosition(node))) {
    ui.notify(
      "Move around the obstacle",
      "You need a clear view of this field supply or probe.",
    );
    return;
  }
  const repaired = node.kind === "probe";
  const result = repaired
    ? repairProbe(state.data.fieldKit, node)
    : collectNode(state.data.fieldKit, node);
  if (!result.ok) {
    ui.notify("Field action unavailable", result.reason ?? "Try again.");
    return;
  }
  if (repaired) {
    const previousLevel = state.getLevel();
    state.data.xp += 55;
    const next = fieldWorld
      .getNodes()
      .filter(
        (n) =>
          n.kind === "cache" && !state.data.fieldKit.collected.includes(n.id),
      )
      .sort(
        (a, b) =>
          Math.hypot(a.x - node.x, a.z - node.z) -
          Math.hypot(b.x - node.x, b.z - node.z),
      )[0];
    if (next) waypoint = { x: next.x, z: next.z };
    sound.activate();
    ui.notify(
      "Survey probe restored · +55 XP",
      next
        ? "A supply cache has been marked on your map."
        : "Keep exploring for new field supplies.",
      "success",
    );
    if (state.getLevel() > previousLevel)
      ui.notify(
        `Research level ${state.getLevel()}`,
        `Scanner reach increased to ${currentRange()} metres.`,
        "success",
      );
  } else {
    sound.scan();
    ui.notify(
      "Supplies added to backpack",
      Object.entries(node.rewards)
        .map(([item, count]) => `${count} × ${ITEMS[item as ItemId].name}`)
        .join(" · "),
      "success",
    );
  }
  refreshFieldKit();
}
function craft(recipe: RecipeId) {
  if (!started) return;
  const result = craftItem(state.data.fieldKit, recipe);
  if (!result.ok) {
    ui.notify("Cannot craft yet", result.reason ?? "Gather supplies.");
    return;
  }
  ui.notify(
    `${RECIPES[recipe].name} crafted`,
    "Available in your backpack.",
    "success",
  );
  refreshFieldKit();
}
function useItem(item: ItemId) {
  if (!started) return;
  if (item === "pulse-cell") {
    const result = consumeItem(state.data.fieldKit, item);
    if (!result.ok) {
      ui.notify("No pulse cell available", result.reason ?? "Craft one first.");
      return;
    }
    refreshFieldKit();
    resume();
    pulse(true);
  } else if (item === "survey-beacon") {
    const point = {
      x: explorer.position.x - Math.sin(explorer.yaw) * 2.5,
      z: explorer.position.z - Math.cos(explorer.yaw) * 2.5,
    };
    const footprint = [
      [0, 0],
      [-0.85, -0.85],
      [-0.85, 0.85],
      [0.85, -0.85],
      [0.85, 0.85],
    ];
    if (
      footprint.some(
        ([dx, dz]) =>
          waterAt(state.data.seed, point.x + dx, point.z + dz) ||
          world.isBlocked(point.x + dx, point.z + dz),
      )
    ) {
      ui.notify(
        "Find clear dry ground",
        "Face an open patch of land before deploying your beacon.",
      );
      return;
    }
    const result = placeBeacon(state.data.fieldKit, point);
    if (!result.ok) {
      ui.notify("Beacon unavailable", result.reason ?? "Try again.");
      return;
    }
    refreshFieldKit();
    ui.notify(
      "Return beacon deployed",
      "It is marked on the map. Return to it from your backpack.",
      "success",
    );
  }
}
function recallBeacon() {
  const beacon = state.data.fieldKit.beacon;
  if (!started || !beacon) return;
  const clear = world.nearbyClearPosition(beacon);
  explorer.teleport(
    clear,
    (x, z) => playerHeightAt(state.data.seed, x, z),
    explorer.yaw,
    0,
  );
  restoreClearancePending = true;
  waypoint = { ...beacon };
  saveNow();
  resume();
  ui.notify(
    "Returned to your survey beacon",
    "Your field camp is ready for another expedition.",
    "success",
  );
}
function recoverBeacon() {
  const beacon = state.data.fieldKit.beacon;
  if (!started || !beacon) return;
  if (
    Math.hypot(beacon.x - explorer.position.x, beacon.z - explorer.position.z) >
    5
  ) {
    ui.notify(
      "Move closer to your beacon",
      "Return to it before packing it into your backpack.",
    );
    return;
  }
  const result = packBeacon(state.data.fieldKit);
  if (!result.ok) {
    ui.notify("Cannot pack beacon", result.reason ?? "Try again.");
    return;
  }
  if (
    waypoint &&
    Math.hypot(waypoint.x - beacon.x, waypoint.z - beacon.z) < 0.1
  )
    waypoint = null;
  refreshFieldKit();
  ui.notify(
    "Beacon packed",
    "You can deploy it again in another location.",
    "success",
  );
}
function objective(): Objective {
  const count = Object.keys(state.data.discoveries).length;
  if (count === 0)
    return {
      title: "A first observation",
      detail: "Find the luminous specimen ahead. Aim at it and hold E.",
      progress: 0,
      total: 1,
    };
  const firstSite =
    world.getSites().find((s) => s.id.includes("intro")) ??
    world.getSites().find((s) => Math.hypot(s.x, s.z + 35) < 3);
  if (state.data.completedSites.length === 0) {
    const clues = firstSite ? state.getSiteProgress(firstSite) : 0;
    return {
      title: "The listening grove",
      detail:
        clues === 3
          ? "Return to the central landmark. Hold E to reveal its finding."
          : "Follow the path north. Hold E to record each of the three clues around the grove, then scan its central landmark.",
      progress: clues,
      total: 3,
    };
  }
  if (state.data.visitedBiomes.length < 3)
    return {
      title: "Beyond the canopy",
      detail:
        "Desert lies east; luminous caverns lie south. Use M to place a waypoint.",
      progress: state.data.visitedBiomes.length,
      total: 3,
    };
  const rare = Object.keys(state.data.discoveries).filter(
    (id) => SPECIES_BY_ID[id]?.rarity === "rare",
  ).length;
  if (rare < 3)
    return {
      title: "Three ecological signatures",
      detail:
        "Investigate one landmark in each biome. Their findings are related.",
      progress: rare,
      total: 3,
    };
  if (count < SPECIES.length)
    return {
      title: "An atlas of elsewhere",
      detail: "Seek new habitats and complete the planet’s field catalogue.",
      progress: count,
      total: SPECIES.length,
    };
  return {
    title: "The horizon remains open",
    detail:
      "Your catalogue is complete. Keep exploring new regions and recording observations.",
    progress: state.data.visitedChunks.length,
    total: state.data.visitedChunks.length + 10,
  };
}
function requestScan(held = true) {
  if (!started || paused || ui.getScreen() !== "playing") return;
  updateTarget(0);
  scanHeld = held;
  if (targetEntry && targetStatus === "ready") return;
  const touch = touchEnabled(state.data.settings);
  const feedback = targetEntry
    ? scanFeedback(targetStatus, targetEntry.data.role === "landmark")
    : fieldTarget()
      ? fieldScanFeedback(touch)
      : noScanTargetFeedback(touch);
  if (elapsed - lastScanFeedbackAt > 0.5) {
    lastScanFeedbackAt = elapsed;
    ui.notify(feedback.title, adaptScanText(feedback.detail, touch));
  }
}
function releaseScan() {
  if (scanHeld && !paused && scanProgress > 0 && scanProgress < 1) {
    const feedback = scanFeedback("ready");
    ui.notify(
      feedback.title,
      adaptScanText(feedback.detail, touchEnabled(state.data.settings)),
    );
  }
  scanHeld = false;
}
function updateTarget(dt: number) {
  camera.getWorldDirection(lookDirection);
  const selection = selectScanTarget(world.getEntities(), {
    origin: camera.position,
    direction: lookDirection,
    range: currentRange(),
    object: (entry) => entry.object,
    point: (entry) => world.getEntityPosition(entry),
    radius: (entry) =>
      MODEL_BOUNDS[SPECIES_BY_ID[entry.data.speciesId].model].radius *
      entry.data.scale,
    height: (entry) =>
      MODEL_BOUNDS[SPECIES_BY_ID[entry.data.speciesId].model].height *
      entry.data.scale,
    recorded: (entry) => !!state.data.scanned[entry.data.id],
    canObserve: (point) => world.canObserve(camera.position, point),
  });
  const supply = fieldWorld.nearestTarget(camera, explorer.position, 12);
  let supplyInCrosshair = false;
  if (supply) {
    scratch.copy(fieldWorld.getPosition(supply)).sub(camera.position);
    const supplyDistance = scratch.length();
    supplyInCrosshair =
      supplyDistance > 0 &&
      scratch.dot(lookDirection) / supplyDistance > 0.97 &&
      (!selection || supplyDistance < selection.distance - 0.4);
  }
  // Supplies have their own F / Use interaction. Do not silently scan a
  // specimen behind the cache when the player is aiming at its contents.
  const candidate = supplyInCrosshair ? null : (selection?.entry ?? null);
  targetEntry = candidate;
  if (!candidate) {
    world.focus("");
    scanProgress = Math.max(0, scanProgress - dt * 3);
    lastTarget = "";
    return;
  }
  if (candidate.data.id !== lastTarget) {
    scanProgress = 0;
    lastTarget = candidate.data.id;
  }
  const entity = candidate.data,
    site = world.getSite(entity.siteId);
  const locked =
    entity.role === "landmark" && !!site && state.getSiteProgress(site) < 3;
  targetDistance = selection!.distance;
  targetStatus = getScanStatus(
    {
      distance: targetDistance,
      visible: selection!.visible,
      scanned: !!state.data.scanned[entity.id],
      locked,
    },
    currentRange(),
  );
  world.focus(
    targetStatus === "ready" ||
      targetStatus === "locked" ||
      targetStatus === "recorded"
      ? candidate.data.id
      : "",
  );
  if (targetStatus !== "ready") {
    scanProgress = 0;
    return;
  }
  if (
    (scanHeld || performance.now() < clickScanUntil) &&
    !state.data.scanned[entity.id]
  ) {
    scanProgress += dt / (entity.role === "landmark" ? 1.6 : 1.05);
    if (scanProgress >= 1) {
      try {
        const previousLevel = state.getLevel();
        if (entity.role === "landmark" && site) {
          state.completeSite(site);
          sound.activate();
        }
        const observation = {
          ...entity,
          x: candidate.object.position.x,
          z: candidate.object.position.z,
        };
        const result = state.recordScan(observation, elapsed);
        targetStatus = "recorded";
        scanProgress = 0;
        clickScanUntil = 0;
        if (result.isNew) {
          const species = SPECIES_BY_ID[entity.speciesId];
          if (result.newSpecies) {
            sound.discovery();
            ui.showDiscovery(species, result.record);
          } else {
            sound.scan();
            ui.notify(
              "Observation recorded",
              `${species.name} · another habitat added to your atlas.`,
              "success",
            );
          }
          if (state.getLevel() > previousLevel)
            ui.notify(
              `Research level ${state.getLevel()}`,
              `Scanner reach increased to ${currentRange()} metres.`,
              "success",
            );
          saveNow();
        }
      } catch (error) {
        ui.notify(
          "Observation unavailable",
          error instanceof Error ? error.message : "Try again.",
          "error",
        );
      }
    }
  } else scanProgress = Math.max(0, scanProgress - dt * 2.5);
}
function targetInfo(): TargetInfo | null {
  if (!targetEntry) return null;
  const entity = targetEntry.data,
    species = SPECIES_BY_ID[entity.speciesId],
    site = world.getSite(entity.siteId),
    clues = site ? state.getSiteProgress(site) : 0;
  const scanned = !!state.data.scanned[entity.id],
    locked = entity.role === "landmark" && clues < 3;
  const feedback = scanFeedback(targetStatus, entity.role === "landmark");
  const touch = touchEnabled(state.data.settings);
  return {
    id: entity.id,
    title: species.name,
    subtitle: entity.role === "clue" ? "Investigation clue" : species.subtitle,
    detail:
      targetStatus !== "ready"
        ? adaptScanText(feedback.detail, touch)
        : species.category === "fauna"
          ? `${targetEntry.object.userData.behavior ?? "Resting"} · ${species.insight}`
          : species.insight,
    distance: targetDistance,
    progress: scanProgress,
    scanned,
    locked,
    clueCount: clues,
    scanStatus: targetStatus,
    prompt: adaptScanText(
      targetStatus === "locked"
        ? `${feedback.prompt} · ${clues}/3`
        : feedback.prompt,
      touch,
    ),
    color: species.color,
  };
}
function snapshot(): UISnapshot {
  return {
    seed: state.data.seed,
    position: { x: explorer.position.x, z: explorer.position.z },
    heading: explorer.yaw,
    biome: getBiome(state.data.seed, explorer.position.x, explorer.position.z),
    habitat: getHabitat(
      state.data.seed,
      explorer.position.x,
      explorer.position.z,
    ),
    waterName:
      waterAt(state.data.seed, explorer.position.x, explorer.position.z)
        ?.name ?? null,
    swimming: explorer.swimming,
    region: getRegionName(
      state.data.seed,
      explorer.position.x,
      explorer.position.z,
    ),
    time: elapsed,
    xp: state.data.xp,
    level: state.getLevel(),
    discoveries: state.data.discoveries,
    scannedCount: Object.keys(state.data.scanned).length,
    sitesCompleted: state.data.completedSites.length,
    visitedChunks: state.data.visitedChunks,
    visitedBiomes: state.data.visitedBiomes,
    target: targetInfo(),
    objective: objective(),
    settings: state.data.settings,
    saved: saveOK,
    fps,
    waypoint,
    scannerRange: currentRange(),
    pulseCooldown,
    hasSave: saveOK,
    fieldKit: state.data.fieldKit,
    fieldTarget: fieldTarget(),
    fieldMarkers: fieldWorld.getMarkers(explorer.position),
    touchControls: controls?.touchActive ?? touchEnabled(state.data.settings),
    mobileDevice: isMobileDevice(),
    mouseDestination: explorer.destination,
  };
}
function isTyping(target: EventTarget | null) {
  return (
    target instanceof HTMLElement &&
    !!target.closest('input, textarea, select, [contenteditable="true"]')
  );
}
window.addEventListener("keydown", (event) => {
  if (isTyping(event.target)) return;
  if (event.code === "Escape") {
    event.preventDefault();
    if (!started) return;
    if (ui.getScreen() === "playing" || ui.getScreen() === "photo") pause();
    else if (ui.getScreen() !== "title") resume();
    return;
  }
  if (!started) return;
  if (!event.repeat && event.code === "KeyJ") {
    event.preventDefault();
    if (ui.getScreen() === "journal") resume();
    else pause("journal");
    return;
  }
  if (!event.repeat && event.code === "KeyM") {
    event.preventDefault();
    if (ui.getScreen() === "map") resume();
    else pause("map");
    return;
  }
  if (!event.repeat && event.code === "KeyB") {
    event.preventDefault();
    if (ui.getScreen() === "backpack") resume();
    else pause("backpack");
    return;
  }
  if (!event.repeat && event.code === "KeyP") {
    event.preventDefault();
    if (ui.getScreen() === "photo") ui.setScreen("playing");
    else {
      paused = false;
      ui.setScreen("photo");
      void requestPointer();
    }
    return;
  }
  if (paused) return;
  if (
    ["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(
      event.code,
    )
  )
    event.preventDefault();
  explorer.setKey(event.code, true);
  if (!event.repeat && event.code === "KeyE") requestScan();
  if (!event.repeat && event.code === "KeyQ") pulse();
  if (!event.repeat && event.code === "KeyF") interact();
  if (!event.repeat && event.code === "KeyR") {
    explorer.teleport(
      { x: 0, z: 0 },
      (x, z) => playerHeightAt(state.data.seed, x, z),
      0,
      0,
    );
    saveNow();
    ui.notify("Returned to the landing site", "Your research is preserved.");
  }
  if (!event.repeat && event.code === "KeyO" && ui.getScreen() === "photo")
    capture();
});
window.addEventListener("keyup", (event) => {
  explorer.setKey(event.code, false);
  if (event.code === "KeyE") releaseScan();
});
window.addEventListener("blur", () => {
  if (started && !paused) pause();
});
document.addEventListener("visibilitychange", () => {
  if (document.hidden && started && !paused) pause();
});
window.addEventListener("beforeunload", saveNow);
document.addEventListener("pointerlockchange", () => {
  if (
    !document.pointerLockElement &&
    started &&
    !paused &&
    !touchEnabled(state.data.settings) &&
    effectiveMouseLook(state.data.settings) === "pointer-lock" &&
    ui.getScreen() === "playing"
  ) {
    pause();
  }
});
window.addEventListener("resize", () => {
  renderer.setSize(innerWidth, innerHeight);
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
});

const fogColors = {
  forest: new THREE.Color("#b6c7b3"),
  desert: new THREE.Color("#d6b18a"),
  caves: new THREE.Color("#203744"),
};
const skyColors = {
  forest: [new THREE.Color("#557780"), new THREE.Color("#ebcfa2")],
  desert: [new THREE.Color("#74828d"), new THREE.Color("#ecc298")],
  caves: [new THREE.Color("#101f2c"), new THREE.Color("#203d49")],
};
let lastBiome = getBiome(state.data.seed, 0, 0);
function frame(now: number) {
  const rawDt = Math.max(0.001, (now - lastFrame) / 1000),
    dt = Math.min(0.045, rawDt);
  lastFrame = now;
  fps = THREE.MathUtils.lerp(fps, 1 / rawDt, 0.025);
  if (started && !paused) {
    elapsed += dt;
    pulseCooldown = Math.max(0, pulseCooldown - dt);
    explorer.update(
      dt,
      (x, z) => playerHeightAt(state.data.seed, x, z),
      (x, z) => world.isBlocked(x, z),
      state.data.settings,
      (x, z) => waterAt(state.data.seed, x, z),
    );
    const biome = getBiome(
        state.data.seed,
        explorer.position.x,
        explorer.position.z,
      ),
      key = `${Math.floor(explorer.position.x / CHUNK_SIZE)},${Math.floor(explorer.position.z / CHUNK_SIZE)}`;
    if (!state.data.visitedChunks.includes(key))
      state.data.visitedChunks.push(key);
    if (!state.data.visitedBiomes.includes(biome)) {
      state.data.visitedBiomes.push(biome);
      if (biome !== "forest") state.data.xp += 24;
      if (elapsed > 2)
        ui.notify(
          "A new ecological region",
          `${getRegionName(state.data.seed, explorer.position.x, explorer.position.z)}${biome !== "forest" ? " · +24 research XP" : ""}`,
          "success",
        );
    }
    if (biome !== lastBiome) {
      lastBiome = biome;
      sound.setBiome(biome);
    }
    updateTarget(dt);
    if (explorer.moving && explorer.grounded)
      sound.step(
        elapsed,
        explorer.sprinting,
        !!waterAt(state.data.seed, explorer.position.x, explorer.position.z),
      );
    if (elapsed - lastSave > 10) saveNow();
  } else if (!started) {
    const t = state.data.settings.reducedMotion ? 0 : now * 0.000035;
    camera.position.set(20 + Math.sin(t) * 3, 23 + Math.sin(t * 0.7) * 0.4, 36);
    camera.lookAt(-8, 2, -35);
  }
  const position = started
    ? { x: explorer.position.x, z: explorer.position.z }
    : { x: 0, z: 0 };
  world.update(
    started && !paused ? dt : 0,
    elapsed,
    position,
    camera,
    state.data,
    currentRange() * 2.4,
  );
  fieldWorld.update(
    position,
    state.data.fieldKit,
    elapsed,
    effectiveSettings(),
  );
  controls?.sync(
    state.data.settings,
    started &&
      !paused &&
      (ui.getScreen() === "playing" || ui.getScreen() === "photo"),
  );
  if (restoreClearancePending && world.settled) {
    restoreClearancePending = false;
    const safe = world.nearbyClearPosition(position);
    if (Math.hypot(safe.x - position.x, safe.z - position.z) > 0.1) {
      explorer.teleport(
        safe,
        (x, z) => playerHeightAt(state.data.seed, x, z),
        explorer.yaw,
        explorer.pitch,
      );
      saveNow();
      ui.notify(
        "A clear place to continue",
        "Your saved position was inside scenery. You have been moved to nearby open ground.",
      );
    }
  }
  const biome = getBiome(state.data.seed, position.x, position.z),
    blend = 1 - Math.exp(-dt * 1.5),
    fog = scene.fog as THREE.Fog;
  fog.color.lerp(fogColors[biome], blend);
  fog.near = THREE.MathUtils.lerp(fog.near, biome === "caves" ? 18 : 80, blend);
  fog.far = THREE.MathUtils.lerp(
    fog.far,
    biome === "caves" ? 115 : effectiveSettings().quality === "low" ? 160 : 230,
    blend,
  );
  sun.intensity = THREE.MathUtils.lerp(
    sun.intensity,
    biome === "caves" ? 0.22 : biome === "desert" ? 3.3 : 2.6,
    blend,
  );
  ambient.intensity = THREE.MathUtils.lerp(
    ambient.intensity,
    biome === "caves" ? 0.72 : 1.9,
    blend,
  );
  headlight.intensity = THREE.MathUtils.lerp(
    headlight.intensity,
    biome === "caves" ? 16 : 0,
    blend,
  );
  headlight.position.copy(camera.position);
  headlight.position.y += 2;
  atmosphere.material.uniforms.zenith.value.lerp(skyColors[biome][0], blend);
  atmosphere.material.uniforms.horizon.value.lerp(skyColors[biome][1], blend);
  sun.position.set(position.x - 60, 90, position.z - 50);
  sun.target.position.set(position.x, 0, position.z);
  atmosphere.sky.position.copy(camera.position);
  atmosphere.moon.position.copy(camera.position).add(moonOffset);
  atmosphere.halo.position.copy(atmosphere.moon.position);
  atmosphere.material.uniforms.time.value = state.data.settings.reducedMotion
    ? 0
    : started
      ? elapsed
      : now * 0.001;
  atmosphere.moon.visible = biome !== "caves";
  atmosphere.halo.visible = biome !== "caves";
  scanner.visible = started && !paused && ui.getScreen() !== "photo";
  scanner.position.y =
    -0.29 +
    (state.data.settings.reducedMotion ? 0 : Math.sin(elapsed * 2) * 0.002);
  if (now - lastUI > 90) {
    ui.update(snapshot());
    lastUI = now;
  }
  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

// Developer diagnostics are absent from the production build. Browser tests use the real rendering/input/state paths.
if (import.meta.env.DEV) {
  (window as unknown as { __VESPER__: unknown }).__VESPER__ = {
    snapshot: () => snapshot(),
    entities: () =>
      world.getEntities().map((e) => ({
        ...e.data,
        x: e.object.position.x,
        z: e.object.position.z,
        y: world.getEntityPosition(e).y,
        behavior: e.object.userData.behavior,
        rotation: e.object.rotation.y,
      })),
    sites: () => world.getSites(),
    fieldNodes: () =>
      fieldWorld
        .getNodes()
        .map((node) => ({ ...node, y: fieldWorld.getPosition(node).y })),
    lookAtField: (id: string) => {
      const node = fieldWorld.getNodes().find((n) => n.id === id);
      if (!node) return;
      scratch.copy(fieldWorld.getPosition(node)).sub(explorer.position);
      explorer.yaw = Math.atan2(-scratch.x, -scratch.z);
      explorer.pitch = Math.atan2(scratch.y, Math.hypot(scratch.x, scratch.z));
      camera.rotation.set(explorer.pitch, explorer.yaw, 0);
    },
    teleport: (x: number, z: number) => {
      explorer.teleport({ x, z }, (a, b) =>
        playerHeightAt(state.data.seed, a, b),
      );
    },
    lookAt: (id: string) => {
      const entry = world.getEntities().find((e) => e.data.id === id);
      if (!entry) return;
      const p = world.getEntityPosition(entry);
      scratch.copy(p).sub(explorer.position);
      explorer.yaw = Math.atan2(-scratch.x, -scratch.z);
      explorer.pitch = Math.atan2(scratch.y, Math.hypot(scratch.x, scratch.z));
      camera.rotation.set(explorer.pitch, explorer.yaw, 0);
    },
    terrain: (x: number, z: number) => heightAt(state.data.seed, x, z),
    lake: () => getHomeLake(state.data.seed),
    water: (x: number, z: number) => waterAt(state.data.seed, x, z),
    stats: () => ({
      calls: renderer.info.render.calls,
      triangles: renderer.info.render.triangles,
      geometries: renderer.info.memory.geometries,
      chunks: world.chunks.size,
      position: explorer.position.toArray(),
      paused,
      screen: ui.getScreen(),
      touchControls: controls?.touchActive,
      effectiveQuality: effectiveSettings().quality,
      fieldNodes: fieldWorld.getNodes().length,
      destination: explorer.destination,
    }),
    save: () => {
      saveNow();
      return state.export();
    },
  };
}
