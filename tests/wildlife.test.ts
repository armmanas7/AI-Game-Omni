import test from "node:test";
import assert from "node:assert/strict";
import { createModel } from "../src/models";
import { animateWildlife, type WildlifeEnvironment } from "../src/wildlife";
import { ExpeditionState } from "../src/systems/state";
import type { WorldEntity, ModelKind, WaterSample } from "../src/types";
import * as THREE from "three";
import { PlanetWorld } from "../src/world";

const entity: WorldEntity = {
  id: "animal-test",
  speciesId: "moss-grazer",
  x: 0,
  z: 0,
  seed: 0,
  scale: 1,
  rotation: 0,
  role: "specimen",
};
const settings = new ExpeditionState("test").data.settings;
const ground: WildlifeEnvironment = {
  height: (x, z) => x * 0.04 + z * 0.02,
  biome: () => "forest",
  blocked: () => false,
};
const distant = { x: 50, z: 50 };

test("wildlife wanders locally on terrain and freezes translation for an observation", () => {
  const animal = createModel("moss-grazer", 0);
  for (let i = 0; i < 180; i++)
    animateWildlife(
      animal,
      entity,
      i / 60,
      1 / 60,
      distant,
      settings,
      false,
      ground,
    );
  assert.ok(Math.hypot(animal.position.x, animal.position.z) > 0.2);
  assert.ok(
    Math.hypot(animal.position.x, animal.position.z) <
      animal.userData.animation.radius,
  );
  assert.ok(
    Math.abs(
      animal.position.y - ground.height(animal.position.x, animal.position.z),
    ) < 0.04,
  );
  const observed = animal.position.clone();
  for (let i = 180; i < 300; i++)
    animateWildlife(
      animal,
      entity,
      i / 60,
      1 / 60,
      distant,
      settings,
      true,
      ground,
    );
  assert.equal(animal.position.x, observed.x);
  assert.equal(animal.position.z, observed.z);
  assert.equal(animal.userData.behavior, "Watching you");
});

test("ground animals do not wander into blocked positions or across biome boundaries", () => {
  for (const environment of [
    { ...ground, blocked: () => true },
    {
      ...ground,
      water: (x: number) =>
        x > 0
          ? ({
              id: "bank",
              name: "Bank",
              kind: "lake",
              level: 2,
              depth: 2,
              flow: { x: 0, z: 0 },
            } as WaterSample)
          : null,
    },
    {
      ...ground,
      biome: (x: number, z: number) =>
        x === 0 && z === 0 ? ("forest" as const) : ("desert" as const),
    },
  ]) {
    const animal = createModel("moss-grazer", 0);
    for (let i = 0; i < 120; i++)
      animateWildlife(
        animal,
        entity,
        i / 60,
        1 / 60,
        distant,
        settings,
        false,
        environment,
      );
    assert.equal(animal.position.x, 0);
    assert.equal(animal.position.z, 0);
  }
});

const lake: WaterSample = {
  id: "test-lake",
  name: "Test Lake",
  kind: "lake",
  level: 2,
  depth: 2,
  flow: { x: 0, z: 0 },
};
const openWater: WildlifeEnvironment = {
  height: () => 0,
  biome: () => "forest",
  blocked: () => false,
  water: () => lake,
};

function pose(object: THREE.Group) {
  return {
    position: object.position.toArray(),
    rotation: object.rotation.toArray(),
    joints: object.children.map((p) => p.rotation.toArray()),
  };
}

test("birds and legacy moths stay above a water surface and within their local flight region", () => {
  const flooded = { ...openWater, height: () => -4 };
  for (const kind of [
    "canopy-swift",
    "suncrest-bird",
    "reed-heron",
    "moth",
    "sky-ray",
  ] as ModelKind[]) {
    const bird = createModel(kind, 0);
    for (let i = 0; i < 300; i++) {
      animateWildlife(
        bird,
        entity,
        i / 30,
        1 / 30,
        distant,
        settings,
        false,
        flooded,
      );
      bird.updateMatrixWorld(true);
      assert.ok(
        new THREE.Box3().setFromObject(bird).min.y > lake.level + 0.5,
        `${kind} should fly above water, not follow a submerged bed`,
      );
      assert.ok(
        Math.hypot(bird.position.x, bird.position.z) <=
          (bird.userData.animation.radius ?? 2.2) + 0.001,
      );
    }
  }
});

