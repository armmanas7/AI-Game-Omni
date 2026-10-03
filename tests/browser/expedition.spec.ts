import { test, expect, type Page } from "@playwright/test";
import { readFile } from "node:fs/promises";

type Entity = {
  id: string;
  speciesId: string;
  role: string;
  x: number;
  z: number;
  y: number;
};
const diagnostic = (page: Page, expression: string) =>
  page.evaluate(expression);

async function begin(page: Page) {
  await page.goto("/");
  await page.waitForFunction(() => (window as any).__VESPER__);
  await page.locator("#expedition-seed").fill("VESPER-01");
  await page.getByRole("button", { name: /Begin expedition/ }).click();
  await expect(page.locator(".game-hud")).toBeVisible();
  await page.waitForFunction(
    () => (window as any).__VESPER__.stats().chunks === 49,
  );
}

async function approach(page: Page, entity: Entity) {
  await page.evaluate(
    ({ x, z }) => (window as any).__VESPER__.teleport(x, z + 5),
    entity,
  );
  await page.waitForTimeout(150);
  await page.evaluate((id) => (window as any).__VESPER__.lookAt(id), entity.id);
  await expect
    .poll(() => diagnostic(page, "window.__VESPER__.snapshot().target?.id"))
    .toBe(entity.id);
}

async function scan(page: Page, entity: Entity, duration = 1900) {
  await approach(page, entity);
  await page.keyboard.down("KeyE");
  await page.waitForTimeout(duration);
  await page.keyboard.up("KeyE");
  await expect
    .poll(() =>
      diagnostic(page, "window.__VESPER__.snapshot().target?.scanned"),
    )
    .toBe(true);
}

function monitor(page: Page) {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  return errors;
}

test("movement, scanning, clue investigation, research and journal form a complete loop", async ({
  page,
}) => {
  const errors = monitor(page);
  await begin(page);
  const start = await diagnostic(page, "window.__VESPER__.snapshot().position");
  await page.keyboard.down("KeyW");
  await page.waitForTimeout(550);
  await page.keyboard.up("KeyW");
  const moved = await diagnostic(page, "window.__VESPER__.snapshot().position");
  expect(start.z - moved.z).toBeGreaterThan(1.5);
  const floor = await diagnostic(page, "window.__VESPER__.stats().position[1]");
  await page.keyboard.press("Space");
  await page.waitForTimeout(220);
  expect(
    await diagnostic(page, "window.__VESPER__.stats().position[1]"),
  ).toBeGreaterThan(floor + 0.5);
  await page.waitForTimeout(800);

  const intro: Entity = await diagnostic(
    page,
    'window.__VESPER__.entities().find(e => e.id.endsWith(":firstlight"))',
  );
  await scan(page, intro);
  const xp = await diagnostic(page, "window.__VESPER__.snapshot().xp");
  await page.keyboard.down("KeyE");
  await page.waitForTimeout(1300);
  await page.keyboard.up("KeyE");
  expect(await diagnostic(page, "window.__VESPER__.snapshot().xp")).toBe(xp);
  expect(
    await diagnostic(page, "window.__VESPER__.snapshot().scannedCount"),
  ).toBe(1);

  const site = await diagnostic(
    page,
    "window.__VESPER__.sites().find(s => s.x===0 && s.z===-35)",
  );
  const landmark: Entity = await diagnostic(
    page,
    `window.__VESPER__.entities().find(e => e.id===${JSON.stringify(site.landmarkId)})`,
  );
  await approach(page, landmark);
  await page.keyboard.down("KeyE");
  await page.waitForTimeout(1900);
  await page.keyboard.up("KeyE");
  expect(
    await diagnostic(page, "window.__VESPER__.snapshot().target.locked"),
  ).toBe(true);
  expect(
    await diagnostic(page, "window.__VESPER__.snapshot().sitesCompleted"),
  ).toBe(0);
  for (const clueId of site.clueIds) {
    const clue: Entity = await diagnostic(
      page,
      `window.__VESPER__.entities().find(e => e.id===${JSON.stringify(clueId)})`,
    );
    await scan(page, clue);
  }
  await scan(page, landmark, 2300);
  expect(
    await diagnostic(page, "window.__VESPER__.snapshot().sitesCompleted"),
  ).toBe(1);
  expect(
    await diagnostic(page, "window.__VESPER__.snapshot().level"),
  ).toBeGreaterThan(1);
  expect(
    await diagnostic(page, "window.__VESPER__.snapshot().scannerRange"),
  ).toBeGreaterThan(13);
  await page.screenshot({ path: "screenshots/05-grove-resolved.png" });

  await page.keyboard.press("KeyJ");
  await expect(
    page.getByRole("heading", { name: "Field atlas", exact: true }),
  ).toBeVisible();
  await page.locator('button[data-species="heartwood-archive"]').click();
  await expect(page.locator(".species-detail")).toContainText(
    "Heartwood Archive",
  );
  await page.locator('[data-filter="relic"]').click();
  await expect(
    page.locator('button[data-species="heartwood-archive"]'),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.locator(".game-hud")).toBeVisible();
  await page.keyboard.press("KeyQ");
  expect(
    await diagnostic(page, "window.__VESPER__.snapshot().pulseCooldown"),
  ).toBeGreaterThan(0);
  expect(errors).toEqual([]);
});

