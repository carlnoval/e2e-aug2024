/**
 * Fixture + Page Object implementation
 * https://playwright.dev/docs/test-fixtures#creating-a-fixture
 */

import { Locator, Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly homePageHeader: Locator;
  readonly homePageFirstItem: Locator;

  constructor(page: Page) {
    this.page  = page;
    this.homePageHeader = page.getByText('Swag Labs');
    this.homePageFirstItem = page.locator('[data-test="inventory-list"] div').filter({ hasText: 'Sauce Labs Backpackcarry.' }).first();
  }
}
