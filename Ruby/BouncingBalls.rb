#A child plays with a ball on the nth floor of a big building the height of which is known 
#float parameter "h" in meters, h > 0) .
#He lets out the ball. The ball rebounds for example to two-thirds (float parameter "bounce", 0 < bounce < 1) of its height.
#His mother looks out of a window that is 1.5 meters from the ground
#(float parameters window < h).
#How many times will the mother see the ball either falling or bouncing in front of the window
#(return a positive integer unless conditions are not fulfilled in which case return -1) ?

Note
You will admit that the ball can only be seen if the height of the rebouncing
ball is stricty greater than the window parameter.

Example:
h = 3, bounce = 0.66, window = 1.5, result is 3
h = 3, bounce = 1, window = 1.5, result is -1


def bouncingBall(h, bounce, window)
    if h <= 0 || bounce < 0 || bounce >= 1 || window >= h
      -1  
    elsif h * bounce <= window
      1
    else      
      return 2 + bouncingBall(h * bounce, bounce, window)
    end
end


#Better solution
def bouncingBall(h, bounce, window)
  bounce > 0 && bounce < 1 && window < h ? 1 + 2*Math.log(window.to_f/h,bounce).floor : -1
end
