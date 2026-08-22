const { config } = require("../../src/config/config");
const { createDriver } = require("../../src/core/driverFactory");
const { LoginPage } = require("../../src/pages/loginPage");
const { saveFailureScreenshot } = require("../../src/utils/screenshot");

function useBrowser() {
  beforeEach(async function () {
    this.driver = await createDriver();
    this.loginPage = new LoginPage(this.driver);
    await this.loginPage.open(config.baseUrl);
  });

  afterEach(async function () {
    try {
      if (this.currentTest && this.currentTest.state === "failed" && this.driver) {
        await saveFailureScreenshot(this.driver, this.currentTest.fullTitle());
      }
    } catch (error) {
      console.warn("Could not save failure screenshot:", error.message);
    } finally {
      if (this.driver) {
        await this.driver.quit();
      }
    }
  });
}

module.exports = { useBrowser };
