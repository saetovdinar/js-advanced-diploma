import Character from "../Character";

export default class Swordsman  extends Character{
    
    constructor(level, type = 'generic') {
      super(level, type)
      this.attack = 40;
      this.defence = 10;
      this.health = 50;
    }
  }