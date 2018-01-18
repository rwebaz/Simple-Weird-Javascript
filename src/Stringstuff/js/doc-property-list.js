// Document Property List
function a() {
	"use strict";
	var domlist = document.getElementById("domlist");
	
	domlist.innerHTML = "<b>Document Properties</b>:<br />";
	
	if (document.hasOwnProperty = true) in document) {
		for (var property in document) {
		 domlist.innerHTML += property + "<br />";
	 } else {
		 console.log("property is un-defined");
		}
	}
}

a();