
#Implement the function unique_in_order which takes as argument a sequence and
#returns a list of items without any elements with the same value next to each
#other and preserving the original order of elements.
#For example:
unique_in_order('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
unique_in_order('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
unique_in_order([1,2,2,3,3])       == [1,2,3]


def unique_in_order(iterable)
  result =[]
  for i in 0..(iterable.length-1)
    result << iterable[i] if iterable[i] != iterable[i+1]
  end
  result
end

#Best solutions
def unique_in_order(iterable)
  iterable.length.times.reduce([]) do |uniqued, i| 
    uniqued.push iterable[i] unless uniqued.last == iterable[i]
    uniqued
  end
end

def unique_in_order(seq)
  (0...seq.length).reduce([]) {|a, i| seq[i] != a.last ? a << seq[i] : a }
end

