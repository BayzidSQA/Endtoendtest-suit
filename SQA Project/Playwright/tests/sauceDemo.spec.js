// tests/sauceDemo.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { InventoryPage } = require('../pages/inventoryPage');
const { CartPage } = require('../pages/cartPage');
const { CheckoutPage } = require('../pages/checkoutPage');

test.describe('Login, Inventory, Cart, and Checkout Tests', () => {
    let page;
    let loginPage;
    let inventoryPage;
    let cartPage;
    let checkoutPage;

    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage();
        loginPage = new LoginPage(page);
        inventoryPage = new InventoryPage(page);
        cartPage = new CartPage(page);
        checkoutPage = new CheckoutPage(page);
        await loginPage.goto();  // Navigates to login page
    });

    test('successful login, add items to cart, and complete checkout', async () => {
        // Step 1: Login to the application
        await loginPage.login('standard_user', 'secret_sauce');

        // Step 2: Verify that the inventory page is displayed
        await inventoryPage.isInventoryPageDisplayed();
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

        // Step 3: Add the first item to the cart
        await inventoryPage.addItemToCart(0);  // Assuming a function that adds the first item to cart

        // Step 4: Verify the cart badge count
        const cartBadgeCount = await cartPage.getCartBadgeCount();
        expect(cartBadgeCount).toBe('1');  // Expect 1 item in the cart

        // Step 5: Navigate to the cart page
        await cartPage.gotoCartPage();
        await cartPage.isCartPageDisplayed();

        // Step 6: Verify cart items
        const cartItems = await cartPage.getCartItems();
        expect(cartItems.length).toBeGreaterThan(0);  // Ensure there are items in the cart

        // Step 7: Proceed to checkout
        await cartPage.proceedToCheckout();
        await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');

        // Step 8: Fill out checkout information
        await checkoutPage.fillCheckoutInformation('John', 'Doe', '12345');
        await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');

        // Step 9: Complete the checkout process
        await checkoutPage.completeCheckout();
        await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');

        // Step 10: Verify successful checkout
        const confirmationMessage = await checkoutPage.getConfirmationMessage();
        expect(confirmationMessage).toBeVisible ('THANK YOU FOR YOUR ORDER');  // Verify the order confirmation
    });
});
