/**
 * Fixture + Page Object implementation
 * https://playwright.dev/docs/test-fixtures#creating-a-fixture
 */

import { test } from '@playwright/test';
import { HomePage } from "../Home.Page";
import { LoginPage } from "../Login.Page";

// Declare fixture types
type LoginFixtures = {
  _loginPage: LoginPage;
  _homePage: HomePage;
};

export const sauceTest = test.extend<LoginFixtures>({
  _loginPage: async ({ page }, use) => {
    // Use the fixture value in the test.
    await use(new LoginPage(page));
  },
  _homePage: async ({ page }, use) => {
    // Use the fixture value in the test.
    await use(new HomePage(page));
  }
});

export { expect } from '@playwright/test';
