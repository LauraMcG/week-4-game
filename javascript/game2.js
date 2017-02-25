// Pseudocode/ expectations for code:

// Start with giving the player the choice between four characters.

// Player selects a character by clicking on it.

// The remaining three characters become enemies to fight.

// If an enemy dies (reaches an HP at or below 0), the player proceeds to select another enemy until all are defeated.

// If a player tries to attack when no enemy is in play, show a message to pick an enemy

// If the players HP reaches 0 or below, she loses the game.
// A reset button will appear, which the player can press to start over.

// Click on a character to fight them. They move into the defender area.

// Attack by clicking attack button.

// When the attack button is pressed, a message pops up showing the damage you and your enemy did to each other.
// This is also reflected in a health decrease below each photo.

// The enemy has a constant rate of attack.

// But you will increase your attack power with each turn (the example shows by 8 each time )

// --- ACTUAL CODING BEGINS HERE

$(document).ready(function () {

	//first, declare global variables and create objects for our characters.

var player = {
};

var char1 = {
	name: "Weird Girl",
	class: null,
	HP: 100,
	AttackPower: 20,
	click: function {
		if (this.class === 'enemy') {
			$(this).addClass('defender');
			console.log(this);
		} else {
			$(this).addClass('enemy')
		}

	}
};

var char2 = {
	name: "Ponda Baba",
	class: null,
	HP: 100,
	AttackPower: 20,
};

var char3 = {
	name: "The Modal Nodes",
	class: null,
	HP: 100,
	AttackPower: 20,
};

var char4 = {
	name: "Greedo",
	class:null,
	HP: 100,
	AttackPower: 20,
};

//creating a function that will refresh all character's stats. maybe there's a way to have one thing that can plug in all of them? put it in an arrary and use a for loop?

 function refreshStats ()
 {
 	$('.char1').html(char1.name + " " + char1.HP);
 	$('.char2').html(char2.name + " " + char2.HP);
 	$('.char3').html(char3.name + " " + char3.HP);
 	$('.char4').html(char4.name + " " + char4.HP);
 };

//putting play -- where the user takes action -- into its own function.

function playGame () {

//when the user clicks on a character, it becomes the player and the rest become enemies.
//the player turns green and the other options become enemies: they move to the enemy row and turn red.

	$('.start').on('click', function () {
		// console.log(this);

		$(this).removeClass('start').addClass('player');
		// $(this).siblings().addClass('enemy').removeClass('start player').appendTo('.enemies');
		$(this).siblings().appendTo('.enemies');

		console.log(this);
	});

	//when a player clicks an enemy,  it becomes the defender and gets added to the defender row

	$('.enemy').on('click', function() {
		
		$(this).appendTo('.defend');


		console.log(this);
		// $(this).removeClass('enemy').addClass('defender').appendTo('.defend');
		// $(this).addClass('defender');

	});  

//end playGame	
};


//start game by displaying starting stats
refreshStats();
// playGame();







//end entire script
});