# Test Cases

## LOGIN-001 — Successful login

| Field | Detail |
| --- | --- |
| Priority | High |
| Type | Positive / smoke |
| Preconditions | SauceDemo is available |
| Test data | standard_user / secret_sauce |

Steps:

1. Open the login page.
2. Enter the standard username.
3. Enter the valid password.
4. Select Login.

Expected result: the Products inventory page is displayed.

## LOGIN-002 — Invalid password

| Field | Detail |
| --- | --- |
| Priority | High |
| Type | Negative |
| Preconditions | SauceDemo is available |
| Test data | standard_user / wrong_password |

Steps:

1. Open the login page.
2. Enter a valid username.
3. Enter an invalid password.
4. Select Login.

Expected result: access is denied and an informative credentials error is shown.

## LOGIN-003 — Locked user

| Field | Detail |
| --- | --- |
| Priority | High |
| Type | Negative / business rule |
| Preconditions | The user is locked |
| Test data | locked_out_user / secret_sauce |

Steps:

1. Open the login page.
2. Enter the locked username and valid password.
3. Select Login.

Expected result: access is denied and the locked-user message is shown.

## CART-001 — Add a product to the cart

| Field | Detail |
| --- | --- |
| Priority | High |
| Type | Functional / end-to-end |
| Preconditions | Standard user is logged in |
| Test data | Sauce Labs Backpack |

Steps:

1. Add the backpack from the inventory page.
2. Verify the cart badge.
3. Open the cart.

Expected result: the badge shows one item and the backpack appears in the cart.

## SORT-001 — Sort products by ascending price

| Field | Detail |
| --- | --- |
| Priority | Medium |
| Type | Functional |
| Preconditions | Standard user is logged in |
| Test data | Price low to high |

Steps:

1. Select the low-to-high price option.
2. Read all visible product prices.
3. Compare the displayed order with an independently sorted list.

Expected result: every product is displayed in ascending price order.
