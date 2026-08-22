const { until } = require("selenium-webdriver");
const { config } = require("../config/config");

class BasePage {
  constructor(driver) {
    this.driver = driver;
  }

  async findVisible(locator) {
    const element = await this.driver.wait(
      until.elementLocated(locator),
      config.explicitWaitMs
    );
    await this.driver.wait(
      until.elementIsVisible(element),
      config.explicitWaitMs
    );
    return element;
  }

  async click(locator) {
    const element = await this.findVisible(locator);
    await this.driver.wait(
      until.elementIsEnabled(element),
      config.explicitWaitMs
    );
    await element.click();
  }

  async type(locator, value) {
    const element = await this.findVisible(locator);
    await element.clear();
    await element.sendKeys(value);
  }

  async getText(locator) {
    const element = await this.findVisible(locator);
    return element.getText();
  }
}

module.exports = { BasePage };
