import { Page } from "@playwright/test";
export default class Books {
constructor(public page: Page) {
}
async addFirstAndSecondProductsToCart() {
const addFirstAndSecondProductsToCart = this.page.locator("//button[contains(text(), 'Add to cart')]");
await addFirstAndSecondProductsToCart.nth(0).click();
        const popupMessage1 = this.page.locator("//p[contains(text(), 'The product has been added to your')]");
        await popupMessage1.waitFor({ state: "visible" });
        await addFirstAndSecondProductsToCart.nth(1).click();

        const popupMessage2 = this.page.locator("//p[contains(text(), 'The product has been added to your')]");
        await popupMessage2.waitFor({ state: "visible" });

        const closeButton = this.page.locator("//span[@class='close' and @title='Close']");
        await closeButton.click();

        const cartIcon = this.page.locator("//a[@class='ico-cart']");
        await cartIcon.hover();
        await cartIcon.click();

        
        const termsCheckbox = this.page.locator("//input[@type='checkbox' and @name='termsofservice']");
        await termsCheckbox.check(); // Check the checkbox
        const checkoutButton = this.page.locator("//button[@type='submit' and @name='checkout']");
        await checkoutButton.click();


    }

    
}
