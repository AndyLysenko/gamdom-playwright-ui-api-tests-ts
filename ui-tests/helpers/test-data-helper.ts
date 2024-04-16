import fs from 'fs';
import path from 'path';
import { Game } from '../model/game';

export function loadGames(): Game[] {
  const filePath = path.join(__dirname, '../data/games.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(jsonData);
}

export function getGame(name: string): Game {
    return loadGames().find(game => game.name === name) as Game;
}