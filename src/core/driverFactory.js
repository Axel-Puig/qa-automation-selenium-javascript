const { Browser, Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const edge = require("selenium-webdriver/edge");
const firefox = require("selenium-webdriver/firefox");
const { config } = require("../config/config");

async function createDriver() {
  const builder = new Builder();

  switch (config.browser) {
    case "chrome":
      builder
        .forBrowser(Browser.CHROME)
        .setChromeOptions(createChromeOptions());
      break;
    case "firefox":
      builder
        .forBrowser(Browser.FIREFOX)
        .setFirefoxOptions(createFirefoxOptions());
      break;
    case "edge":
      builder
        .forBrowser(Browser.EDGE)
        .setEdgeOptions(createEdgeOptions());
      break;
    default:
      throw new Error(
        "Unsupported browser: " + config.browser + ". Use chrome, firefox or edge."
      );
  }

  const driver = await builder.build();
  await driver.manage().setTimeouts({
    implicit: 0,
    pageLoad: config.pageLoadTimeoutMs,
    script: config.pageLoadTimeoutMs
  });

  if (!config.headless) {
    await driver.manage().window().maximize();
  }

  return driver;
}

function createChromeOptions() {
  const options = new chrome.Options();
  if (config.headless) {
    options.addArguments("--headless=new");
  }
  options.addArguments(
    "--window-size=1920,1080",
    "--no-sandbox",
    "--disable-dev-shm-usage"
  );
  return options;
}

function createFirefoxOptions() {
  const options = new firefox.Options();
  if (config.headless) {
    options.addArguments("-headless");
  }
  options.addArguments("--width=1920", "--height=1080");
  return options;
}

function createEdgeOptions() {
  const options = new edge.Options();
  if (config.headless) {
    options.addArguments("--headless=new");
  }
  options.addArguments(
    "--window-size=1920,1080",
    "--no-sandbox",
    "--disable-dev-shm-usage"
  );
  return options;
}

module.exports = { createDriver };
