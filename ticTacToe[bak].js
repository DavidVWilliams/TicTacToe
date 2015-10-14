window.onload = function() {
// Find class "game" and build board
// var boardLocation = document.querySelector(".game");
// var buildBoard = document.createElement('UL');



// .box means that it's a spot where an x/o can be places
// you can select them all and apply an event listener
// when the listener is trigered, "this" will refer to the specific box where that happened

// Pseudocode first!

// Write character to box
// var getBox = document.getElementById('game');
// getBox.addEventListener('click', function(e) {

// 	//alert(e.target.textContent);
// 	if (e.target.innerHTML === '') {

// 	e.target.textContent = "X";
// }
// else {
// 	alert("This box has content");
// }
// }) 
var gameStatus;
var gameOver;
var currentPlayer;

function player1 () {
var boxes = document.getElementsByClassName('box');
  for (var i =0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', function(e) {

  if (e.target.innerHTML === "") {

	e.target.textContent = "X";

  }
  else {
	alert("This box has content");
  }

});
}

}	
//player2();

function player2 () {
  var boxes = document.getElementsByClassName('box');
  for (var i =0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', function(e) {

  if (e.target.innerHTML === "") {

	  e.target.textContent = "O";
	  alert(e.target.id);

  }
  // else {
	 //  alert("This box has content");
  // }

    });
  }
  //return currentPlayer;
}	


// if (currentPlayer === 2){
  

//   var boxes = document.getElementsByClassName('box');
// for (var i =0; i < boxes.length; i++) {
// 	boxes[i].addEventListener('click', function(e) {
// 		//alert(e.target.textContent);
// 		if (e.target.innerHTML === "") {

// 			e.target.textContent = "O";

// 		}
// 		else {
// 			alert("This box has content");
// 		}
// 		currentPlayer = 1;
// 	});
// }; 

// }

// }while (gameStatus !== gameOver);
var currentPlayer =  "O";
var gameOver = false;

var playerTurn = function() {
	if (e.target.innerHTML === "") {
		e.target.textContent = currentPlayer;
	}
}

var runGame = function () {
	 var boxes = document.getElementsByClassName('box');
	for (var i =0; i < boxes.length; i++) {
		boxes[i].addEventListener('click', function(e) {
			playerTurn()
	}
}

runGame();


// set currentPlayer to "O"
// set gameOver to false
// createEvent listeners on boxes
// 	if box clicked and valid
// 		place marker for currentPlayer
// 		check for gameOver condition
// 		toggle currentPlayer

// Other stuff - resetting the board, ending event listers after victory, generate board with JS, AI opponent

// secondFunction(furstFunction())
// OR
// firstFunctionResult = firstFunction()
// secondFunction(firstFunctionResult)

};