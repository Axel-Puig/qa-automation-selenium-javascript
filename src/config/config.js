function readPositiveNumber(name, fallback) {
  const value = Number(process.env[name] || fallback);
  if (!Number.isFinite(value) || value <= 0) {
    throw new Error(name + " must be a positive number");
  }
  return value;
}

const config = Object.freeze({
  baseUrl: process.env.BASE_URL || "https://www.saucedemo.com/",
  browser: (process.env.BROWSER || "chrome").toLowerCase(),
  headless: (process.env.HEADLESS || "true").toLowerCase() !== "false",
  explicitWaitMs: readPositiveNumber("EXPLICIT_WAIT_MS", 10000),
  pageLoadTimeoutMs: readPositiveNumber("PAGE_LOAD_TIMEOUT_MS", 30000)
});

module.exports = { config };
