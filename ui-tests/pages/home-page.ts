import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base-page";

export class HomePage extends BasePage 
{
  private signUpBtn: Locator;
  private signInBtn: Locator;
  private searchTb: Locator;
  private openChatIcon: Locator;
  private closeChatIcon: Locator;

  constructor(page: Page) {
    super(page, '/', '[data-testid="signup-nav"]');

    this.signUpBtn = this.page.getByTestId('signup-nav');
    this.signInBtn = this.page.getByTestId('signin-nav');
    this.searchTb = this.page.getByPlaceholder('Search');
    this.openChatIcon = this.page.locator('i.icon-Chat');
    this.closeChatIcon = this.page.locator('button > i.icon-remove21').first();
  }

  async signUp(){
    await this.signUpBtn.click()
  }

  async signIn(){
    await this.signInBtn.click()
  }

  async searchAndOpenGame(name: string){
    await this.searchTb.fill(name);
    await this.searchTb.click();

    const gameListItem = this.page
      .getByRole('listitem')
      .filter({'hasText': name})
      .first();

    await gameListItem.waitFor({state: 'visible'})
    await gameListItem.click();
  }

  async openChat(){
    await this.openChatIcon.click();
  }

  async closeChat(){
    await this.closeChatIcon.click();
  }

}