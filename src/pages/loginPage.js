const { By } = require("selenium-webdriver");
const { BasePage } = require("./basePage");
const { InventoryPage } = require("./inventoryPage");

class LoginPage extends BasePage {
  constructor(driver) {
    super(driver);
    this.usernameInput = By.id("user-name");
    this.passwordInput = By.id("password");
    this.loginButton = By.id("login-button");
    this.errorMessage = By.css("[data-test='error']");
  }

  async open(baseUrl) {
    await this.driver.get(baseUrl);
    await this.findVisible(this.loginButton);
    return this;
  }

  async enterUsername(username) {
    await this.type(this.usernameInput, username);
    return this;
  }

  async enterPassword(password) {
    await this.type(this.passwordInput, password);
    return this;
  }

  async loginAs(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.click(this.loginButton);
    return new InventoryPage(this.driver);
  }

  async getErrorMessage() {
    return this.getText(this.errorMessage);
  }
}

module.exports = { LoginPage };
