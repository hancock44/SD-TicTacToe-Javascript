var computerValue = "rock"

function checkWinner() {
  var computerValue = computerShoot();
  
}

function computerShoot() {
  var num = getRandomInt(1,4);
  var value = "rock";
  if (num == 1) {
    var value = "rock";
  } else if (num == 2) {
    var value = "paper";
  } else {
    var value = "scissors";
  }
  return value;
}

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
