console.log("This is a boolean operation which describes whether the entered number is truely even or it is a false value");
function isEven(num){
	if (num % 2==0)
		return true;
    else
    	return false;
}

console.log("This is a function in order to write a factorial of a number");
function factorial(x)
{
	var result = 1;
	for(var i=2;i<=x;i++)
	{
     result=result*i;
 	}
     return result;
}

console.log("This is a function to manipulate the string");
function kebabToSnake(str){
   var newstr = str.replace(/-/g, "_");
    return newstr;
}