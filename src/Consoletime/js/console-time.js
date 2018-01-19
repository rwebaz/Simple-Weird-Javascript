// Consoletime
/// @title Console Time = Consoletime
// - A simple program written in Javascript that ...
// Copyright (c) 2000 - 2018 Robert Weber FBO Javascript Lessons Project
// C=> https://rwebaz.github.io/Javascript-Lessons-Project/pages/Console-Time.html

"use strict";
// As of ES7 the Global use of the strict string pragma is recommended

console.time("checkpi");
// Declare three variables
var pia = 3.14159265359;
var pib = 3.14159265359;
var pic = "3.14159265359";
// An IFFE
(function(){
  var test = (pia === pib);
}());
console.timeEnd("checkpi");
