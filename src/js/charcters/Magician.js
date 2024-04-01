import Character from "../Character";

export default class Magician extends Character {
    constructor(level, type = 'generic') {
      super(level, type)
      this.attack = 10;
      this.defence = 40;
      this.health = 50;
    }
  }