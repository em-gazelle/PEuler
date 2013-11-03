//Sum Square Difference
//projecteuler.net/problem6
//Emma Flock 
//Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
//Solution: 25164150

var sum =0;
var sq=0;
	for (var k=1; k<=100; k++) 
	{
    	//Sum of Squares: we first square all numbers
    	var currsq = Math.pow(k,2);
    	//Sum of Squares: ...and then we add all the squares
    	var sq=sq+currsq;
    	//Square of Sums: we first add all the natural numbers
    	var sum=sum+k;
	}
//Square of Sums: we now take the sum and square it
var sqsum = Math.pow(sum,2);

//finished: final step. Finding the difference
var diff = sqsum-sq;
console.log(diff);