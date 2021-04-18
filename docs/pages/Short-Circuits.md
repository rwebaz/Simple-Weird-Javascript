---
title: Short Circuits
layout: default
excerpt: Conditional `Short Circuits` in Javascript are effected by the `AND` and `OR` operators
hint: Collect the data from the enduser ...
repo: Javascript-Lessons-Project
ver_date: 04-17-21
navigation_weight: 8
categories: page
---
{% include toc.md %}

## The `OR` operator

> **Hint**. {{ page.hint }}

### The Code Part A

```javascript
// Collect the data from the enduser
const response = prompt("What is your name?")
```

// Declare a mutable variable
let username1;

// Set up an `if - else` statement
if (response) {
  username1 = response;
} else {
  username1 = "guest";
}

// Return the appropriate response to the console
console.log(username1)

// Return the appropriate response to the screen
alert(username1)

## The `OR` statement

### The Code Part B

```javascript
// Task. Convert the above `if - else` statement to an `OR` statement
const username2 = response || "guest";

// Return the appropriate response to the console
console.log(username2)

// Return the appropriate response to the screen
alert(username2)

// ------------------------------------------------------------------------
// Note. Both of the alternative operations above ...
// Will return the exact same responses in succession.
// ------------------------------------------------------------------------
```

### The Algorithmic Steps of `OR`

```javascript
// ------------------------------------------------------------------------
// The Algorithmic Steps
// ------------------------------------------------------------------------

// Go to the `file explorer` of your development machine

// Find your js `app` file in the appropriately stored folder

// Double click on the accompanying html `index` file

// Your default browser window opens, the subject js `app` is executed

// ------------------------------------------------------------------------
// Note. The subject js `app` can now be executed ...
// Upon any changes to the underlying code ...
// Via the refresh feature of your browser window.
// ------------------------------------------------------------------------

// Next, the window prompts the enduser for a name entry via the `prompt` feature

// The user's response or lack thereof is stored in the constant `response`

// The enduser either enters a name, or leaves the prompt feature empty

// The variable `username1` is declared in a `let` statement

// A standard `if - else` statement tucks the enduser's response into the `username1` variable ...

// By setting the result received from the constant variable `response` to the variable `username1`.

// Finally, the console returns and confirms the contents of the variable `username1` via the `console` and `alert` window features.

// ------------------------------------------------------------------------
// Conversion
// ------------------------------------------------------------------------

// Convert the subject `if - else` statement to an `OR` statement

// Use the `shift backslash` key to create an `OR` relationship, as follows:

// entry-A `||` "entry-B"

// ;where the first entry or `operand` is either set or coerced by Javascript into a truthy value ie.) a valid string ...

// And, then read, stored, and returned.

// ------------------------------------------------------------------------
// Note. In this case the console returns `Roberto`.
// ------------------------------------------------------------------------

// Or,

// ;where if the first entry or `operand` cannot be coerced by Javascript into a truthy value ...

// ie.) the contents of the prompt is `a falsy value` such as null or empty ...

// Then, the second entry or `operand` is then read, stored, and returned via an `alert` box.

// ------------------------------------------------------------------------
// Note. In this case the `alert` returns `guest`.
// ------------------------------------------------------------------------

// STOP
```

## The `AND` operator

> **Hint**. {{ page.hint }}

### The Code Part C

```javascript
// Set the constant to a Boolean value of `true`
const isEmailVerified = true;

// Collect the data from the enduser
const response = prompt("What is your name?")

// Declare a mutable variable
let username3;

// Set up an `if - else` statement
if (response) {
  if (isEmailVerified) {
    username3 = response;
  }
} else {
  username3 = "guest";
}

// Return the appropriate response to the console
console.log(username3)

// Return the appropriate response to the screen
alert(username3)
```

## The `AND` y `OR` statement

> **Hint**. {{ page.hint }}

### The Code Part D

```javascript
// Task. Convert the above `if - else` statement to an `AND` statement
const username4 = (isEmailVerified && response) || "guest";

// Return the appropriate response to the console
console.log(username4)

// Return the appropriate response to the screen
alert(username4)

// ------------------------------------------------------------------------
// Note. Both of the alternative operations above ...
// Will return the exact same responses in succession.
// ------------------------------------------------------------------------
```

### The Algorithmic Steps of `AND` y `OR`

```javascript
// Go to the `file explorer` of your development machine

// Find your js `app` file in the appropriately stored folder

// Double click on the accompanying html `index` file

// Your default browser window opens, the subject js `app` is executed

// ------------------------------------------------------------------------
// Note. The subject js `app` can now be executed ...
// Upon any changes to the underlying code ...
// Via the refresh feature of your browser window.
// ------------------------------------------------------------------------

// Next, the window prompts the enduser for a name entry via the `prompt` feature

// The user's response or lack thereof is stored in the constant `response`

// The enduser either enters a name, or leaves the prompt feature empty

// The variable `username3` is declared in a `let` statement

// A standard `if - else` statement tucks the enduser's response into the `username3` variable ...

// By setting the result received from the constant variable `response` to the variable `username3`.

// Finally, the console returns and confirms the contents of the variable `username3` via the `console` and `alert` window features.

// ------------------------------------------------------------------------
// Conversion
// ------------------------------------------------------------------------

// Convert the subject `if - else` statement to a compound `OR` and `AND` statement

// Use the `ampersand` key to create an `AND` relationship, as follows:

// entry-A `&&` "entry-B" || "guest"

// ;where the first entry or `operand` is either set or coerced by Javascript into a truthy value ie.) a valid string ...

// And,

// ;where the second entry or operand is either set or coerced by Javascript into a truthy value ie.) a valid string ...

// And, then read, stored, and returned.

// ------------------------------------------------------------------------
// Note. In this case the console returns `Roberto`.
// ------------------------------------------------------------------------

// Or,

// ;where if the first entry or `operand` cannot be coerced by Javascript into a truthy value ...

// ie.) the contents of the prompt is `a falsy value` such as null or empty ...

// Then, the second entry or `operand` is then read, stored, and returned via an `alert` box.

// ------------------------------------------------------------------------
// Note. In this case the `alert` returns `guest`.
// ------------------------------------------------------------------------

// STOP
```

## Last Subtitle

More to come ...

**Note**. The above synopsis was derived from a video lecture written, produced and performed by ...

`Reed Barger`: [[1](#REEDBARGER){:.red}].

For additional reference on the topic of `Ternary Operators` see the `Mozilla Developer Network`: [[2](#MDN){:.red}]

For a working Internet development platform for Javascript `Ternary Operators` see `Scrimba`: [[3](#SCRIMBA){:.red}]

1. {:#REEDBARGER}[Javascript: The Complete Developer, 2020](https://subscription.packtpub.com/video/web_development/9781801072847?uuid=cc36e816-6930-4834-852a-206c35a8c895){:title="Click to Review Javascript: The Complete Developer, 2020 by Reed Barger at Packt"}{:target="_blank"}

2. {:#MDN}[Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator){:title="Click to Review the Ternary Operators section of the Mozilla Developer Network"}{:target="_blank"}

3. {:#SCRIMBA}[Scrimba Javascript Developer Platform](https://www.scrimba.com){:title="Click to Review the Javascript Developer Platform at Scrimba"}{:target="_blank"}

***

{% include patreon-link.md %}
