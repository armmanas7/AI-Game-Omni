import { chromium } from "@playwright/test";
const browser = await chromium.launch({
  headless: true,
  args: ["--enable-webgl", "--use-angle=metal"],
});
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const issues = [];
page.on("pageerror", (error) => issues.push(error.message));
page.on("console", (message) => {
  if (message.type() === "error") issues.push(message.text());
});
await page.goto("http://127.0.0.1:4173/");
await page.waitForFunction(() => window.__VESPER__, { timeout: 30000 });
await page.waitForTimeout(1800);
await page.screenshot({ path: "screenshots/01-title.png" });
console.log("title", await page.evaluate(() => window.__VESPER__.stats()));
await page.locator("#expedition-seed").fill("VESPER-01");
await page.getByRole("button", { name: /Begin expedition/ }).click();
await page.waitForTimeout(1200);
await page.screenshot({ path: "screenshots/02-arrival.png" });
console.log(
  "arrival",
  await page.evaluate(() => ({
    stats: window.__VESPER__.stats(),
    snapshot: window.__VESPER__.snapshot(),
    entities: window.__VESPER__.entities().slice(0, 3),
  })),
);
await page.keyboard.down("KeyE");
await page.waitForTimeout(1600);
await page.keyboard.up("KeyE");
await page.screenshot({ path: "screenshots/03-first-discovery.png" });
console.log(
  "after scan",
  await page.evaluate(() => window.__VESPER__.snapshot()),
);
await page.keyboard.press("KeyJ");
await page.waitForTimeout(300);
await page.screenshot({ path: "screenshots/04-atlas.png" });
console.log("issues", issues);
await browser.close();
