import test from "node:test";
import assert from "node:assert/strict";
import * as THREE from "three";
import { BAG_CAPACITY, FIELD_RECORD_LIMIT, ITEM_IDS } from "../src/field-data";
import {
  createFieldKit,
  inventoryTotal,
  collectNode,
  craftItem,
  canCraft,
  consumeItem,
  repairProbe,
  placeBeacon,
  packBeacon,
} from "../src/systems/fieldcraft";
import { generateFieldNodes, FieldWorld } from "../src/field-world";
import {
  createFieldModel,
  FIELD_MODEL_KINDS,
  FIELD_MODEL_BOUNDS,
} from "../src/field-models";
import {
  DEFAULT_SETTINGS,
  ExpeditionState,
  parseSave,
} from "../src/systems/state";
import { generateChunk, heightAt } from "../src/systems/worldgen";
import { waterAt } from "../src/systems/waters";
import type { FieldNode } from "../src/types";

const cache: FieldNode = {
  id: "field:test:cache",
  kind: "cache",
  seed: 1,
  x: 10,
  z: 3,
  rewards: { alloy: 3 },
};
const probe: FieldNode = {
  ...cache,
  id: "field:test:probe",
  kind: "probe",
  rewards: {},
};
const snapshot = (value: unknown) => JSON.stringify(value);