test("fish use their real scaled bounds and body centres to remain completely submerged", () => {
  for (const kind of ["ribbon-fish", "glass-koi", "lantern-eel"] as ModelKind[])
    for (const scale of [0.65, 1, 1.5]) {
      const fish = createModel(kind, 0);
      fish.scale.setScalar(scale);
      // A deliberately oversized registry envelope must not dictate placement.
      fish.userData.modelHeight = 20;
      animateWildlife(
        fish,
        { ...entity, scale },
        0,
        1 / 30,
        distant,
        settings,
        true,
        openWater,
      );
      fish.updateMatrixWorld(true);
      const bodyCentre = new THREE.Box3()
        .setFromObject(fish.getObjectByName("body")!)
        .getCenter(new THREE.Vector3());
      const preferredCentre = lake.level - fish.userData.animation.swimDepth;
      assert.ok(
        bodyCentre.y <= preferredCentre + 0.00001,
        "large fins may require a little more submergence than the preferred depth",
      );
      if (scale <= 1)
        assert.ok(
          Math.abs(bodyCentre.y - preferredCentre) < 0.00001,
          "bodyCenterY keeps ordinary specimens at their preferred depth",
        );
      assert.ok(
        fish.userData.modelHeight < 1.2,
        "actual mesh height replaces a conservative envelope",
      );
      for (let i = 1; i < 300; i++) {
        animateWildlife(
          fish,
          { ...entity, scale },
          i / 30,
          1 / 30,
          distant,
          settings,
          false,
          openWater,
        );
        fish.updateMatrixWorld(true);
        const box = new THREE.Box3().setFromObject(fish);
        assert.ok(box.min.y > 0.025, `${kind} does not clip through the bed`);
        assert.ok(
          box.max.y < lake.level - 0.025,
          `${kind} fins remain underwater`,
        );
      }
    }
});

test("fish turn back before their bodies reach dry banks, shallow shelves or another water body", () => {
  for (const boundary of ["dry", "shallow", "other-lake"]) {
    const environment: WildlifeEnvironment = {
      ...openWater,
      height: (x, z) => (Math.hypot(x, z) >= 2.4 ? 1.8 : 0),
      water: (x, z) => {
        if (Math.hypot(x, z) < 2.4) return lake;
        if (boundary === "dry") return null;
        return {
          ...lake,
          id: boundary === "other-lake" ? "different-water" : lake.id,
          depth: boundary === "shallow" ? 0.2 : 2,
        };
      },
    };
    const fish = createModel("glass-koi", 0);
    let explored = 0;
    for (let i = 0; i < 700; i++) {
      animateWildlife(
        fish,
        entity,
        i / 20,
        1 / 20,
        distant,
        settings,
        false,
        environment,
      );
      assert.equal(fish.visible, true);
      fish.updateMatrixWorld(true);
      const box = new THREE.Box3().setFromObject(fish);
      assert.ok(box.max.y < lake.level && box.min.y > 0);
      for (const child of fish.children) {
        const mesh = child as THREE.Mesh;
        const vertices = mesh.geometry.getAttribute("position"),
          point = new THREE.Vector3();
        // Inspect actual animated vertices instead of asserting internal thresholds.
        for (let v = 0; v < vertices.count; v += 17) {
          point.fromBufferAttribute(vertices, v).applyMatrix4(mesh.matrixWorld);
          assert.ok(
            Math.hypot(point.x, point.z) < 2.4,
            `${boundary}: an animated fin crossed the bank`,
          );
        }
      }
      explored = Math.max(
        explored,
        Math.hypot(fish.position.x, fish.position.z),
      );
    }
    assert.ok(
      explored > 0.7,
      "fish still explore the usable water instead of remaining frozen at home",
    );
  }
});

test("impossible aquatic placements hide safely and displaced fish recover only to suitable home water", () => {
  for (const environment of [
    { ...openWater, water: () => null },
    { ...openWater, water: () => ({ ...lake, depth: 0.2 }), height: () => 1.8 },
  ]) {
    const fish = createModel("glass-koi", 0);
    animateWildlife(
      fish,
      entity,
      1,
      1 / 30,
      distant,
      settings,
      false,
      environment,
    );
    assert.equal(fish.visible, false);
    assert.ok(fish.position.toArray().every(Number.isFinite));
    fish.visible = true; // Simulate world distance culling while the game is paused.
    animateWildlife(fish, entity, 1, 0, distant, settings, false, environment);
    assert.equal(fish.visible, false);
  }
  const fish = createModel("glass-koi", 0);
  fish.position.set(20, 20, 20);
  const bounded = {
    ...openWater,
    water: (x: number, z: number) => (Math.hypot(x, z) < 4 ? lake : null),
  };
  animateWildlife(fish, entity, 0, 1 / 30, distant, settings, true, bounded);
  assert.deepEqual([fish.position.x, fish.position.z], [0, 0]);
  assert.ok(fish.position.y < lake.level);
});

