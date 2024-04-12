function pickAnyTwoPlayers(arrobj) {
  let randomfirstplayer = Math.floor(Math.random() * arrobj.length);
  let randomsecondplayer;
  do {
    randomsecondplayer = Math.floor(Math.random() * arrobj.length);
  } while (randomsecondplayer === randomfirstplayer);

  return [arrobj[randomfirstplayer], arrobj[randomsecondplayer]];
}

//console.log(getRanTwoPlayers(players));
module.exports = pickAnyTwoPlayers;
