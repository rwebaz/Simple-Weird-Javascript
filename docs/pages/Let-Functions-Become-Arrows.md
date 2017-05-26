---
title: Arrow Functions | SWJP
layout: default
navigation_weight: 2
---
# Let Functions Become Arrows

A standard named function in Javascript looks like this ...

```Javascript
function a() {
  "use strict";
  console.log(`This is a standard named Javascript function with argument undefined.`);
}
```

Here, the variable a is declared simultaneous with the function statement and becomes a representative of the function.

## How to translate a standard function in Javascript to an Arrow function

- **Rule.** Leap frog the argument undefined with the keyword function and in the process change the keyword function into the new arrow function, as follows:

- First, declare a global variable b

```Javascript
var b;
```

Next, set a standard anonymous Javascript function equal to the declared global variable b, as follows:

```Javascript
b = function () {}
```

Now, leapfrog the argument undefined using the keyword function and in the process ... Magically change the keyword function into the arrow function, as follows:

```Javascript
b = () => {
  "use strict";
  console.log(`This is a converted Javascript Arrow function with argument undefined.`);
}
```

Note. If the function body {...} contains a simple return statement only, then curly braces may be omitted, as well.

```Javascript
let c = function () { return "High Ya'll Once!"; }
```

As follows:

```Javascript
let d = () => "High Ya'll Twice!";
```

To execute any or all of the above functions ...

Simply copy and paste the function into your browser console, and type one of the following commands:

```Javascript
a();
b();
c();
d();
```

**Note.** The act of first copying the function to your browser console will return undefined. However, when you secondly enter the respective execution command for the function and hit enter, the result of the function will appear in the console.