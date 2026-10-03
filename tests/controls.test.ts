import test from "node:test";
import assert from "node:assert/strict";
import {
  effectiveMouseLook,
  isMobileDevice,
  joystickVector,
  PointerRoles,
  TouchClickGuard,
  touchEnabled,
} from "../src/controls";

test("automatic input uses touch capability and respects manual overrides", () => {
  assert.equal(
    isMobileDevice({ maxTouchPoints: 0, coarsePointer: false }),
    false,
  );
  assert.equal(
    isMobileDevice({ maxTouchPoints: 5, coarsePointer: false }),
    true,
  );
  assert.equal(
    isMobileDevice({ maxTouchPoints: 0, coarsePointer: true }),
    true,
  );
  assert.equal(touchEnabled({ controlScheme: "auto" }, true), true);
  assert.equal(touchEnabled({ controlScheme: "auto" }, false), false);
  assert.equal(touchEnabled({ controlScheme: "desktop" }, true), false);
  assert.equal(touchEnabled({ controlScheme: "touch" }, false), true);
});

test("click-to-move keeps the cursor free, while keyboard mode can lock", () => {
  assert.equal(
    effectiveMouseLook({ movementMode: "mouse", mouseLook: "pointer-lock" }),
    "drag",
  );
  assert.equal(
    effectiveMouseLook({ movementMode: "keyboard", mouseLook: "pointer-lock" }),
    "pointer-lock",
  );
  assert.equal(
    effectiveMouseLook({ movementMode: "mouse", mouseLook: "arrows" }),
    "arrows",
  );
});

test("joystick supports dead zones, analog travel and bounded diagonal input", () => {
  assert.deepEqual(joystickVector(1, 2, 50), { x: 0, z: 0 });
  assert.deepEqual(joystickVector(0, -50, 50), { x: 0, z: 1 });
  assert.ok(Math.abs(joystickVector(0, -27.5, 50).z - 0.5) < 0.00001);
  const diagonal = joystickVector(100, -100, 50);
  assert.ok(Math.abs(Math.hypot(diagonal.x, diagonal.z) - 1) < 0.00001);
  assert.deepEqual(joystickVector(NaN, 1, 50), { x: 0, z: 0 });
  assert.deepEqual(joystickVector(1, 1, 0), { x: 0, z: 0 });
});

test("independent pointer identities permit simultaneous movement and looking", () => {
  const roles = new PointerRoles();
  assert.equal(roles.claim("move", 10), true);
  assert.equal(roles.claim("look", 11), true);
  assert.equal(roles.claim("move", 11), false);
  assert.equal(roles.claim("look", 12), false);
  assert.equal(roles.release(11), "look");
  assert.equal(roles.owns("move", 10), true);
  assert.equal(roles.claim("look", 10), false);
  assert.equal(roles.claim("look", 12), true);
  roles.clear();
  assert.equal(roles.owns("move", 10), false);
  assert.equal(roles.owns("look", 12), false);
});

test("handled touch clicks are suppressed once even when an overlay replaces the released button", () => {
  const guard = new TouchClickGuard();
  guard.start(7, 100);
  guard.handled(7, 300, 700, 110);
  const retargeted = {
    pointerType: "touch",
    pointerId: 7,
    detail: 1,
    clientX: 300,
    clientY: 700,
  };
  assert.equal(guard.consume(retargeted, 111), true);
  assert.equal(guard.consume(retargeted, 112), false);
  guard.handled(7, 300, 700, 120);
  // The next real tap can reuse the same pointer ID and screen position.
  guard.start(7, 130);
  assert.equal(guard.consume(retargeted, 140), false);
});

test("legacy click suppression expires and preserves keyboard and fresh overlay taps", () => {
  const guard = new TouchClickGuard();
  const legacy = { detail: 1, clientX: 200, clientY: 500 };
  guard.handled(2, 200, 500, 10);
  assert.equal(guard.consume({ ...legacy, detail: 0 }, 20), false);
  assert.equal(guard.consume(legacy, 21), true);
  guard.handled(2, 200, 500, 30);
  guard.start(3, 40);
  assert.equal(guard.consume(legacy, 50), false);
  guard.handled(4, 200, 500, 60);
  assert.equal(guard.consume(legacy, 811), false);
});
