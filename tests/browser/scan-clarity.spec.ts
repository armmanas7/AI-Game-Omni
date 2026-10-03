import { test, expect, type Page } from "@playwright/test";

type Entity = {
  id: string;
  speciesId: string;
  x: number;
  z: number;
  y: number;
};
async function begin(page: Page) {
  await page.goto("/");
  await page.waitForFunction(() => (window as any).__VESPER__);
  await page.locator("#expedition-seed").fill("VESPER-01");
  await page.getByRole("button", { name: /Begin expedition/ }).click();
  await page.waitForFunction(
    () => (window as any).__VESPER__.stats().chunks === 49,
  );
}
async function approach(page: Page, entity: Entity, offset = 5) {
  await page.evaluate(
    ({ x, z, offset }) => (window as any).__VESPER__.teleport(x, z + offset),
    { ...entity, offset },
  );
  await page.waitForTimeout(120);
  await page.evaluate((id) => (window as any).__VESPER__.lookAt(id), entity.id);
  await expect
    .poll(() =>
      page.evaluate(() => (window as any).__VESPER__.snapshot().target?.id),
    )
    .toBe(entity.id);
}
async function holdScan(page: Page, duration = 1600) {
  await page.keyboard.down("KeyE");
  await page.waitForTimeout(duration);
  await page.keyboard.up("KeyE");
}

test("landmark dependency is explicit; real E scans three clues and unlocks its finding", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await begin(page);
  const site = await page.evaluate(() =>
    (window as any).__VESPER__
      .sites()
      .find((s: any) => s.x === 0 && s.z === -35),
  );
  const entity = (id: string): Promise<Entity> =>
    page.evaluate(
      (id) =>
        (window as any).__VESPER__.entities().find((e: any) => e.id === id),
      id,
    );
  const landmark = await entity(site.landmarkId);
  await approach(page, landmark);
  await expect(page.locator("#target-prompt")).toContainText(
    "3 surrounding clues first",
  );
  await page.keyboard.press("KeyE");
  await expect(page.locator(".toast-stack")).toContainText(
    "Three clues unlock this landmark",
  );
  await expect(page.locator("#target-detail")).toContainText(
    "three distinct clues",
  );
  expect(
    await page.evaluate(
      () => (window as any).__VESPER__.snapshot().sitesCompleted,
    ),
  ).toBe(0);
  expect(
    await page.evaluate(
      () => (window as any).__VESPER__.snapshot().target.progress,
    ),
  ).toBe(0);
  for (let index = 0; index < site.clueIds.length; index++) {
    await approach(page, await entity(site.clueIds[index]));
    await holdScan(page);
    await expect
      .poll(() =>
        page.evaluate(
          () => (window as any).__VESPER__.snapshot().target?.scanned,
        ),
      )
      .toBe(true);
    if (index === 0) {
      await approach(page, landmark);
      await expect(page.locator("#target-prompt")).toContainText("1/3");
      await holdScan(page, 500);
      expect(
        await page.evaluate(
          () => (window as any).__VESPER__.snapshot().sitesCompleted,
        ),
      ).toBe(0);
    }
  }
  await approach(page, landmark);
  await expect(page.locator("#target-prompt")).toHaveText(
    "Hold E · reveal finding",
  );
  await holdScan(page, 2300);
  await expect
    .poll(() =>
      page.evaluate(() => (window as any).__VESPER__.snapshot().sitesCompleted),
    )
    .toBe(1);
  await page.keyboard.press("KeyE");
  await expect(page.locator(".toast-stack")).toContainText(
    "This observation is already recorded",
  );
  expect(
    await page.evaluate(
      () => (window as any).__VESPER__.snapshot().sitesCompleted,
    ),
  ).toBe(1);
  expect(errors).toEqual([]);
});

