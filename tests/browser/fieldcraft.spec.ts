import { test, expect, type Page } from "@playwright/test";
import { readFile } from "node:fs/promises";

type Node = {
  id: string;
  kind: "cache" | "resin" | "crystal" | "probe";
  x: number;
  z: number;
};
type Kit = {
  inventory: Record<string, number>;
  collected: string[];
  repaired: string[];
  beacon: { x: number; z: number } | null;
};
const kit = (page: Page): Promise<Kit> =>
  page.evaluate(() => (window as any).__VESPER__.snapshot().fieldKit);
function monitor(page: Page) {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  return errors;
}
async function begin(page: Page) {
  await page.goto("/");
  await page.waitForFunction(() => (window as any).__VESPER__);
  await page.locator("#expedition-seed").fill("VESPER-01");
  await page.getByRole("button", { name: /Begin expedition/ }).click();
  await expect(page.locator(".game-hud")).toBeVisible();
  await page.waitForFunction(
    () => (window as any).__VESPER__.stats().chunks === 49,
  );
  // Field sources stream independently alongside terrain. Wait for their
  // full matching grid before requesting supplies outside the starter area.
  await expect
    .poll(() =>
      page.evaluate(() => (window as any).__VESPER__.stats().fieldNodes),
    )
    .toBeGreaterThan(130);
}
async function approach(page: Page, node: Node) {
  await page.evaluate(
    ({ x, z }) => (window as any).__VESPER__.teleport(x, z + 3),
    node,
  );
  await page.waitForTimeout(120);
  await page.evaluate(
    (id) => (window as any).__VESPER__.lookAtField(id),
    node.id,
  );
  await expect
    .poll(() =>
      page.evaluate(
        () => (window as any).__VESPER__.snapshot().fieldTarget?.id,
      ),
    )
    .toBe(node.id);
}
async function harvest(page: Page, node: Node) {
  await approach(page, node);
  await page.keyboard.press("KeyF");
  await expect
    .poll(async () => (await kit(page)).collected.includes(node.id))
    .toBe(true);
}
async function starter(page: Page): Promise<Node[]> {
  return page.evaluate(() =>
    (window as any).__VESPER__
      .fieldNodes()
      .filter((node: Node) => node.id.includes(":starter:")),
  );
}
async function gatherStarter(page: Page) {
  const nodes = await starter(page);
  for (const kind of ["cache", "resin", "crystal"] as const)
    await harvest(
      page,
      nodes.find((node) => node.kind === kind)!,
    );
  return nodes;
}
async function bag(page: Page) {
  await page.keyboard.press("KeyB");
  await expect(page.locator('section[data-screen="backpack"]')).toBeVisible();
}

test("real field collection fills the bag once, crafting consumes materials and a pulse cell recharges the sensor", async ({
  page,
}) => {
  const errors = monitor(page);
  await begin(page);
  const nodes = await gatherStarter(page);
  expect((await kit(page)).inventory).toMatchObject({
    alloy: 3,
    "lumen-resin": 3,
    crystal: 3,
  });
  const collected = await kit(page);
  await page.keyboard.press("KeyF");
  expect(await kit(page)).toEqual(collected);
  await page.keyboard.press("KeyQ");
  await expect
    .poll(() =>
      page.evaluate(() => (window as any).__VESPER__.snapshot().pulseCooldown),
    )
    .toBeGreaterThan(6);
  await page.waitForTimeout(1800);
  await bag(page);
  await expect(page.locator("#bag-capacity-count")).toContainText("9");
  await expect(page.locator('[data-recipe="pulse-cell"]')).toBeEnabled();
  await page.locator('[data-recipe="pulse-cell"]').click();
  await expect
    .poll(async () => (await kit(page)).inventory["pulse-cell"])
    .toBe(1);
  expect((await kit(page)).inventory).toMatchObject({
    alloy: 3,
    "lumen-resin": 2,
    crystal: 1,
  });
  await expect(page.locator('[data-recipe="pulse-cell"]')).toBeDisabled();
  await page.screenshot({ path: "screenshots/14-backpack-crafting.png" });
  await page.locator('[data-item="pulse-cell"]').click();
  await expect(page.locator('section[data-screen="backpack"]')).toBeHidden();
  await expect
    .poll(async () => (await kit(page)).inventory["pulse-cell"])
    .toBe(0);
  await expect
    .poll(() =>
      page.evaluate(() => (window as any).__VESPER__.snapshot().pulseCooldown),
    )
    .toBeGreaterThan(6);
  expect((await kit(page)).collected).toHaveLength(3);
  expect(nodes.find((node) => node.kind === "probe")).toBeTruthy();
  await bag(page);
  const beforeDiscard = await kit(page);
  const beforeTotal = Object.values(beforeDiscard.inventory).reduce(
    (sum, count) => sum + count,
    0,
  );
  await page.locator('[data-discard="alloy"]').click();
  await expect
    .poll(async () => (await kit(page)).inventory.alloy)
    .toBe(beforeDiscard.inventory.alloy - 1);
  expect((await kit(page)).inventory).toMatchObject({
    "lumen-resin": beforeDiscard.inventory["lumen-resin"],
    crystal: beforeDiscard.inventory.crystal,
  });
  await expect(page.locator("#bag-capacity-count")).toContainText(
    `${beforeTotal - 1}`,
  );
  expect(errors).toEqual([]);
});

