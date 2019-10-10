console.log("Printing all the numbers between -9 and 20");
var num =-9;
while(num<20)
{
	console.log(num);
	num++;
}
console.log("Printing all the even number between 10 and 40");
var num1 = 10;
while(num1<40){
	if(num1>10 && num1%2 ==0)
		console.log(num1);
		num1+=2
}
console.log("Printing all the odd numbers between 300 and 333");
var num2 = 300;
while(num2<333){
	if(num2>300 && num2 %2 !==0)
		console.log(num2);
		num2+=1;
}
console.log("Printing all the numbers that are divisible by 5 and 3 between 5 and 50");
var num3 = 5
while(num3 < 50){
	if(num3 % 5 ==0 && num3 % 3 ==0)
		console.log(num3);
		num3++;
}
