// pages/cartPage.js
class CartPage {
    constructor(page) {
      this.page = page;
      this.cartBadge = '.shopping_cart_badge';
      this.cartItems = '.cart_item';
      this.checkoutButton = '#checkout';
    }
  
    async getCartBadgeCount() {
      return await this.page.textContent(this.cartBadge);
    }
  
    async gotoCartPage() {
      await this.page.click('.shopping_cart_link');
    }
  
    async isCartPageDisplayed() {
      await this.page.waitForSelector(this.cartItems);
    }
  
    async getCartItems() {
      return await this.page.$$(this.cartItems);
    }
  
    async proceedToCheckout() {
      await this.page.click(this.checkoutButton);
    }
  }
  
  module.exports = { CartPage };
  