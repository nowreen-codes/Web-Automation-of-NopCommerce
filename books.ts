import { Page } from "@playwright/test";

export default class Books {

    constructor(public page: Page) {
    }
async clearCart() {
        const cartIcon = this.page.locator("//a[@class='ico-cart']");
        await cartIcon.hover();
        await cartIcon.click();
        const emptyCartMessage = this.page.locator("//span[@class='cart-qty' and text()='(0)']");
        if (await emptyCartMessage.isVisible()) {
            console.log("Cart is already empty.");
        } else {
            while (true) {
                const removeButtons = this.page.locator("//button[@name='updatecart' and @class='remove-btn']");
                const removeButtonCount = await removeButtons.count();
                
                if (removeButtonCount === 0) {
                    console.log("All items removed from the cart.");
                    break; 
                }
                await removeButtons.nth(0).click();
                await this.page.waitForTimeout(1000); 
            }
        }
    }
    async addFirstAndSecondProductsToCart() {
        const addFirstAndSecondProductsToCart = this.page.locator("//button[contains(text(), 'Add to cart')]");
        await addFirstAndSecondProductsToCart.nth(0).click();
        const popupMessageForFirstProduct = this.page.locator("//p[contains(text(), 'The product has been added to your')]");
        await popupMessageForFirstProduct.waitFor({ state: "visible" });
            
        await addFirstAndSecondProductsToCart.nth(1).click();
        const popupMessageForSecondProduct = this.page.locator("//p[contains(text(), 'The product has been added to your')]");
        await popupMessageForSecondProduct.waitFor({ state: "visible" });
            
        const closeButton = this.page.locator("//span[@class='close' and @title='Close']");
        await closeButton.click();
            
        const cartIcon = this.page.locator("//a[@class='ico-cart']");
        await cartIcon.hover();
        await cartIcon.click();

        // Select the 'terms of service' checkbox
        const termsCheckbox = this.page.locator("//input[@type='checkbox' and @name='termsofservice']");
        await termsCheckbox.check(); // Check the checkbox

        const checkoutButton = this.page.locator("//button[@type='submit' and @name='checkout']");
        await checkoutButton.click();


    }

    
}

