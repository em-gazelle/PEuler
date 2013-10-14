//Multiples of 3 and 5
//projecteuler.net/problem1
//Emma Flock 
//Find the sum of all multiples of 3 and 5 below 1000
//Solution: 233168


//finding all multiples of 3 and 5, below 1000
var everything = [];

for (i=1; i<1000; i++) 
{
	if (i%3===0 || i%5===0) 
    {
   		everything.push(i);
    }   
}

//summing all values in the array. final step
var sum = everything.reduce(function(a, b) 
{
	return a+b;  
});

 
console.log(sum);



