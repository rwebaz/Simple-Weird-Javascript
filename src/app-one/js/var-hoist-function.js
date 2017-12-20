// Var Hoist Function
var x;

function b() {
	"use strict";
	var x;
	console.log(x);
}

function a() {
	"use strict";
	var x = 2;
	console.log(x);
	b();
}

x = 1;
console.log(x);
a();