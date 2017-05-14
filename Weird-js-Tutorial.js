// Weird-js Tutorial
function b() {
 "use strict";
 var myVar;
 console.log(myVar);
}

function a() {
 "use strict";
 var myVar = 2;
 console.log(myVar);
 b();
}

var myVar = 1;
console.log(myVar);
a();