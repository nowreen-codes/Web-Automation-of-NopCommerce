import { expect, test } from "../base/pomFixture";
const email = "nou@gmail.com";
const password = "q123#hsjueA";

test.describe("Page object test demo", async () => {


    
//Only for Registration Process   
test("Register test_01", async ({ page, registrationPage }) => {
await page.goto("https://test460.nop-station.com/en/register?returnUrl=%2Fen%2F");
await registrationPage.enterFirstName("Nowreen");
await registrationPage.enterLasttName("Islam");
await registrationPage.DateOfBirth("25.08.1850");
await registrationPage.enterEmail(email);
await registrationPage.enterCompanyDetails("");
await registrationPage.enterOptions();
await registrationPage.enterPassword(password);
await registrationPage.enterConfirmPassword(password);
await registrationPage.clickRegister();

})

//Only for Login Process
test("Login test_02", async ({ page, loginPage }) => {
    await page.goto("https://test460.nop-station.com/en/login?returnUrl=%2Fen%2F");

    await loginPage.enterEmail(email);
    await loginPage.enterPassword(password);
    await loginPage.checkedRememberMe();
    await loginPage.clickLogin();
    const welcomeMsg = await page.locator("//h2[text()='Welcome to our store']");
    const actualMsg = await welcomeMsg.textContent();
    console.log("Actual Welcome Message:", actualMsg);
    expect(actualMsg).toBe("Welcome to our store");


})

//Only for add to cart multiple products
test("Add to cart test_03", async ({ page, loginPage, homePage, jewelry}) => {
    await page.goto("https://test460.nop-station.com/en/login?returnUrl=%2Fen%2F");
    await loginPage.login(email, password);
    await books.clearCart();

    await homePage.clickOnBooks();
    await books.addFirstAndSecondProductsToCart();
    await books.updateQuantityForProduct("Vintage Style Engagement Ring", 3);
})


//From login to Checkout
test.only("Checkout test_04", async ({ page, loginPage, homePage, jewelry, checkout }) => {

 await page.goto("https://test460.nop-station.com/en/login?returnUrl=%2Fen%2F");
 await loginPage.login(email, password);

// From the Terminal we can read Actual value vs Expected value.
 const welcomeMsg = await page.locator("//h2[text()='Welcome to our store']");
 const actualMsg = await welcomeMsg.textContent();
 console.log("Welcome Message is written on that page :", actualMsg);
 expect(actualMsg).toBe("Welcome to our store");

//With every run, the shopping cart will be emptied, then multiple product will be added to the cart again, and the quantity will be updated.
 await jewelry.clearCart();
 await homePage.clickOnBooks();
 await jewelry.addFirstAndSecondProductsToCart();  
 await jewelry.updateQuantityForProduct("Vintage Style Engagement Ring", 3);

//Checkout Process started from here.

//Billing Address
 const Billing_Address = await page.locator("//h1[text()='Billing address']");
 const Billing_Address_ActualMsg = await Billing_Address.textContent();
 console.log("Billing Address is written on that page:", Billing_Address_ActualMsg);
 expect(Billing_Address_ActualMsg).toBe("Billing address");


 await checkout.enterFirstName("Nowreen");
 await checkout.enterLastName("Islam");
 await checkout.enterEmail("");
 await checkout.enterCompanyName("BS");
 await checkout.enterCountryName("Bangladesh");
 await checkout.enterStateName("ঢাকা");
 await checkout.enterCityName("Dhaka");
 await checkout.enterAddress1("Cantonment");
 await checkout.enterAddress2("");
 await checkout.enterZip("123");
 await checkout.enterPhoneNo("019299999999");
 await checkout.enterFaxNo("");
 
 await checkout.clickNext();

 //Select Shipping Method

 const Select_Shipping_Method = await page.locator("//h1[text()='Select shipping method']");
 const Select_Shipping_Method_ActualMsg = await Select_Shipping_Method.textContent();
 console.log("Select Shipping Method is written on that page :", Select_Shipping_Method_ActualMsg);
 expect(Select_Shipping_Method_ActualMsg).toBe("Select shipping method");

 await checkout.clickNext2();

 //Select Payment Method

 const Select_Payment_Method = await page.locator("//h1[text()='Select payment method']");
 const Select_Payment_Method_ActualMsg = await Select_Payment_Method.textContent();
 console.log("Select Payment Method is written on that page :", Select_Payment_Method_ActualMsg);
 expect(Select_Payment_Method_ActualMsg).toBe("Select payment method");

 await checkout.clickNext3();  

 //Payment Information

 const Payment_Information = await page.locator("//h1[text()='Payment information']");
 const Payment_Information_ActualMsg = await Payment_Information.textContent();
 console.log("Payment Information is written on that page :", Payment_Information_ActualMsg);
 expect(Payment_Information_ActualMsg).toBe("Payment information");

 await checkout.clickNext4();

 //Order Confirmation

 const Confirm_Your_Order = await page.locator("//h1[text()='Confirm your order']");
 const Confirm_Your_Order_ActualMsg = await Confirm_Your_Order.textContent();
 console.log("Confirm Your Order is written on that page :", Confirm_Your_Order_ActualMsg);
 expect(Confirm_Your_Order_ActualMsg).toBe("Confirm your order");

 await checkout.clickConfirmOrder();


 const Verify_ThankYou_Message = await page.locator("//h1[contains(text(), 'Thank you')]");
 const Verify_ThankYou_Message_ActualMsg = await Verify_ThankYou_Message.textContent();
 console.log("ThankYou Message is written on that page :", Verify_ThankYou_Message_ActualMsg);
 expect(Verify_ThankYou_Message_ActualMsg).toBe("Thank you");
//await checkout.verifyThankYouMessage();

 
 await checkout.clickConfirmOrderDetailsLink();
 const Order_Information = await page.locator("//h1[contains(text(), 'Order information')]");
 const Order_Information_ActualMsg = await Order_Information.textContent();
 console.log("Order Information :", Order_Information_ActualMsg);
 expect(Order_Information_ActualMsg).toBe("Order information");
//await checkout.verifyThankYouMessage();


})

})
