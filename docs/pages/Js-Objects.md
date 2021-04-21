---
title: Js Objects
layout: default
excerpt: Two separate primitives with the same value and type will be declared equal as `true` in Javascript ...
hint: Objects are passed by reference only, and not by value ...
repo: Javascript-Lessons-Project
ver_date: 04-20-21
navigation_weight: 8
categories: page
---
{% include toc.md %}

## Primitives

> **Hint**. {{ page.hint }}

**Rule**. Primitives such as numbers and strings are passed as individual values.

Therefore, mixing value types inside of an object is permissable.

### Mixing Value types

For, example ...

```liquid
{% raw %}
var universa = {state: 'Florida', name: 'Florida Southern', enrollment: '10,000'};
{% endraw %}
```

In the above `universa` *Object* variable, the *key* enrollment represents a *number* value type.

Whereas, the state *key* represents a *string* value type.

### Inheritance

Because an *Object* variable is actually spawned by the built-in *Object* Class, the now `var` object universa may *call* the methods of its parent Class using *dot notation*, as follows:

```liquid
{% raw %}
universa.isCamelCase();
{% endraw %}
```

;where `isCamelCase` is an exposed function of the built-in *Object* Class.

### Properties

The *properties* of the `var` object universa may also be called with *dot notation* substituting the *value* of each property for the name of the function in the above example, as follows:

```liquid
{% raw %}
universa.enrollment;
{% endraw %}
```

;where the value of the property enrollment is returned, as follows:

```liquid
{% raw %}
10,000
{% endraw %}
```

### Function Values

When constructing your *Object* variable, mixing and matching value *types* is agreeable to the underlying Javascript interpreter.

For example, rather than a normal value of type *String*, or a numeric value of type *Number*, why not try a method value of type *Function*?

Just plug your function code into one of the placeholders of your *Object* variable, as follows:

```liquid
{% raw %}
run: function() {console.log('go fast!')}};
{% endraw %}
```

## The Code

```javascript
// Declare and initialize a constant named `num` with a value of 42
const num = 42;

// Declare and initialize a constant named `anotherNum` with a value of 42
const anotherNum = 42;
```

### Testing

```javascript
// Compare the two primitives (numbers)
// console.log(num === anotherNum);
// Returns `true`

// Compare the two primitives (strings)
// console.log(`hello there` === `hello there`);
// Returns `true`
```

## Objects

```javascript
// Rule. Objects are NOT primitives.
// Primitives cannot be assigned properties.

// Declare an object w an empty array
const obj = {};

// Declare a second object w a different name, but similar content
const anotherObj = {};
```

// Pass the pointer to the value of the `obj` to another object named `anotherObj`
// anotherObj = {obj};

### The Test B

```javascript
// Compare the two objects
// console.log(Obj === anotherObj);
// Returns `false`

// Set the value of the `a` property of the object `anotherObj` to the number 1 
anotherObj.a = 1;

// Note. Because objects are passed by reference only, and not by value ...
// Passing another object to an object as a perceived value will NOT result in a value of `true`
// Two objects when compared will always show `false`.

console.log('another obj', anotherObj);
console.log('obj', obj);
```

## Last Subtitle

More to come ...

**Note**. The above synopsis was derived from a video lecture written, produced and performed by ...

`Reed Barger`: [[1](#REEDBARGER){:.red}].

For additional reference on the topic of `Objects` see the `Mozilla Developer Network`: [[2](#MDN){:.red}]

For a working Internet development platform for Javascript `Primitives` see `Scrimba`: [[3](#SCRIMBA){:.red}]

1. {:#REEDBARGER}[Javascript: The Complete Developer, 2020](https://subscription.packtpub.com/video/web_development/9781801072847?uuid=cc36e816-6930-4834-852a-206c35a8c895){:title="Click to Review Javascript: The Complete Developer, 2020 by Reed Barger at Packt"}{:target="_blank"}

2. {:#MDN}[Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator){:title="Click to Review the Ternary Operators section of the Mozilla Developer Network"}{:target="_blank"}

3. {:#SCRIMBA}[Scrimba Javascript Developer Platform](https://www.scrimba.com){:title="Click to Review the Javascript Developer Platform at Scrimba"}{:target="_blank"}

***

{% include patreon-link.md %}
