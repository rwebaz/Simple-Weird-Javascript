// Eightballspanglish
/// @title Eightball Spanglish = Eightballspanglish
// - A simple program written in Javascript that traverses a map of English terms and Spanish translations ...
// Copyright (c) 2000 - 2018 Robert Weber FBO Javascript Lessons Project
// C=> https://rwebaz.github.io/Javascript-Lessons-Project/pages/Js-Maps.html

"use strict";
// JsHint: As of ES7 the Global use of the strict string pragma is recommended
function eightball(x, y) {
  // Instantiate the map
  let spanglish = new Map();
  // Set the key - value pairs
  spanglish.set("blackberry", "zarzamora");
  spanglish.set("raspberry", "frambuesa");
  spanglish.set(x, y);
  // Set the conditionals for the `has` method
  
  /* if (spanglish.has("blackberry")) {
    return window.console.log(`Does the key of "blackberry" exist? Answer: ${spanglish.has("blackberry")}. The term "blackberry" in English refers to the word "${spanglish.get("blackberry")}" in Spanish.`);
  }
  else {
    return window.console.log(`The answer to your question of whether or not the key of "blackberry" exist within the resident map reveals ${spanglish.has("blackberry")}.`);
  } */
  
  /* if (spanglish.has("raspberry")) {
    return window.console.log(`Does the key of "raspberry" exist? Answer: ${spanglish.has("raspberry")}. The term "raspberry" in English refers to the word "${spanglish.get("raspberry")}" in Spanish.`);
  }
  else {
    return window.console.log(`The answer to your question of whether or not the key of "raspberry" exist within the resident map reveals ${spanglish.has("raspberry")}.`);
  } */
  
  if (spanglish.has("apple")) {
    return window.console.log(`Does the key of "apple" exist? Answer: ${spanglish.has("apple")}. The term "apple" in English refers to the word "${spanglish.get("apple")}" in Spanish.`);
  }
  else {
    return window.console.log(`The answer to your question of whether or not the key of "apple" exist within the resident map reveals ${spanglish.has("apple")}.`);
  } 
}
eightball("apple", "manzana");
