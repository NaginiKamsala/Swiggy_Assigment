const playGame = require("./playGame");

function startGame(player1, player2) {
  while (player1.health > 0 && player2.health > 0) {
    let minhealth = Math.min(player1.health, player2.health);

    let startplayer;
    let opponentplayer;
    if (minhealth === player1.health) {
      startplayer = player1;
      opponentplayer = player2;
      playGame(startplayer, opponentplayer);
    } else {
      startplayer = player2;
      opponentplayer = player1;
      playGame(startplayer, opponentplayer);
    }
  }
  // if (player1.health == 0) {
  //   console.log("player 2 wins");
  // } else {
  //   console.log("player 1 wins");
  // }
}

module.exports = startGame;
