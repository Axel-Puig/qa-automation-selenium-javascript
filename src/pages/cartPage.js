const { By, until } = require("selenium-webdriver");
const { config } = require("../config/config");
const { BasePage } = require("./basePage");

class CartPage extends BasePage {
  constructor(driver) {
    super(driver);
    this.pageTitle = By.css("[data-test='title']");
    this.itemNames = By.css("[data-test='inventory-item-name']");
  }

  async isLoaded() {
    return (await this.getText(this.pageTitle)) === "Your Cart";
  }

  async containsProduct(productName) {
    const elements = await this.driver.wait(
      until.elementsLocated(this.itemNames),
      config.explicitWaitMs
    );
    const names = await Promise.all(elements.map((element) => element.getText()));
    return names.includes(productName);
  }
}

module.exports = { CartPage };
