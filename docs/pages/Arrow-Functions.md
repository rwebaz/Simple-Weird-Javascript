---
title: Arrow Functions
layout: default
navigation_weight: 2
---
# Arrow Functions

The fat arrow `=>` became the new symbol of **Javascript Functions** with the release of **ES6**.

{% include toc-flammarion.md %}

## Function Statements

A standard function with a name in Javascript looks like this ...

```Javascript
"use strict";
function a(x) {
  x = "This is a standard Javascript function with a name."
  console.log(`${x}`);
}
a();
```

Here, the variable `a` is declared as the *name* of the function from within the **function statement**.

### Function Properties

The function `a` takes one argument named `x` of which the parameter type of the argument is inferred to be a `String` by nature of its subsequent initialization.

**Note**. The variable `x` is declared from within the **function statement**, as well.

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

An anonymous function that calls itself *internally* from outside its braces `{...}`, but also from within its self-contained enclosing set of parenthesis `(...)` is called an ..., or **IFEE**.

## Final Subtitle

More to come ...

```Javascript
Enjoy the view!
```

{% include brackets-ide.md %}

{% include sources-and-uses.md %}

### External Sources

- The [Project Source Links](https://mminail.github.io/Javascrpt/Source-Javascrpt-Links.htm){:title="Click to Visit the Source Links page of the Javascript Lessons Project at GitHub pages"}{:target="_blank"} page of the Javascript Lessons Project. Published by © 2017 [Mminail.github.io](https://mminail.github.io/){:title="Click to Visit the Concept Library of the Medical Marijuana Initiative of North America - International Limited, an Arizona Benefit Corporation"}{:target="_blank"}.
