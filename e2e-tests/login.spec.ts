import { expect, sauceTest } from '../page-objects/fixtures/Base.Fixture';

sauceTest('Login - standard_user', async ({ _loginPage, _homePage }) => {
  await _loginPage.navigate();
  await expect(_loginPage.loginPageHeader).toBeVisible();
  await _loginPage.login(process.env.SAUCE_STANDARD_USER, process.env.SAUCE_USER_PASSWORD);

  await expect(_homePage.homePageHeader).toBeVisible();
  // Todo: assert picture of the first item
});

sauceTest('Login - visual_user', async ({ _loginPage, _homePage }) => {
  await _loginPage.navigate();
  await expect(_loginPage.loginPageHeader).toBeVisible();
  await _loginPage.login(process.env.SAUCE_VISUAL_USER, process.env.SAUCE_USER_PASSWORD);

  await expect(_homePage.homePageHeader).toBeVisible();
  // Todo: assert picture of the first item
});
