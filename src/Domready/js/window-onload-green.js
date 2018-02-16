// Windowonloadgreen
/// @title Window Onload Green = Windowonloadgreen
// - A simple program written in Javascript that tests for full Window readiness
// Copyright (c) 2000 - 2018 Robert Weber FBO Javascript Lessons Project
// C=> https://rwebaz.github.io/Javascript-Lessons-Project/pages/DOM-Ready.html

"use strict";
// JsHint: As of ES7 the Global use of the strict string pragma is recommended

// Set the Window Load event AFTER the Document Ready event

// Execute the Javascript function ano AFTER receiving an onload message from the Window
function ano() {
  // Color the innnerHtml of the id button_one with a green border
  // var colorButtonOne = document.getElementById('button_one').addClass('green-groove');
} // Call the function
window.onload = ano;
