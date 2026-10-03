import { test, expect, type Page } from "@playwright/test";
import { readFile } from "node:fs/promises";

const snapshot = (page: Page) =>
  page.evaluate(() => (window as any).__VESPER__.snapshot());

function monitor(page: Page) {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  return errors;
}

async function title(page: Page) {
  await page.goto("/");
  await page.waitForFunction(() => (window as any).__VESPER__);
  await expect(page.locator(".title-screen")).toBeVisible();
}

async function begin(page: Page) {
  await page.locator("#expedition-seed").fill("VESPER-01");
  await page.locator('[data-action="start"]').click();
  await expect(page.locator(".game-hud")).toBeVisible();
  await expect
    .poll(() => page.evaluate(() => (window as any).__VESPER__.stats().chunks))
    .toBeGreaterThanOrEqual(25);
}

async function pause(page: Page) {
  await page.locator('.hud-nav [data-open="pause"]').click();
  await expect(page.locator('section[data-screen="pause"]')).toBeVisible();
}

async function close(page: Page) {
  await page.locator(".close-overlay").click();
  await expect(page.locator(".game-hud")).toBeVisible();
}

test("title language switch and field guide are reversible without changing the chosen seed", async ({
  page,
}) => {
  const errors = monitor(page);
  await title(page);
  await page.locator("#expedition-seed").fill("MY-WORLD-中文");
  await page.locator('button[data-language="zh-CN"]').click();
  await expect(page.locator("html")).toHaveAttribute("lang", "zh-CN");
  await expect(page.locator('[data-action="start"]')).toContainText("开始探索");
  await expect(page.locator("#expedition-seed")).toHaveValue("MY-WORLD-中文");
  await expect(page.locator("#expedition-seed")).toHaveAttribute(
    "placeholder",
    "让图鉴为你选择",
  );
  await expect(page.locator('button[data-language="zh-CN"]')).toHaveAttribute(
    "aria-pressed",
    "true",
  );
  await page.screenshot({
    path: "screenshots/22-chinese-title.png",
    animations: "disabled",
  });
  await page.locator('[data-action="title-help"]').click();
  await expect(page.locator("#overlay-heading")).toHaveText("探索指南");
  await expect(page.locator(".scan-guide")).toContainText("约一秒");
  await expect(page.locator(".scan-guide")).toContainText("5 米以内");
  await expect(page.locator(".scan-guide")).toContainText("三条不同线索");
  await page.locator(".close-overlay").click();
  await expect(page.locator(".title-screen")).toBeVisible();
  await page.locator('button[data-language="en"]').click();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.locator('[data-action="start"]')).toContainText(
    "Begin expedition",
  );
  await expect(page.locator("#expedition-seed")).toHaveAttribute(
    "placeholder",
    "Let the atlas choose",
  );
  await expect(page.locator("#expedition-seed")).toHaveValue("MY-WORLD-中文");
  expect(errors).toEqual([]);
});

