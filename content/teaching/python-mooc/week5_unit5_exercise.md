---
title: "Week 5 Unit 5: Exercise"
language: "en"
published: true
tags: ["FH Aachen", "Thesis"]
---

The stopping distance of a car can be calculated using the following [rule of thumb](https://en.wikipedia.org/wiki/Braking_distance#Rules_of_thumb):

+ The stopping distance of the car is the sum of the reaction path and the brake distance
+ The reaction path depends on the speed. It can be calculated by the following rule of thumb: The reaction path in meter is equal to the speed in km/h times 3/10. - Example: Speed 50km/h �> reaction path 15m
+ The brake distance depends as well on the speed. Again there is a rule of thumb which is: brake distance in m is equal to the speed in km/h divided by 10, the result has to be taken by the power of 2 - Example: Speed 50km/h �> (50 / 10)**2 = 25m
+ The stopping distance for a car with a speed of 50km/h is 15m + 25m = 40m


### Implement the following functions to calculate the stopping distance

+ function ```reaction_path()``` which gets the speed in km/h as input, calculates the reaction path according to the above rule of thumb and returns the path in m
+ function ```brake_distance()``` which gets the speed in km/h as input, calculates the brake distance according to the above rule of thumb and returns the distance in m
+ function ```stopping_distance()``` which gets the speed in km/h as input, calls the above functions, adds their return values and returns this sum

Get a speed in km/h as input and output the stopping distance in m.

---

[< Previous unit](/teaching/python-mooc/week5_unit5_selftest) | [Next unit >](/teaching/python-mooc/week5_unit6_methods_vs_functions) |
[Course Overview](/teaching/python-mooc)