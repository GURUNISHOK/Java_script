
var input = prompt("What would you like to do");
var toDo =["dink soda"];
while(input !== "quit")
{
	if (input === "list")
	{
		console.log(toDo);
	}
	else if(input === "new")
	{
		var newOne = prompt("Enter the new ToDo Task");
		toDo.push(newOne);
	}
	else if(input === "delete")
	{
		var newOne = prompt("Delete the Todo task which you have completed");
		toDo.pop(newOne);
	}
	var input = prompt("What would you like to do");
}
console.log("OKAY you quit the app");