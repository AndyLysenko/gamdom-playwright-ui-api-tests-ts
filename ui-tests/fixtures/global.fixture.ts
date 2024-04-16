import { test as base } from '@playwright/test';
import { HomePage } from '../pages/home-page';

export const test = base.extend<{ homePage: HomePage }>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    await homePage.verifyPageOpen();
    
    await use(homePage);
  },
});