const assert = require("node:assert/strict");
const { useBrowser } = require("./helpers/browserTest");

describe("Login feature", function () {
  useBrowser();

  it("LOGIN-001: standard user can log in", async function () {
    const inventoryPage = await this.loginPage.loginAs(
      "standard_user",
      "secret_sauce"
    );

    assert.equal(
      await inventoryPage.isLoaded(),
      true,
      "The inventory page should be displayed"
    );
  });

  const invalidScenarios = [
    {
      id: "LOGIN-002",
      description: "invalid password",
      username: "standard_user",
      password: "wrong_password",
      expected:
        "Epic sadface: Username and password do not match any user in this service"
    },
    {
      id: "LOGIN-003",
      description: "locked user",
      username: "locked_out_user",
      password: "secret_sauce",
      expected: "Epic sadface: Sorry, this user has been locked out."
    }
  ];

  for (const scenario of invalidScenarios) {
    it(
      scenario.id + ": informative error for " + scenario.description,
      async function () {
        await this.loginPage.loginAs(scenario.username, scenario.password);

        assert.equal(
          await this.loginPage.getErrorMessage(),
          scenario.expected
        );
      }
    );
  }
});
