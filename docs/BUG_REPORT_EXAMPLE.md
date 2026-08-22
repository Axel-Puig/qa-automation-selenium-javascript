# Bug Report Example

## CART-007 — Cart badge is not updated after adding a product

| Field | Detail |
| --- | --- |
| Severity | Major |
| Priority | High |
| Environment | Chrome, desktop, test environment |
| Status | Open |
| Reproducibility | 5/5 attempts |

Preconditions:

- A standard user is logged in.
- The cart is empty.

Steps to reproduce:

1. Open the Products page.
2. Select Add to cart for Sauce Labs Backpack.
3. Observe the cart badge.

Expected result: the cart badge appears and shows 1.

Actual result: the product button changes to Remove, but the cart badge is not
displayed.

Evidence:

- Failure screenshot from the automated CART-001 scenario.
- Browser console and network logs should be attached during triage.

Business impact:

The user cannot confirm that the product was added without opening the cart,
which can cause repeated actions or checkout abandonment.
