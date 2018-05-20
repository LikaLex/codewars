#Say hello!
#Write a function to greet a person. Function will take name as inputand greet the person by saying hello.
#Return null/nil if input isempty string or null/nil.

Example:
greet("Niks") == "hello Niks!"
greet("") == nil; # Return nil if input is empty string
greet(nil) == nil; # Return nil if input is nil


def greet(name)
  name == "" || name == nil ? nil : "hello #{name}!"
end
