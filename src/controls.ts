import type { Explorer } from "./player";
import type { Position, Settings } from "./types";
import { getLanguage, t } from "./i18n";

type DeviceSurface = { maxTouchPoints: number; coarsePointer: boolean };

/** Prefer device capabilities over viewport size: narrow desktop windows stay desktop. */
export function isMobileDevice(surface?: DeviceSurface): boolean {
  if (surface) return surface.maxTouchPoints > 0 || surface.coarsePointer;
  if (typeof window === "undefined") return false;
  return (
    navigator.maxTouchPoints > 0 ||
    window.matchMedia("(pointer: coarse)").matches
  );
}

export function touchEnabled(
  settings: Pick<Settings, "controlScheme">,
  mobile = isMobileDevice(),
): boolean {
  return (
    settings.controlScheme === "touch" ||
    (settings.controlScheme === "auto" && mobile)
  );
}

export function effectiveMouseLook(
  settings: Pick<Settings, "movementMode" | "mouseLook">,
): Settings["mouseLook"] {
  return settings.movementMode === "mouse" &&
    settings.mouseLook === "pointer-lock"
    ? "drag"
    : settings.mouseLook;
}

/** Joystick displacement with a small dead zone and a circular, analog travel limit. */
export function joystickVector(
  dx: number,
  dy: number,
  radius: number,
): Position {
  if (![dx, dy, radius].every(Number.isFinite) || radius <= 0)
    return { x: 0, z: 0 };
  const distance = Math.hypot(dx, dy);
  const normalized = Math.min(1, distance / radius);
  if (normalized <= 0.1) return { x: 0, z: 0 };
  const amount = (normalized - 0.1) / 0.9;
  return { x: (dx / distance) * amount, z: (-dy / distance) * amount };
}

/** Keeps two-finger navigation independent without allowing one finger to steal another role. */
export class PointerRoles {
  private roles = new Map<"move" | "look", number>();
  claim(role: "move" | "look", pointerId: number): boolean {
    if (this.roles.has(role) || [...this.roles.values()].includes(pointerId))
      return false;
    this.roles.set(role, pointerId);
    return true;
  }
  owns(role: "move" | "look", pointerId: number): boolean {
    return this.roles.get(role) === pointerId;
  }
  release(pointerId: number): "move" | "look" | null {
    for (const [role, id] of this.roles) {
      if (id === pointerId) {
        this.roles.delete(role);
        return role;
      }
    }
    return null;
  }
  clear() {
    this.roles.clear();
  }
}

type ClickInput = {
  pointerId?: number;
  pointerType?: string;
  detail: number;
  clientX: number;
  clientY: number;
};

/** A handled release can open an overlay before its synthesized click is dispatched. */
export class TouchClickGuard {
  private releases = new Map<
    number,
    { x: number; y: number; time: number; legacy: boolean }
  >();
  private prune(now: number) {
    for (const [id, release] of this.releases)
      if (now - release.time > 750) this.releases.delete(id);
  }
  start(pointerId: number, now: number) {
    this.prune(now);
    this.releases.delete(pointerId);
    // A fresh physical gesture must never be mistaken for an old compatibility click.
    for (const release of this.releases.values()) release.legacy = false;
  }
  handled(pointerId: number, x: number, y: number, now: number) {
    this.prune(now);
    this.releases.set(pointerId, { x, y, time: now, legacy: true });
  }
  consume(event: ClickInput, now: number): boolean {
    this.prune(now);
    if (event.pointerType === "touch" && event.pointerId !== undefined) {
      return this.releases.delete(event.pointerId);
    }
    if (event.detail === 0) return false;
    for (const [id, release] of this.releases) {
      if (
        release.legacy &&
        Math.hypot(event.clientX - release.x, event.clientY - release.y) <= 12
      ) {
        this.releases.delete(id);
        return true;
      }
    }
    return false;
  }
}

export interface ControlsOptions {
  getSettings(): Settings;
  canPlay(): boolean;
  pickGround(clientX: number, clientY: number): Position | null;
  actions: {
    scanHeld(held: boolean): void;
    interact(): void;
    pulse(): void;
    backpack(): void;
    map(): void;
    pause(): void;
  };
  onActivity?(): void;
  onNotice?(title: string, detail: string): void;
}

