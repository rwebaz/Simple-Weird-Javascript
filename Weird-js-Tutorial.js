// Weird-js Tutorial
var c;
c = "Hello There!";

function a() {
 "use strict";
 console.log("The function named 'a' has been called!");
}

function b() {
 "use strict";
 if (c === undefined) {
  console.log("The variable 'c' is un-de-fined!");
 } else {
  console.log("The variable 'c' is de-fined!");
 }
}

a();
b();
console.log(c);