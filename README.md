# Selenium JavaScript QA Automation

[![UI Automation Tests](https://github.com/Axel-Puig/qa-automation-selenium-javascript/actions/workflows/ui-tests.yml/badge.svg)](https://github.com/Axel-Puig/qa-automation-selenium-javascript/actions/workflows/ui-tests.yml)

UI test automation portfolio project created entirely with JavaScript,
Node.js, Selenium WebDriver and Mocha. It validates critical user journeys on
the SauceDemo e-commerce practice site.

## What this project demonstrates

- Page Object Model to separate test logic from page locators.
- Asynchronous test automation with async and await.
- Positive, negative and data-driven test scenarios.
- Explicit waits instead of fixed sleeps.
- Cross-browser configuration for Chrome, Firefox and Edge.
- Automatic driver management through Selenium Manager.
- Failure screenshots and JUnit XML test evidence.
- Continuous execution with GitHub Actions.
- Dependency monitoring with Dependabot.

## Automated scenarios

| ID | Scenario | Type | Expected result |
| --- | --- | --- | --- |
| LOGIN-001 | Log in with a standard user | Positive | Inventory page is displayed |
| LOGIN-002 | Log in with an invalid password | Negative | Informative error is displayed |
| LOGIN-003 | Log in with a locked user | Negative | Locked-user error is displayed |
| CART-001 | Add a backpack to the cart | End-to-end | Badge and cart show one product |
| SORT-001 | Sort products by price | Functional | Prices are ordered low to high |

Detailed test cases are available in docs/TEST_CASES.md.

## Tech stack

- JavaScript
- Node.js 24
- Selenium WebDriver 4.47
- Mocha 11.8
- Node.js strict assertions
- GitHub Actions

## Project structure

~~~text
src/
├── config/       # Environment and execution configuration
├── core/         # WebDriver creation
├── pages/        # Page Object Model classes
└── utils/        # Failure screenshot utility
test/
├── helpers/      # Browser setup and cleanup hooks
├── login.spec.js
└── shoppingCart.spec.js
~~~

## Requirements

- Node.js 24 or later
- npm
- Chrome, Firefox or Edge

The browser driver does not need to be installed manually. Selenium Manager
automatically discovers or downloads the correct driver.

## Install the project

~~~bash
git clone https://github.com/Axel-Puig/qa-automation-selenium-javascript.git
cd qa-automation-selenium-javascript
npm install
~~~

## Run the tests

Run headless:

~~~bash
npm test
~~~

Run while watching Chrome:

~~~bash
npm run test:headed
~~~

Run with Firefox or Edge:

~~~bash
npm run test:firefox
npm run test:edge
~~~

## Configuration

The framework accepts these environment variables:

| Variable | Default | Purpose |
| --- | --- | --- |
| BASE_URL | https://www.saucedemo.com/ | Target environment |
| BROWSER | chrome | chrome, firefox or edge |
| HEADLESS | true | Set false to display the browser |
| EXPLICIT_WAIT_MS | 10000 | Explicit wait in milliseconds |
| PAGE_LOAD_TIMEOUT_MS | 30000 | Page-load timeout in milliseconds |

## Test evidence

Continuous integration generates test-results/junit.xml. If a scenario fails,
the framework also saves a PNG screenshot in test-results/screenshots. GitHub
Actions publishes the complete folder as a downloadable artifact.

## Test approach

The suite covers a focused smoke and regression scope: authentication, error
handling, inventory sorting and shopping-cart behavior. Locators favor stable
id and data-test attributes. Each test starts a new isolated browser session,
so scenarios do not depend on execution order.

## Possible next steps

- Add checkout and logout coverage.
- Add an HTML report.
- Execute tests in parallel.
- Run against Selenium Grid or a cloud device provider.
- Add REST API tests.

## Author

Axel Puig Lugo — QA Engineer transitioning toward test automation and backend
development.

## License

This project is available under the MIT License.