test("all biomes render, moving fauna can be scanned, streamed geometry stays bounded and saves resume", async ({
  page,
}) => {
  test.setTimeout(100_000);
  const errors = monitor(page);
  await begin(page);
  for (const [x, z, biome] of [
    [160, 0, "desert"],
    [0, 160, "caves"],
  ] as const) {
    await page.evaluate(
      ({ x, z }) => (window as any).__VESPER__.teleport(x, z),
      { x, z },
    );
    await expect
      .poll(() => diagnostic(page, "window.__VESPER__.snapshot().biome"))
      .toBe(biome);
    await page.waitForTimeout(2300);
    await page.screenshot({ path: `screenshots/06-${biome}.png` });
    expect(
      await diagnostic(page, "window.__VESPER__.stats().calls"),
    ).toBeLessThan(650);
  }
  const moth: Entity = await diagnostic(
    page,
    'window.__VESPER__.entities().find(e => e.speciesId.includes("moth") && e.role!=="landmark")',
  );
  expect(moth).toBeTruthy();
  await scan(page, moth);
  const before = await diagnostic(page, "window.__VESPER__.stats().geometries");
  for (let i = 1; i <= 6; i++) {
    await page.evaluate(
      (i) => (window as any).__VESPER__.teleport(600 * i, -250 * i),
      i,
    );
    await page.waitForTimeout(1600);
    expect(
      await diagnostic(page, "window.__VESPER__.stats().chunks"),
    ).toBeLessThanOrEqual(49);
  }
  const after = await diagnostic(page, "window.__VESPER__.stats().geometries");
  expect(after).toBeLessThan(before + 100);
  await page.keyboard.press("KeyR");
  const saved = JSON.parse(await diagnostic(page, "window.__VESPER__.save()"));
  await page.reload();
  await page.getByRole("button", { name: /Continue expedition/ }).click();
  await expect
    .poll(() => diagnostic(page, "window.__VESPER__.snapshot().scannedCount"))
    .toBe(Object.keys(saved.scanned).length);
  const resumed = await diagnostic(page, "window.__VESPER__.snapshot()");
  expect(resumed.visitedBiomes).toEqual(
    expect.arrayContaining(["forest", "desert", "caves"]),
  );
  expect(resumed.position.x).toBeCloseTo(0, 1);
  expect(resumed.position.z).toBeCloseTo(0, 1);
  expect(errors).toEqual([]);
});

