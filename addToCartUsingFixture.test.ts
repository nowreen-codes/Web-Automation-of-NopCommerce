import { expect, test } from "../base/pomFixture";

/*test.use({
    browserName: "chromium" // how to run in different browser
}) */
const email = "nou@gmail.com";
const password = "q123#hsjueA";

test.describe("Page object test demo", async () => {


test("Register test_01", async ({ page, registrationPage }) => {

   // const register = new RegistrationPage(page);
await page.goto("https://test460.nop-station.com/en/register?returnUrl=%2Fen%2F");

//expect(register.enterGender()).toBeChecked();
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

test("Login test_02", async ({ page, loginPage }) => {

    //const login = new LoginPage(page);
    await page.goto("https://test460.nop-station.com/en/login?returnUrl=%2Fen%2F");

    await loginPage.enterEmail(email);
    await loginPage.enterPassword(password);
    await loginPage.checkedRememberMe();
    await loginPage.clickLogin();
    //expect(await page.title()).toBe("My account");


})

test("Add to cart test_03", async ({ page, loginPage, homePage, books}) => {
    //const login = new LoginPage(page);
    //const homepage = new HomePage(page);
    //const books = new Books(page);

    await page.goto("https://test460.nop-station.com/en/login?returnUrl=%2Fen%2F");
    await loginPage.login(email, password);
   await homePage.clickOnBooks();
await books.addFirstAndSecondProductsToCart();


})

test.only("Checkout test_04", async ({ page, loginPage, homePage, books, checkout }) => {

 await page.goto("https://test460.nop-station.com/en/login?returnUrl=%2Fen%2F");
 await loginPage.login(email, password);
 await homePage.clickOnBooks();
 await books.addFirstAndSecondProductsToCart();    

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
 await checkout.clickNext2();
 await checkout.clickNext3();  
 await checkout.clickNext4();
 await checkout.clickConfirmOrder();
 await checkout.verifyThankYouMessage();
 await checkout.clickConfirmOrderDetailsLink();

})

})
