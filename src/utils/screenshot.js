const fs = require("node:fs/promises");
const path = require("node:path");

async function saveFailureScreenshot(driver, testTitle) {
  const directory = path.join("test-results", "screenshots");
  await fs.mkdir(directory, { recursive: true });

  const safeTitle = testTitle
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const baseName = safeTitle + "-" + timestamp;
  const screenshot = await driver.takeScreenshot();
  const pageSource = await driver.getPageSource();

  await Promise.all([
    fs.writeFile(path.join(directory, baseName + ".png"), screenshot, "base64"),
    fs.writeFile(path.join(directory, baseName + ".html"), pageSource, "utf8")
  ]);
}

module.exports = { saveFailureScreenshot };
