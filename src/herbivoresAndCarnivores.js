'use strict';

class Animal {
  static alive = [];
  health = 100;

  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(beast) {
    if (beast instanceof Herbivore && !beast.hidden) {
      beast.health -= 50;

      if (beast.health <= 0) {
        Animal.alive = Animal.alive.filter((animal) => animal !== beast);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