test("a field harvest adds supplies once and duplicate interactions never award more", () => {
  const kit = createFieldKit();
  assert.equal(collectNode(kit, cache).ok, true);
  assert.equal(kit.inventory.alloy, 3);
  assert.deepEqual(kit.collected, [cache.id]);
  const before = snapshot(kit);
  assert.equal(collectNode(kit, cache).ok, false);
  assert.equal(snapshot(kit), before);
  assert.equal(collectNode(kit, probe).ok, false);
});
test("full backpack rejects the complete harvest without consuming the world deposit", () => {
  const kit = createFieldKit();
  kit.inventory.alloy = BAG_CAPACITY - 2;
  const before = snapshot(kit);
  assert.equal(collectNode(kit, cache).ok, false);
  assert.equal(snapshot(kit), before);
  kit.inventory.alloy -= 2;
  assert.equal(collectNode(kit, cache).ok, true);
  assert.equal(inventoryTotal(kit), BAG_CAPACITY - 1);
  const invalid = { ...cache, id: "field:test:bad", rewards: { alloy: -1 } };
  assert.equal(collectNode(kit, invalid).ok, false);
});
test("discarding unwanted alloy frees a full single-material bag without losing a pending resin harvest", () => {
  const kit = createFieldKit();
  kit.inventory.alloy = BAG_CAPACITY;
  const resin: FieldNode = {
    ...cache,
    id: "field:test:resin",
    kind: "resin",
    rewards: { "lumen-resin": 3 },
  };
  assert.equal(collectNode(kit, resin).ok, false);
  assert.equal(kit.collected.includes(resin.id), false);
  for (let removed = 1; removed <= 3; removed++) {
    assert.equal(consumeItem(kit, "alloy").ok, true);
    assert.equal(kit.inventory.alloy, BAG_CAPACITY - removed);
    if (removed < 3) {
      assert.equal(collectNode(kit, resin).ok, false);
      assert.equal(kit.collected.includes(resin.id), false);
    }
  }
  assert.equal(collectNode(kit, resin).ok, true);
  assert.equal(kit.inventory["lumen-resin"], 3);
  assert.equal(kit.inventory.alloy, 57);
  assert.equal(inventoryTotal(kit), BAG_CAPACITY);
  const before = snapshot(kit);
  assert.equal(consumeItem(kit, "crystal").ok, false);
  assert.equal(snapshot(kit), before);
  assert.ok(Object.values(kit.inventory).every((count) => count >= 0));
});
test("crafting is atomic and available ingredients produce exactly one usable item", () => {
  const kit = createFieldKit();
  kit.inventory.crystal = 2;
  const before = snapshot(kit);
  assert.equal(canCraft(kit, "pulse-cell"), false);
  assert.equal(craftItem(kit, "pulse-cell").ok, false);
  assert.equal(snapshot(kit), before);
  kit.inventory["lumen-resin"] = 1;
  assert.equal(canCraft(kit, "pulse-cell"), true);
  assert.equal(craftItem(kit, "pulse-cell").ok, true);
  assert.equal(kit.inventory.crystal, 0);
  assert.equal(kit.inventory["lumen-resin"], 0);
  assert.equal(kit.inventory["pulse-cell"], 1);
  assert.equal(consumeItem(kit, "pulse-cell").ok, true);
  assert.equal(consumeItem(kit, "pulse-cell").ok, false);
  assert.equal(inventoryTotal(kit), 0);
});
test("probe repair commits its cost once and starter supply choices leave room for a pulse cell", () => {
  const kit = createFieldKit();
  kit.inventory.alloy = 3;
  kit.inventory.crystal = 3;
  kit.inventory["lumen-resin"] = 3;
  assert.equal(repairProbe(kit, probe).ok, true);
  assert.equal(kit.inventory.alloy, 1);
  assert.equal(kit.inventory.crystal, 2);
  const before = snapshot(kit);
  assert.equal(repairProbe(kit, probe).ok, false);
  assert.equal(snapshot(kit), before);
  assert.equal(craftItem(kit, "survey-beacon").ok, false);
  assert.equal(craftItem(kit, "pulse-cell").ok, true);
  assert.equal(kit.inventory["pulse-cell"], 1);
});
test("beacon placement and packing never lose an item on rejected or full-bag actions", () => {
  const kit = createFieldKit();
  kit.inventory.alloy = 3;
  kit.inventory.crystal = 3;
  kit.inventory["lumen-resin"] = 3;
  assert.equal(craftItem(kit, "survey-beacon").ok, true);
  assert.equal(craftItem(kit, "pulse-cell").ok, true);
  const before = snapshot(kit);
  assert.equal(placeBeacon(kit, { x: NaN, z: 0 }).ok, false);
  assert.equal(snapshot(kit), before);
  assert.equal(placeBeacon(kit, { x: 18, z: 20 }).ok, true);
  assert.deepEqual(kit.beacon, { x: 18, z: 20 });
  kit.inventory["survey-beacon"] = 1;
  const deployed = snapshot(kit);
  assert.equal(placeBeacon(kit, { x: 30, z: 30 }).ok, false);
  assert.equal(snapshot(kit), deployed);
  for (const item of ITEM_IDS) kit.inventory[item] = 0;
  kit.inventory.alloy = BAG_CAPACITY;
  const full = snapshot(kit);
  assert.equal(packBeacon(kit).ok, false);
  assert.equal(snapshot(kit), full);
  kit.inventory.alloy--;
  assert.equal(packBeacon(kit).ok, true);
  assert.equal(kit.beacon, null);
  assert.equal(kit.inventory["survey-beacon"], 1);
  assert.equal(inventoryTotal(kit), BAG_CAPACITY);
});
test("field records stop safely at their bounded limit before awarding loot or consuming repair supplies", () => {
  const kit = createFieldKit();
  kit.collected = Array.from(
    { length: FIELD_RECORD_LIMIT },
    (_, i) => `field:cap:${i}`,
  );
  const before = snapshot(kit);
  assert.equal(collectNode(kit, cache).ok, false);
  assert.equal(snapshot(kit), before);
  kit.repaired = [...kit.collected];
  kit.inventory.alloy = 2;
  kit.inventory.crystal = 1;
  assert.equal(repairProbe(kit, probe).ok, false);
  assert.equal(kit.inventory.alloy, 2);
  assert.equal(kit.inventory.crystal, 1);
});
test("old saves receive a fresh backpack and adaptive settings without losing research or location", () => {
  const state = new ExpeditionState("legacy");
  const entity = generateChunk("legacy", 0, -1).entities.find(
    (entry) => entry.speciesId === "pearl-lantern",
  )!;
  state.recordScan(entity, 4);
  state.data.position = { x: -40, z: 19 };
  const raw = JSON.parse(state.export());
  delete raw.fieldKit;
  for (const key of [
    "controlScheme",
    "movementMode",
    "mouseLook",
    "touchSensitivity",
    "touchScale",
    "joystickSide",
    "showMinimap",
    "minimapRotate",
  ])
    delete raw.settings[key];
  const parsed = parseSave(JSON.stringify(raw));
  assert.deepEqual(parsed.fieldKit, createFieldKit());
  assert.deepEqual(parsed.position, state.data.position);
  assert.equal(parsed.xp, state.data.xp);
  assert.deepEqual(parsed.discoveries, state.data.discoveries);
  assert.equal(parsed.settings.controlScheme, "auto");
  assert.equal(parsed.settings.showMinimap, true);
  assert.equal(parsed.settings.touchScale, 1);
});
test("field inventory, collection, repairs and active beacon round-trip with custom controls", () => {
  const state = new ExpeditionState("backpack-save");
  collectNode(state.data.fieldKit, cache);
  state.data.fieldKit.inventory.crystal = 2;
  repairProbe(state.data.fieldKit, probe);
  state.data.fieldKit.inventory["survey-beacon"] = 1;
  placeBeacon(state.data.fieldKit, { x: -12, z: 35 });
  state.data.settings = {
    ...DEFAULT_SETTINGS,
    controlScheme: "touch",
    movementMode: "mouse",
    mouseLook: "drag",
    touchSensitivity: 1.5,
    touchScale: 1.2,
    joystickSide: "right",
    showMinimap: false,
    minimapRotate: true,
  };
  const parsed = parseSave(state.export());
  assert.deepEqual(parsed.fieldKit, state.data.fieldKit);
  assert.deepEqual(parsed.settings, state.data.settings);
});
test("save import rejects impossible backpack counts, duplicate history and invalid new settings", () => {
  const raw = JSON.parse(new ExpeditionState("invalid-bag").export());
  const cases = [
    { ...raw, fieldKit: null },
    {
      ...raw,
      fieldKit: {
        ...raw.fieldKit,
        inventory: { ...raw.fieldKit.inventory, alloy: -1 },
      },
    },
    {
      ...raw,
      fieldKit: {
        ...raw.fieldKit,
        inventory: { ...raw.fieldKit.inventory, crystal: 1.5 },
      },
    },
    {
      ...raw,
      fieldKit: {
        ...raw.fieldKit,
        inventory: { ...raw.fieldKit.inventory, alloy: 60, crystal: 1 },
      },
    },
    {
      ...raw,
      fieldKit: {
        ...raw.fieldKit,
        inventory: { ...raw.fieldKit.inventory, unknown: 1 },
      },
    },
    { ...raw, fieldKit: { ...raw.fieldKit, collected: [cache.id, cache.id] } },
    { ...raw, fieldKit: { ...raw.fieldKit, repaired: [probe.id, probe.id] } },
    {
      ...raw,
      fieldKit: {
        ...raw.fieldKit,
        collected: [probe.id],
        repaired: [probe.id],
      },
    },
    { ...raw, fieldKit: { ...raw.fieldKit, beacon: { x: 1e10, z: 0 } } },
    { ...raw, settings: { ...raw.settings, controlScheme: "console" } },
    { ...raw, settings: { ...raw.settings, showMinimap: 1 } },
    { ...raw, settings: { ...raw.settings, mouseLook: null } },
    { ...raw, settings: { ...raw.settings, touchScale: 0.1 } },
    { ...raw, settings: { ...raw.settings, touchSensitivity: 4 } },
  ];
  for (const value of cases)
    assert.throws(
      () => parseSave(JSON.stringify(value)),
      /Invalid expedition save/,
    );
});
test("field supplies stay deterministic, dry and clear of original onboarding locations", () => {
  for (const seed of [
    "VESPER-01",
    "research",
    "mobile",
    "dense",
    "alpha",
    "beta",
  ]) {
    const near = [
      [-1, -1],
      [-1, 0],
      [0, -1],
      [0, 0],
    ].flatMap(([cx, cz]) => generateFieldNodes(seed, cx, cz));
    const starter = near.filter((node) => node.id.includes(":starter:"));
    assert.equal(starter.length, 4, seed);
    assert.equal(new Set(starter.map((node) => node.kind)).size, 4);
    for (const node of starter) assert.ok(Math.hypot(node.x, node.z) < 35);
    const ids = new Set<string>();
    for (const [cx, cz] of [
      [-1, -1],
      [-1, 0],
      [0, -1],
      [0, 0],
      [1, 0],
      [2, 0],
      [2, -2],
      [-3, 1],
    ]) {
      const nodes = generateFieldNodes(seed, cx, cz);
      assert.deepEqual(nodes, generateFieldNodes(seed, cx, cz));
      for (const node of nodes) {
        assert.equal(ids.has(node.id), false);
        ids.add(node.id);
        assert.equal(Math.floor(node.x / 64), cx);
        assert.equal(Math.floor(node.z / 64), cz);
        assert.equal(waterAt(seed, node.x, node.z), null);
        assert.ok(!(Math.abs(node.x) < 14 && node.z < 0 && node.z > -55));
        for (const dx of [-1.4, 1.4])
          for (const dz of [-1.4, 1.4])
            assert.equal(waterAt(seed, node.x + dx, node.z + dz), null);
      }
    }
  }
  assert.notDeepEqual(
    generateFieldNodes("alpha", 2, 2),
    generateFieldNodes("beta", 2, 2),
  );
});
test("field model library has five distinct grounded sculptures with shared geometry and four-part budgets", () => {
  for (const kind of FIELD_MODEL_KINDS) {
    const a = createFieldModel(kind, 1),
      b = createFieldModel(kind, 2);
    const bounds = new THREE.Box3().setFromObject(a),
      size = bounds.getSize(new THREE.Vector3());
    assert.ok(Math.abs(bounds.min.y) < 1e-5, kind);
    assert.ok(size.y <= FIELD_MODEL_BOUNDS[kind].height + 0.01, kind);
    assert.ok(
      Math.max(size.x, size.z) / 2 <= FIELD_MODEL_BOUNDS[kind].radius + 0.01,
      kind,
    );
    const meshes = a.children.filter(
      (child) => child instanceof THREE.Mesh,
    ) as THREE.Mesh[];
    assert.ok(meshes.length >= 3 && meshes.length <= 4, kind);
    assert.equal(meshes[0].geometry, (b.children[0] as THREE.Mesh).geometry);
    assert.equal(meshes[0].material, (b.children[0] as THREE.Mesh).material);
    for (const object of meshes) {
      assert.ok(object.geometry.getAttribute("position").count > 0);
    }
    assert.equal(a.userData.sharedResources, true);
  }
});
test("world harvest hides its model, repaired probes retain their shape and streaming stays bounded", () => {
  const world = new FieldWorld("VESPER-01"),
    kit = createFieldKit();
  world.update({ x: 0, z: 0 }, kit, 0, DEFAULT_SETTINGS);
  const starter = world
    .getNodes()
    .filter((node) => node.id.includes(":starter:"));
  const crate = starter.find((node) => node.kind === "cache")!;
  assert.ok(
    world.group.children.some((child) => child.userData.fieldId === crate.id),
  );
  assert.equal(collectNode(kit, crate).ok, true);
  world.update({ x: 0, z: 0 }, kit, 1, DEFAULT_SETTINGS);
  assert.equal(
    world.group.children.some((child) => child.userData.fieldId === crate.id),
    false,
  );
  const survey = starter.find((node) => node.kind === "probe")!;
  kit.inventory.crystal = 1;
  assert.equal(repairProbe(kit, survey).ok, true);
  world.update({ x: 0, z: 0 }, kit, 2, {
    ...DEFAULT_SETTINGS,
    reducedMotion: true,
  });
  const indicator = world.group.children
    .find((child) => child.userData.fieldId === survey.id)!
    .getObjectByName("indicator")!;
  assert.ok(indicator.scale.x < 0.25);
  assert.ok(indicator.scale.y < 0.08);
  const frozen = indicator.scale.clone();
  world.update({ x: 0, z: 0 }, kit, 7, {
    ...DEFAULT_SETTINGS,
    reducedMotion: true,
  });
  assert.ok(indicator.scale.equals(frozen));
  for (const quality of ["low", "balanced", "high"] as const) {
    for (let i = 0; i < 85; i++)
      world.update({ x: 0, z: 0 }, kit, 8, { ...DEFAULT_SETTINGS, quality });
    assert.ok(
      world.getNodes().length <=
        (quality === "low" ? 25 : quality === "high" ? 81 : 49) * 4,
    );
  }
  for (let i = 0; i < 85; i++)
    world.update({ x: 700, z: -350 }, kit, 8, DEFAULT_SETTINGS);
  assert.ok(
    world
      .getNodes()
      .every(
        (node) =>
          Math.abs(Math.floor(node.x / 64) - 10) <= 3 &&
          Math.abs(Math.floor(node.z / 64) + 6) <= 3,
      ),
  );
  let disposed = false;
  const model = createFieldModel("field-cache");
  (model.children[0] as THREE.Mesh).geometry.addEventListener("dispose", () => {
    disposed = true;
  });
  world.dispose();
  assert.equal(world.getNodes().length, 0);
  assert.equal(world.group.children.length, 0);
  assert.equal(disposed, false);
});
test("nearby collection can be aimed at naturally and consumed field markers disappear", () => {
  const world = new FieldWorld("VESPER-01"),
    kit = createFieldKit();
  world.update({ x: 0, z: 0 }, kit, 0, DEFAULT_SETTINGS);
  const node = world
    .getNodes()
    .find((entry) => entry.id.includes(":starter:cache"))!;
  const camera = new THREE.PerspectiveCamera();
  const p = { x: node.x, z: node.z + 3 };
  camera.position.set(p.x, heightAt(world.seed, p.x, p.z) + 1.8, p.z);
  camera.lookAt(world.getPosition(node));
  camera.updateMatrixWorld();
  assert.equal(world.nearestTarget(camera, p)?.id, node.id);
  assert.ok(world.getMarkers(p).some((marker) => marker.id === node.id));
  collectNode(kit, node);
  assert.equal(world.nearestTarget(camera, p)?.id === node.id, false);
  assert.equal(
    world.getMarkers(p).some((marker) => marker.id === node.id),
    false,
  );
  world.dispose();
});
