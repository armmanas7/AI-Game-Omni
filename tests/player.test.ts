import test from "node:test";
import assert from "node:assert/strict";
import * as THREE from "three";
import { Explorer } from "../src/player";
import type { Settings, WaterSample } from "../src/types";

const settings: Settings = {
  quality: "balanced",
  sensitivity: 1,
  invertY: false,
  reducedMotion: true,
  volume: 0,
  controlScheme: "auto",
  movementMode: "keyboard",
  mouseLook: "pointer-lock",
  touchSensitivity: 1,
  touchScale: 1,
  joystickSide: "left",
  showMinimap: true,
  minimapRotate: true,
};
const lake: WaterSample = {
  id: "test-lake",
  name: "Test lake",
  kind: "lake",
  level: 5,
  depth: 3,
  flow: { x: 0, z: 0 },
};
const free = () => false;

test("deep-water movement keeps the camera above the surface and suppresses sprint and jump", () => {
  const camera = new THREE.PerspectiveCamera(68);
  const explorer = new Explorer(camera);
  explorer.teleport({ x: 0, z: 0 }, () => 2);
  explorer.setKey("KeyW", true);
  explorer.setKey("ShiftLeft", true);
  explorer.setKey("Space", true);
  for (let i = 0; i < 120; i++)
    explorer.update(
      1 / 60,
      () => 2,
      free,
      settings,
      () => lake,
    );
  assert.equal(explorer.swimming, true);
  assert.equal(explorer.sprinting, false);
  assert.ok(explorer.position.y >= lake.level + 0.84);
  assert.ok(explorer.position.y < lake.level + 1);
  assert.ok(
    Math.abs(explorer.position.z) > 5 && Math.abs(explorer.position.z) < 7,
  );
  assert.equal(camera.fov, 68);
});

test("crossing out of water restores walking and gravity while retaining collision checks", () => {
  const explorer = new Explorer(new THREE.PerspectiveCamera(68));
  explorer.teleport({ x: 0, z: 0 }, () => 2);
  explorer.setKey("KeyW", true);
  const water = (_x: number, z: number) => (z > -2 ? lake : null);
  const wall = (_x: number, z: number) => z < -7;
  for (let i = 0; i < 180; i++)
    explorer.update(1 / 60, () => 2, wall, settings, water);
  assert.equal(explorer.swimming, false);
  assert.ok(explorer.position.z >= -7 && explorer.position.z < -6.5);
  assert.ok(Math.abs(explorer.position.y - 3.8) < 0.001);
});

test("shallow water allows wading and land-style jumping without sprinting", () => {
  const explorer = new Explorer(new THREE.PerspectiveCamera(68));
  const shallow = { ...lake, depth: 0.4 };
  explorer.teleport({ x: 0, z: 0 }, () => 4.6);
  explorer.setKey("ShiftLeft", true);
  explorer.setKey("Space", true);
  explorer.update(
    1 / 60,
    () => 4.6,
    free,
    settings,
    () => shallow,
  );
  assert.equal(explorer.swimming, false);
  assert.equal(explorer.sprinting, false);
  assert.equal(explorer.grounded, false);
  assert.ok(explorer.position.y > 6.4);
});

function walk(explorer: Explorer, frames = 120, blocked = free) {
  for (let i = 0; i < frames; i++)
    explorer.update(1 / 60, () => 0, blocked, settings);
}

test("analog joystick preserves partial speed and bounds diagonal movement", () => {
  const half = new Explorer(new THREE.PerspectiveCamera(68));
  half.teleport({ x: 0, z: 0 }, () => 0);
  half.setMoveInput(0, 0.5);
  walk(half);
  const full = new Explorer(new THREE.PerspectiveCamera(68));
  full.teleport({ x: 0, z: 0 }, () => 0);
  full.setMoveInput(1, 1);
  walk(full);
  assert.ok(Math.abs(half.position.z) > 5.5 && Math.abs(half.position.z) < 6);
  assert.ok(Math.hypot(full.position.x, full.position.z) < 12.1);
  assert.ok(
    Math.abs(
      Math.hypot(full.position.x, full.position.z) / Math.abs(half.position.z) -
        2,
    ) < 0.02,
  );
});

test("click-to-move reaches a bounded destination, smoothly turns and stops", () => {
  const explorer = new Explorer(new THREE.PerspectiveCamera(68));
  explorer.teleport({ x: 0, z: 0 }, () => 0);
  assert.equal(explorer.setDestination({ x: 9, z: -12 }), true);
  explorer.update(1 / 60, () => 0, free, settings);
  assert.ok(explorer.yaw < 0 && explorer.yaw > -0.15);
  walk(explorer, 240);
  assert.equal(explorer.destination, null);
  assert.equal(explorer.consumeTravelNotice(), "arrived");
  assert.equal(explorer.consumeTravelNotice(), null);
  assert.ok(
    Math.hypot(explorer.position.x - 9, explorer.position.z + 12) <= 0.46,
  );
  assert.ok(explorer.velocity.length() < 0.01);
});

test("mouse routes stop at a collision and report why, including long frames", () => {
  const explorer = new Explorer(new THREE.PerspectiveCamera(68));
  explorer.teleport({ x: 0, z: 0 }, () => 0);
  explorer.setDestination({ x: 8, z: 0 });
  const wall = (x: number) => x > 2 && x < 2.5;
  // The wall is thinner than a full frame's travel at sprint speed.
  explorer.setSprint(true);
  for (let i = 0; i < 10; i++) explorer.update(0.2, () => 0, wall, settings);
  assert.ok(explorer.position.x <= 2);
  assert.equal(explorer.destination, null);
  assert.equal(explorer.consumeTravelNotice(), "blocked");
  assert.equal(explorer.moving, false);
});

test("manual movement, teleport and input clearing cancel mouse routes and touch sprint", () => {
  const explorer = new Explorer(new THREE.PerspectiveCamera(68));
  explorer.teleport({ x: 0, z: 0 }, () => 0);
  explorer.setDestination({ x: 8, z: 0 });
  explorer.setKey("KeyW", true);
  assert.equal(explorer.destination, null);
  explorer.clearKeys();
  explorer.setDestination({ x: 8, z: 0 });
  explorer.setMoveInput(0.5, 0);
  assert.equal(explorer.destination, null);
  explorer.setSprint(true);
  explorer.queueJump();
  explorer.clearKeys();
  walk(explorer, 30);
  assert.equal(explorer.sprinting, false);
  assert.equal(explorer.grounded, true);
  assert.ok(explorer.position.length() < 1.801);
  explorer.setDestination({ x: 8, z: 0 });
  explorer.teleport({ x: 4, z: 2 }, () => 0);
  assert.equal(explorer.destination, null);
});

test("invalid and distant mouse destinations never initiate movement", () => {
  const explorer = new Explorer(new THREE.PerspectiveCamera(68));
  assert.equal(explorer.setDestination({ x: NaN, z: 0 }), false);
  assert.equal(explorer.setDestination({ x: 81, z: 0 }), false);
  assert.equal(explorer.destination, null);
  assert.equal(explorer.consumeTravelNotice(), "too-far");
});
