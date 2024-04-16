import { test } from '../fixtures/global.fixture';
import { loadGames } from '../helpers/test-data-helper';
import { GamePage } from '../pages/game-page';
import { Game } from '../model/game';

const testGames: Game[] = loadGames()

testGames.forEach( game => {
  test(`Search and open game '${game.name}'`, async ({ homePage, page }) => {

    await homePage.searchAndOpenGame(game.name);
  
    const gamePage = new GamePage(page, game);
    await gamePage.verifyPageOpen();
    await gamePage.verifyNameAndProvider();
    await gamePage.verifyGameIdAndSrc();
  });
});