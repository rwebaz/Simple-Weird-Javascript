---
title: Js Maps
layout: default
excerpt: A map in Javascript is a list of key-value pairs of any type or combination ...
version: Page Template md Dtd 02-10-18
navigation_weight: 3
categories: map
---
# {{ page.title }}

{{ page.excerpt }}

{% include toc.md %}

## Instantiation

For a given map named `spanglish`, first instantiate the map with the new Map() constructor, as follows:

```javascript
{% raw %}
let spanglish = new Map();
{% endraw %}
```

### Coercement

Javascript *object* properties when used as the *key* in a **key-value** pair are normally coerced into a *String* by the Javascript engine.

Not so when using a Javascript map in ES6 [[2](#ES6){:.red}].

Either the *key* or the *value* can be of any type.

So, the *key* of a **key-value** pair can be a *String*.

And, the *value* of a **key-value** pair can also be a *String*, as well.

## Interface Methods

More to come ...

### Set Key - Value

Items are added to a Javascript map by use of the Interface *set* method, as follows:

```javascript
{% raw %}
spanglish.set("blackberry", "zarzamora");
spanglish.set("raspberry", "frambuesa");
spanglish.set(x, y);
{% endraw %}
```

### Has Key

The *has* Interface method allows the programmer to first check to see if indeed a certain *key* does exist within the map prior to invoking the *get* method.

Let's first check for the *key*.

And, if the exact *key* does indeed exist within the map, then we can *get* its value counterpart, as follows:

```javascript
{% raw %}
return console.log(`Does the key of "blackberry" exist? ➡️
Answer: ${spanglish.has("blackberry")}`);
{% endraw %}
```

**Note**. The method *has* returns a simple boolean `true` or `false` value.

If the boolean value returned by the *has* method is `true`, then we can proceed with the `get` operation.

If not, we can `return` a message to the console.

### Get Value

The *get* Interface method allows the programmer to retrieve the value of an item from a Javascript map if indeed the map houses an exact *key* to that value.

For example, "blackberry" is the English *key* while *zarzamora* is the Spanish equivalent *value*.

Assuming that the value returned by the *has* method is `true`, how do we then execute a `get` statement?

As follows,

```javascript
{% raw %}
return console.log(`The term "blackberry" in English refers to the word ➡️
"${spanglish.get("blackberry")}" in Spanish.`);
{% endraw %}
```

## Programmatically Speaking

Putting it all together, we get the following Javascript program ...

```javascript
{% raw %}
"use strict";
// JsHint: As of ES7 the Global use of the strict string pragma is recommended
function eightball(x, y) {
  // Instantiate the map
  let spanglish = new Map();
  // Set the key - value pairs
  spanglish.set("blackberry", "zarzamora");
  spanglish.set("raspberry", "frambuesa");
  spanglish.set(x, y);
  // Set the conditionals for the `has` method
  
  /* if (spanglish.has("blackberry")) {
    return window.console.log(`Does the key of "blackberry" exist? ➡️
    Answer: ${spanglish.has("blackberry")}. ➡️
    The term "blackberry" in English refers to the word ➡️
    "${spanglish.get("blackberry")}" in Spanish.`);
  }
  else {
    return window.console.log(`The answer to your question of whether or not ➡️
    the key of "blackberry" exists within the resident map reveals ${spanglish.has("blackberry")}.`);
  } */

  /* if (spanglish.has("raspberry")) {
    return window.console.log(`Does the key of "raspberry" exist? ➡️
    Answer: ${spanglish.has("raspberry")}. ➡️
    The term "raspberry" in English refers to the word ➡️
    "${spanglish.get("raspberry")}" in Spanish.`);
  }
  else {
    return window.console.log(`The answer to your question of whether or not ➡️
    the key of "raspberry" exists within the resident map reveals ${spanglish.has("raspberry")}.`);
  } */

  if (spanglish.has("apple")) {
    return window.console.log(`Does the key of "apple" exist? ➡️
    Answer: ${spanglish.has("apple")}. ➡️
    The term "apple" in English refers to the word ➡️
    "${spanglish.get("apple")}" in Spanish.`);
  }
  else {
    return window.console.log(`The answer to your question of whether or not ➡️
    the key of "apple" exists within the resident map reveals ${spanglish.has("apple")}.`);
  }
}
eightball("apple", "manzana");
{% endraw %}
```

**Note**. Copy and paste the above code into the console prompt of your Chrome browser window and then execute the function by hitting the enter key while the Chrome Developer Toolset, or [CDT](https://){:title='Chrome Developer Toolset'}{:target='_blank'} is open.

## Last Subtitle

Place the introducing line of text ie.) the 'tagline' here ...

```liquid
{% raw %}
Place code here
{% endraw %}
```

{% include brackets-ide.md %}

{% include sources-and-uses.md %}

1. {:#ES6}[Understanding ECMAScript 6](https://leanpub.com/understandinges6/read/){:title="Click to Visit the Understanding ECMAScript 6 page of Lean Pub dot com"}{:target="_blank"}. Published by © 2017 [Leanpub.com](https://www.leanpub.com/){:title="Click to Visit the Home page of Lean Pub dot com"}{:target="_blank"}.

### External Sources

- The [Brackets IDE](https://brackets.io/){:title="Click to download the Brackets IDE"}{:target="_blank"}. Published by © 2017 [Brackets.io](https://brackets.io/){:title="Click to Visit the Home page of the Brackets IDE project"}{:target="_blank"}.

- The [Project Source Links](https://mminail.github.io/Javascript/Source-Javascript-Links.htm){:title="Click to Visit the Source Links page of the Javascript Lessons Project at GitHub pages"}{:target="_blank"} page of the Javascript Lessons Project. Published by © 2017 - 2018 [Mminail.github.io](https://mminail.github.io/){:title="Click to Visit the Concept Library of the Medical Marijuana Initiative of North America - International Limited, an Arizona Benefit Corporation"}{:target="_blank"}.

**Note**. This page crafted with {{ page.version }}.
