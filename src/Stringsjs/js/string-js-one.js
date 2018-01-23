// Stringjsone
/// @title String Js One = Stringjsone
// - A simple program written in Javascript that takes advantage of the Node.js™ Server program.
// Copyright (c) 2000 - 2018 Robert Weber FBO Javascript Lessons Project
// C=> https://rwebaz.github.io/Javascript-Lessons-Project/pages/Js-Strings.html

// Note. As of ES7 the Global use of the strict string pragma is recommended
"use strict";

/* Function One: How to construct a String function that returns a value
    - where the only operation of the underlying function is to assign a value to the String variable */

/* Step One: Declare a new variable of type Function ...
    - where `z` is the name, and
    - where the function accepts only one (1) argument */

/* Step Two: Declare a new variable of type String ...
    - where `var1one` is the name, and
    - where the parameter of the only argument of function `y` is the variable `var1one` */

function z(var1one) {
  /* Step Three: Assign a value to the variable `var1one`
      - where the string `string-theory` is the value */
  var1one = "string-theory";
  /* Step Four: Return the value of the variable `var1one` to the Javascrpt console
      - where the `return` keyword holds the pointer to the result of the operation of the function */
  return var1one;
}

/* Step Five: Call the function from outside the code block using the recursive method of function `z`
    - where the existing value of the String variable is passed to the Javascript console 
z(); */

/* Step Six: Call the function from outside the code block using the log method of the Object console
    - where a new value may be passed through to replace the current value of the String variable 
console.log(z("number-theory")); */

/* Step Seven: Call the function from outside the code block using the recursive method of function `y`
    - where a new value may be passed through to replace the current value of the String variable */
z("number-theory");
