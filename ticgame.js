var currentPlayer = 1; // Player 1 starts
var done = false;

var wins = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]              
];

function changeColor(index) {
    if (done) return;

    var buttons = document.getElementsByClassName('button');
    var color = currentPlayer === 1 ? 'red' : 'blue';
    buttons[index].style.backgroundColor = color;

    if (checkWin(color)) {
        document.getElementById('winMessage').innerText = "Player " + currentPlayer + " wins!";
        document.getElementById('winMessage').style.display = "block";
        done = true;
        return;
    }
    currentPlayer = currentPlayer === 1 ? 2 : 1;
}

function checkWin(color) {
    for (var i = 0; i < wins.length; i++) {
        var count = 0;
        for (var j = 0; j < wins[i].length; j++) {
            var index = wins[i][j];
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
    var buttons = document.getElementsByClassName('button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = '#ccc';
    }
    document.getElementById('winMessage').style.display = "none";
    currentPlayer = 1;
    done = false;
}
