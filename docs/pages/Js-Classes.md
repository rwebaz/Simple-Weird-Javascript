---
layout: default
title: Js Classes
excerpt: Classes are the backbone of any Object Oriented programming language ...
hint: Before we can declare the functions of a Class and execute the default constructor method, we must first declare the Class.
repo: Javascript-Lessons-Project
ver_date: 11-26-19
navigation_weight: 8
categories: page
---
{% include toc.md %}

## Implementation

> **Hint**. {{ page.hint }}

Is Javascript an *Object Oriented* programming language?

From a Web developer's perspective the author thinks `yes`.

Javascript classes can be implemented in three (3) separate steps.

Each step can be submitted to the Javascript console prompt `>` incrementally, as follows:

1. Declare the Class

1. Instantiate the Class

1. Call the Class

### Class Declaration

More to come ...

```javascript
{% raw %}
// Declare the Actor class
class Actor {
  // Construct the Actor class using the constructor method
}
{% endraw %}
```

**Note**. Always declare the `strict` parameter at the top of the your working Javascript (.js) page when invoking Javascript classes.

### Strict Mode

The `strict` mode parameter is placed at the top of the page behind the first line *title comment*, as follows:

```javascript
{% raw %}
// String Stuff
"use strict";
{% endraw %}
```

### Class Instantiation

After your program is complete, you may `instantiate` an instance of the now declared Class, as follows:

```javascript
{% raw %}
// Instantiate an actor from the class Actor
var actor = new Actor("Clint", "Eastwood", "Unforgiven", 2005, "Will Muny");
{% endraw %}
```

### Class Call

To gain a full usage of your newly declared Class, methods that first eminate from the built in *Object* Class may be invoked.

**Note**. The built in *Object* Class is the parent to all newly declared Javascript classes.

### Object Class

The built in *Object* Class comes pre-built with a number of exposed methods that can be used within your program.

And, through the *Object Oriented* power of inheritance, your Classes may *call* these functions liberally.

One of the functions of the built-in *Object* Class is the *constructor* method.

The *constructor* method is invoked directly after the Class declaration statement, as follows:

```javascript
{% raw %}
constructor(firstName, lastName, starMovie, year, charName) {
  // Declare the value properties of the Actor class
  this.firstName = firstName;
  this.lastName = lastName;
  this.starMovie = starMovie;
  this.year = year;
  this.charName = charName;
}
// Next, declare the functions of the class Actor
{% endraw %}
```

**Note**. The `constructor` method sets the value properties of the declared Class right after the Class declaration statement, but before the functions of the Class are declared.

#### Class Functions

You may also *call* functions specific to your Class that you have built when declaring the Class.

Javascript classes can house any number of complex functions that stand ready to expose values and methods, once the `constructor` method has been executed.

For example, *Switch case* statements may be used inside a Class function, as follows:

```javascript
{% raw %}
// Declare the function name and input variable, if any
decipherCharName() {
  // Declare and initialize the target character name
  var x = this.charName;
  // Declare and initialize the target character
  var y = x.charAt(6);
  // Declare and initialize the target length
  var z = x.length;

  // Declare switch
  switch (true) {
    // First conditional
    case (z <= 60 && z > 50):
      // Print to Javascript console
      return console.log(`The string variable "${x}" has a length of "${z}" characters less than or equal to "60" and greater than "50" and also produces a 6th character of "${y}".`);
    break;

    // Second conditional
    case (z <= 50 && z > 40):
      // Print to Javascript console
      return console.log(`The string variable "${x}" has a length of "${z}" characters less than or equal to "50" and greater than "40" and also produces a 6th character of "${y}".`);
    break;

    // Third conditional
    case (z <= 40 && z > 30):
      // Print to Javascript console
      return console.log(`The string variable "${x}" has a length of "${z}" characters less than or equal to "40" and greater than "30" and also produces a 6th character of "${y}".`);
    break;

    // Set the default
    case(true):
      // Print to Javascript console
      return console.log(`The string variable "${x}" has a length of "${z}" characters less than or equal to "10" and greater than "0" and also produces a 6th character of "${y}".`);
    break;
  };
}
// End of function `decipherChar`
{% endraw %}
```

#### Calling Methods

You may also `call` any of the functions declared *inside* the Class from the *outside* Javascript console, as follows:

```javascript
{% raw %}
console.log(actor.decipherCharName());
{% endraw %}
```

Here, we have invoked the *method* log of the console *object* to render to the console the result of the `decipherCharName()` function.

Recall the `decipherCharName()` function was declared immediately after the execution of the `constructor` method when declaring the Class `Actor`.

Therefore, as a new *instance* of the Class `Actor`, the `actor` *object* may now `call` the method `decipherCharName()` based on the *Object Oriented* feature of *inheritance*.

**Note**. The Class `Actor` inherits from the built-in Class `Object` and all sibling *objects* of the Class `Actor` inherit from the Class `Actor`.

As Javascript is a *case-sensitive* computer language, and as of **ES6** also an *Object Oriented* computer language ...

Naming the new instance of the Class `Actor` with the lower case name of `actor` is a legal move in the world of Javascript.

## Last Subtitle

More to come ...

***

**Note**. The above synopsis was derived from an article written by Gabriel Cánepa [[1](#GABRIELCANEPA){:.red}].

1. {:#GABRIELCANEPA}[What You Need To Know About Javascript](https://www.packtpub.com){:title="Click to download 'What You Need To Know About Javascript' by Gabriel Cánepa"}{:target="_blank"} by Gabriel Cánepa. Published by © 2016 [Packtpub.com](https://www.packtpub.com){:title="Click to Visit the Home Page of Packt Pub dot com"}{:target="_blank"}.

***

{% include patreon-link.md %}
