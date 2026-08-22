const assert = require("node:assert/strict");
const { useBrowser } = require("./helpers/browserTest");

describe("Inventory and cart features", function () {
  const backpack = "Sauce Labs Backpack";

  useBrowser();

  beforeEach(async function () {
    this.inventoryPage = await this.loginPage.loginAs(
      "standard_user",
      "secret_sauce"
    );
    assert.equal(
      await this.inventoryPage.isLoaded(),
      true,
      "Precondition: inventory page should be displayed"
    );
  });

  it("CART-001: user can add a product to the cart", async function () {
    await this.inventoryPage.addBackpackToCart();

    assert.equal(await this.inventoryPage.getCartItemCount(), 1);

    const cartPage = await this.inventoryPage.openCart();
    assert.equal(await cartPage.isLoaded(), true);
    assert.equal(await cartPage.containsProduct(backpack), true);
  });

  it("SORT-001: user can sort products by ascending price", async function () {
    await this.inventoryPage.sortProductsLowToHigh();
    const actualPrices = await this.inventoryPage.getProductPrices();
    const expectedPrices = [...actualPrices].sort((a, b) => a - b);

    assert.deepEqual(actualPrices, expectedPrices);
  });
});
