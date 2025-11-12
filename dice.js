export class Dice {
  constructor(numDice = 5) {
    this.numDice = numDice;
    this.values = Array(numDice).fill(1);
  }

  roll() {
    
    this.values = this.values.map(() => Math.floor(Math.random() * 6) + 1);
    return this.values;
  }
}


/** updated */