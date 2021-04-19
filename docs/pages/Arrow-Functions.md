---
title: Arrow Functions
layout: default
excerpt: A concise way to template functions ...
hint: Watch the `this` keyword ...
repo: Javascript-Lessons-Project
ver_date: 04-18-21
navigation_weight: 8
categories: page
---
{% include toc.md %}

## Function Statements

> **Hint**. {{ page.hint }}

**Note**. The fat arrow `=>` became the new symbol of Javascript functions with the release of `ES6`.

A standard function with a name in Javascript looks like this ...

```javascript
function a(x) {
  x = "This is a standard Javascript function with a name."
  return x;
}
console.log(`${x}`);
a();
```

Here, the `a` in the formula represents a label corresponding to the name of the function.

;where the variable placeholder `x` is coerced to the type `string`.

**Note**. A standard function without a name in Javascript is called an `anonymous` function.

### Function Properties

The function `a` above takes one argument named `x` of which is inferred to be a `string`.

**Note**. Declaration of the `x` variable occurs at the point of the declaration of function `a`.

### Function Methods

After declaring and initializing the property `x`, the next line in the function executes the `log` method of the Object `console`, itself inheriting from its parent Object `window`.

### Execution

After the closing brace `}` of the function `a`, the code block then passes command back to the program.

The program then "calls" the `a` function to task from outside the boundaries of the code block.

### Result

You may check the result of the program by ...

1. Copying and pasting the code into the `source`, `snippets` feature of the Chrome browser development tools,

1. By right-clicking and saving the program as `simple-func.js`, and

1. Then, by executing the program through the pressing of the `cmd` + `enter` keys of your development machine keyboard.

After the program executes, the result of the method `log` can be seen inside the Javascript console window, as follows:

```Javascript
This is a standard Javascript function with a name.
undefined
```

The program returns the String of `x` first, and secondly the type `undefined`.

As the type of variable `x` was inferred by the structure of its initializing, its type remains `undefined`.

## Let Functions Become Arrows

More to come ...

### How to change a standard function in Javascript into an Arrow function

- **Rule.** Leap frog the argument undefined `()` from left-to-right with the keyword `function` and in the process change the keyword `function` into the new Arrow function `=>`, as follows:

First, declare a global variable `b` ...

```Javascript
var b;
```

Next, set a standard anonymous Javascript function equal to the declared global variable `b`, as follows:

```Javascript
b = function () {}
```

Now, leapfrog the argument undefined `()` from left-to-right with the keyword `function`...

And, in the process ...

Magically change the keyword `function` into an Arrow function `=>`, as follows:

```Javascript
b = () => {
  "use strict";
  console.log(`This is a converted Javascript Arrow function with argument undefined.`);
}
```

**Note.** If the function body {...} contains a simple `return` statement only, then the set of curly braces {...} may be omitted, as well.

```Javascript
let c = function () { return "High Ya'll Once!"; }
```

As follows:

```Javascript
let d = () => "High Ya'll Twice!";
```

To execute any or all of the above functions:

Simply *copy and paste* the function into your browser `console`, and type one of the following execution commands:

```Javascript
a();
b();
c();
d();
```

**Note.** The act of first *copying the function* to your browser `console` will return `undefined`.

However, when you subsequently *enter* the respective execution command for the function into the `console` ...

And, then *press the Enter key* ...

The `result` of the function will then appear in the `console`.

## IFEE Functions

**Rule**. All arrow functions are anonymous functions.

An anonymous function that calls itself *internally* from outside its braces `{...}`, but also from within its self-contained enclosing set of parenthesis `(...)` is called an ..., or `IFEE`.

## Higher Order Functions

```javascript
// Declare an `object` named `user` ...
// Set the value of `user` to `key - value` pairs
const user = {
  name: "john",
  date_joined: 'May 12th, 2013'
}
```

### The Algorithmic Steps B

```javascript
// Task. Create a function to capitalize the first letter of the `attributes` of `property` name.
// Set the function to a constant `capitalize`
// The function may now be `called` w `capitalize`
// const capitalize = function (name) {
  // return the finished product of the function
  // return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
  // End of function
// }
```

## Conversion

How to transfer the above `main` function from standard format to arrow format?

### Algorithmic Steps  

```javascript
// Remove the `function` keyword from the formula.
// Insert the fat arrow `=>` between the declared function attribute(s), and
// The first curly brace.
// Note. Because there exists simply one parameter declared as an attribute ...
// Then, the set of parenthesis surrounding the parameter `name` may also be dropped.
// The set of curly braces enveloping the body of the function may be dropped, as well.
// Further, because an `Arrow Function` implicitly calls a `return` statement ...
// No explicit `return` keyword is required, either!
```

### The Code B

```javascript
const capitalize = name => 
  // implicitly return the finished product of the function
  `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
  // End of Arrow function
console.log(capitalize('roberto'))
```

## Higher Order

**Note**. All callback functions are `Higher Order` functions

### The Code C

```javascript
function greetUser(name, callback) {
  return callback(capitalize(name));
}
```

### The Algorithmic Steps

```javascript
// Remember from above ...
// Insert the fat arrow `=>` between the declared function attribute(s), and
// The first curly brace.
// const result = greetUser(user.name, (name) => {
  // `Hi there, ${name}`;
// });

// console.log(result);
```

### The Code D

```javascript
const result = greetUser(user.name, name => `Hi there, ${name}`);
console.log(result)
```

## Last Subtitle

More to come ...

**Note**. The above synopsis was derived from a video lecture written, produced and performed by ...

`Reed Barger`: [[1](#REEDBARGER){:.red}].

For additional reference on the topic of `Ternary Operators` see the `Mozilla Developer Network`: [[2](#MDN){:.red}]

For a working Internet development platform for Javascript `Closures` see `Scrimba`: [[3](#SCRIMBA){:.red}]

1. {:#REEDBARGER}[Javascript: The Complete Developer, 2020](https://subscription.packtpub.com/video/web_development/9781801072847?uuid=cc36e816-6930-4834-852a-206c35a8c895){:title="Click to Review Javascript: The Complete Developer, 2020 by Reed Barger at Packt"}{:target="_blank"}

2. {:#MDN}[Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator){:title="Click to Review the Ternary Operators section of the Mozilla Developer Network"}{:target="_blank"}

3. {:#SCRIMBA}[Scrimba Javascript Developer Platform](https://www.scrimba.com){:title="Click to Review the Javascript Developer Platform at Scrimba"}{:target="_blank"}

***

{% include patreon-link.md %}