test("Chinese atlas, backpack, map and settings preserve discoveries and supplies through reload and save import", async ({
  page,
}) => {
  const errors = monitor(page);
  await title(page);
  await begin(page);
  await expect
    .poll(() => page.evaluate(() => (window as any).__VESPER__.stats().chunks))
    .toBe(49);
  const first = await page.evaluate(() =>
    (window as any).__VESPER__
      .entities()
      .find((entity: any) => entity.id.endsWith(":firstlight")),
  );
  await page.evaluate(
    ({ x, z }) => (window as any).__VESPER__.teleport(x, z + 5),
    first,
  );
  await page.waitForTimeout(150);
  await page.evaluate((id) => (window as any).__VESPER__.lookAt(id), first.id);
  await expect
    .poll(async () => (await snapshot(page)).target?.id)
    .toBe(first.id);
  await page.keyboard.down("KeyE");
  await page.waitForTimeout(1900);
  await page.keyboard.up("KeyE");
  await expect
    .poll(async () => (await snapshot(page)).discoveries["pearl-lantern"])
    .toBeTruthy();
  const cache = await page.evaluate(() =>
    (window as any).__VESPER__
      .fieldNodes()
      .find(
        (node: any) => node.kind === "cache" && node.id.includes(":starter:"),
      ),
  );
  await page.evaluate(
    ({ x, z }) => (window as any).__VESPER__.teleport(x, z + 3),
    cache,
  );
  await page.waitForTimeout(150);
  await page.evaluate(
    (id) => (window as any).__VESPER__.lookAtField(id),
    cache.id,
  );
  await expect
    .poll(async () => (await snapshot(page)).fieldTarget?.id)
    .toBe(cache.id);
  await page.keyboard.press("KeyF");
  await expect
    .poll(async () => (await snapshot(page)).fieldKit.inventory.alloy)
    .toBe(3);
  const before = await snapshot(page);
  await pause(page);
  await page.locator('[data-open="settings"]').click();
  await page.locator("#language").selectOption("zh-CN");
  await expect(page.locator("#overlay-heading")).toHaveText("探索设置");
  await expect(page.locator('section[data-screen="settings"]')).toContainText(
    "界面语言",
  );
  await expect(page.locator("#movementMode")).toContainText("点击移动");
  const after = await snapshot(page);
  expect(after.discoveries).toEqual(before.discoveries);
  expect(after.fieldKit).toEqual(before.fieldKit);
  expect(after.xp).toBe(before.xp);
  expect(after.seed).toBe(before.seed);
  await close(page);
  await page.locator('.hud-nav [data-open="journal"]').click();
  await expect(page.locator("#overlay-heading")).toHaveText("野外图鉴");
  await expect(page.locator(".species-detail h2")).toHaveText("珍珠灯花");
  await expect(page.locator(".record-copy")).toContainText("生态观察");
  await expect(page.locator(".specimen-portrait")).toHaveAttribute(
    "alt",
    /珍珠灯花.*标本/,
  );
  await page.screenshot({
    path: "screenshots/23-chinese-atlas.png",
    animations: "disabled",
  });
  await close(page);
  await page.locator('.hud-nav [data-open="backpack"]').click();
  await expect(page.locator("#overlay-heading")).toHaveText("背包与制作");
  await expect(page.locator(".item-grid")).toContainText("回收合金");
  await expect(page.locator(".recipe-list")).toContainText("还需要");
  await expect(page.locator('[data-discard="alloy"]')).toHaveAttribute(
    "aria-label",
    /丢弃 1 件回收合金/,
  );
  await page.screenshot({
    path: "screenshots/25-chinese-backpack.png",
    animations: "disabled",
  });
  await close(page);
  await page.locator('.hud-nav [data-open="map"]').click();
  await expect(page.locator("#overlay-heading")).toHaveText("勘测地图");
  await expect(page.locator(".map-key")).toContainText("水域");
  await expect(page.locator(".field-map-key")).toContainText("勘测探针");
  await close(page);
  await pause(page);
  const exported = page.waitForEvent("download");
  await page.locator('[data-action="export"]').first().click();
  const file = await exported;
  const save = await readFile((await file.path())!, "utf8");
  expect(JSON.parse(save).settings.language).toBe("zh-CN");
  await page.locator(".import-file").setInputFiles({
    name: "chinese-expedition.json",
    mimeType: "application/json",
    buffer: Buffer.from(save),
  });
  await expect
    .poll(async () => (await snapshot(page)).settings.language)
    .toBe("zh-CN");
  expect((await snapshot(page)).fieldKit).toEqual(before.fieldKit);
  expect((await snapshot(page)).discoveries).toEqual(before.discoveries);
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("lang", "zh-CN");
  await expect(page.locator('[data-action="continue"]')).toContainText(
    "继续探索",
  );
  await page.locator('[data-action="continue"]').click();
  await expect(page.locator(".game-hud")).toBeVisible();
  expect((await snapshot(page)).fieldKit).toEqual(before.fieldKit);
  expect((await snapshot(page)).discoveries).toEqual(before.discoveries);
  await pause(page);
  await page.locator('[data-open="settings"]').click();
  await page.locator("#language").selectOption("en");
  await expect(page.locator("#overlay-heading")).toHaveText("Your instruments");
  await expect(page.locator("#movementMode")).toContainText("Click to walk");
  expect((await snapshot(page)).discoveries).toEqual(before.discoveries);
  expect((await snapshot(page)).fieldKit).toEqual(before.fieldKit);
  expect(errors).toEqual([]);
});

test.describe("Chinese touch layout", () => {
  test.use({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
    deviceScaleFactor: 1,
  });

  test("Chinese controls and overlays fit portrait and landscape", async ({
    page,
  }) => {
    const errors = monitor(page);
    await title(page);
    await page.locator('button[data-language="zh-CN"]').tap();
    await begin(page);
    await expect(page.locator('[data-touch-action="scan"]')).toContainText(
      "扫描",
    );
    await expect(page.locator('[data-touch-action="interact"]')).toContainText(
      "使用",
    );
    for (const viewport of [
      { width: 390, height: 844 },
      { width: 360, height: 780 },
      { width: 844, height: 390 },
    ]) {
      await page.setViewportSize(viewport);
      await page.locator('[data-touch-action="pause"]').tap();
      await expect(page.locator('section[data-screen="pause"]')).toBeVisible();
      for (const screen of ["settings", "help", "backpack", "journal", "map"]) {
        await page
          .locator(`section[data-screen="pause"] [data-open="${screen}"]`)
          .click();
        await expect(
          page.locator(`section[data-screen="${screen}"]`),
        ).toBeVisible();
        const sizes = await page.evaluate(() => {
          const body = document.querySelector<HTMLElement>(".overlay-body")!;
          const panel = document.querySelector<HTMLElement>(".overlay-panel")!;
          const rect = panel.getBoundingClientRect();
          return {
            width: innerWidth,
            pageWidth: document.documentElement.scrollWidth,
            bodyWidth: body.clientWidth,
            bodyScroll: body.scrollWidth,
            left: rect.left,
            right: rect.right,
          };
        });
        expect(sizes.pageWidth).toBeLessThanOrEqual(sizes.width + 1);
        expect(sizes.bodyScroll).toBeLessThanOrEqual(sizes.bodyWidth + 1);
        expect(sizes.left).toBeGreaterThanOrEqual(-1);
        expect(sizes.right).toBeLessThanOrEqual(sizes.width + 1);
        await close(page);
        await page.locator('[data-touch-action="pause"]').tap();
      }
      await close(page);
      if (viewport.width === 844)
        await page.screenshot({
          path: "screenshots/24-chinese-mobile.png",
          animations: "disabled",
        });
    }
    expect(errors).toEqual([]);
  });
});
