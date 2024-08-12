/**
 * Fixture + Page Object implementation
 * https://playwright.dev/docs/test-fixtures#creating-a-fixture
 */

import { Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly loginPageHeader: Locator;
  readonly usernameField: Locator;
  readonly passwordField: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page  = page;
    this.loginPageHeader = page.getByText('Swag Labs');
    this.usernameField = page.locator('[data-test="username"]');
    this.passwordField = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
  }

  async navigate() {
    // Go to the login page, see baseURL in playwright.config.ts
    await this.page.goto('');
  }

  getHeader() {
    return this.loginPageHeader;
  }

  async login(username: string, password: string) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }
}
