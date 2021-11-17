import { Injectable } from '@angular/core';
import { GAME } from 'src/app/shared/models/puzzle/game';

@Injectable({
  providedIn: 'root'
})
export class JuegoPuzzleService {
  games: GAME[] = [];

  constructor() {
    if (typeof(Storage) !== "undefined") {
      const games = localStorage.getItem('puzzle');
      this.games = games ? JSON.parse(games) : [];
    }
  }

  getGames(){
    return this.games;
  }

  save(game: GAME){
    const count = this.games.length;
    game.id = count ? this.games[count-1].id + 1 : 0;
    this.games.push(game);
    localStorage.puzzle = JSON.stringify(this.games);
  }

  delete(id: number){
    this.games = this.games.filter((game) => game.id !== id);
    localStorage.puzzle = JSON.stringify(this.games);
  }
}

