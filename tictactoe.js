// Run on start up and to reset the game board
function setUp (difficulty) {
	if (difficulty == undefined) {
		difficulty = 1;
	};

	var rows = 2 + difficulty;
	var datacounter = 0;
	var rowcounter = 0;

	// Set up the blank table
	$(document).ready(function() {
		for (var i = 0; i < rows; i++) {
			$("table").append("<tr class='" + rowcounter + "'></tr>");
			rowcounter++;
		};
		for (var i = 0; i < rows; i++) {
			$("tr").append("<td class='empty " + datacounter + "'></td>");
			datacounter++;
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

function checkWin (argument) {
	// body...
}

spaces = setUp(); // 1 is default difficulty, returns blank array to play on




// handle click events to turn to X

$(document).ready(function(){
	$(".empty").one("click", function(){
		$(this).append("X").removeClass("empty");
		var column = $(this).attr("class");
		var row = $(this).parent().attr("class");
		console.log(row + " , " + column);
		spaces[row][column] = "x";

		// checkWin() function future call
		// playSpace() function future call
	});
});



