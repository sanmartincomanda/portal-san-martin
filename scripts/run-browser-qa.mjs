import { existsSync } from "node:fs";
import { chromium } from "playwright-core";
import { runBrowserChecks } from "./browser-qa.mjs";

const executablePath = [
  process.env.CHROME_PATH,
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/chromium",
  "/usr/bin/google-chrome",
]
  .filter(Boolean)
  .find(existsSync);
if (!executablePath)
  throw new Error(
    "Set CHROME_PATH to an installed Chrome/Edge/Chromium browser.",
  );
const browser = await chromium.launch({ executablePath, headless: true });
try {
  console.log(
    await runBrowserChecks(
      browser,
      process.env.QA_BASE_URL || "http://localhost:3006",
    ),
  );
} finally {
  await browser.close();
}
