import { Page, expect } from "@playwright/test";
import { BASE_URL } from "../constants";

export class BasePage {
  protected page: Page; 
  protected url?: string;
  private pageValidateLocatorString?: string;

  constructor(page: Page, url?: string, pageValidateLocator?: string) {
    this.page = page;
    this.pageValidateLocatorString = pageValidateLocator;

    if (url !== undefined) {
      this.url = `${BASE_URL}${url}`;
    }
  }

  async navigate() {
    if (this.url !== undefined) {
      await this.page.goto(this.url);
    } else {
      throw new Error('Cannot navigate to the page. No URL provided.');
    }
  }

  async verifyPageOpen() {
    if (this.url !== undefined) {
      await this.page.waitForURL(this.url)
    }

    if (this.pageValidateLocatorString !== undefined) {
      await expect(this.page.locator(this.pageValidateLocatorString)).toBeVisible();
    }

    if (this.url === undefined && this.pageValidateLocatorString === undefined) {
      throw new Error('Cannot verify the page is open. No URL or page validation locator provided');
    }
  }
}