test("probe repairs award XP once and reveal a cache, then a crafted beacon can be deployed, recalled and packed", async ({
  page,
}) => {
  const errors = monitor(page);
  await begin(page);
  const nodes = await gatherStarter(page),
    probe = nodes.find((node) => node.kind === "probe")!;
  const xp = await page.evaluate(
    () => (window as any).__VESPER__.snapshot().xp,
  );
  await approach(page, probe);
  await expect(page.locator(".game-hud")).toContainText(/repair probe/i);
  await page.keyboard.press("KeyF");
  await expect
    .poll(async () => (await kit(page)).repaired.includes(probe.id))
    .toBe(true);
  expect(
    await page.evaluate(() => (window as any).__VESPER__.snapshot().xp),
  ).toBe(xp + 55);
  const waypoint = await page.evaluate(
    () => (window as any).__VESPER__.snapshot().waypoint,
  );
  expect(waypoint).toBeTruthy();
  expect(
    await page.evaluate(
      (point) =>
        (window as any).__VESPER__
          .fieldNodes()
          .some(
            (node: Node) =>
              node.kind === "cache" && node.x === point.x && node.z === point.z,
          ),
      waypoint,
    ),
  ).toBe(true);
  await page.keyboard.press("KeyF");
  expect(
    await page.evaluate(() => (window as any).__VESPER__.snapshot().xp),
  ).toBe(xp + 55);
  expect((await kit(page)).inventory).toMatchObject({ alloy: 1, crystal: 2 });
  const nextCache: Node = await page.evaluate(
    (point) =>
      (window as any).__VESPER__
        .fieldNodes()
        .find(
          (node: Node) =>
            node.kind === "cache" && node.x === point.x && node.z === point.z,
        ),
    waypoint,
  );
  await harvest(page, nextCache);
  await page.evaluate(() => (window as any).__VESPER__.teleport(0, 0));
  await bag(page);
  await page.locator('[data-recipe="survey-beacon"]').click();
  await expect
    .poll(async () => (await kit(page)).inventory["survey-beacon"])
    .toBe(1);
  await page.locator('[data-item="survey-beacon"]').click();
  await expect.poll(async () => (await kit(page)).beacon).not.toBeNull();
  const beacon = (await kit(page)).beacon!;
  expect((await kit(page)).inventory["survey-beacon"]).toBe(0);
  await expect(page.locator(".beacon-status")).toBeVisible();
  await page.screenshot({ path: "screenshots/15-survey-beacon.png" });
  await page.keyboard.press("Escape");
  await page.evaluate(() => (window as any).__VESPER__.teleport(100, 85));
  await bag(page);
  await expect(page.locator('[data-action="beacon-pack"]')).toBeDisabled();
  await page.locator('[data-action="beacon-recall"]').click();
  await expect(page.locator('section[data-screen="backpack"]')).toBeHidden();
  await expect
    .poll(() =>
      page.evaluate((point) => {
        const p = (window as any).__VESPER__.snapshot().position;
        return Math.hypot(p.x - point.x, p.z - point.z);
      }, beacon),
    )
    .toBeLessThan(5);
  await bag(page);
  await expect(page.locator('[data-action="beacon-pack"]')).toBeEnabled();
  await page.locator('[data-action="beacon-pack"]').click();
  await expect.poll(async () => (await kit(page)).beacon).toBeNull();
  expect((await kit(page)).inventory["survey-beacon"]).toBe(1);
  expect((await kit(page)).repaired).toEqual([probe.id]);
  expect(errors).toEqual([]);
});

test("real backpack progress and an active beacon survive reload and exported-save import", async ({
  page,
}) => {
  const errors = monitor(page);
  await begin(page);
  await gatherStarter(page);
  await page.evaluate(() => (window as any).__VESPER__.teleport(0, 0));
  await bag(page);
  await page.locator('[data-recipe="survey-beacon"]').click();
  await page.locator('[data-item="survey-beacon"]').click();
  await expect.poll(async () => (await kit(page)).beacon).not.toBeNull();
  const savedKit = await kit(page);
  await page.keyboard.press("Escape");
  await page.keyboard.press("Escape");
  await expect(page.locator('section[data-screen="pause"]')).toBeVisible();
  const exported = page.waitForEvent("download");
  await page.locator('.pause-screen [data-action="export"]').click();
  const download = await exported,
    content = await readFile((await download.path())!);
  expect(JSON.parse(content.toString()).fieldKit).toEqual(savedKit);
  await page.reload();
  await page.getByRole("button", { name: /Continue expedition/ }).click();
  await expect.poll(() => kit(page)).toEqual(savedKit);
  await page.keyboard.press("Escape");
  await expect(page.locator('section[data-screen="pause"]')).toBeVisible();
  await page.locator('.pause-screen [data-action="new"]').click();
  await page.locator('.confirmation [data-action="confirm-new"]').click();
  await expect.poll(async () => (await kit(page)).collected.length).toBe(0);
  expect((await kit(page)).beacon).toBeNull();
  await page.keyboard.press("Escape");
  await page.locator(".import-file").setInputFiles({
    name: "field-kit.json",
    mimeType: "application/json",
    buffer: content,
  });
  await expect.poll(() => kit(page)).toEqual(savedKit);
  await expect(page.locator('section[data-screen="pause"]')).toBeVisible();
  await page.keyboard.press("Escape");
  await bag(page);
  await expect(page.locator(".beacon-status")).toBeVisible();
  await expect(page.locator("#bag-capacity-count")).toContainText("5");
  expect(errors).toEqual([]);
});
