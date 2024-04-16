import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./base-page";
import { Game } from "../model/game";

export class GamePage extends BasePage {
  private gameNameLbl: Locator;
  private providerLbl: Locator;
  private canvasFrameRetrivalMethod: Promise<string | null>;

  private game: Game;

  constructor(page: Page, game: Game) {
    super(page, game.url);

    this.game = game;
    this.gameNameLbl = this.page.locator('h1').first();
    this.providerLbl = this.gameNameLbl.locator('+ a >> p');
    this.canvasFrameRetrivalMethod = this.page.getAttribute('iframe.eg__iframe', 'src');
  }

  async verifyNameAndProvider(){
    await expect(this.gameNameLbl).toHaveText(this.game.name);
    await expect(this.providerLbl).toHaveText(this.game.provider);
  }

  async verifyGameIdAndSrc(){
    const src = await this.canvasFrameRetrivalMethod;
    
    // Extract the base URL
    const urlObject = new URL(src || '');
    const baseUrl = urlObject.origin;
    expect(baseUrl).toBe(this.game.gameProviderUrl);

    //extract the game id
    const queryParams = new URLSearchParams(urlObject.search);
    const gameId = queryParams.get('gameid');
    expect(gameId).toBe(this.game.id);
  }
}