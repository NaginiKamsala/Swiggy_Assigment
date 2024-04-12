function calculateDamage(attacker, defender, attackerRoll, defenderRoll) {
  const attackerDamage = attackerRoll * attacker.attack;
  const defenderDamage = defenderRoll * defender.strength;

  const damageTaken = Math.max(0, Math.abs(attackerDamage - defenderDamage));
  defender.health -= damageTaken;

  return damageTaken;
}
module.exports = calculateDamage;
