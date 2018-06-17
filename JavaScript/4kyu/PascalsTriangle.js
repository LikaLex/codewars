/*
Pascal's Triangle
Wikipedia article on Pascal's Triangle: http://en.wikipedia.org/wiki/Pascal's_triangle
Write a function that, given a depth (n), returns a single-dimensional array representing Pascal's Triangle to the n-th level.
For example:
pascalsTriangle(4) == [1,1,1,1,2,1,1,3,3,1]
*/



function pascalsTriangle(n) {
  var triangle = [];
  var index = 0;
  for ( var i = 0; i < n; i++ ) {
    index = triangle.length - i;
    for ( var j = 0; j < i+1; j++ ) {
      if ( j === 0 || j === i ) {
        triangle.push(1);
      } else {
        triangle.push( pascal[ index+j ] + triangle[ index+j-1 ] );
      }
    }
  }
  return triangle;
}
