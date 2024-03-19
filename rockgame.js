function checkWinner(index) {
  var computerValue = computerShoot();
  
  if (computerValue == playerValue) {
    
  } else if (computerValue == 1 && playerValue == 2) {
    
  } else if (computerValue == 2 && playerValue == 1) {
    
  } else if (computerValue == 3 && playerValue == 2) {
    
  } else if (computerValue == 2 && playerValue == 3) {
    
  } else if (computerValue == 1 && playerValue == 3) {
    
  } else if (computerValue == 3 && playerValue == 1) {
    
  }
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
