// Run on start up and to reset the game board
var difficulty = 1;
var rows = difficulty + 2;
var freeze = false;
var played = false;

function setUp () {

	// Set up the blank table
	$(document).ready(function() {
		for (var i = 0; i < rows; i++) {
			$("table").append("<tr class='" + i + "'></tr>");
		};
		for (var i = 0; i < rows; i++) {
			$("tr").append("<td class='empty " + i + "'></td>");
		};
	});

	// Create blank Array of Moves

	var spaces = [];

	for (var i = 0 ; i < rows; i++) {
		spaces.push([]);
		for (var j = 0 ; j < rows; j++) {
			spaces[i].push("");
		}
	}
	return spaces;
}



function isWin (player) {
	var vertical = [];
	var horizontal = [];
	var slanted = [];

	//check columns for horizontal win
	for (var i = 0; i < rows; i++) {
		for (var j = 0; j < rows; j++) {
			var spot = spaces[i][j];
			if (spot == player) {
				horizontal.push(i + " , " + j);
			}
		}
		if (horizontal.length == rows) {
			console.log("win");
			return true;
		}
		else {
			horizontal = [];
		}
	}

	//check for vertical win
	for (var i = 0; i < rows; i++) {
		for (var j = 0; j < rows; j++) {
			var spot = spaces[j][i];
			if (spot == player) {
				vertical.push(j + " , " + i);
			}
		}
		if (vertical.length == rows) {
			console.log("win");
			return true;
		}
		else {
			vertical = [];
		}
	}

	//check for diagonal win TL to BR
	for (var i = 0; i < rows; i++) {
		var spot = spaces[i][i];
		if (spot == player) {
				slanted.push(i + " , " + i);
			}
		}
	if (slanted.length == rows) {
		console.log("win");
		return true;
	}
	else {
		slanted = [];
	}

	//check for diagonal win TR to BL
	for (var i = 0; i < rows; i++) {
		j = rows - 1 - i;
		var spot = spaces[j][i];
		if (spot == player) {
				slanted.push(i + " , " + j);
				
			}
		}
	if (slanted.length == rows) {
		console.log("win");
		return true;
	}
	else {
		slanted = [];
	}
}

function playMove () {
	var available = [];

	// push empty spots to array
	for (var i = 0; i < rows; i++) {
		for (var j = 0; j < rows; j++) {
			var spot = spaces[i][j];
			if (spot.length < 1) {
				// spot is empty
				available.push(i + " , " + j);
			}
		}
	}

	// random spot generator
	var random_spot = available[Math.floor(Math.random() * available.length)];
	console.log(random_spot);
	random_spot = random_spot.split(" , ");
	var row = random_spot[0];
	var column = random_spot[1];

	spaces[row][column] = "o";

	$("tr." + row + " td." + column).append("O").removeClass("empty");
	if (isWin("o")) {
		freeze = true;
		console.log("you lose!");
	};


}

var spaces = setUp(difficulty); // 1 is default difficulty, returns blank array to play on




// handle click events to turn to X

$(document).ready(function(){
	
	$(".empty").one("click", function(){
		if (!freeze && $(this).hasClass("empty")){
			$(this).append("X").removeClass("empty");
			var column = $(this).attr("class");
			var row = $(this).parent().attr("class");
			console.log(row + " , " + column);
			spaces[row][column] = "x";
			played = true;
		}

		if (isWin("x")) {
			freeze = true; 
			console.log("You win!");
		}
		else {
			if (!freeze && played){
				playMove();
				played = false;
			}
		}
	});
	
});



