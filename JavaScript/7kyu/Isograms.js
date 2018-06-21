/*An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram( "Dermatoglyphics" ) == true
isIsogram( "aba" ) == false
isIsogram( "moOse" ) == false // -- ignore letter case*/


function isIsogram(str)
{
  var one, another;
   str = str.toLowerCase();
   for(one = 0; one < str.length; ++one) 
   {
     for(another = one + 1; another < str.length; ++another) 
     {
       if(str[one] === str[another])
       {
         return false;
       }
     }
   }
   return true;
}
