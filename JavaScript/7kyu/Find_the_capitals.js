/*Write a function that takes a single (`word`) as argument. The function must
return an ordered list containing the indexes of all capital letters in the string.
 
 Example
Test.assertSimilar(capitals('CodEWaRs'), [0, 3, 4, 6]);*/


function capitals2(word) {
  var capitalLocations = [];
  for (var i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() == word[i])
      capitalLocations.push(i);
  }

  return capitalLocations;
};
