// Temporary Value, replace with user input of difficulty
var rows = 3;
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

// Create Array of Moves

var spaces = [];

for (var i = 0 ; i < rows; i++) {
	spaces.push([]);
	for (var j = 0 ; j < rows; j++) {
		spaces[i].push("");
	}
}

// handle click events to turn to X

$(document).ready(function(){
	$(".empty").one("click", function(){
		$(this).append("X").removeClass("empty").addClass("full");
	});
});