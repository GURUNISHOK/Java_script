var name = prompt("Are we there yet");

while(name !== "yes" && name !=="yeah"){
	var name = prompt("Are we there yet");
}
alert("successful man");

alert("Using an indexOf");
var name1 = prompt("Are we there yet");
while(name1.indexOf("yes") == 1){
	var name = prompt("Are we there yet");
}
alert("successgful man");