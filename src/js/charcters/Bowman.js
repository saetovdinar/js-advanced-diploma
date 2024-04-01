import Character from "../Character";

export default class Bowman extends Character {
    
  constructor(level, type = 'generic') {
    super(level, type)
    this.attack = 25;
    this.defence = 25;
    this.health = 50;
    }
}