test("range and hold instructions explain an incomplete E scan and scanning works after approach", async ({
  page,
}) => {
  await begin(page);
  const intro: Entity = await page.evaluate(() =>
    (window as any).__VESPER__
      .entities()
      .find((e: any) => e.id.endsWith(":firstlight")),
  );
  await approach(page, intro, 19);
  await expect(page.locator("#target-prompt")).toContainText(
    "outside scanner range",
  );
  await holdScan(page, 1400);
  expect(
    await page.evaluate(
      () => (window as any).__VESPER__.snapshot().target?.scanned,
    ),
  ).toBe(false);
  await expect(page.locator(".toast-stack")).toContainText(
    "Move closer until the target card says Hold E",
  );
  await approach(page, intro);
  await holdScan(page, 180);
  await expect(page.locator(".toast-stack")).toContainText(
    "Hold the scanner until the bar fills",
  );
  expect(
    await page.evaluate(
      () => (window as any).__VESPER__.snapshot().target?.scanned,
    ),
  ).toBe(false);
  await holdScan(page);
  await expect
    .poll(() =>
      page.evaluate(
        () => (window as any).__VESPER__.snapshot().target?.scanned,
      ),
    )
    .toBe(true);
  await page.keyboard.press("KeyQ");
  await page.keyboard.press("KeyQ");
  await expect(page.locator(".toast-stack")).toContainText(
    "Sensor still recharging",
  );
  await expect(page.locator(".toast-stack")).toContainText(
    "crafted pulse cell",
  );
});

test("E explains F-only supplies, field range and repair material requirements", async ({
  page,
}) => {
  await begin(page);
  const nodes = await page.evaluate(() =>
    (window as any).__VESPER__
      .fieldNodes()
      .filter((n: any) => n.id.includes(":starter:")),
  );
  const cache = nodes.find((n: any) => n.kind === "cache");
  await page.evaluate(
    ({ x, z }) => (window as any).__VESPER__.teleport(x, z + 8),
    cache,
  );
  await page.waitForTimeout(120);
  await page.evaluate(
    (id) => (window as any).__VESPER__.lookAtField(id),
    cache.id,
  );
  await expect(page.locator("#field-prompt")).toContainText("Move within 5 m");
  await page.keyboard.press("KeyF");
  await expect(page.locator(".toast-stack")).toContainText(
    "Move closer to the field supply",
  );
  await page.evaluate(
    ({ x, z }) => (window as any).__VESPER__.teleport(x, z + 3),
    cache,
  );
  await page.waitForTimeout(120);
  await page.evaluate(
    (id) => (window as any).__VESPER__.lookAtField(id),
    cache.id,
  );
  const before = await page.evaluate(
    () => (window as any).__VESPER__.snapshot().fieldKit,
  );
  await holdScan(page, 700);
  await expect(page.locator(".toast-stack")).toContainText(
    "Field supplies use a different action",
  );
  await expect(page.locator(".toast-stack")).toContainText("press F");
  expect(
    await page.evaluate(() => (window as any).__VESPER__.snapshot().fieldKit),
  ).toEqual(before);
  await page.keyboard.press("KeyF");
  await expect
    .poll(() =>
      page.evaluate(
        (id) =>
          (window as any).__VESPER__.snapshot().fieldKit.collected.includes(id),
        cache.id,
      ),
    )
    .toBe(true);
  const probe = nodes.find((n: any) => n.kind === "probe");
  await page.evaluate(
    ({ x, z }) => (window as any).__VESPER__.teleport(x, z + 3),
    probe,
  );
  await page.waitForTimeout(120);
  await page.evaluate(
    (id) => (window as any).__VESPER__.lookAtField(id),
    probe.id,
  );
  await expect(page.locator("#field-prompt")).toContainText(
    "collect supplies first",
  );
  await page.keyboard.press("KeyF");
  await expect(page.locator(".toast-stack")).toContainText(
    "Field action unavailable",
  );
  expect(
    await page.evaluate(
      () => (window as any).__VESPER__.snapshot().fieldKit.repaired,
    ),
  ).toEqual([]);
});
