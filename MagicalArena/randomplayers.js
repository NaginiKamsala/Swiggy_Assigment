function pickAnyTwoPlayers(playersList) {
  let randomfirstplayer = Math.floor(Math.random() * playersList.length);
  let randomsecondplayer;
  do {
    randomsecondplayer = Math.floor(Math.random() * playersList.length);
  } while (randomsecondplayer === randomfirstplayer);

  return [playersList[randomfirstplayer], playersList[randomsecondplayer]];
}

//console.log(getRanTwoPlayers(players));
module.exports = pickAnyTwoPlayers;
