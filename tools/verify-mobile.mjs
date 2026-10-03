import { chromium, webkit, devices } from "@playwright/test";
import { mkdir, readFile, writeFile } from "node:fs/promises";

// Compiled-release smoke checks. These are browser emulations, not physical phones.
// Hold-to-scan uses simulated PointerEvents because WebKit exposes no CDP touch-hold API.
const RELEASE_URL = "http://127.0.0.1:4174/";
const version = JSON.parse(await readFile("package.json", "utf8")).version;
const results = [];
let failed = false;
await mkdir("screenshots", { recursive: true });
await mkdir("docs", { recursive: true });

function assert(condition, message) {
  if (!condition) throw new Error(message);
}
async function visible(page, selector) {
  await page.locator(selector).waitFor({ state: "visible", timeout: 15_000 });
}
async function closeOverlay(page) {
  await page.locator(".close-overlay").tap();
  await visible(page, ".game-hud");
}
async function openPause(page) {
  const control = page.locator('[data-touch-action="pause"]');
  if (await control.isVisible()) await control.tap();
  else await page.locator('.hud-nav [data-open="pause"]').tap();
  await visible(page, 'section[data-screen="pause"]');
}
async function openSettings(page) {
  await openPause(page);
  await page.locator('[data-open="settings"]').tap();
  await visible(page, 'section[data-screen="settings"]');
}
async function layoutCheck(page, name, overlays) {
  const layout = await page.evaluate(() => {
    const panel = document.querySelector(".overlay-panel");
    const body = document.querySelector(".overlay-body");
    const panelVisible = !!panel?.getClientRects().length;
    const panelRect = panelVisible ? panel.getBoundingClientRect() : null;
    const actionNodes = panelVisible
      ? [...panel.querySelectorAll("button:not([disabled])")]
      : [...document.querySelectorAll(".touch-action")];
    const buttons = actionNodes
      .filter((element) => element.getClientRects().length)
      .map((element) => {
        const rect = element.getBoundingClientRect();
        return {
          label:
            element.getAttribute("aria-label") || element.textContent.trim(),
          width: Number(rect.width.toFixed(2)),
          height: Number(rect.height.toFixed(2)),
          left: Number(rect.left.toFixed(2)),
          right: Number(rect.right.toFixed(2)),
          top: Number(rect.top.toFixed(2)),
          bottom: Number(rect.bottom.toFixed(2)),
        };
      });
    return {
      viewport: { width: innerWidth, height: innerHeight },
      documentWidth: document.documentElement.scrollWidth,
      bodyWidth: panelVisible ? body.clientWidth : null,
      bodyScrollWidth: panelVisible ? body.scrollWidth : null,
      panel: panelRect
        ? {
            left: panelRect.left,
            right: panelRect.right,
            top: panelRect.top,
            bottom: panelRect.bottom,
          }
        : null,
      buttons,
    };
  });
  assert(
    layout.documentWidth <= layout.viewport.width + 1,
    `${name}: document overflows horizontally`,
  );
  if (layout.panel) {
    assert(
      layout.bodyScrollWidth <= layout.bodyWidth + 1,
      `${name}: overlay content overflows horizontally`,
    );
    assert(
      layout.panel.left >= -1 &&
        layout.panel.right <= layout.viewport.width + 1,
      `${name}: overlay escapes horizontal viewport`,
    );
    assert(
      layout.panel.top >= -1 &&
        layout.panel.bottom <= layout.viewport.height + 1,
      `${name}: overlay escapes vertical viewport`,
    );
    assert(
      await page.locator(".close-overlay").isVisible(),
      `${name}: Return is unavailable`,
    );
    const closeRect = await page.locator(".close-overlay").boundingBox();
    assert(
      closeRect.y >= 0 &&
        closeRect.y + closeRect.height <= layout.viewport.height,
      `${name}: Return lies outside viewport`,
    );
  }
  for (const button of layout.buttons) {
    assert(
      button.width >= 43.9 && button.height >= 43.9,
      `${name}: ${button.label} touch target is ${button.width} × ${button.height}, below 44 px`,
    );
    if (!layout.panel)
      assert(
        button.left >= -1 &&
          button.right <= layout.viewport.width + 1 &&
          button.top >= -1 &&
          button.bottom <= layout.viewport.height + 1,
        `${name}: ${button.label} is outside viewport`,
      );
  }
  overlays.push({ name, ...layout });
}
async function simulatedScan(page) {
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
      () => Number(document.querySelector("#hud-discovered")?.textContent) >= 1,
      null,
      { timeout: 8_000 },
    );
  } finally {
    await scan.dispatchEvent("pointerup", { ...event, buttons: 0 });
  }
}