test("settings, accessible map, export/import, reset confirmation and photography work", async ({
  page,
}) => {
  const errors = monitor(page);
  await begin(page);
  const intro: Entity = await diagnostic(
    page,
    'window.__VESPER__.entities().find(e => e.id.endsWith(":firstlight"))',
  );
  await scan(page, intro);
  await page.keyboard.press("KeyM");
  await page.locator("#survey-canvas").focus();
  await page.keyboard.press("ArrowRight");
  expect(
    await diagnostic(page, "window.__VESPER__.snapshot().waypoint.x"),
  ).toBeGreaterThan(0);
  await page.getByRole("button", { name: "Clear waypoint" }).click();
  expect(
    await diagnostic(page, "window.__VESPER__.snapshot().waypoint"),
  ).toBeNull();
  await page.keyboard.press("Escape");
  await expect(page.locator(".game-hud")).toBeVisible();
  await page.waitForTimeout(300);
  await page.keyboard.press("Escape");
  await expect(
    page.getByRole("heading", { name: "Expedition paused" }),
  ).toBeVisible();
  await page.locator('[data-open="settings"]').click();
  await page.locator("#quality").selectOption("low");
  await page.locator("#reducedMotion").check();
  await page.locator("#volume").fill("0.2");
  await page.locator("#sensitivity").fill("1.4");
  await page.waitForTimeout(700);
  const settings = await diagnostic(
    page,
    "window.__VESPER__.snapshot().settings",
  );
  expect(settings).toMatchObject({
    quality: "low",
    reducedMotion: true,
    volume: 0.2,
    sensitivity: 1.4,
  });
  expect(await diagnostic(page, "window.__VESPER__.stats().chunks")).toBe(25);
  await page.keyboard.press("Escape");
  await expect(page.locator(".game-hud")).toBeVisible();
  await page.waitForTimeout(300);
  await page.keyboard.press("Escape");
  await expect(
    page.getByRole("heading", { name: "Expedition paused" }),
  ).toBeVisible();
  const exported = page.waitForEvent("download");
  await page.locator('[data-action="export"]').first().click();
  const download = await exported;
  const save = await readFile((await download.path())!, "utf8");
  expect(JSON.parse(save).discoveries["pearl-lantern"]).toBeTruthy();
  await page.locator(".import-file").setInputFiles({
    name: "bad-save.json",
    mimeType: "application/json",
    buffer: Buffer.from('{"broken":true}'),
  });
  await expect(page.locator(".toast-stack")).toContainText(
    "Could not restore this atlas",
  );
  expect(
    await diagnostic(page, "window.__VESPER__.snapshot().scannedCount"),
  ).toBe(1);
  await page.locator('[data-action="new"]').click();
  await expect(page.locator(".confirmation-shell")).toBeVisible();
  await page.locator('[data-action="cancel-new"]').click();
  expect(
    await diagnostic(page, "window.__VESPER__.snapshot().scannedCount"),
  ).toBe(1);
  await page.locator('[data-action="new"]').click();
  await page.locator('[data-action="confirm-new"]').click();
  await expect
    .poll(() => diagnostic(page, "window.__VESPER__.snapshot().scannedCount"))
    .toBe(0);
  await page.waitForTimeout(300);
  await page.keyboard.press("Escape");
  await expect(
    page.getByRole("heading", { name: "Expedition paused" }),
  ).toBeVisible();
  await page.locator(".import-file").setInputFiles({
    name: "expedition.json",
    mimeType: "application/json",
    buffer: Buffer.from(save),
  });
  await expect
    .poll(() => diagnostic(page, "window.__VESPER__.snapshot().scannedCount"))
    .toBe(1);
  expect(
    await diagnostic(page, "window.__VESPER__.snapshot().settings"),
  ).toMatchObject(settings);
  await page.keyboard.press("Escape");
  await page.keyboard.press("KeyP");
  await expect(page.locator(".photo-instrument")).toBeVisible();
  const photo = page.waitForEvent("download");
  await page.keyboard.press("KeyO");
  const photoDownload = await photo;
  const image = await readFile((await photoDownload.path())!);
  expect(image.subarray(0, 8).toString("hex")).toBe("89504e470d0a1a0a");
  await photoDownload.saveAs("screenshots/07-photograph.png");
  await page.keyboard.press("KeyP");
  await page.setViewportSize({ width: 1024, height: 768 });
  await expect(page.locator(".hud-nav")).toBeVisible();
  await page.screenshot({ path: "screenshots/08-small-desktop.png" });
  expect(errors).toEqual([]);
});

