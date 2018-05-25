/*Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3 + 5 = 8*/


function rowSumOddNumbers(n) {
	let first = Math.pow(n, 2) - (n - 1);
  let num = 0, count = 0;
  while(count < n)
  {
  if (first % 2 !== 0) 
    {
      num += first;
      count ++;
    }
    first ++;
  }
  return num;
}



//Better solutions

function rowSumOddNumbers(n) 
{
  return Math.pow(n, 3);
}


function rowSumOddNumbers(n) 
{
  return n * n * n
}
