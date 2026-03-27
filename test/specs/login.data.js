const LoginPage = require("../pageobjects/login.page");
const users = require("../data/users");

describe("UC-2: Data Driven Login", () => {
  const testCases = [
    { 
        user: users.standard.user, 
        pass: users.standard.pass, 
        shouldPass: true 
    },
    { 
        user: users.locked.user, 
        pass: users.locked.pass, 
        shouldPass: false, 
        error: "Sorry, this user has been locked out." 
    }
  ];

  testCases.forEach(({ user, pass, shouldPass, error }) => {
    it(`should validate login for ${user}`, async () => {
      await browser.url("https://www.saucedemo.com/");
      
      await LoginPage.login(user, pass);

      if (shouldPass) {
        await expect(browser).toHaveUrlContaining("inventory.html");
      } else {
        await expect(LoginPage.$errorMsg).toHaveTextContaining(error);
      }
    });
  });
});