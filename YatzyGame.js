import { Dice } from './dice.js';
import { YatzyEngine } from './yatzyEngine.js';

export class YatzyGame {
  constructor(players = ['Player 1']) {
    this.players = players;
    this.currentPlayerIndex = 0;
    this.round = 1;
    this.totalScore = 0;
    this.dice = new Dice();
    this.engine = new YatzyEngine();
  }

  startNewGame() {
    console.log('Starting new Yatzy game...');
    this.round = 1;
    this.totalScore = 0;
  }

  endTurn() {
    console.log('Ending turn for', this.players[this.currentPlayerIndex]);
    this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
  }

  endGame() {
    console.log('Game over!');
  }
}
