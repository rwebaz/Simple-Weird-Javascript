// Strictobjects
/// @title Strict Objects = Strictobjects
// - A simple program written in Javascript that ...
// Copyright (c) 2000 - 2018 Robert Weber FBO Javascript Lessons Project
// C=> https://rwebaz.github.io/Javascript-Lessons-Project/pages/Strict-Objects.html

"use strict";
// JsHint: As of ES7 the Global use of the strict string pragma is recommended

var Machinea = function(count, size, color, tentacles, lazer) {
    this.count = count;
    this.size = size;
    this.color = color;
    this.tentacles = tentacles;
    this.lazer = lazer;

    this.hover = function() {
        let Blue = 'I can hover like a bee ..., ' + 'and, sting like one, too!';
        return Blue;
    };

    this.sting = function() {
        let Red = ' Does that hurt? ...! ';
        return Red;
    };

    this.fetchElements = function() {
        let Green = 'Reporting the citing of ' + '(' + this.count + ') ' + this.size + ' count, ' + this.color + 
        ' Machinea with ' + '(' + this.tentacles + ')' + ' tentacles each and ' + lazer + ' lazer capabilities.';
        return Green;
    };
};
var reportOne = new Machinea(100, 'large', 'black', 30, true);
console.log(reportOne);
console.log(reportOne.hover() + reportOne.sting() + reportOne.fetchElements());
