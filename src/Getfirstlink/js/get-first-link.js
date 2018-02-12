// Getfirstlink
/// @title Get First Link = Getfirstlink
// - A simple program written in Javascript that hunts through the DOM and returns the href of the first link inside the body element ...
// Copyright (c) 2000 - 2018 Robert Weber FBO Javascript Lessons Project
// C=> https://rwebaz.github.io/Javascript-Lessons-Project/pages/Get-First-Link.html

// "use strict";
// As of ES7 the Global use of the strict string pragma is recommended
// Declare function `gethref` w one parameter `x` as argument
/* function gethref(x){
  // Declare function variables `timein`, `timeout`, and `duration` w scope `let` to check the function's speed of execution
  let timein = new Number();
  let timeout = new Number();
  let duration = new Number();
  // Assign a value to the function variable `timein`
  timein = window.console.time("checkbodytime");
  // Declare function variable `link` w scope `let` 
  let link;
  // Assign a value to the function variable `link`
  link = document.body.getElementsByTagName(x)[0];
  duration = timeout - timein;
  window.console.log(`The function took ${timeout} less ${timein} equals ${duration} ms to find the first 'href' of the '${x}' links. The first 'href' is ${link.href} and the result in milliseconds of the duration of 'checkbodytime' is displayed below along with the entire body of the returned link. Notice how the Brackets browser auto-inserts an 'Id' for the subject link if an 'Id' for the link has not yet been assigned by the programmer.`);
  // Assign a value to the function variable `timeout` prior to the return statement
  timeout = window.console.timeEnd("checkbodytime");
  return link;
}
// Call the function passing in a parameter to feed the argument
gethref("a"); */

"use strict";
function getclass (x, y){
  let classes_red = document.body.getElementsByClassName(x);
  let classes_green = document.body.getElementsByClassName(y);
  // document.body.replaceChild(classes_red["0"].className, classes_green["0"].className);
  return {"Class Green": classes_green, "Class Green Type": typeof classes_green, "Class Red": classes_red, "Class Red Class Name": classes_red["0"].className, "Class Red Class Name Type": typeof classes_red["0"].className, "Class Red Type": typeof classes_red};
}
getclass("red-groove", "green-groove");
