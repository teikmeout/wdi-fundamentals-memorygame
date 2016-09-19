// adding values to cards on game
var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";

//creating messages if cards match
/*if (cardTwo === cardFour) {
	alert("You found a match!");
}else {alert("Sorry, try again.")}*/


//create cards using javascript
//declaration of variable to select game board
var board = document.getElementsById('gameboard');

//function to create cards in gameboard
var makeCards = function(){
	//using for to make only 4 cards
	for( var i=0; i<4; i++){
	//declaring each div
	var newDiv = document.createElement('div');
	// also giving each element a class=card
	newDiv.className = 'card';
	//appending div to class=board
	document.getElementsByClassName('board')[i].appendChild(newDiv);
	}
}


//createBoard will create HTML contacts for each card appending HTML to div with class=board
var createBoard = function(){
	// for loop with 4 times iteration
	for (var i=0; i<4; i++) {
		// create HTML for each card
		//code is incomplete and needs some changing
		//append created HTML to board
		document.getElementByClassName('board')[i].appendChild()
	}
}