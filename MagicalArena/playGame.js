const rollingDice = require("./rollingdice");
const calculateDamage = require("./calculateDamage");
function playGame(attacker, defender) {
  let attackerRoll = rollingDice();
  let defenderRoll = rollingDice();

  console.log(`${attacker.name} attacks with roll ${attackerRoll}`);
  console.log(`${defender.name} defends with roll ${defenderRoll}`);

  const damage = calculateDamage(
    attacker,
    defender,
    attackerRoll,
    defenderRoll
  );
  console.log(`Damage is ${damage}`);
  [attacker, defender] = [defender, attacker];
}

module.exports = playGame;