test("dt=0 freezes initialized wildlife pose exactly, including swimming, flight and ground fauna", () => {
  for (const kind of [
    "canopy-swift",
    "glass-koi",
    "moss-grazer",
  ] as ModelKind[]) {
    const animal = createModel(kind, 0);
    const environment = kind === "glass-koi" ? openWater : ground;
    animateWildlife(
      animal,
      entity,
      1,
      1 / 30,
      distant,
      settings,
      false,
      environment,
    );
    const frozen = pose(animal);
    for (let i = 0; i < 10; i++)
      animateWildlife(
        animal,
        entity,
        10 + i,
        0,
        { x: 0, z: 0 },
        settings,
        true,
        environment,
      );
    assert.deepEqual(pose(animal), frozen, `${kind} moved while paused`);
  }
});

test("focused fish and birds hold their observation position, while reduced motion restores static joints", () => {
  for (const kind of ["canopy-swift", "glass-koi"] as ModelKind[]) {
    const animal = createModel(kind, 0);
    const environment = kind === "glass-koi" ? openWater : ground;
    for (let i = 0; i < 90; i++)
      animateWildlife(
        animal,
        entity,
        i / 30,
        1 / 30,
        distant,
        settings,
        false,
        environment,
      );
    const observation = animal.position.toArray();
    for (let i = 90; i < 180; i++)
      animateWildlife(
        animal,
        entity,
        i / 30,
        1 / 30,
        distant,
        settings,
        true,
        environment,
      );
    assert.deepEqual(animal.position.toArray(), observation);
    const reduced = { ...settings, reducedMotion: true };
    animateWildlife(
      animal,
      entity,
      6,
      1 / 30,
      distant,
      reduced,
      false,
      environment,
    );
    const resting = pose(animal);
    for (let i = 0; i < 60; i++)
      animateWildlife(
        animal,
        entity,
        7 + i / 30,
        1 / 30,
        distant,
        reduced,
        false,
        environment,
      );
    assert.deepEqual(pose(animal), resting);
    for (const part of animal.children)
      assert.deepEqual(
        part.rotation.toArray().slice(0, 3),
        part.userData.restRotation,
      );
  }
});

test("reduced motion suspends wildlife translation and restores all joint rotations", () => {
  const animal = createModel("fern-hopper", 0);
  const reduced = { ...settings, reducedMotion: true };
  for (let i = 0; i < 120; i++)
    animateWildlife(
      animal,
      entity,
      i / 60,
      1 / 60,
      distant,
      reduced,
      false,
      ground,
    );
  assert.equal(animal.position.x, 0);
  assert.equal(animal.position.z, 0);
  assert.equal(animal.position.y, 0);
  for (const part of animal.children)
    assert.deepEqual(
      part.rotation.toArray().slice(0, 3),
      part.userData.restRotation,
    );
});

test("gliding rays stay above their terrain and animate both wing pivots", () => {
  const ray = createModel("sky-ray", 0);
  animateWildlife(ray, entity, 1, 1 / 60, distant, settings, false, ground);
  assert.ok(ray.position.y - ground.height(ray.position.x, ray.position.z) > 2);
  const wings = ray.children.filter((c) => c.name.startsWith("wing-"));
  assert.equal(wings.length, 2);
  assert.ok(
    wings.every(
      (c) => Math.abs(c.rotation.z - c.userData.restRotation[2]) > 0.02,
    ),
  );
});

test("completed landmarks stay static when reduced motion is enabled", () => {
  const state = new ExpeditionState("VESPER-01");
  state.data.settings.quality = "low";
  state.data.settings.reducedMotion = true;
  const world = new PlanetWorld(
    new THREE.Scene(),
    state.data.seed,
    state.data.settings,
  );
  const camera = new THREE.PerspectiveCamera();
  const landmark = world
    .getEntities()
    .find(
      (e) => e.data.role === "landmark" && e.data.x === 0 && e.data.z === -35,
    )!;
  assert.ok(landmark);
  state.data.completedSites.push(landmark.data.siteId!);
  world.update(1 / 60, 4, { x: 0, z: 0 }, camera, state.data, 30);
  const position = landmark.object.position.clone(),
    rotation = landmark.object.rotation.toArray();
  world.update(1 / 60, 6, { x: 0, z: 0 }, camera, state.data, 30);
  assert.deepEqual(landmark.object.position.toArray(), position.toArray());
  assert.deepEqual(landmark.object.rotation.toArray(), rotation);
  world.dispose();
});
