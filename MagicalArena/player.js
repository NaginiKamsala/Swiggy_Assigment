class Player {
  constructor(health, strength, attack, id) {
    this.health = health;
    this.strength = strength;
    this.attack = attack;
    this.id = id;
  }
}
class Players extends Player {
  constructor(team) {
    super();
    this.team = team;
  }
}

module.exports = { Player, Players };
