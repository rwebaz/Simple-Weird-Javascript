// Document Create Element
var p;

function a() {
	"use strict";
	document.getElementById("DomList1").ondblclick = function a1() {
		alert(this.innerHTML);
	};
	
	document.getElementById("domlist").ondblclick = function a2() {
		alert(this.innerHTML);
	};
}

function b() {
	"use strict";
	p = "HTMLParagraphElement";
	document.createElement(p);
}

a();
b();