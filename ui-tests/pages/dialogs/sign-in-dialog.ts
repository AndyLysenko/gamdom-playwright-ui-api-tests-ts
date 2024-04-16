import { Locator, Page } from "@playwright/test";
import { BaseDialog } from "./base-dialog";

export class SignInDialog extends BaseDialog {
  private userNameTb: Locator;
  private passwordTb: Locator;
  private forgotPasswordLink: Locator;
  private rememberMeChbx: Locator;
  private startPlayingBtn: Locator;

  constructor(page: Page) {
    super(page, '[data-testid="form-login"]')

    this.userNameTb = this.page.locator('[name="username"]')
    this.passwordTb = this.page.locator('[name="password"]')
    this.forgotPasswordLink = this.page.getByTestId('forgot-password-login')
    this.rememberMeChbx = this.page.getByTestId('remember-me-login')
    this.startPlayingBtn = this.page.getByTestId('start-playing-login')
  }

  async signIn(username: string, password: string, rememberMe = false) {
    this.page.on('dialog',
     dialog => dialog.dismiss()
    );
    
    await this.userNameTb.fill(username);
    await this.passwordTb.fill(password);
    
    if (rememberMe){
      await this.rememberMeChbx.check();
    }

    await this.startPlayingBtn.click();
  }
  
}
