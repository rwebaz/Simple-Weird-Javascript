// Let Functions Become Arrows

function a() {
	"use strict";
	console.log(`This is a standard named Javascript function with argument undefined.`);
}

// First, declare a global variable b
var b;

// Next, set a standard anonymous Javascript function equal to the declared global variable b, as follows:
// b = function () {} 
// Now, leapfrog the argument undefined using the keyword function and in the process ... Magically change the keyword function into the arrow function, as follows:

b = () => {
	"use strict";
	console.log(`This is a converted Javascript Arrow function with argument undefined.`);
}

// Note. If the function body {} contains a simple return statement, the curly braces may be omitted, as well
let c = function () { return "High Ya'll Once!"; }
// As follows:
let d = () => "High Ya'll Twice!";

a();
b();
c();
d();