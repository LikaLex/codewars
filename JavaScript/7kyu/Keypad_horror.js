/*Having two standards for a keypad layout is inconvenient!
Computer keypad's layout:
7 8 9  \n
4 5 6  \n
1 2 3  \n
  0 \n

Cell phone keypad's layout:
1 2 3\n 
4 5 6\n  
7 8 9\n  
  0\n

Solve the horror of unstandartized keypads by providing a function that converts computer input to a number as if it was typed by a phone.

Example:
"789" -> "123"

Notes:
You get a string with numbers only*/

function computerToPhone(numbers){
  var string = '';
  for(var i = 0; i < numbers.length; i++) {
    var number = Number(numbers[i]);
    if (number >= 4 && number <= 6 || number === 0)
      string += number;
    else if (number < 4)
      string += number + 6;
    else 
      string += number - 6;
  }

  return string;
}
