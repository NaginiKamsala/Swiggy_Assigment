const { Player, Players } = require("./MagicalArena/player");

function init() {
  // call the main game function
  const player1 = new Player(100, 10, 5, 1);
  const player2 = new Player(100, 10, 5, 2);

  //Create an array to hold the players
  const playersList = [];

  // Add players to the list
  playersList.push(player1);
  playersList.push(player2);

  // Create team instances
  const RCB = new Players(playersList);

  // Log the team
  console.log(RCB);
}

init();
