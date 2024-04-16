import { Page, Locator } from "@playwright/test";
import { BasePage } from "../base-page";
import { stringToBoolean } from "../../helpers/string-helper";

export class ChatWindow extends BasePage
{
  private inputTb: Locator;
  private emojiBtn: Locator;
  private sendMessageBtn: Locator;

  constructor(page: Page) {
    super(page, undefined, '#chat-messages');

    this.inputTb = this.page.locator('.chat_inputbox');
    this.emojiBtn = this.page.getByLabel('emoji');
    this.sendMessageBtn = this.page.getByLabel('send-message');
  }

  async isInputActive(): Promise<boolean> {
    return stringToBoolean(await this.inputTb.getAttribute('contenteditable'));
  }

  async sendMessage(message: string) {
    await this.inputTb.fill(message);
    await this.sendMessageBtn.click();
  }

}