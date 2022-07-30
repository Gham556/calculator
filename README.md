# calculator

The goal of this project was to create a simple calculator with a working UI that runs on a webpage. There was also a directive to do the math without using eval(), or new Function() to evaluate strings. 

Setting up the buttons and their triggers was time consuming but easy enough. I had originally stored all values in the display and ran into trouble when it came to calculate the result. 

I solved this by saving all the display values in an array and then using a switch statement to do the math. The clear button resets the array and the equals button stored the result for use in the next equation while also clearing the array. 

This calculation can do any number of operations in sequence which I am proud of, althout by design it can only work with 3 variables at a time (so x * x + x is impossible). I plan to fix that if I ever revisit this project, but for now I'm happy with what I have accomplished in a day.

The code can definitley be cleaner but it gets the job done and in this case that's all that matters. 