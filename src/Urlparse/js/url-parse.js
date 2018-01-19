// Urlparse
/// @title URL Parse = Urlparse
// - A simple program written in Javascript that tests for DOM readiness
// Copyright (c) 2000 - 2018 Robert Weber FBO Javascript Lessons Project
// C=> https://rwebaz.github.io/Javascript-Lessons-Project/pages/URL-Parse.html

"use strict";
// JsHint: As of ES7 the Global use of the strict string pragma is recommended

jQuery(function($) {
    window.alert(`¡El DOM está listo!`);
});
//Declare a No Conflict method
var jKey = jQuery.noConflict();
//Declare a new jKey function
jKey(function($) {
    var longurl = 'http://tutorialzine.com/books/jquery-trickshots?trick=12#comments';
    var a = $('<a>',{ href: longurl });
    window.alert('Host name: ' + a.prop('hostname'));
    window.alert('Path: ' + a.prop('pathname'));
    window.alert('Query: ' + a.prop('search'));
    window.alert('Protocol: ' + a.prop('protocol'));
    window.alert('Hash: ' + a.prop('hash'));
});
