console.log("Printing the array in a reverse order");
function printReverse(n)
{
	var m = new Array;
	for (var i = n.length - 1; i >= 0; i--) {
			m.push(n[i]);
		}	
		return m;
}
var a = [1,2,3,4,5]
var b = printReverse(a);


console.log("Whether all the elements in the array are identical");
function isUniform(n)
{
	var first = n[0];
	for( var i=1; i<n.length;i++){
		if(n[i] !== first){
			return false;
		}

	}return true;
}

console.log("Computing the sum of an array");
function sumArray(n){
	var sum=0;
	for (var i=0 ; i<=n[i];i++){
		sum=sum+n[i];
	}return sum;
}

console.log("Finding the max number in an array");
function max(arr){
	var max = arr[0];
	for(var i=1 ; i< arr.length;i++){
		if(arr[i] > max){
			max= arr[i];
		}
	}return max;
}