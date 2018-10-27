playerHP = 10
playerMana = 15
enemyHP = 15
enemyMana = 10


function areEquallyStrong(playerHP, playerMana, enemyHP, enemyMana) {

  const playerIntelect = playerHP <= playerMana ? playerHP : playerMana;
  const playerStamina = playerHP >= playerMana ? playerHP : playerMana;
  const enemyIntelect = enemyHP <= enemyMana ? enemyHP : enemyMana;
  const enemyStamina = enemyHP >= enemyMana ? enemyHP : enemyMana;

  return playerStamina === enemyStamina && playerIntelect === enemyIntelect;
}

console.log(areEquallyStrong(playerHP, playerMana, enemyHP, enemyMana))