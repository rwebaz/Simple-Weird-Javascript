// Domready
/// @title DOM Ready = Domready
// - A simple program written in Javascript that tests for DOM readiness and shows the current date
// Copyright (c) 2000 - 2018 Robert Weber FBO Javascript Lessons Project
// C=> https://rwebaz.github.io/Javascript-Lessons-Project/pages/DOM-Ready.html

"use strict";
// JsHint: As of ES7 the Global use of the strict string pragma is recommended

jQuery(function($) {
  var date = new Date();
  window.alert(`¡El DOM está listo! The current session between client and server has begun on ${date}`);
});
