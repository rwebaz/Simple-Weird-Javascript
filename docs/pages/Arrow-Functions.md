---
title: Arrow Functions
layout: default
navigation_weight: 2
---
# Arrow Functions

{{ site.tagline }}

{% include toc-flammarion.md %}

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

## Final Subtitle

{% include sources-and-uses.md %}

### External Sources

- The [Project Source Links](https://mminail.github.io/Javascrpt/Source-Javascrpt-Links.htm){:title="Click to Visit the Source Links page of the Javascrpt Lessons Project at GitHub pages"}{:target="_blank"} page of the Javascrpt Lessons Project. Published by © 2017 [Mminail.github.io](https://mminail.github.io/){:title="Click to Visit the Concept Library of the Medical Marijuana Initiative of North America - International Limited, an Arizona Benefit Corporation"}{:target="_blank"}.
