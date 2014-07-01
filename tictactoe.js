// Temporary Value, replace with user input of difficulty
var rows = 3;

// Set up the blank table
$(document).ready(function() {
	for (var i = 0; i < rows; i++) {
		$("table").append("<tr></tr>");
		console.log(rows);
	};
	for (var i = 0; i < rows; i++) {
		$("tr").append("<td></td>");
	};

});

// Create Array of Moves

var spaces = []

for (var i = 0 ; i < rows; i++) {
	spaces.push([]);
	for (var j = 0 ; j < rows; j++) {
		spaces[i].push("");
		console.log(i);
	};
};

console.log(spaces);
console.log(spaces[0][1])