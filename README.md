# calculator

The goal of this project was to create a simple calculator with a working UI that runs on a webpage. There was also a directive to do the math without using eval(), or new Function() to evaluate strings. 

Setting up the buttons and their triggers was time consuming but easy enough. I had originally stored all values in the display and ran into trouble when it came to calculate the result. 

I solved this by saving all the display values in an array and then using a switch statement to do the math. The clear button resets the array and the equals button stored the result for use in the next equation while also clearing the array. 

The original code could only work with three operators at a time so I went back in and created a loop that can perform multiple operations in sequence (such as 2+2+3). The solution does not work with proper pemdas order so 2+2*3 = 12 instead of 8. While not ideal it completes the requirements of the assignment, so I'm content to leave it as is for now. 


The code can definitley be cleaner but it gets the job done and in this case that's all that matters. 