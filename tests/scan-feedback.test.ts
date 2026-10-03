import test from "node:test";
import assert from "node:assert/strict";
import * as THREE from "three";
import {
  selectScanTarget,
  getScanStatus,
  scanFeedback,
  fieldScanFeedback,
  noScanTargetFeedback,
} from "../src/scan-feedback";

function fixture(z = -8) {
  const group = new THREE.Group();
  group.position.set(0, 0, z);
  group.add(
    new THREE.Mesh(new THREE.SphereGeometry(1), new THREE.MeshBasicMaterial()),
  );
  const entry = { group, recorded: false };
  const options = {
    origin: new THREE.Vector3(0, 1.7, 0),
    direction: new THREE.Vector3(0, -0.7, z).normalize(),
    range: 13,
    object: (e: typeof entry) => e.group,
    point: (e: typeof entry) =>
      e.group.position.clone().add(new THREE.Vector3(0, 1, 0)),
    radius: () => 1,
    height: () => 2,
    recorded: (e: typeof entry) => e.recorded,
    canObserve: () => true,
  };
  return { entry, options };
}

test("scanner selects a centred specimen and excludes hidden or unaligned ones", () => {
  const { entry, options } = fixture();
  assert.equal(selectScanTarget([entry], options)?.entry, entry);
  entry.group.visible = false;
  assert.equal(selectScanTarget([entry], options), null);
  entry.group.visible = true;
  options.direction.set(1, 0, 0);
  assert.equal(selectScanTarget([entry], options), null);
});

test("aiming at an actual tall canopy selects it rather than demanding its base point", () => {
  const { entry, options } = fixture(-8);
  entry.group.clear();
  const canopy = new THREE.Mesh(
    new THREE.SphereGeometry(2),
    new THREE.MeshBasicMaterial(),
  );
  canopy.position.y = 10;
  entry.group.add(canopy);
  options.direction.copy(
    new THREE.Vector3(0, 10, -8).sub(options.origin).normalize(),
  );
  options.height = () => 12;
  options.radius = () => 3;
  const selected = selectScanTarget([entry], options);
  assert.equal(selected?.entry, entry);
  assert.ok(selected!.point.y > 7);
  assert.ok(selected!.distance < options.range);
  assert.equal(
    getScanStatus({ ...selected!, scanned: false, locked: false }, 13),
    "ready",
  );
});

test("empty space inside a tall conservative envelope is not treated as a specimen", () => {
  const { entry, options } = fixture(-8);
  options.height = () => 14;
  options.radius = () => 5;
  options.direction.copy(
    new THREE.Vector3(3.5, 10, -8).sub(options.origin).normalize(),
  );
  assert.equal(selectScanTarget([entry], options), null);
});

test("a recorded foreground mesh is selected before an unrecorded specimen behind it", () => {
  const foreground = fixture(-7);
  const background = fixture(-8);
  foreground.entry.group.children[0].position.y = 1;
  background.entry.group.children[0].position.y = 1;
  foreground.entry.recorded = true;
  const options = foreground.options;
  options.direction.set(0, 0, -1);
  options.origin.y = 1;
  // Array order must not change physical selection.
  for (const entries of [
    [background.entry, foreground.entry],
    [foreground.entry, background.entry],
  ]) {
    assert.equal(selectScanTarget(entries, options)?.entry, foreground.entry);
  }
});

test("out of range and occluded candidates remain visible for actionable feedback", () => {
  const { entry, options } = fixture(-19);
  const distant = selectScanTarget([entry], options);
  assert.ok(distant);
  assert.equal(
    getScanStatus({ ...distant, scanned: false, locked: false }, 13),
    "out-of-range",
  );
  entry.group.position.z = -8;
  options.direction.copy(new THREE.Vector3(0, -0.7, -8).normalize());
  options.canObserve = () => false;
  const blocked = selectScanTarget([entry], options);
  assert.ok(blocked);
  assert.equal(
    getScanStatus({ ...blocked, scanned: false, locked: false }, 13),
    "occluded",
  );
  entry.group.position.z = -100;
  assert.equal(selectScanTarget([entry], options), null);
});

test("range and visibility checks gate recorded and locked targets before scanning", () => {
  const target = { distance: 4, visible: true, scanned: false, locked: false };
  assert.equal(getScanStatus(target, 13), "ready");
  assert.equal(getScanStatus({ ...target, locked: true }, 13), "locked");
  assert.equal(
    getScanStatus({ ...target, scanned: true, locked: true }, 13),
    "recorded",
  );
  assert.equal(
    getScanStatus({ ...target, visible: false, locked: true }, 13),
    "occluded",
  );
  assert.equal(
    getScanStatus({ ...target, distance: 14, visible: false }, 13),
    "out-of-range",
  );
});

test("feedback explains landmark dependencies, held scanning, repeat records and scenery", () => {
  assert.match(scanFeedback("locked").detail, /three distinct clues/);
  assert.match(scanFeedback("ready").detail, /hold E for about one second/);
  assert.match(scanFeedback("recorded").detail, /individual specimen/);
  assert.match(
    noScanTargetFeedback(false).detail,
    /some trees, rocks and plants are scenery/,
  );
  assert.match(noScanTargetFeedback(true).detail, /hold Scan/);
  assert.match(fieldScanFeedback(false).detail, /press F/);
  assert.match(fieldScanFeedback(true).detail, /tap Use/);
});
