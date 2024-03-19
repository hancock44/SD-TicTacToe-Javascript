var computerValue = "rock"

function checkWinner(index) {
  var computerValue = computerShoot();
  if (index == 1) {
    var playerValue = "rock";
  } else if (index == 2) {
    var playerValue = "paper";
  } else {
    var playerValue = "scissors";
  }
  if (computerValue == playerValue) {
    
  } else if (computerValue 
}

function computerShoot() {
  var value = getRandomInt(1,4);
  return value;
}

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
