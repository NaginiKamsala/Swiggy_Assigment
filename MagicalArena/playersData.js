const Player = require("./player");

const player1 = new Player(100, 10, 5, "player1");
const player2 = new Player(50, 5, 10, "player2");
const player3 = new Player(120, 20, 5, "player3");
const player4 = new Player(150, 5, 10, "player4");

const playerList = [];
playerList.push(player1);
playerList.push(player2);
playerList.push(player3);
playerList.push(player4);

module.exports = playerList;
