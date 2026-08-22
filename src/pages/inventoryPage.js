const { By, until } = require("selenium-webdriver");
const { config } = require("../config/config");
const { BasePage } = require("./basePage");
const { CartPage } = require("./cartPage");

class InventoryPage extends BasePage {
  constructor(driver) {
    super(driver);
    this.pageTitle = By.css("[data-test='title']");
    this.addBackpackButton = By.css(
      "[data-test='add-to-cart-sauce-labs-backpack']"
    );
    this.cartControl = By.css("[data-test='shopping-cart-link']");
    this.cartBadge = By.css("[data-test='shopping-cart-badge']");
    this.sortDropdown = By.css("[data-test='product-sort-container']");
    this.itemPrices = By.css("[data-test='inventory-item-price']");
  }

  async isLoaded() {
    return (await this.getText(this.pageTitle)) === "Products";
  }

  async addBackpackToCart() {
    await this.click(this.addBackpackButton);
    await this.driver.wait(
      until.elementLocated(this.cartBadge),
      config.explicitWaitMs
    );
    return this;
  }

  async getCartItemCount() {
    return Number.parseInt(await this.getText(this.cartBadge), 10);
  }

  async openCart() {
    const cartLink = await this.findVisible(this.cartControl);
    await this.driver.executeScript("arguments[0].click();", cartLink);
    await this.driver.wait(
      until.urlContains("cart.html"),
      config.explicitWaitMs
    );
    return new CartPage(this.driver);
  }

  async sortProductsLowToHigh() {
    const dropdown = await this.findVisible(this.sortDropdown);
    const option = await dropdown.findElement(By.css("option[value='lohi']"));
    await option.click();

    await this.driver.wait(async () => {
      const prices = await this.getProductPrices();
      return prices.every(
        (price, index) => index === 0 || prices[index - 1] <= price
      );
    }, config.explicitWaitMs);

    return this;
  }

  async getProductPrices() {
    const elements = await this.driver.wait(
      until.elementsLocated(this.itemPrices),
      config.explicitWaitMs
    );
    const priceTexts = await Promise.all(
      elements.map((element) => element.getText())
    );
    return priceTexts.map((price) => Number.parseFloat(price.replace("$", "")));
  }
}

module.exports = { InventoryPage };
