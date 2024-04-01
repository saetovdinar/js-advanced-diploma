import Character from "../Character";

export default class Daemon extends Character {
    
    constructor(level, type = 'generic') {
      super(level, type)
      this.attack = 10;
      this.defence = 10;
      this.health = 50;
    }
  }