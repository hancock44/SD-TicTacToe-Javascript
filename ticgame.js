var currentPlayer = 1; // Player 1 starts
var gameEnded = false;

var winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
    [0, 4, 8], [2, 4, 6]              // Diagonal
];

function changeColor(index) {
    if (gameEnded) return;

    var buttons = document.getElementsByClassName('button');
    var color = currentPlayer === 1 ? 'red' : 'blue';
    buttons[index].style.backgroundColor = color;

    if (checkWin(color)) {
        document.getElementById('winMessage').innerText = "Player " + currentPlayer + " wins!";
        document.getElementById('winMessage').style.display = "block";
        gameEnded = true;
        return;
    }
    
    // Switch player
    currentPlayer = currentPlayer === 1 ? 2 : 1;
}

function checkWin(color) {
    for (var i = 0; i < winConditions.length; i++) {
        var count = 0;
        for (var j = 0; j < winConditions[i].length; j++) {
            var index = winConditions[i][j];
            var button = document.getElementsByClassName('button')[index];
            if (button.style.backgroundColor === color) {
                count++;
            }
        }
        if (count === 3) {
            return true;
        }
    }
    return false;
}

function reset() {
  location.reload();
}

function reset() {
    var buttons = document.getElementsByClassName('button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = '#ccc';
    }
    document.getElementById('winMessage').style.display = "none";
    currentPlayer = 1;
    gameEnded = false;
}
