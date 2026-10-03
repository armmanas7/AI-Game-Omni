import { test, expect, type CDPSession, type Page } from "@playwright/test";

type TouchPoint = { id: number; x: number; y: number };
const read = (page: Page, expression: string) => page.evaluate(expression);

function monitor(page: Page) {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  return errors;
}

async function begin(page: Page, chunks: number) {
  await page.goto("/");
  await page.waitForFunction(() => (window as any).__VESPER__);
  await page.locator("#expedition-seed").fill("VESPER-01");
  await page.getByRole("button", { name: /Begin expedition/ }).click();
  await expect(page.locator(".game-hud")).toBeVisible();
  await expect
    .poll(() => read(page, "window.__VESPER__.stats().chunks"))
    .toBe(chunks);
}

async function settings(page: Page, touch = false) {
  if (touch) await page.locator('[data-touch-action="pause"]').tap();
  else await page.keyboard.press("Escape");
  await expect(
    page.getByRole("heading", { name: "Expedition paused", exact: true }),
  ).toBeVisible();
  await expect(page.locator(".confirmation-shell")).toBeHidden();
  await page.locator('[data-open="settings"]').click();
  await expect(
    page.getByRole("heading", { name: "Your instruments", exact: true }),
  ).toBeVisible();
}

async function close(page: Page) {
  await page.locator(".close-overlay").click();
  await expect(page.locator(".game-hud")).toBeVisible();
}

async function center(
  page: Page,
  selector: string,
): Promise<{ x: number; y: number }> {
  const box = await page.locator(selector).boundingBox();
  expect(box).toBeTruthy();
  return { x: box!.x + box!.width / 2, y: box!.y + box!.height / 2 };
}

async function touch(
  session: CDPSession,
  type: "touchStart" | "touchMove" | "touchEnd" | "touchCancel",
  points: TouchPoint[],
) {
  // Starts/moves describe active touches; a nonempty touchEnd names the touches to release.
  // An empty touchEnd releases all, while touchCancel cancels the active gesture.
  await session.send("Input.dispatchTouchEvent", {
    type,
    touchPoints: points.map((point) => ({
      ...point,
      radiusX: 3,
      radiusY: 3,
      force: 1,
    })),
  });
}

async function noOverflow(page: Page) {
  const layout = await page.evaluate(() => {
    const body = document.querySelector<HTMLElement>(".overlay-body")!;
    const panel = document.querySelector<HTMLElement>(".overlay-panel")!;
    const rect = panel.getBoundingClientRect();
    return {
      width: innerWidth,
      pageWidth: document.documentElement.scrollWidth,
      bodyWidth: body.clientWidth,
      bodyScrollWidth: body.scrollWidth,
      left: rect.left,
      right: rect.right,
    };
  });
  expect(layout.pageWidth).toBeLessThanOrEqual(layout.width + 1);
  expect(layout.bodyScrollWidth).toBeLessThanOrEqual(layout.bodyWidth + 1);
  expect(layout.left).toBeGreaterThanOrEqual(-1);
  expect(layout.right).toBeLessThanOrEqual(layout.width + 1);
}

test("desktop mouse movement, free cursor, drag look and control settings persist", async ({
  page,
}) => {
  const errors = monitor(page);
  await begin(page, 49);
  await settings(page);
  await page.locator("#movementMode").selectOption("mouse");
  await page.locator("#mouseLook").selectOption("pointer-lock");
  await page.locator("#minimapRotate").uncheck();
  await close(page);
  expect(await read(page, "document.pointerLockElement === null")).toBe(true);
  await page.evaluate(() => (window as any).__VESPER__.teleport(0, 0));
  const start = await read(page, "window.__VESPER__.snapshot().position");
  await page.mouse.click(720, 600);
  await expect
    .poll(() => read(page, "window.__VESPER__.stats().destination !== null"))
    .toBe(true);
  await expect
    .poll(() => read(page, "window.__VESPER__.stats().destination"))
    .toBeNull();
  const moved = await read(page, "window.__VESPER__.snapshot().position");
  expect(Math.hypot(moved.x - start.x, moved.z - start.z)).toBeGreaterThan(2);
  expect(await read(page, "document.pointerLockElement === null")).toBe(true);
  const heading = await read(page, "window.__VESPER__.snapshot().heading");
  await page.mouse.move(850, 440);
  await page.mouse.down({ button: "right" });
  await page.mouse.move(940, 415, { steps: 5 });
  await page.mouse.up({ button: "right" });
  expect(
    Math.abs(
      (await read(page, "window.__VESPER__.snapshot().heading")) - heading,
    ),
  ).toBeGreaterThan(0.1);
  const stationary = await read(page, "window.__VESPER__.snapshot().position");
  await page.locator('.hud-nav [data-open="backpack"]').click();
  await expect(
    page.getByRole("heading", { name: "Backpack & field crafting" }),
  ).toBeVisible();
  expect(await read(page, "window.__VESPER__.stats().destination")).toBeNull();
  await page.waitForTimeout(300);
  expect(await read(page, "window.__VESPER__.snapshot().position")).toEqual(
    stationary,
  );
  await close(page);
  await settings(page);
  await page.locator("#mouseLook").selectOption("arrows");
  await page.locator("#showMinimap").uncheck();
  await close(page);
  await expect(page.locator(".minimap-instrument")).toBeHidden();
  const beforeArrow = await read(page, "window.__VESPER__.snapshot().heading");
  await page.keyboard.down("ArrowLeft");
  await page.waitForTimeout(250);
  await page.keyboard.up("ArrowLeft");
  expect(
    (await read(page, "window.__VESPER__.snapshot().heading")) - beforeArrow,
  ).toBeGreaterThan(0.15);
  await page.reload();
  await page.getByRole("button", { name: /Continue expedition/ }).click();
  expect(
    await read(page, "window.__VESPER__.snapshot().settings"),
  ).toMatchObject({
    movementMode: "mouse",
    mouseLook: "arrows",
    showMinimap: false,
    minimapRotate: false,
  });
  expect(errors).toEqual([]);
});

