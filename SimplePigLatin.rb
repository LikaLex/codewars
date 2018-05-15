#Move the first letter of each word to the end of it, then add 'ay' to the end of the word.
#Example
pig_it('Pig latin is cool') # igPay atinlay siay oolcay

def pig_it text
  text.split(" ").map {|x| x =~ /[a-zA-Z]/ ? x = x[1..x.length] + x[0] + "ay" : x}.join(" ")
end

#Better solutions

def pig_it text
  text.gsub(/(\w)(\w+)*/, '\2\1ay')
end

def pig_it text
  text.split.map{|word| word =~ /\w/ ? "#{word[1..-1]}#{word[0]}ay" : word}.join(" ")
end
