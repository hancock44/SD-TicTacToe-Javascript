function checkWinner(playerValue) {
  var computerValue = computerShoot();
  
  if (computerValue === playerValue) {
    document.getElementById('winMessage').innerText = "A tie!";
  } else if (computerValue === 1 && playerValue === 2) {
    document.getElementById('winMessage').innerText = "Player wins!";
  } else if (computerValue === 2 && playerValue === 1) {
    document.getElementById('winMessage').innerText = "Computer wins!";
  } else if (computerValue === 3 && playerValue === 2) {
    document.getElementById('winMessage').innerText = "Computer wins!";
  } else if (computerValue === 2 && playerValue === 3) {
    document.getElementById('winMessage').innerText = "Player wins!";
  } else if (computerValue === 1 && playerValue === 3) {
    document.getElementById('winMessage').innerText = "Computer wins!";
  } else if (computerValue === 3 && playerValue === 1) {
    document.getElementById('winMessage').innerText = "Player wins!";
  }
}

function computerShoot() {
  var value = getRandomInt(1, 4);
  return value;
}

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1)) + minCeiled;
}
