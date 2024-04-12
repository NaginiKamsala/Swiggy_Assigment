const playersList = require("./MagicalArena/playersData");
const pickAnyTwoPlayers = require("./MagicalArena/randomplayers");
const startGame = require("./MagicalArena/startGame");

function init() {
  // pick any two players from the players list
  const [firstPlayer, secondPlayer] = pickAnyTwoPlayers(playersList);
  console.log();
  //console.log(`player 2 = ${player2}`);
  // start the game with two players
  startGame(firstPlayer, secondPlayer);
}
init();
