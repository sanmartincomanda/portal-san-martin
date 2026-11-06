import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import AxeBuilder from "@axe-core/playwright";

export async function settle(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) =>
      requestAnimationFrame(() => requestAnimationFrame(resolve)),
    );
    await Promise.all(
      document
        .getAnimations()
        .filter((animation) => animation.constructor.name === "Animation")
        .map((animation) => animation.finished.catch(() => {})),
    );
  });
}

export async function runBrowserChecks(
  browser,
  baseURL = "http://localhost:3006",
  outputDirectory = ".codex-artifacts/redesign-qa",
) {
  await mkdir(outputDirectory, { recursive: true });
  const results = [];
  const errors = [];
  const desktop = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
  });
  const page = await desktop.newPage();
  page.on("pageerror", (error) => errors.push(error.message));
  try {
    const response = await page.goto(baseURL, { waitUntil: "load" });
    assert.equal(response.status(), 200);
    assert.equal(await page.locator("h1").count(), 1);
    assert.match(await page.title(), /Carnes San Martín/);
    assert.equal(
      new URL(await page.locator('link[rel="canonical"]').getAttribute("href"))
        .href,
      "https://sanmartinsr.com/",
    );
    const data = JSON.parse(
      await page.locator('script[type="application/ld+json"]').textContent(),
    );
    assert.equal(
      data["@graph"].filter((item) => item["@type"] === "Store").length,
      3,
    );
    results.push("SEO, canonical and three local businesses");

    const rootShopLinks = await page
      .locator('a[data-commerce="shop"], a[data-commerce="product"]')
      .evaluateAll((links) => links.map((link) => link.href));
    assert.ok(rootShopLinks.length > 10);
    assert.ok(
      rootShopLinks.every((href) => href === "https://tienda.sanmartinsr.com/"),
    );
    const brokenAnchors = await page
      .locator('a[href^="#"]')
      .evaluateAll((links) =>
        links
          .filter((link) => !document.getElementById(link.hash.slice(1)))
          .map((link) => link.hash),
      );
    assert.equal(brokenAnchors.length, 0, JSON.stringify(brokenAnchors));
    results.push("Commerce destinations and all internal anchors");

    await page.getByRole("tab", { name: "02 Línea Parrillera" }).click();
    assert.equal(await page.locator("#panel-parrillera").isVisible(), true);
    await page
      .getByRole("tab", { name: "02 Línea Parrillera" })
      .press("ArrowRight");
    assert.equal(await page.locator("#panel-diaria").isVisible(), true);
    await page.getByRole("tab", { name: "03 Línea Diaria" }).press("Home");
    assert.equal(await page.locator("#panel-gold").isVisible(), true);
    assert.equal(await page.locator('[role="tabpanel"]:visible').count(), 1);
    results.push("Line selector mouse, arrows, Home and panel visibility");

    for (const [name, expected] of [
      ["Gold", 4],
      ["Parrillera", 1],
      ["Diaria", 1],
      ["Todos", 6],
    ]) {
      await page.getByRole("button", { name, exact: true }).click();
      await page.waitForFunction(
        (count) => document.querySelectorAll(".product-card").length === count,
        expected,
      );
    }
    await page.getByRole("button", { name: "Más cortes", exact: true }).click();
    await page.waitForFunction(
      () => document.querySelector(".product-shelf").scrollLeft > 100,
    );
    await page.getByRole("button", { name: "Diaria", exact: true }).click();
    await page.waitForFunction(
      () => document.querySelector(".product-shelf").scrollLeft <= 2,
    );
    await page.getByRole("button", { name: "Todos", exact: true }).click();
    results.push("Product filters, carousel, and reset after filtering");

    const axe = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .analyze();
    await writeFile(
      path.join(outputDirectory, "axe-production.json"),
      JSON.stringify(axe, null, 2),
    );
    assert.equal(
      axe.violations.length,
      0,
      JSON.stringify(axe.violations.map((violation) => violation.id)),
    );
    results.push("Axe WCAG A/AA desktop: zero detected violations");

    for (const route of ["/robots.txt", "/sitemap.xml"])
      assert.equal((await page.request.get(baseURL + route)).status(), 200);
    assert.equal((await page.request.get(baseURL + "/hub")).status(), 404);
    results.push("Sitemap, robots and removed internal portal");

    const mobile = await browser.newContext({
      viewport: { width: 390, height: 844 },
      isMobile: true,
      hasTouch: true,
    });
    const mobilePage = await mobile.newPage();
    try {
      await mobilePage.goto(baseURL, { waitUntil: "load" });
      const menu = mobilePage.locator(".mobile-menu");
      const trigger = mobilePage.locator(".mobile-menu summary");
      await trigger.click();
      assert.equal(await menu.getAttribute("open"), "");
      await mobilePage.keyboard.press("Escape");
      assert.equal(await menu.getAttribute("open"), null);
      assert.equal(
        await trigger.evaluate((element) => document.activeElement === element),
        true,
      );
      await trigger.click();
      await mobilePage
        .getByRole("navigation", { name: "Navegación móvil" })
        .getByRole("link", { name: /Sucursales/ })
        .click();
      assert.equal(await menu.getAttribute("open"), null);
      await trigger.click();
      await mobilePage.locator(".store-heading").first().click();
      assert.equal(await menu.getAttribute("open"), null);
      results.push(
        "Mobile menu, anchor closing, outside click and Escape focus return",
      );

      for (const width of [320, 360, 390, 768, 1024]) {
        await mobilePage.setViewportSize({ width, height: 844 });
        assert.equal(
          await mobilePage.evaluate(
            () => document.documentElement.scrollWidth <= innerWidth,
          ),
          true,
          `Horizontal overflow at ${width}px`,
        );
      }
      await mobilePage.setViewportSize({ width: 390, height: 844 });
      await mobilePage.evaluate(() =>
        window.scrollTo({ top: 0, behavior: "instant" }),
      );
      await settle(mobilePage);
      const buy = await mobilePage
        .locator(".hero-actions .button")
        .boundingBox();
      assert.ok(buy.y + buy.height <= 844);
      assert.ok(buy.x >= 0 && buy.x + buy.width <= 390);
      results.push("320/360/390/768/1024px fit and above-fold mobile buying");

      const mobileAxe = await new AxeBuilder({ page: mobilePage })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
        .analyze();
      await writeFile(
        path.join(outputDirectory, "axe-mobile.json"),
        JSON.stringify(mobileAxe, null, 2),
      );
      assert.equal(
        mobileAxe.violations.length,
        0,
        JSON.stringify(mobileAxe.violations.map((violation) => violation.id)),
      );
      results.push("Axe WCAG A/AA mobile: zero detected violations");

      await mobilePage.emulateMedia({ reducedMotion: "reduce" });
      await mobilePage
        .locator("#lineas")
        .evaluate((element) => element.scrollIntoView({ behavior: "instant" }));
      assert.equal(
        await mobilePage
          .locator(".section-heading")
          .first()
          .evaluate((element) => getComputedStyle(element).opacity),
        "1",
      );
      assert.equal(
        await mobilePage
          .locator(".hero h1 span")
          .first()
          .evaluate((element) => getComputedStyle(element).animationName),
        "none",
      );
      results.push("Reduced motion cancels animation without hiding content");
    } finally {
      await mobile.close();
    }

    const noJS = await browser.newContext({
      javaScriptEnabled: false,
      viewport: { width: 390, height: 844 },
    });
    try {
      const noJSPage = await noJS.newPage();
      await noJSPage.goto(baseURL, { waitUntil: "load" });
      assert.equal(await noJSPage.locator("h1").isVisible(), true);
      assert.equal(
        await noJSPage.locator(".hero-actions .button").getAttribute("href"),
        "https://tienda.sanmartinsr.com",
      );
      assert.equal(await noJSPage.locator(".store-card").count(), 3);
      results.push("No-JavaScript content, shop links and three branches");
    } finally {
      await noJS.close();
    }

    assert.equal(errors.length, 0, JSON.stringify(errors));
    results.push("No uncaught page errors");
    await writeFile(
      path.join(outputDirectory, "browser-results.json"),
      JSON.stringify(
        { baseURL, checkedAt: new Date().toISOString(), passed: results },
        null,
        2,
      ),
    );
    return results;
  } finally {
    await desktop.close();
  }
}
