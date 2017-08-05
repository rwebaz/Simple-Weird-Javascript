---
title: Arrow Functions
layout: default
navigation_weight: 9
---
# Arrow Functions

Place the introducing line of text ie.) the 'tagline' here ...

## Table O Contents

- TOC
{:toc}

## Let Functions Become Arrows

A standard named function in Javascript looks like this ...

```Javascript
function a() {
  "use strict";
  console.log(`This is a standard named Javascript function with argument undefined.`);
}
```

Here, the variable a is declared simultaneous with the function statement and becomes a representative of the function.

## How to change a standard function in Javascript into an Arrow function

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

## Raw Code

More to come ...

```liquid
{% raw %}
`...`
{% endraw %}
```

***

**Source**: [Project Source Links](https://rwebaz.github.io/Zazzle-Hempaz-Project/pages/Source-Links.html){:target="_self"). Published by © 2017 [Mminail.github.io](https://mminail.github.io/){:target="_blank"}.