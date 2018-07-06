#A collatz sequence, starting with a positive integern, is found by repeatedly
#applying the following function to n until n == 1 :
#collatz sequence
 n = { n / 2 for even n ;
      3n + 1 for odd n }
#A more detailed description of the collatz conjecture may be found on Wikipedia.

#Sample Input
collatz(4) # should return "4->2->1"
collatz(3) # should return "3->10->5->16->8->4->2->1"


def collatz(n)
  return "1" if n==1
  result = ["#{n}"]
  begin
    n % 2 != 0 ? n = n * 3 + 1 : n = n / 2
    result << ["#{n}"]
  end while n != 1
  result.join("->")
end
