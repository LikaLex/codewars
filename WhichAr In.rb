
#Given two arrays of strings a1 and a2 return a sorted array r in lexicographical
#order of the strings of a1 which are substrings of strings of a2.
Example 1:
a1 = ["arp", "live", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns ["arp", "live", "strong"]
Example 2:
a1 = ["tarp", "mice", "bull"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns []


def in_array(array1, array2)
  array1.select { |i| i if array2.to_s.index(i) }.sort
end


#Best solutions

def in_array(array1, array2)
  array1.select { |s| array2.any? { |s2| s2.include? s }}.sort
end

def in_array(array1, array2)
  array1.select { |word| array2.join =~ /#{word}/ }.sort
end
