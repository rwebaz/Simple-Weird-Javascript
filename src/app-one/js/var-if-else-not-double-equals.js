// Weird-js Tutorial: Var If Else Not Double Equals
var x;
x = "Hello There!";

function a() {
	"use strict";
	console.log("The function named 'a' has been called!");
}

function b() {
	"use strict";
	if (x !== undefined) {
		console.log("The variable 'x' is de-fined!");
	} else {
		console.log("The variable 'x' is un-de-fined!");
	}
}

a();
b();
console.log(x);