export function createControls(
  canvas: HTMLCanvasElement,
  explorer: Explorer,
  options: ControlsOptions,
) {
  const controller = new AbortController();
  const listenerOptions = { signal: controller.signal };
  const roles = new PointerRoles();
  const touchClickGuard = new TouchClickGuard();
  const scanPointers = new Set<number>();
  const touchButtons = new Map<number, HTMLButtonElement>();
  const recentTouchButtons = new WeakMap<HTMLButtonElement, number>();
  let touchActive = touchEnabled(options.getSettings());
  let playing = false;
  let previousConfig = "";
  let previousLanguage = "";
  let sprint = false;
  let lookPoint = { x: 0, y: 0 };
  let clickPoint: { id: number; x: number; y: number } | null = null;
  let joystickOrigin = { x: 0, y: 0, radius: 50 };
  const oldTouchAction = canvas.style.touchAction;
  canvas.style.touchAction = "none";
  const container = document.createElement("div");
  container.id = "touch-controls";
  container.hidden = true;
  container.setAttribute("aria-label", "Touch exploration controls");
  container.innerHTML = `
    <div class="touch-joystick" role="group" aria-label="Movement joystick">
      <span class="touch-stick-ring"></span><span class="touch-stick-knob"></span>
      <span class="touch-stick-label">MOVE</span>
    </div>
    <div class="touch-actions">
      <button type="button" class="touch-action touch-scan" aria-label="Hold to scan" data-touch-action="scan">Scan<span>hold</span></button>
      <button type="button" class="touch-action" aria-label="Use nearby item" data-touch-action="interact">Use</button>
      <button type="button" class="touch-action" data-touch-action="jump">Jump</button>
      <button type="button" class="touch-action" data-touch-action="pulse">Pulse</button>
      <button type="button" class="touch-action" aria-pressed="false" data-touch-action="sprint">Run</button>
      <button type="button" class="touch-action" data-touch-action="backpack">Bag</button>
      <button type="button" class="touch-action" data-touch-action="map">Map</button>
      <button type="button" class="touch-action" data-touch-action="pause">Pause</button>
    </div>
    <div class="touch-look-hint" aria-hidden="true">Swipe the world to look</div>`;
  document.body.append(container);
  const joystick = container.querySelector<HTMLElement>(".touch-joystick")!;
  const knob = container.querySelector<HTMLElement>(".touch-stick-knob")!;
  const runButton = container.querySelector<HTMLButtonElement>(
    '[data-touch-action="sprint"]',
  )!;
  const scanButton = container.querySelector<HTMLButtonElement>(
    '[data-touch-action="scan"]',
  )!;
  const usable = () => playing && options.canPlay();
  const buttonLabels: Record<string, readonly [string, string]> = {
    scan: ["Scan", "Hold to scan"],
    interact: ["Use", "Use nearby item"],
    jump: ["Jump", "Jump"],
    pulse: ["Pulse", "Pulse"],
    sprint: ["Run", "Run"],
    backpack: ["Bag", "Bag"],
    map: ["Map", "Map"],
    pause: ["Pause", "Pause"],
  };
  function localizeLabels() {
    const language = getLanguage();
    if (language === previousLanguage) return;
    previousLanguage = language;
    container.dataset.language = language;
    container.setAttribute("aria-label", t("Touch exploration controls"));
    joystick.setAttribute("aria-label", t("Movement joystick"));
    container.querySelector<HTMLElement>(".touch-stick-label")!.textContent =
      t("MOVE");
    container.querySelector<HTMLElement>(".touch-look-hint")!.textContent = t(
      "Swipe the world to look",
    );
    for (const button of container.querySelectorAll<HTMLButtonElement>(
      "[data-touch-action]",
    )) {
      const [label, description] = buttonLabels[button.dataset.touchAction!];
      // Preserve the scan hint span and all bound button/pointer listeners.
      button.firstChild!.textContent = t(label);
      button.setAttribute("aria-label", t(description));
      const hint = button.querySelector("span");
      if (hint) hint.textContent = t("hold");
    }
  }
  localizeLabels();

  function reset() {
    roles.clear();
    clickPoint = null;
    scanPointers.clear();
    for (const button of touchButtons.values()) {
      button.classList.remove("is-held");
      recentTouchButtons.set(button, performance.now());
    }
    touchButtons.clear();
    options.actions.scanHeld(false);
    explorer.clearKeys();
    sprint = false;
    runButton.setAttribute("aria-pressed", "false");
    scanButton.classList.remove("is-held");
    knob.style.transform = "translate(-50%, -50%)";
    joystick.classList.remove("is-held");
  }

  async function requestPointer() {
    if (
      !usable() ||
      touchActive ||
      effectiveMouseLook(options.getSettings()) !== "pointer-lock"
    )
      return;
    try {
      if (document.pointerLockElement !== canvas)
        await canvas.requestPointerLock();
    } catch {
      // Left-button dragging remains available when an embedded browser declines pointer lock.
    }
  }

  function sync(settings: Settings, active: boolean) {
    localizeLabels();
    const nextTouch = touchEnabled(settings);
    const config = [
      nextTouch,
      settings.movementMode,
      settings.mouseLook,
      settings.joystickSide,
      settings.touchScale,
    ].join("/");
    if (config !== previousConfig || (playing && !active)) reset();
    previousConfig = config;
    playing = active;
    touchActive = nextTouch;
    container.hidden = !touchActive || !playing;
    container.dataset.side = settings.joystickSide;
    container.style.setProperty(
      "--touch-scale",
      String(Math.max(0.8, Math.min(1.4, settings.touchScale))),
    );
    document.body.classList.toggle("vesper-touch-input", touchActive);
    canvas.classList.toggle(
      "mouse-travel",
      !touchActive && settings.movementMode === "mouse",
    );
    if (
      (!playing ||
        touchActive ||
        effectiveMouseLook(settings) !== "pointer-lock") &&
      document.pointerLockElement === canvas
    )
      document.exitPointerLock();
    const notice = explorer.consumeTravelNotice();
    if (notice === "blocked")
      options.onNotice?.(
        "Path obstructed",
        "Choose a closer spot around the obstacle, or move manually.",
      );
    else if (notice === "too-far")
      options.onNotice?.(
        "Choose a closer destination",
        "Click visible ground within 80 metres.",
      );
    else if (notice === "arrived")
      options.onNotice?.(
        "Destination reached",
        "Click another patch of ground to keep exploring.",
      );
  }

  function capture(element: HTMLElement, id: number) {
    try {
      element.setPointerCapture(id);
    } catch {
      /* A cancelled pointer may already be gone. */
    }
  }
  function updateJoystick(event: PointerEvent) {
    const dx = event.clientX - joystickOrigin.x;
    const dy = event.clientY - joystickOrigin.y;
    const vector = joystickVector(dx, dy, joystickOrigin.radius);
    explorer.setMoveInput(vector.x, vector.z);
    const distance = Math.hypot(dx, dy);
    const limit =
      distance > 0 ? Math.min(1, joystickOrigin.radius / distance) : 0;
    knob.style.transform = `translate(calc(-50% + ${dx * limit}px), calc(-50% + ${dy * limit}px))`;
  }
  joystick.addEventListener(
    "pointerdown",
    (event) => {
      if (!usable() || !touchActive || !roles.claim("move", event.pointerId))
        return;
      event.preventDefault();
      const bounds = joystick.getBoundingClientRect();
      joystickOrigin = {
        x: bounds.left + bounds.width / 2,
        y: bounds.top + bounds.height / 2,
        radius: bounds.width * 0.32,
      };
      capture(joystick, event.pointerId);
      joystick.classList.add("is-held");
      updateJoystick(event);
      options.onActivity?.();
    },
    listenerOptions,
  );

  canvas.addEventListener(
    "pointerdown",
    (event) => {
      if (!usable()) return;
      options.onActivity?.();
      const settings = options.getSettings();
      if (touchActive && event.pointerType === "touch") {
        if (roles.claim("look", event.pointerId)) {
          lookPoint = { x: event.clientX, y: event.clientY };
          capture(canvas, event.pointerId);
          event.preventDefault();
        }
        return;
      }
      if (settings.movementMode === "mouse" && event.button === 0) {
        clickPoint = {
          id: event.pointerId,
          x: event.clientX,
          y: event.clientY,
        };
        return;
      }
      const lookMode = effectiveMouseLook(settings);
      if (lookMode === "arrows") return;
      if (
        (settings.movementMode === "mouse" && event.button !== 2) ||
        (settings.movementMode !== "mouse" &&
          event.button !== 0 &&
          !(lookMode === "drag" && event.button === 2))
      )
        return;
      if (!roles.claim("look", event.pointerId)) return;
      lookPoint = { x: event.clientX, y: event.clientY };
      if (effectiveMouseLook(settings) !== "pointer-lock")
        capture(canvas, event.pointerId);
      void requestPointer();
      event.preventDefault();
    },
    listenerOptions,
  );
  canvas.addEventListener(
    "contextmenu",
    (event) => {
      if (
        usable() &&
        (options.getSettings().movementMode === "mouse" ||
          effectiveMouseLook(options.getSettings()) === "drag" ||
          touchActive)
      )
        event.preventDefault();
    },
    listenerOptions,
  );
  window.addEventListener(
    "pointermove",
    (event) => {
      if (!usable()) return;
      if (roles.owns("move", event.pointerId)) {
        updateJoystick(event);
        event.preventDefault();
        return;
      }
      const settings = options.getSettings();
      const locked =
        document.pointerLockElement === canvas &&
        !touchActive &&
        effectiveMouseLook(settings) === "pointer-lock";
      // Locked movement uses mousemove, which the Pointer Lock API guarantees.
      // Drag/touch movement uses captured pointers; keeping the paths separate avoids doubling look input.
      if (!locked && roles.owns("look", event.pointerId)) {
        const dx = event.clientX - lookPoint.x;
        const dy = event.clientY - lookPoint.y;
        const lookSettings =
          touchActive && event.pointerType === "touch"
            ? { ...settings, sensitivity: settings.touchSensitivity }
            : settings;
        explorer.look(dx, dy, lookSettings);
        lookPoint = { x: event.clientX, y: event.clientY };
        event.preventDefault();
      }
    },
    { ...listenerOptions, passive: false },
  );
  window.addEventListener(
    "mousemove",
    (event) => {
      const settings = options.getSettings();
      if (
        usable() &&
        !touchActive &&
        document.pointerLockElement === canvas &&
        effectiveMouseLook(settings) === "pointer-lock"
      )
        explorer.look(event.movementX, event.movementY, settings);
    },
    listenerOptions,
  );

  function release(event: PointerEvent, cancelled = false) {
    const actionButton = touchButtons.get(event.pointerId);
    if (actionButton) {
      touchButtons.delete(event.pointerId);
      actionButton.classList.remove("is-held");
      recentTouchButtons.set(actionButton, performance.now());
      const bounds = actionButton.getBoundingClientRect();
      if (
        !cancelled &&
        usable() &&
        event.clientX >= bounds.left &&
        event.clientX <= bounds.right &&
        event.clientY >= bounds.top &&
        event.clientY <= bounds.bottom
      ) {
        touchClickGuard.handled(
          event.pointerId,
          event.clientX,
          event.clientY,
          performance.now(),
        );
        activateButton(actionButton);
      }
    }
    if (clickPoint?.id === event.pointerId) {
      if (
        !cancelled &&
        usable() &&
        Math.hypot(
          event.clientX - clickPoint.x,
          event.clientY - clickPoint.y,
        ) <= 8
      ) {
        const destination = options.pickGround(event.clientX, event.clientY);
        if (destination) explorer.setDestination(destination);
        else
          options.onNotice?.(
            "Choose visible ground",
            "Click the terrain to walk. Right-drag to look around.",
          );
      }
      clickPoint = null;
    }
    const role = roles.release(event.pointerId);
    if (role === "move") {
      explorer.setMoveInput(0, 0);
      knob.style.transform = "translate(-50%, -50%)";
      joystick.classList.remove("is-held");
    }
    if (scanPointers.delete(event.pointerId)) {
      options.actions.scanHeld(scanPointers.size > 0);
      scanButton.classList.toggle("is-held", scanPointers.size > 0);
    }
    if (cancelled) reset();
  }
  window.addEventListener(
    "pointerup",
    (event) => release(event),
    listenerOptions,
  );
  window.addEventListener(
    "pointercancel",
    (event) => release(event, true),
    listenerOptions,
  );
  joystick.addEventListener(
    "lostpointercapture",
    (event) => {
      if (roles.owns("move", event.pointerId)) reset();
    },
    listenerOptions,
  );
  canvas.addEventListener(
    "lostpointercapture",
    (event) => {
      if (roles.owns("look", event.pointerId)) release(event, true);
    },
    listenerOptions,
  );
  scanButton.addEventListener(
    "pointerdown",
    (event) => {
      if (!usable()) return;
      event.preventDefault();
      scanPointers.add(event.pointerId);
      capture(scanButton, event.pointerId);
      scanButton.classList.add("is-held");
      options.actions.scanHeld(true);
      options.onActivity?.();
    },
    listenerOptions,
  );
  container.addEventListener(
    "pointerdown",
    (event) => {
      if (event.pointerType !== "touch" || !usable()) return;
      const button = (event.target as HTMLElement).closest<HTMLButtonElement>(
        "[data-touch-action]",
      );
      if (!button || button === scanButton) return;
      event.preventDefault();
      // Secondary fingers do not reliably synthesize clicks, so activate touch actions on release.
      if ([...touchButtons.values()].includes(button)) return;
      touchButtons.set(event.pointerId, button);
      button.classList.add("is-held");
      recentTouchButtons.set(button, performance.now());
      capture(button, event.pointerId);
      options.onActivity?.();
    },
    listenerOptions,
  );
  container.addEventListener(
    "lostpointercapture",
    (event) => {
      if (touchButtons.has(event.pointerId)) reset();
    },
    listenerOptions,
  );
  scanButton.addEventListener(
    "lostpointercapture",
    (event) => {
      if (scanPointers.has(event.pointerId)) reset();
    },
    listenerOptions,
  );
  container.addEventListener(
    "keydown",
    (event) => {
      event.stopPropagation();
      if (
        event.target === scanButton &&
        ["Space", "Enter"].includes(event.code)
      ) {
        event.preventDefault();
        if (usable()) {
          options.actions.scanHeld(true);
          scanButton.classList.add("is-held");
        }
      }
    },
    listenerOptions,
  );
  container.addEventListener(
    "keyup",
    (event) => {
      event.stopPropagation();
      if (
        event.target === scanButton &&
        ["Space", "Enter"].includes(event.code)
      ) {
        event.preventDefault();
        options.actions.scanHeld(false);
        scanButton.classList.remove("is-held");
      }
    },
    listenerOptions,
  );
  function activateButton(button: HTMLButtonElement) {
    if (!usable()) return;
    options.onActivity?.();
    const action = button.dataset.touchAction;
    if (action === "jump") explorer.queueJump();
    else if (action === "sprint") {
      sprint = !sprint;
      explorer.setSprint(sprint);
      runButton.setAttribute("aria-pressed", String(sprint));
    } else if (action && action !== "scan" && action in options.actions) {
      (
        options.actions[
          action as "interact" | "pulse" | "backpack" | "map" | "pause"
        ] as () => void
      )();
    }
  }
  container.addEventListener(
    "click",
    (event) => {
      const button = (event.target as HTMLElement).closest<HTMLButtonElement>(
        "[data-touch-action]",
      );
      if (!button || !usable()) return;
      const pointerType = (event as PointerEvent).pointerType;
      // Keep native keyboard/mouse activation; ignore the extra click after a handled touch release.
      if (
        pointerType === "touch" ||
        (!pointerType &&
          event.detail > 0 &&
          performance.now() - (recentTouchButtons.get(button) ?? -Infinity) <
            750)
      )
        return;
      activateButton(button);
    },
    listenerOptions,
  );
  document.addEventListener(
    "pointerdown",
    (event) => {
      touchClickGuard.start(event.pointerId, performance.now());
    },
    { ...listenerOptions, capture: true },
  );
  document.addEventListener(
    "click",
    (event) => {
      if (touchClickGuard.consume(event as PointerEvent, performance.now())) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    },
    { ...listenerOptions, capture: true },
  );
  window.addEventListener("blur", reset, listenerOptions);
  document.addEventListener(
    "visibilitychange",
    () => {
      if (document.hidden) reset();
    },
    listenerOptions,
  );

  return {
    sync,
    requestPointer,
    reset,
    get touchActive() {
      return touchActive;
    },
    destroy() {
      reset();
      controller.abort();
      container.remove();
      canvas.style.touchAction = oldTouchAction;
      canvas.classList.remove("mouse-travel");
      document.body.classList.remove("vesper-touch-input");
    },
  };
}
