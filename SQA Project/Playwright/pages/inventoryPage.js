// pages/inventoryPage.js
class InventoryPage {
    constructor(page) {
        this.page = page;
        this.inventoryItemName = '.inventory_item_name';
        this.inventoryItem = '.inventory_item';
        this.addToCartButton = '.btn_inventory';
        this.shoppingCartBadge = '.shopping_cart_badge';
    }

     async isInventoryPageDisplayed() {
        // Wait for the inventory item to be visible, meaning the page has loaded
        await this.page.waitForSelector(this.inventoryItem);
    }

   async addItemToCart(itemIndex = 0) {
        await this.page.click(`${this.addToCartButton}:nth-of-type(${itemIndex + 1})`);
    }

    async getCartItemCount() {
        return this.page.isVisible(this.shoppingCartBadge)
            ? this.page.textContent(this.shoppingCartBadge)
            : '0';  // Return 0 if badge isn't visible
    }
}

module.exports = { InventoryPage };