async function surfaceCheck(page, selector, name, layouts) {
  const surface = await page.locator(selector).evaluate((element) => {
    const rect = element.getBoundingClientRect();
    return {
      viewport: { width: innerWidth, height: innerHeight },
      documentWidth: document.documentElement.scrollWidth,
      width: element.clientWidth,
      scrollWidth: element.scrollWidth,
      rect: {
        left: rect.left,
        right: rect.right,
        top: rect.top,
        bottom: rect.bottom,
      },
      buttons: [...element.querySelectorAll("button")]
        .filter((button) => button.getClientRects().length)
        .map((button) => {
          const box = button.getBoundingClientRect();
          return {
            label: button.textContent.trim(),
            width: box.width,
            height: box.height,
          };
        }),
    };
  });
  assert(
    surface.documentWidth <= surface.viewport.width + 1 &&
      surface.scrollWidth <= surface.width + 1,
    `${name}: horizontal overflow`,
  );
  assert(
    surface.rect.left >= -1 &&
      surface.rect.right <= surface.viewport.width + 1 &&
      surface.rect.top >= -1 &&
      surface.rect.bottom <= surface.viewport.height + 1,
    `${name}: surface escapes viewport`,
  );
  for (const button of surface.buttons)
    assert(
      button.width >= 43.9 && button.height >= 43.9,
      `${name}: ${button.label} touch target is below 44 px`,
    );
  layouts.push({ name, ...surface });
}