test.describe("iPhone Chrome touch input", () => {
  test.use({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
    deviceScaleFactor: 1,
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/153.0.0.0 Mobile/15E148 Safari/604.1",
  });

  test("automatic touch controls, simultaneous movement/look, loot, scanning and cancellation", async ({
    page,
  }) => {
    const errors = monitor(page);
    await begin(page, 25);
    expect(await read(page, "window.__VESPER__.stats().effectiveQuality")).toBe(
      "low",
    );
    await expect(page.locator("#touch-controls")).toBeVisible();
    await expect(page.locator(".minimap-instrument")).toBeVisible();
    const session = await page.context().newCDPSession(page);
    const stick = await center(page, ".touch-joystick");
    const start = await read(page, "window.__VESPER__.snapshot()");
    await touch(session, "touchStart", [{ id: 1, ...stick }]);
    await touch(session, "touchStart", [
      { id: 1, ...stick },
      { id: 2, x: 280, y: 390 },
    ]);
    await touch(session, "touchMove", [
      { id: 1, x: stick.x, y: stick.y - 36 },
      { id: 2, x: 225, y: 375 },
    ]);
    await page.waitForTimeout(650);
    const moving = await read(page, "window.__VESPER__.snapshot()");
    expect(
      Math.hypot(
        moving.position.x - start.position.x,
        moving.position.z - start.position.z,
      ),
    ).toBeGreaterThan(1);
    expect(Math.abs(moving.heading - start.heading)).toBeGreaterThan(0.07);
    await touch(session, "touchCancel", []);
    await page.waitForTimeout(400);
    const stopped = await read(page, "window.__VESPER__.snapshot().position");
    await page.waitForTimeout(300);
    const still = await read(page, "window.__VESPER__.snapshot().position");
    expect(Math.hypot(still.x - stopped.x, still.z - stopped.z)).toBeLessThan(
      0.05,
    );
    const cache = await read(
      page,
      'window.__VESPER__.fieldNodes().find(n => n.kind === "cache")',
    );
    expect(cache).toBeTruthy();
    await page.evaluate(
      ({ x, z }) => (window as any).__VESPER__.teleport(x, z + 3.5),
      cache,
    );
    await page.evaluate(
      (id) => (window as any).__VESPER__.lookAtField(id),
      cache.id,
    );
    await expect
      .poll(() => read(page, "window.__VESPER__.snapshot().fieldTarget?.id"))
      .toBe(cache.id);
    await page.locator('[data-touch-action="interact"]').tap();
    await expect
      .poll(() =>
        read(page, "window.__VESPER__.snapshot().fieldKit.collected.length"),
      )
      .toBe(1);
    const intro = await read(
      page,
      'window.__VESPER__.entities().find(e => e.id.endsWith(":firstlight"))',
    );
    await page.evaluate(
      ({ x, z }) => (window as any).__VESPER__.teleport(x, z + 5),
      intro,
    );
    await page.evaluate(
      (id) => (window as any).__VESPER__.lookAt(id),
      intro.id,
    );
    await expect
      .poll(() => read(page, "window.__VESPER__.snapshot().target?.id"))
      .toBe(intro.id);
    const scan = await center(page, '[data-touch-action="scan"]');
    const bag = await center(page, '[data-touch-action="backpack"]');
    await touch(session, "touchStart", [{ id: 3, ...scan }]);
    await expect
      .poll(() =>
        read(page, "window.__VESPER__.snapshot().target?.progress ?? 0"),
      )
      .toBeGreaterThan(0.05);
    await touch(session, "touchStart", [
      { id: 3, ...scan },
      { id: 4, ...bag },
    ]);
    await touch(session, "touchEnd", [{ id: 4, ...bag }]);
    await expect(
      page.getByRole("heading", { name: "Backpack & field crafting" }),
    ).toBeVisible();
    await expect(page.locator("#touch-controls")).toBeHidden();
    await touch(session, "touchEnd", []);
    await noOverflow(page);
    await close(page);
    await page.waitForTimeout(1500);
    expect(
      await read(page, "window.__VESPER__.snapshot().target?.scanned"),
    ).toBe(false);
    expect(
      await read(page, "window.__VESPER__.snapshot().target?.progress"),
    ).toBe(0);
    const hold = await center(page, '[data-touch-action="scan"]');
    await touch(session, "touchStart", [{ id: 5, ...hold }]);
    await expect
      .poll(() => read(page, "window.__VESPER__.snapshot().target?.scanned"))
      .toBe(true);
    await touch(session, "touchEnd", []);
    await page.screenshot({ path: "screenshots/16-mobile-portrait.png" });
    await settings(page, true);
    await page.locator("#controlScheme").selectOption("desktop");
    await close(page);
    await expect(page.locator("#touch-controls")).toBeHidden();
    expect(await read(page, "window.__VESPER__.snapshot().touchControls")).toBe(
      false,
    );
    await page.locator('.hud-nav [data-open="pause"]').tap();
    await page.locator('[data-open="settings"]').click();
    await page.locator("#controlScheme").selectOption("auto");
    await page.locator("#joystickSide").selectOption("right");
    await page.locator("#touchScale").fill("1.4");
    await close(page);
    await expect(page.locator("#touch-controls")).toBeVisible();
    await expect(page.locator("#touch-controls")).toHaveAttribute(
      "data-side",
      "right",
    );
    const rightStick = await page.locator(".touch-joystick").boundingBox();
    const leftActions = await page.locator(".touch-actions").boundingBox();
    expect(leftActions!.x + leftActions!.width).toBeLessThan(rightStick!.x);
    await page.reload();
    await page.getByRole("button", { name: /Continue expedition/ }).click();
    expect(
      await read(page, "window.__VESPER__.snapshot().settings"),
    ).toMatchObject({
      controlScheme: "auto",
      joystickSide: "right",
      touchScale: 1.4,
    });
    await expect(page.locator("#touch-controls")).toBeVisible();
    await session.detach();
    expect(errors).toEqual([]);
  });

  test("portrait and landscape bag, map and settings remain usable within the viewport", async ({
    page,
  }) => {
    const errors = monitor(page);
    await begin(page, 25);
    for (const viewport of [
      { width: 390, height: 844 },
      { width: 360, height: 800 },
      { width: 844, height: 390 },
    ]) {
      await page.setViewportSize(viewport);
      await page.locator('[data-touch-action="backpack"]').tap();
      await expect(
        page.getByRole("heading", { name: "Backpack & field crafting" }),
      ).toBeVisible();
      await noOverflow(page);
      await expect(page.locator(".close-overlay")).toBeInViewport();
      await close(page);
      await page.locator('[data-touch-action="map"]').tap();
      await expect(
        page.getByRole("heading", { name: "Survey map", exact: true }),
      ).toBeVisible();
      await noOverflow(page);
      await page.locator('[data-action="lake-waypoint"]').click();
      expect(
        await read(page, "window.__VESPER__.snapshot().waypoint"),
      ).toBeTruthy();
      await close(page);
      await settings(page, true);
      await noOverflow(page);
      await page.locator("#touchSensitivity").fill("1.2");
      await page.locator("#volume").fill("0");
      await close(page);
      const buttons = await page
        .locator(".touch-action")
        .evaluateAll((elements) =>
          elements.map((element) => {
            const rect = element.getBoundingClientRect();
            return {
              x: rect.x,
              y: rect.y,
              right: rect.right,
              bottom: rect.bottom,
              width: rect.width,
              height: rect.height,
            };
          }),
        );
      for (const button of buttons) {
        expect(button.width).toBeGreaterThanOrEqual(44);
        expect(button.height).toBeGreaterThanOrEqual(44);
        expect(button.x).toBeGreaterThanOrEqual(0);
        expect(button.y).toBeGreaterThanOrEqual(0);
        expect(button.right).toBeLessThanOrEqual(viewport.width);
        expect(button.bottom).toBeLessThanOrEqual(viewport.height);
      }
      if (viewport.width === 844)
        await page.screenshot({ path: "screenshots/17-mobile-landscape.png" });
    }
    expect(errors).toEqual([]);
  });
});
