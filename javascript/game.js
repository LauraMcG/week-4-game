// LETS COLLECT CRYSTALS

// upon loading, we'll display directions, the goal number (randomly assigned upon load), a box for wins and losses, some baller crystals, and a box for their current score.
// those fly crystals will have a number randomly assigned to them upon load

// when the player clicks on those killer crystals, a number equal to their value will display. 

// Like blackjack, the player's goal is to hit the random number generated on the screen. 

// If the player successfully does this, they win and the game resets (a new random number is generated, the crystals are assigned new random digits)

// If the player goes over this number, they lose and the game resets.

$(document).ready(function () {

//defining global variables,

var crystal1;

var crystal2;

var crystal3;

var crystal4;

var numberToGuess;

var currentGuess;

var wins = 0;

var losses = 0;

var winNoise = document.createElement("audio");
      winNoise.setAttribute("src", "./audio/FF7-Victory-Fanfare.mp3");

var loseNoise = document.createElement("audio");
	loseNoise.setAttribute("src", "./audio/WilhelmScream.mp3")


//function to pull random integer from specific range

function getRandomInt(min, max) {
  		return Math.floor(Math.random() * (max - min + 1) + min);
  	}

//setting up reload function, to be used at start and after each win and loss
function reloadGame() {

	//set the crystal number values to a random number between 1 and 10.
// NTS remove text before final push
//NTS look into a way to ensure each number is different?

	crystal1 = getRandomInt(1, 12);
	// $('.crystal1').text(crystal1);

	crystal2= getRandomInt(1, 12);
	// $('.crystal2').text(crystal2);

	crystal3= getRandomInt(1, 12);
	// $('.crystal3').text(crystal3);

	crystal4= getRandomInt(1, 12);
	// $('.crystal4').text(crystal4);


	//sets up the number to guess by generating a random number

	numberToGuess = getRandomInt(19,120);

	$('.to-guess').text(numberToGuess);


	//print the win count, lose count, and current guess to screen
	//note that the currentGuess resets each time, but wins and losses remain the same.
	currentGuess = 0;
	$('.current-guess').text(currentGuess);
	$('.wins').text(wins);
	$('.losses').text(losses);
//end reloadGame
};

//setting up function to check the score after each action.
//if the player wins, play win noise, up the win count and display it, reload the game.
//if the player loses, play lose noise, up the loss count and display it, reload the game.

function checkScore() {
	if (numberToGuess === currentGuess) {
		wins++;
		winNoise.play();
		$('.wins').text(wins);
		reloadGame();
	} else if (currentGuess > numberToGuess) {
		losses++;
		loseNoise.play();
		$('.losses').text(losses);
		reloadGame();
	};
};

//setting up gameplay function: what happens when the user takes action
function gameplay() {

	//for each crystal, update the count of the current guess and check to see if a win or loss has
	$('.crystal1').on('click', function() {
		currentGuess = currentGuess + crystal1;
		$('.current-guess').text(currentGuess);
		checkScore();
	});  

	$('.crystal2').on('click', function() {
		currentGuess = currentGuess + crystal2;
		$('.current-guess').text(currentGuess);
		checkScore();
	});  

	$('.crystal3').on('click', function() {
		currentGuess = currentGuess + crystal3;
		$('.current-guess').text(currentGuess);
		checkScore();
	});  

	$('.crystal4').on('click', function() {
		currentGuess = currentGuess + crystal4;
		$('.current-guess').text(currentGuess);
		checkScore();
	});  
};


reloadGame();
gameplay();

//end script
});