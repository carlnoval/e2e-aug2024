import { expect, sauceTest } from '../page-objects/fixtures/Base.Fixture';

const standard_user = "standard_user";
const visual_user = "visual_user";
const pw = "secret_sauce"

sauceTest('Login - standard_user', async ({ _loginPage, _homePage }) => {
  await _loginPage.navigate();
  await expect(_loginPage.loginPageHeader).toBeVisible();
  await _loginPage.login(standard_user, pw);

  await expect(_homePage.homePageHeader).toBeVisible();
  // Todo: assert picture of the first item
});

sauceTest('Login - visual_user', async ({ _loginPage, _homePage }) => {
  await _loginPage.navigate();
  await expect(_loginPage.loginPageHeader).toBeVisible();
  await _loginPage.login(visual_user, pw);

  await expect(_homePage.homePageHeader).toBeVisible();
  // Todo: assert picture of the first item
});
