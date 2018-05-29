/*The drawing below gives an idea of how to cut a given "true" rectangle into squares 
("true" rectangle meaning that the two dimensions are different).

1 1 1 2 2
1 1 1 2 2 
1 1 1 3 4 
(number = color)

Can you translate this drawing into an algorithm?

You will be given two dimensions

a positive integer length (parameter named lng)
a positive integer width (parameter named wdth)
You will return an array or a string (depending on the language; 
Shell bash and Fortran return a string) with the size of each of the squares.

  sqInRect(5, 3) should return [3, 2, 1, 1]
  sqInRect(3, 5) should return [3, 2, 1, 1]*/
  
  
  
  
function sqInRect(lng, wdth)
{
  var array=[];
  if(lng===wdth)
  {return null;}
  if(wdth>lng)
  {
    var mid=wdth;
    wdth=lng;
    lng=mid;
  }
  while(lng>0 && wdth>0)
  {
    array.push(wdth);
    var m=lng;
    lng=(lng-wdth) >=wdth ? (lng-wdth) : wdth;
    wdth=lng===wdth ? (m-wdth) : wdth;
  }
  return array;
}
  
 
 
