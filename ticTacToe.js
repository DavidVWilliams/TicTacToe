// set currentPlayer to "O"
// set gameOver to false
// createEvent listeners on boxes
//  if box clicked and valid
//    place marker for currentPlayer
//    check for gameOver condition
//      if over reset board
//    toggle currentPlayer

// Other stuff - ending event listers after victory, generate board with JS, AI opponent

var currentPlayer = "O";
var gameOver = false;
var boxes = document.getElementsByClassName('box');
var count = 9;

window.onload = function () {
  var playerTurn = function (e) {
    if (e.target.textContent === "" && !gameOver) {
      if (currentPlayer == "O") {
        e.target.textContent = currentPlayer;
        currentPlayer = "X";
        checkForVictory();
      } else {
        e.target.textContent = currentPlayer;
        currentPlayer = "O";
        checkForVictory();
      }
      count--;
    }
  };

  var runGame = function () {
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].addEventListener('click', function (e) {
        playerTurn(e);
      }, false);
    }
  };

  runGame();

  var checkForVictory = function () {
    if (boxes[0].textContent === "O" && boxes[1].textContent === "O" && boxes[2].textContent === "O" ||
      boxes[3].textContent === "O" && boxes[4].textContent === "O" && boxes[5].textContent === "O" ||
      boxes[6].textContent === "O" && boxes[7].textContent === "O" && boxes[8].textContent === "O" ||
      boxes[0].textContent === "O" && boxes[3].textContent === "O" && boxes[6].textContent === "O" ||
      boxes[1].textContent === "O" && boxes[4].textContent === "O" && boxes[7].textContent === "O" ||
      boxes[2].textContent === "O" && boxes[5].textContent === "O" && boxes[8].textContent === "O" ||
      boxes[0].textContent === "O" && boxes[4].textContent === "O" && boxes[8].textContent === "O" ||
      boxes[2].textContent === "O" && boxes[4].textContent === "O" && boxes[6].textContent === "O") {
      gameOver = true;
      alert("O is the winner");
      newGame();


    } else if (boxes[0].textContent === "X" && boxes[1].textContent === "X" && boxes[2].textContent === "X" ||
      boxes[3].textContent === "X" && boxes[4].textContent === "X" && boxes[5].textContent === "X" ||
      boxes[6].textContent === "X" && boxes[7].textContent === "X" && boxes[8].textContent === "X" ||
      boxes[0].textContent === "X" && boxes[3].textContent === "X" && boxes[6].textContent === "X" ||
      boxes[1].textContent === "X" && boxes[4].textContent === "X" && boxes[7].textContent === "X" ||
      boxes[2].textContent === "X" && boxes[5].textContent === "X" && boxes[8].textContent === "X" ||
      boxes[0].textContent === "X" && boxes[4].textContent === "X" && boxes[8].textContent === "X" ||
      boxes[2].textContent === "X" && boxes[4].textContent === "X" && boxes[6].textContent === "X") {
      gameOver = true;
      alert("X is the winner");
      newGame();
    } else {
      //return alert("There are no more legal moves. The game is a draw.");  
      checkForDraw();
    }
  };

  var checkForDraw = function () {
    if (count === 1 && gameOver === false) {
      alert("This game is a draw.  There are no legal moves remaining.");
      gameOver = true;
      newGame();
    }
  }

  var newGame = function () {
    var newGame = prompt("Would you like to play again?").toUpperCase();
    if (newGame === 'YES') {
      window.location.reload();
    } else {
      return;
    }
  }
};