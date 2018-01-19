// Squareit
/// @title Square It = Squareit
// - A simple program written in Javascript that ...
// Copyright (c) 2000 - 2018 Robert Weber FBO Javascript Lessons Project
// C=> https://rwebaz.github.io/Javascript-Lessons-Project/pages/Square-It.html

"use strict";
// JsHint: As of ES7 the Global use of the strict string pragma is recommended

//Declare and assign the arrow function to accept one argument
let SQ = (nbr) => {
  //Set the input variable locally within the function
  var nbr = prompt("Please enter an integer ...")
  /* where nbr = any whole integer */
  //Assign the calculation to a local variable
  var sq = nbr * nbr;
  /* where sq = square of the number */
  //Alert the result to the end-user
  window.alert("The square of the number " + nbr + " given is " + sq);
  //Return and archive the result at the console
  return("The square of the input " + nbr + " = " + sq);
};

//Declare the global timer
var programTimer; {
console.log("We shall now select ( cntrl-a ), copy ( cntrl-c ), and paste ( cntrl-v ) the entire 'Square It' program code into the Firefox - Web console, and hit Enter ... ");
console.time(programTimer,"Square It Time");
//The execution command for the SQ function
SQ();
/* Notice the open argument accepts the prompt nbr */
console.log("The time for the end-user and machine to execute this program is = ");
console.timeEnd(programTimer,"Square It Time");
};
