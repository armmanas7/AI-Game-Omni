import { chromium, webkit, devices } from "@playwright/test";
import { writeFile } from "node:fs/promises";
const url =
  process.env.VESPER_TEST_URL || "http://127.0.0.1:4186/AI-Game-Omni/";
const output =
  process.env.VESPER_TEST_REPORT || "docs/hosting-local-check.json";
const results = [];
for (const [engine, browserType] of [
  ["chromium", chromium],
  ["webkit", webkit],
]) {
  const browser = await browserType.launch({
    headless: true,
    ...(engine === "chromium"
      ? { args: ["--enable-webgl", "--use-angle=metal"] }
      : {}),
  });
  try {
    const cases =
      engine === "chromium"
        ? [
            { name: "desktop-en", language: "en", mobile: false },
            { name: "desktop-zh", language: "zh-CN", mobile: false },
            { name: "phone-portrait-en", language: "en", mobile: true },
            { name: "phone-landscape-zh", language: "zh-CN", mobile: true },
          ]
        : [
            { name: "phone-portrait-en", language: "en", mobile: true },
            { name: "phone-landscape-zh", language: "zh-CN", mobile: true },
          ];
    for (const test of cases) {
      const landscape = test.name.includes("landscape");
      const context = await browser.newContext(
        test.mobile
          ? {
              ...devices["iPhone 13"],
              viewport: landscape
                ? { width: 844, height: 390 }
                : { width: 390, height: 844 },
            }
          : { viewport: { width: 1440, height: 900 } },
      );
      try {
        const page = await context.newPage();
        const errors = [],
          badResponses = [],
          escapedAssets = [];
        page.on("pageerror", (e) => errors.push(e.message));
        page.on("requestfailed", (r) =>
          errors.push(`Failed request: ${r.url()}`),
        );
        page.on("response", (r) => {
          if (r.status() >= 400) badResponses.push([r.status(), r.url()]);
        });
        page.on("request", (r) => {
          if (
            /\.(js|css|png|woff2?|svg)(\?|$)/.test(r.url()) &&
            !r.url().startsWith(url)
          )
            escapedAssets.push(r.url());
        });
        const response = await page.goto(url, { waitUntil: "networkidle" });
        if (response.status() !== 200)
          throw new Error(`HTTP ${response.status()}`);
        await page.locator(`button[data-language="${test.language}"]`).click();
        await page.locator("#expedition-seed").fill("VESPER-01");
        await page.locator('[data-action="start"]').click();
        await page.locator(".game-hud").waitFor({ state: "visible" });
        await page.waitForTimeout(1200);
        const touch = await page
          .locator('[data-touch-action="scan"]')
          .isVisible();
        if (touch !== test.mobile)
          throw new Error("Adaptive controls incorrect");
        if (test.mobile) {
          const scan = page.locator('[data-touch-action="scan"]');
          const event = {
            pointerId: 71,
            pointerType: "touch",
            isPrimary: true,
            button: 0,
            buttons: 1,
            bubbles: true,
          };
          await scan.dispatchEvent("pointerdown", event);
          try {
            await page.waitForFunction(
              () =>
                Number(
                  document.querySelector("#hud-discovered")?.textContent,
                ) >= 1,
              null,
              { timeout: 12000 },
            );
          } finally {
            await scan.dispatchEvent("pointerup", { ...event, buttons: 0 });
          }
        } else {
          await page.keyboard.down("KeyE");
          try {
            await page.waitForFunction(
              () =>
                Number(
                  document.querySelector("#hud-discovered")?.textContent,
                ) >= 1,
              null,
              { timeout: 12000 },
            );
          } finally {
            await page.keyboard.up("KeyE");
          }
        }
        const dismiss = page.locator('[data-action="dismiss-discovery"]');
        if (await dismiss.isVisible()) await dismiss.click();
        if (test.mobile) {
          await page.locator('[data-touch-action="pause"]').click();
          await page.locator('.pause-screen [data-open="journal"]').click();
        } else await page.keyboard.press("KeyJ");
        const portrait = page.locator(".specimen-portrait");
        await portrait.waitFor({ state: "visible" });
        await page.waitForFunction(() => {
          const img = document.querySelector(".specimen-portrait");
          return img?.complete && img.naturalWidth > 0;
        });
        const image = await portrait.getAttribute("src");
        const lang = await page.locator("html").getAttribute("lang");
        if (lang !== test.language)
          throw new Error("Language selection failed");
        if (
          await page.evaluate(
            () => document.documentElement.scrollWidth > innerWidth + 1,
          )
        )
          throw new Error("Horizontal overflow");
        await page.locator(".close-overlay").click();
        await page.screenshot({
          path: `screenshots/hosting-${engine}-${test.name}.png`,
          animations: "disabled",
        });
        await page.reload({ waitUntil: "networkidle" });
        await page.locator('[data-action="continue"]').click();
        await page.waitForFunction(
          () =>
            Number(document.querySelector("#hud-discovered")?.textContent) >= 1,
        );
        if (errors.length || badResponses.length || escapedAssets.length)
          throw new Error(
            JSON.stringify({ errors, badResponses, escapedAssets }),
          );
        const result = {
          engine,
          ...test,
          passed: true,
          touchControls: touch,
          firstDiscovery: true,
          savedProgress: true,
          portrait: image,
          errors,
          badResponses,
          escapedAssets,
        };
        results.push(result);
        console.log(`PASS ${engine} ${test.name}`);
      } finally {
        await context.close();
      }
    }
  } finally {
    await browser.close();
  }
}
await writeFile(
  output,
  JSON.stringify(
    {
      url,
      verifiedAt: new Date().toISOString(),
      results,
      note: "Phone browser emulations; scan hold uses simulated pointer events. Physical phones remain untested.",
    },
    null,
    2,
  ) + "\n",
);
