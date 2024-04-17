import fs from 'fs';
import path from 'path';
import { Game } from '../model/game';

function loadData<T>(filePath: string): T[] {
  const absoluteFilePath = path.join(__dirname, filePath);
  const jsonData = fs.readFileSync(absoluteFilePath, 'utf-8');
  return JSON.parse(jsonData);
}

export function loadGames(): Game[] {
  return loadData('../data/games.json')
}

export function getGame(name: string): Game {
    return loadGames().find(game => game.name === name) as Game;
}