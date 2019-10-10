alert("Guess the number between 1-10");
var num = prompt("Guess the number man");
if (num>0 && num<6)
alert("The number you guessed is too low");
else if (num>6 && num<10)
alert(" The number you guessed is too high");
else if(num == 6)
alert("Congrats man!!! You got the number coorect");