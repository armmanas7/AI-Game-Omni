import * as THREE from "three";
import type { Settings, Position, WaterSample } from "./types";

/** A terrain-following capsule controller. Collision is horizontal and deterministic. */
export class Explorer {
  readonly position = new THREE.Vector3(0, 2, 0);
  readonly velocity = new THREE.Vector3();
  yaw = 0;
  pitch = 0;
  grounded = true;
  moving = false;
  sprinting = false;
  swimming = false;
  private jumpQueued = false;
  private keys = new Set<string>();
  private verticalSpeed = 0;
  private travel = 0;
  private moveInput = new THREE.Vector2();
  private sprintHeld = false;
  private destinationPoint: Position | null = null;
  private routeBlockedTime = 0;
  private travelNotice: "arrived" | "blocked" | "too-far" | null = null;
  constructor(private camera: THREE.PerspectiveCamera) {
    camera.rotation.order = "YXZ";
  }
  setKey(code: string, pressed: boolean) {
    if (pressed) this.keys.add(code);
    else this.keys.delete(code);
    if (pressed && code === "Space") this.jumpQueued = true;
    if (pressed && ["KeyW", "KeyA", "KeyS", "KeyD"].includes(code))
      this.cancelDestination();
  }
  /** Camera-relative analog movement; forward is positive toward the view. */
  setMoveInput(sideways: number, forward: number) {
    this.moveInput.set(
      Number.isFinite(sideways) ? sideways : 0,
      Number.isFinite(forward) ? forward : 0,
    );
    if (this.moveInput.lengthSq() > 1) this.moveInput.normalize();
    if (this.moveInput.lengthSq() > 0.001) this.cancelDestination();
  }
  setSprint(held: boolean) {
    this.sprintHeld = held;
  }
  queueJump() {
    this.jumpQueued = true;
  }
  get destination(): Position | null {
    return this.destinationPoint ? { ...this.destinationPoint } : null;
  }
  setDestination(point: Position): boolean {
    if (!Number.isFinite(point.x) || !Number.isFinite(point.z)) return false;
    const distance = Math.hypot(
      point.x - this.position.x,
      point.z - this.position.z,
    );
    if (distance > 80) {
      this.travelNotice = "too-far";
      return false;
    }
    this.destinationPoint = { ...point };
    this.routeBlockedTime = 0;
    this.travelNotice = null;
    return true;
  }
  cancelDestination() {
    this.destinationPoint = null;
    this.routeBlockedTime = 0;
  }
  consumeTravelNotice() {
    const notice = this.travelNotice;
    this.travelNotice = null;
    return notice;
  }
  clearKeys() {
    this.keys.clear();
    this.jumpQueued = false;
    this.velocity.set(0, 0, 0);
    this.moveInput.set(0, 0);
    this.sprintHeld = false;
    this.moving = false;
    this.sprinting = false;
    this.cancelDestination();
  }
  look(dx: number, dy: number, settings: Settings) {
    this.yaw -= dx * 0.002 * settings.sensitivity;
    this.pitch -=
      dy * 0.002 * settings.sensitivity * (settings.invertY ? -1 : 1);
    this.pitch = THREE.MathUtils.clamp(this.pitch, -1.32, 1.32);
  }
  teleport(
    point: Position,
    height: (x: number, z: number) => number,
    yaw?: number,
    pitch?: number,
  ) {
    this.clearKeys();
    this.position.set(point.x, height(point.x, point.z) + 1.8, point.z);
    this.verticalSpeed = 0;
    this.grounded = true;
    if (yaw !== undefined) this.yaw = yaw;
    if (pitch !== undefined) this.pitch = pitch;
    this.camera.position.copy(this.position);
    this.camera.rotation.set(this.pitch, this.yaw, 0);
  }
  update(
    dt: number,
    height: (x: number, z: number) => number,
    blocked: (x: number, z: number) => boolean,
    settings: Settings,
    water: (x: number, z: number) => WaterSample | null = () => null,
  ) {
    const keyboardForward =
      Number(this.keys.has("KeyW")) - Number(this.keys.has("KeyS"));
    const keyboardSideways =
      Number(this.keys.has("KeyD")) - Number(this.keys.has("KeyA"));
    const keyboardMoving = keyboardForward !== 0 || keyboardSideways !== 0;
    if (keyboardMoving || this.moveInput.lengthSq() > 0.001)
      this.cancelDestination();
    const forward = keyboardMoving ? keyboardForward : this.moveInput.y;
    const sideways = keyboardMoving ? keyboardSideways : this.moveInput.x;
    const immersion = water(this.position.x, this.position.z);
    this.swimming = !!immersion && immersion.depth > 1.1;
    this.sprinting =
      !immersion &&
      (this.sprintHeld ||
        this.keys.has("ShiftLeft") ||
        this.keys.has("ShiftRight"));
    const speed = this.swimming
      ? 3.4
      : immersion
        ? 4.5
        : this.sprinting
          ? 11
          : 6;
    const direction = new THREE.Vector2(sideways, -forward);
    if (direction.lengthSq() > 1) direction.normalize();
    let dx =
      (direction.x * Math.cos(this.yaw) + direction.y * Math.sin(this.yaw)) *
      speed;
    let dz =
      (-direction.x * Math.sin(this.yaw) + direction.y * Math.cos(this.yaw)) *
      speed;
    if (this.destinationPoint) {
      const routeX = this.destinationPoint.x - this.position.x;
      const routeZ = this.destinationPoint.z - this.position.z;
      const distance = Math.hypot(routeX, routeZ);
      if (distance <= 0.45) {
        this.cancelDestination();
        this.velocity.x = this.velocity.z = 0;
        this.travelNotice = "arrived";
        dx = dz = 0;
      } else {
        const targetYaw = Math.atan2(-routeX, -routeZ);
        const deltaYaw = Math.atan2(
          Math.sin(targetYaw - this.yaw),
          Math.cos(targetYaw - this.yaw),
        );
        this.yaw += deltaYaw * (1 - Math.exp(-dt * 6));
        const routeSpeed = Math.min(speed, distance * 4);
        dx = (routeX / distance) * routeSpeed;
        dz = (routeZ / distance) * routeSpeed;
      }
    }
    const damping = 1 - Math.exp(-dt * 13);
    this.velocity.x = THREE.MathUtils.lerp(this.velocity.x, dx, damping);
    this.velocity.z = THREE.MathUtils.lerp(this.velocity.z, dz, damping);
    // Short collision steps prevent a long frame from tunneling through trees.
    const steps = Math.max(
      1,
      Math.ceil((Math.hypot(this.velocity.x, this.velocity.z) * dt) / 0.3),
    );
    let hitObstacle = false;
    for (let step = 0; step < steps; step++) {
      const nextX = this.position.x + (this.velocity.x * dt) / steps;
      const nextZ = this.position.z + (this.velocity.z * dt) / steps;
      if (!blocked(nextX, this.position.z)) this.position.x = nextX;
      else {
        this.velocity.x = 0;
        hitObstacle = true;
      }
      if (!blocked(this.position.x, nextZ)) this.position.z = nextZ;
      else {
        this.velocity.z = 0;
        hitObstacle = true;
      }
    }
    if (this.destinationPoint) {
      this.routeBlockedTime = hitObstacle ? this.routeBlockedTime + dt : 0;
      if (this.routeBlockedTime >= 0.4) {
        this.cancelDestination();
        this.velocity.x = this.velocity.z = 0;
        this.travelNotice = "blocked";
      }
    }
    const surface = water(this.position.x, this.position.z);
    this.swimming = !!surface && surface.depth > 1.1;
    const floor = Math.max(
      height(this.position.x, this.position.z) + 1.8,
      surface ? surface.level + 0.85 : -Infinity,
    );
    if (this.jumpQueued && this.grounded && !this.swimming) {
      this.verticalSpeed = 7.1;
      this.grounded = false;
    }
    this.jumpQueued = false;
    this.verticalSpeed -= 19 * dt;
    this.position.y += this.verticalSpeed * dt;
    if (this.position.y <= floor) {
      this.position.y = floor;
      this.verticalSpeed = 0;
      this.grounded = true;
    }
    this.moving = Math.hypot(this.velocity.x, this.velocity.z) > 0.5;
    if (this.moving && this.grounded) this.travel += speed * dt;
    const bob =
      settings.reducedMotion || !this.moving || !this.grounded
        ? 0
        : Math.sin(this.travel * 1.4) * 0.022;
    if (this.keys.has("ArrowLeft")) this.yaw += dt * 1.1;
    if (this.keys.has("ArrowRight")) this.yaw -= dt * 1.1;
    if (this.keys.has("ArrowUp"))
      this.pitch = Math.min(1.32, this.pitch + dt * 0.8);
    if (this.keys.has("ArrowDown"))
      this.pitch = Math.max(-1.32, this.pitch - dt * 0.8);
    this.camera.position.copy(this.position);
    this.camera.position.y += bob;
    this.camera.rotation.set(this.pitch, this.yaw, 0);
    this.camera.fov = THREE.MathUtils.lerp(
      this.camera.fov,
      this.sprinting && this.moving && !settings.reducedMotion ? 74 : 68,
      1 - Math.exp(-dt * 5),
    );
    this.camera.updateProjectionMatrix();
  }
}
