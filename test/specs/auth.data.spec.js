const LoginPage = require("../pageobjects/login.page");
const InventoryPage = require("../pageobjects/inventory.page");

describe("UC-1: End-to-End Checkout Flow", () => {
  it("should login, add item, and complete purchase", async () => {
    const targetProduct = "Sauce Labs Backpack";

    await browser.url("https://www.saucedemo.com/");

    await LoginPage.login("standard_user", "secret_sauce");

    await InventoryPage.addItemToCart(targetProduct);
    await InventoryPage.goToCart();

    const cartItem = await $(".inventory_item_name");
    await expect(cartItem).toHaveText(targetProduct);

    await $("#checkout").click();
    await $("#first-name").setValue("John");
    await $("#last-name").setValue("Doe");
    await $("#postal-code").setValue("12345");
    await $("#continue").click();

    await $("#finish").click();

    const successMsg = await $(".complete-header");
    await expect(successMsg).toHaveText("Thank you for your order!");
  });
});