test("denied browser storage reports the failure and keeps manual export available", async ({
  page,
}) => {
  const errors = monitor(page);
  await page.addInitScript(() => {
    Storage.prototype.setItem = () => {
      throw new DOMException("Storage denied", "QuotaExceededError");
    };
  });
  await begin(page);
  await expect(page.locator(".toast-stack")).toContainText(
    "Your expedition could not be saved",
  );
  await page.waitForTimeout(300);
  await page.keyboard.press("Escape");
  await expect(page.locator("#save-status")).toHaveText(
    "Could not save on this device — export a backup",
  );
  const exported = page.waitForEvent("download");
  await page.locator('[data-action="export"]').first().click();
  const download = await exported;
  expect(
    JSON.parse(await readFile((await download.path())!, "utf8")).seed,
  ).toBe("VESPER-01");
  expect(errors).toEqual([]);
});

test("habitat variety, observable wildlife and actual-model atlas portraits work", async ({
  page,
}) => {
  const errors = monitor(page);
  await begin(page);
  await expect(page.locator("#hud-discovered").locator("..")).toContainText(
    "60 specimens",
  );
  const grazer: Entity = await diagnostic(
    page,
    'window.__VESPER__.entities().find(e=>e.speciesId==="moss-grazer")',
  );
  expect(grazer).toBeTruthy();
  await approach(page, grazer);
  const before = await diagnostic(
    page,
    `window.__VESPER__.entities().find(e=>e.id===${JSON.stringify(grazer.id)})`,
  );
  await page.waitForTimeout(400);
  const after = await diagnostic(
    page,
    `window.__VESPER__.entities().find(e=>e.id===${JSON.stringify(grazer.id)})`,
  );
  expect(Math.hypot(after.x - before.x, after.z - before.z)).toBeLessThan(0.03);
  await scan(page, after);
  await page.screenshot({ path: "screenshots/09-moss-grazer.png" });
  await page.keyboard.press("KeyJ");
  await page.locator('button[data-species="moss-grazer"]').click();
  await expect(page.locator(".specimen-portrait")).toBeVisible();
  await expect
    .poll(() =>
      page
        .locator(".specimen-portrait")
        .evaluate((img: HTMLImageElement) => img.naturalWidth),
    )
    .toBe(384);
  await page.screenshot({ path: "screenshots/10-wildlife-atlas.png" });
  await page.keyboard.press("Escape");
  for (const [x, z, name] of [
    [0, 15, "Starpetal Meadows"],
    [-48, -12, "The Fernwood"],
    [48, -12, "Veilwillow Grove"],
    [0, -65, "Sporelight Wetlands"],
  ] as const) {
    await page.evaluate(
      ({ x, z }) => (window as any).__VESPER__.teleport(x, z),
      { x, z },
    );
    await expect(page.locator("#hud-habitat")).toHaveText(name);
    await page.waitForTimeout(900);
    await page.screenshot({
      path: `screenshots/11-${name.toLowerCase().replaceAll(" ", "-")}.png`,
    });
  }
  await page.keyboard.press("Escape");
  const save = JSON.parse(await diagnostic(page, "window.__VESPER__.save()"));
  await page.locator(".import-file").setInputFiles({
    name: "blocked-save.json",
    mimeType: "application/json",
    buffer: Buffer.from(JSON.stringify({ ...save, position: { x: -8, z: 5 } })),
  });
  await expect(page.locator(".toast-stack")).toContainText(
    "Expedition restored",
  );
  await expect
    .poll(() => diagnostic(page, "window.__VESPER__.snapshot().position"))
    .not.toEqual({ x: -8, z: 5 });
  expect(
    await diagnostic(
      page,
      "window.__VESPER__.snapshot().discoveries['moss-grazer']",
    ),
  ).toBeTruthy();
  expect(errors).toEqual([]);
});

