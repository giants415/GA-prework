/* These are values for 4 cards */
/*
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if (cardOne === cardTwo) {
	alert("You found a match!");
} else if (cardThree === cardFour) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}
*/
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];


var board = document.getElementById('game-board');
function createBoard() {
for (var i = 0; i < cards.length; i++) {
	var cardElement = document.createElement('div');
	cardElement.className = 'card';
	cardElement.setAttribute('data-card', cards[i]);
	cardElement.addEventListener('click', isTwoCards);
	board.appendChild(cardElement);
	}
}

function isTwoCards () {
	cardsInPlay.push(this.getAttribute('data-card'));
		console.log(this.getAttribute('data-card'));
			if (this.getAttribute('data-card') === 'king') {
					this.innerHTML = "<img src = 'http://i.imgur.com/Htv0eWI.png'> alt='King Card' />";
			} else {
					this.innerHTML = "<img src = 'http://i.imgur.com/ORnAlL6.png'> alt='Queen Card' />";
			}
		if (cardsInPlay.length === 2) {
			isMatch(cardsInPlay);
			cardsInPlay = [];
		}
	}
