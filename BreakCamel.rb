
#Complete the solution so that the function will break up camel casing, using a space between words.
#Example:
solution('camelCasing') # => should return 'camel Casing'



def solution(string)
  result = ""
  string.split(//).each {|x| x == x.upcase ? result += " " + x : result += x}
  result
end
