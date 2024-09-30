// pages/checkoutPage.js
class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = page.locator('#first-name'); 
    this.lastNameInput = page.locator('#last-name');
    this.postalCodeInput = page.locator('#postal-code');
    this.continueButton = page.locator('#continue');
    this.finishButton = page.locator('#finish');
    this.confirmationMessage = page.locator('#checkout_complete_container > h2');
  }

  async fillCheckoutInformation(firstName, lastName, postalCode) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
    await this.continueButton.click();
  }

  async completeCheckout() {
    await this.finishButton.click();
  }

// Correct method to fetch the confirmation message
async getConfirmationMessage() {
  // Ensure that confirmationMessageSelector is correctly set
  console.log('Confirmation Message Selector:', this.confirmationMessage);
  
  }
}

module.exports = { CheckoutPage };
