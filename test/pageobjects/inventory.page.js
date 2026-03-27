class InventoryPage {
  get cartIcon() {
    return $(".shopping_cart_link");
  }

  async addItemToCart(productName) {
    const addButton = await $(
      `//div[text()="${productName}"]/ancestor::div[@class="inventory_item_description"]//button`,
    );
    await addButton.click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }
}

module.exports = new InventoryPage();
