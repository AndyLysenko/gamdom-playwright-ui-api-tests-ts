import { Page, expect } from "@playwright/test";

export class BaseDialog {
  protected page: Page; 
  private dialogValidateLocatorString: string;

  constructor(page: Page, dialogValidateLocatorString: string) {
    this.page = page;
    this.dialogValidateLocatorString = dialogValidateLocatorString;
  }

  async waitToBeOpen() {
    await expect(this.page.locator(this.dialogValidateLocatorString)).toBeVisible({ timeout: 10000});
  }

  async verifyNotDisplayed() {
    await expect(this.page.locator(this.dialogValidateLocatorString)).not.toBeVisible();
  }
  
}