test("connected water habitats, swimming, birds, fish scans and lake navigation work", async ({
  page,
}) => {
  test.setTimeout(90_000);
  const errors = monitor(page);
  await begin(page);
  const lake = await diagnostic(page, "window.__VESPER__.lake()");
  await page.keyboard.press("KeyM");
  await page.getByRole("button", { name: /Mark nearby lake/ }).click();
  expect(
    await diagnostic(page, "window.__VESPER__.snapshot().waypoint"),
  ).toMatchObject({ x: lake.x, z: lake.z });
  await page.keyboard.press("Escape");
  await page.evaluate(
    ({ x, z }) => (window as any).__VESPER__.teleport(x, z),
    lake,
  );
  await expect(page.locator("#hud-habitat")).toHaveText(
    "Firstlight Lake · Swimming",
  );
  const water = await page.evaluate(
    ({ x, z }) => (window as any).__VESPER__.water(x, z),
    lake,
  );
  expect(water.depth).toBeGreaterThan(1.5);
  const height = (
    await diagnostic(page, "window.__VESPER__.stats().position")
  )[1];
  expect(height).toBeGreaterThan(water.level + 0.8);
  expect(height).toBeLessThan(water.level + 1);
  await page.screenshot({ path: "screenshots/12-firstlight-lake.png" });

  for (const speciesId of ["ribbon-fish", "glass-koi", "lantern-eel"]) {
    const fish: Entity = await diagnostic(
      page,
      `window.__VESPER__.entities().find(e=>e.speciesId===${JSON.stringify(speciesId)})`,
    );
    expect(fish, speciesId).toBeTruthy();
    await scan(page, fish);
    expect(
      await diagnostic(
        page,
        `window.__VESPER__.snapshot().discoveries[${JSON.stringify(speciesId)}]`,
      ),
    ).toBeTruthy();
    if (speciesId === "glass-koi")
      await page.screenshot({ path: "screenshots/13-glass-koi.png" });
  }
  const bird: Entity = await diagnostic(
    page,
    'window.__VESPER__.entities().find(e=>e.speciesId==="suncrest-bird")',
  );
  expect(bird).toBeTruthy();
  await scan(page, bird);
  await page.screenshot({ path: "screenshots/14-suncrest-bird.png" });
  await page.keyboard.press("Escape");
  await expect(
    page.getByRole("heading", { name: "Expedition paused" }),
  ).toBeVisible();
  const pausedWildlife = await diagnostic(
    page,
    'window.__VESPER__.entities().filter(e=>e.id.startsWith("waterlife:")).map(e=>({id:e.id,x:e.x,y:e.y,z:e.z,rotation:e.rotation}))',
  );
  await page.waitForTimeout(400);
  expect(
    await diagnostic(
      page,
      'window.__VESPER__.entities().filter(e=>e.id.startsWith("waterlife:")).map(e=>({id:e.id,x:e.x,y:e.y,z:e.z,rotation:e.rotation}))',
    ),
  ).toEqual(pausedWildlife);
  await page.getByRole("button", { name: /Resume expedition/ }).click();
  await page.keyboard.press("KeyJ");
  await page.locator('button[data-species="glass-koi"]').click();
  await expect
    .poll(() =>
      page
        .locator(".specimen-portrait")
        .evaluate((img: HTMLImageElement) => img.naturalWidth),
    )
    .toBe(384);
  await page.screenshot({ path: "screenshots/15-aquatic-atlas.png" });
  expect(errors).toEqual([]);
});