const mobileDevices = [
  {
    name: "iPhone Chrome rendering compatibility (WebKit emulation)",
    engine: "webkit",
    browserType: webkit,
    options: {
      ...devices["iPhone 13"],
      viewport: { width: 390, height: 844 },
      deviceScaleFactor: 1,
      userAgent:
        "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/153.0.0.0 Mobile/15E148 Safari/604.1",
    },
    landscape: { width: 844, height: 390 },
    image: "screenshots/18-mobile-iphone.png",
    landscapeImage: "screenshots/19-mobile-landscape.png",
  },
  {
    name: "Android Chrome (Pixel 7 emulation)",
    engine: "chromium",
    browserType: chromium,
    options: {
      ...devices["Pixel 7"],
      viewport: { width: 393, height: 851 },
      deviceScaleFactor: 1,
    },
    landscape: { width: 851, height: 393 },
    image: "screenshots/20-mobile-android.png",
    landscapeImage: "screenshots/21-mobile-android-landscape.png",
  },
];
for (const device of mobileDevices.flatMap((device) =>
  ["en", "zh-CN"].map((language) => ({ ...device, language })),
)) {
  let browser;
  let context;
  const result = {
    device: device.name,
    language: device.language,
    engine: device.engine,
    browserVersion: null,
    physicalDeviceTested: false,
    portrait: device.options.viewport,
    landscape: device.landscape,
    checks: {},
    layouts: [],
    errors: [],
    failedRequests: [],
    externalRequests: [],
    passed: false,
  };
  results.push(result);
  try {
    browser = await device.browserType.launch(
      device.engine === "webkit"
        ? { headless: true }
        : { headless: true, args: ["--enable-webgl", "--use-angle=metal"] },
    );
    result.browserVersion = browser.version();
    context = await browser.newContext({
      ...device.options,
      acceptDownloads: true,
    });
    const page = await context.newPage();
    page.on("pageerror", (error) => result.errors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") result.errors.push(message.text());
    });
    page.on("requestfailed", (request) =>
      result.failedRequests.push({
        url: request.url(),
        reason: request.failure()?.errorText || "Unknown failure",
      }),
    );
    await page.route("**/*", (route) => {
      const url = route.request().url();
      if (url.startsWith(RELEASE_URL) || /^(blob:|data:)/.test(url))
        return route.continue();
      result.externalRequests.push(url);
      return route.abort();
    });
    await page.goto(RELEASE_URL, { waitUntil: "networkidle" });
    assert(
      await page.evaluate(() => typeof window.__VESPER__ === "undefined"),
      "Developer diagnostics leaked into compiled release",
    );
    result.checks.developerAPIAbsent = true;
    await page.locator(`button[data-language="${device.language}"]`).tap();
    assert(
      (await page.locator("html").getAttribute("lang")) === device.language,
      "Title language selection failed",
    );
    await page.locator("#expedition-seed").fill("VESPER-01");
    await page.locator('[data-action="start"]').tap();
    await visible(page, ".game-hud");
    await visible(page, "#touch-controls");
    await visible(page, ".touch-joystick");
    await visible(page, ".minimap-instrument");
    await page.waitForTimeout(1600);
    result.checks.automaticTouchControls = true;
    result.checks.initialMiniMap = true;
    await layoutCheck(page, "portrait: gameplay", result.layouts);
    await simulatedScan(page);
    result.checks.initialSpecimenScan = {
      passed: true,
      method:
        "Simulated pointerdown/pointerup hold on the visible Scan button. Native touch taps are used for menu navigation; Chromium trusted multi-touch is covered separately in the browser suite.",
    };
    await page.locator('[data-action="dismiss-discovery"]').tap();
    for (const viewport of [device.options.viewport, device.landscape]) {
      await page.setViewportSize(viewport);
      const orientation =
        viewport.width > viewport.height ? "landscape" : "portrait";
      await page.waitForTimeout(200);
      await layoutCheck(page, `${orientation}: gameplay`, result.layouts);
      await page.locator('[data-touch-action="backpack"]').tap();
      await visible(page, 'section[data-screen="backpack"]');
      await layoutCheck(page, `${orientation}: backpack`, result.layouts);
      await closeOverlay(page);
      await page.locator('[data-touch-action="map"]').tap();
      await visible(page, 'section[data-screen="map"]');
      await layoutCheck(page, `${orientation}: map`, result.layouts);
      await page.locator('[data-action="clear-waypoint"]').tap();
      const emptyWaypoint = await page
        .locator("#waypoint-position")
        .textContent();
      await page.locator('[data-action="lake-waypoint"]').tap();
      await page.waitForFunction(
        (previous) =>
          document.querySelector("#waypoint-position")?.textContent !==
          previous,
        emptyWaypoint,
        { timeout: 5_000 },
      );
      assert(
        (await page.locator("#waypoint-position").textContent()) !==
          emptyWaypoint,
        "Lake waypoint was not placed",
      );
      await closeOverlay(page);
      await openPause(page);
      await layoutCheck(page, `${orientation}: pause`, result.layouts);
      await page.locator('.pause-screen [data-open="journal"]').tap();
      await visible(page, 'section[data-screen="journal"]');
      await layoutCheck(page, `${orientation}: atlas`, result.layouts);
      await closeOverlay(page);
      await openPause(page);
      await page.locator('[data-open="help"]').tap();
      await visible(page, 'section[data-screen="help"]');
      await layoutCheck(page, `${orientation}: guide`, result.layouts);
      await closeOverlay(page);
      await openSettings(page);
      await layoutCheck(page, `${orientation}: settings`, result.layouts);
      await closeOverlay(page);
      await openPause(page);
      await page.locator('[data-action="photo"]').tap();
      await visible(page, ".photo-instrument");
      await surfaceCheck(
        page,
        ".photo-instrument",
        `${orientation}: photo controls`,
        result.layouts,
      );
      const photoHitTests = await page
        .locator(".photo-instrument button")
        .evaluateAll((buttons) =>
          buttons.map((button) => {
            const rect = button.getBoundingClientRect();
            const hit = document.elementFromPoint(
              rect.x + rect.width / 2,
              rect.y + rect.height / 2,
            );
            return {
              label: button.textContent.trim(),
              reachable: hit?.closest("button") === button,
              blockingElement: hit?.className || null,
            };
          }),
        );
      for (const hit of photoHitTests)
        assert(
          hit.reachable,
          `${orientation}: photo button ${hit.label} is covered by ${hit.blockingElement}`,
        );
      const photoDownload = page.waitForEvent("download", { timeout: 10_000 });
      await page.locator('[data-action="capture"]').tap();
      const photograph = await photoDownload;
      const photographBytes = await readFile(await photograph.path());
      assert(
        photographBytes.subarray(0, 8).toString("hex") === "89504e470d0a1a0a",
        `${orientation}: photo download is not a PNG`,
      );
      result.checks.nativePhotoSaves ??= [];
      result.checks.nativePhotoSaves.push({
        orientation,
        filename: photograph.suggestedFilename(),
        bytes: photographBytes.length,
        pngHeaderValid: true,
        buttonCentersReachable: true,
      });
      await page.screenshot({
        path: `screenshots/mobile-${device.engine}-${device.language}-${orientation}-photo.png`,
      });
      await page.locator('[data-action="photo-return"]').tap();
      await visible(page, ".game-hud");
      await openPause(page);
      await page.locator('[data-action="new"]').tap();
      await visible(page, ".confirmation-shell");
      await surfaceCheck(
        page,
        ".confirmation",
        `${orientation}: new-expedition confirmation`,
        result.layouts,
      );
      await page.locator('[data-action="cancel-new"]').tap();
      await closeOverlay(page);
      while (await page.locator(".toast > button:visible").count())
        await page.locator(".toast > button:visible").first().tap();
      await page.screenshot({
        path:
          device.language === "en"
            ? orientation === "portrait"
              ? device.image
              : device.landscapeImage
            : `screenshots/mobile-${device.engine}-zh-CN-${orientation}.png`,
      });
    }
    result.checks.nativeMenuTaps = [
      "Backpack",
      "Map",
      "Lake waypoint",
      "Pause",
      "Atlas",
      "Guide",
      "Settings",
      "Photo mode and Return",
      "New-expedition confirmation and Keep exploring",
      "Return",
    ];
    result.checks.portraitLandscapeOverlays = true;
    result.checks.minimumActionTarget = "44 × 44 CSS pixels";
    await page.setViewportSize(device.options.viewport);
    await openSettings(page);
    await page.locator("#showMinimap").uncheck();
    await closeOverlay(page);
    await page.locator(".minimap-instrument").waitFor({ state: "hidden" });
    await openSettings(page);
    await page.locator("#showMinimap").check();
    await page.locator("#controlScheme").selectOption("desktop");
    await closeOverlay(page);
    await page.locator("#touch-controls").waitFor({ state: "hidden" });
    await visible(page, ".minimap-instrument");
    result.checks.desktopOverride = true;
    await openSettings(page);
    await page.locator("#controlScheme").selectOption("auto");
    await closeOverlay(page);
    await visible(page, "#touch-controls");
    result.checks.returnToAutomaticControls = true;
    result.checks.miniMapOffOn = true;
    await page.reload({ waitUntil: "networkidle" });
    await page.locator('[data-action="continue"]').tap();
    await visible(page, "#touch-controls");
    await visible(page, ".minimap-instrument");
    assert(
      Number(await page.locator("#hud-discovered").textContent()) >= 1,
      "Discoveries did not resume on mobile",
    );
    result.checks.mobileSaveResume = true;
    assert(
      (await page.locator("html").getAttribute("lang")) === device.language,
      "Language did not resume on mobile",
    );
    await openSettings(page);
    await page
      .locator("#language")
      .selectOption(device.language === "en" ? "zh-CN" : "en");
    await page.locator("#language").selectOption(device.language);
    await closeOverlay(page);
    assert(
      (await page.locator("html").getAttribute("lang")) === device.language,
      "Mobile language switching failed",
    );
    result.checks.languageSelectionSwitchingAndResume = true;
    assert(
      !result.errors.length,
      `Browser errors: ${result.errors.join("; ")}`,
    );
    assert(
      !result.failedRequests.length,
      "Compiled mobile release had failed requests",
    );
    assert(
      !result.externalRequests.length,
      "Compiled mobile release requested an external resource",
    );
    result.passed = true;
  } catch (error) {
    failed = true;
    result.failure = error.stack || String(error);
    console.error(`${device.engine}: ${error.message}`);
  } finally {
    await context?.close().catch(() => {});
    await browser?.close().catch(() => {});
  }
}
const report = {
  version,
  checkedAt: new Date().toISOString(),
  releaseURL: RELEASE_URL,
  physicalPhoneTested: false,
  environment:
    "Local compiled browser build; WebKit and Chromium phone emulations on macOS. This does not verify physical iPhone Chrome or Android hardware performance.",
  passed: !failed && results.every((result) => result.passed),
  results,
};
await writeFile(
  "docs/mobile-check.json",
  `${JSON.stringify(report, null, 2)}\n`,
);
console.log(
  JSON.stringify(
    {
      version: report.version,
      passed: report.passed,
      physicalPhoneTested: false,
      report: "docs/mobile-check.json",
      results: results.map((result) => ({
        engine: result.engine,
        language: result.language,
        browserVersion: result.browserVersion,
        passed: result.passed,
        layoutsChecked: result.layouts.length,
        errors: result.errors.length,
        failedRequests: result.failedRequests.length,
        externalRequests: result.externalRequests.length,
        failure: result.failure?.split("\n")[0],
      })),
    },
    null,
    2,
  ),
);
if (!report.passed) process.exitCode = 1;
