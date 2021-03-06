//Write a function that takes an (unsigned) integer as input, and returns the number of bits that are equal to one in the binary representation of that number.

//Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case




var countBits = function(n) 
{
  var count = 0;
  while(n > 0)
  {
    if(n%2 === 1) 
    {
      count++;
    }
    n = Math.floor(n/2);
  }
  return count;
};



//Another solution

var countBits = function(n) {
  n = n.toString(2).replace(/0/g, '')
  let count = 0
  for (let i = 0; i < n.length; i++)
  {
    count += parseInt(n[i])
  }
  return count
  };

