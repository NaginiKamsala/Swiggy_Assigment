// let players = [
//   { id: 1, health: 100, strength: 50, attach: 10 },
//   { id: 2, health: 50, strength: 100, attach: 50 },
//   { id: 3, health: 120, strength: 150, attach: 5 },
//   { id: 4, health: 520, strength: 200, attach: 50 },
// ];

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
