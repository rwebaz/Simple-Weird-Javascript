// Console Time
"use strict";
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
