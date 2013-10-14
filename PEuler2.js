//Even Fibonacci Numbers
//projecteuler.net/problem=2
//Emma Flock 
//Find the sum of all even numbers in the Fibonacci sequence whose values do not exceed 4 million.
//Solution: 4613732

//////getting the Fibonacci sequence
fibb = [1, 2];
for (var i=0; fibb[i+1]<4000000; i++) 
{
    var summation = fibb[i] + fibb[i+1];
    fibb.push(summation);
}
///removing the last element. fibb = all elements in the Fibbonacci sequence below 4 million
var endhere = fibb.length;
fibb.pop(fibb[endhere]);
//////Creating an array of all even numbers in the Fibb sequence below 4 million
even = [];

for (i=0; i<fibb.length; i++) 
{
	if (fibb[i] % 2 === 0) 
	{
		even.push(fibb[i]); 
	} 
}
//////////Summing the Fibb sequence of even numbers below 4 million: Final Answer
var sum = even.reduce(function(a, b) 
{
    return a+b;  
});

console.log(sum);
