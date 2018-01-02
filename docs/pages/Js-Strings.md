---
title: Js Strings
layout: default
navigation_weight: 3
---
# Js Strings

Strings in Javascript can take on the methods of *Template Literals* as of **ES6** 2015.

{% include toc-flammarion.md %}

## Dollar Braces

The defining decorator within a *Template Literals* for all exposed variables is the dollar `$` braces `{...}` format, as follows:

```liquid
{% raw %}
return (`The string variable "${x}" has a length of "${z}" characters less than or equal to "10" and greater than "0" and also produces a 6th character of "${y}".`);
{% endraw %}
```

**Note.** All *literals* are enclosed in a set of *backticks* `...`.

## Console dot log

In the above code statement, the *return* of the *literal* allows the *method* log of the console *object* to take the *literal* as the parameter for its argument and print same to the Javascript console., as follows:

```liquid
{% raw %}
console.log(actor.decipherCharName());
{% endraw %}
```

## Declaring Class Functions

Class functions are declared AFTER the `constructor` method and before the closing curly brace `}` of the Class declaration, as follows:

```liquid
{% raw %}
// Declare the function name and input variable, if any
	funFact() {
		return `${this.firstName} ${this.lastName} won an Oscar for his work in the movie titled '${this.starMovie}' in the year #${this.year} for his role as the outlaw "${this.charName}".`;
	}
	// End of function `funFact`
}
{% endraw %}
```

**Note**. A declared Class can have one or more functions over and above the default `constructor` method.

## Constructor method

The `constructor` method sets the value properties of the declared Class right after the Class declaration statement, but before the functions of the Class are declared, as follows:

```liquid
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

## Class Declaration

Before we can declare the functions of the Class and execute the default `constructor` method, we must first declare the Class, as follows;

```liquid
{% raw %}
// Declare the Actor class
class Actor {
	// Construct the Actor class using the constructor method
}
{% endraw %}
```

**Note**. Always declare the `strict` parameter at the top of the your working Javascript (.js) page when invoking Javascript classes.

## Strict Mode

The `strict` mode parameter is placed at the top of the page behind the first line title comment, as follows:

```liquid
{% raw %}
// String Stuff
"use strict";
{% endraw %}
```

## Decipher Function

Javascript classes can take any number of complex functions to expose, after the `constructor` method is executed.

For example, *Switch case* statements may be used inside a Javascript class function, as follows:

```liquid
{% raw %}
// Declare the function name and input variable, if any
	decipherCharName() {
		// Declare and initialize the target name
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
				return console.log(`The string variable "${x}" has a length of "${z}" characters less than or equal to "10" and greater than "0" and also produces a 6th character of "${y}".`);
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

## Class Instantiation

After your program is complete, you may `instantiate` an instance of the now declared Class, as follows:

```liquid
{% raw %}
// Instantiate an actor from the class Actor
var actor = new Actor("Clint", "Eastwood", "Unforgiven", 2005, "Will Muny");
{% endraw %}
```

## Calling Methods

You may also `call` any of the functions declared *inside* the program from the *outside* Javascript console, as follows:

```liquid
{% raw %}
console.log(actor.funFact());
{% endraw %}
```

Or,

```liquid
{% raw %}
console.log(actor.decipherCharName());
{% endraw %}
```

## Finished Program

Putting it all together, the following **Finished Program** block of code may be copied and pasted directly into your Chrome Javascript console prompt `>`.

```liquid
{% raw %}
// String Stuff
"use strict";
// Declare the Actor class
class Actor {
	// Construct the Actor class using the constructor method
	constructor(firstName, lastName, starMovie, year, charName) {
		// Declare the value properties of the Actor class
		this.firstName = firstName;
		this.lastName = lastName;
		this.starMovie = starMovie;
		this.year = year;
		this.charName = charName;
	}
	// Next, declare the functions of the class Actor
	
	// Declare the function name and input variable, if any
	decipherCharName() {
		// Declare and initialize the target name
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
				return console.log(`The string variable "${x}" has a length of "${z}" characters less than or equal to "10" and greater than "0" and also produces a 6th character of "${y}".`);
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

	// Declare the function name and input variable, if any
	funFact() {
		return `${this.firstName} ${this.lastName} won an Oscar for his work in the movie titled '${this.starMovie}' in the year #${this.year} for his role as the outlaw "${this.charName}".`;
	}
	// End of function `funFact`
}
{% endraw %}
```

**Note**. Once you have copied and pasted the above code into your Javascript console, you may then separately `call` the program through either of the two Call statements representing either of the two declared functions after instantiating an instance of the declared Class.

```liquid
{% raw %}
// Instantiate an actor from the class Actor
var actor = new Actor("Clint", "Eastwood", "Unforgiven", 2005, "Will Muny");
{% endraw %}
```

Simply copy and paste the above *instantiation* statement directly into your Chrome Javascript console prompt `>` AFTER you have first copied and pasted the above **Finished Program** code into your Chrome Javascript console prompt `>`.

## London Calling

AFTER you have instantiated an instance of the declared Class, you may now separately `call` the program through either of the two Call statements representing either of the two declared functions, as follows:

```liquid
{% raw %}
// Call statement one
console.log(actor.funFact());
{% endraw %}
```

Or,

```liquid
{% raw %}
// Call statement two
console.log(actor.decipherCharName());
{% endraw %}
```

Simply copy and paste either or both of the above *call statement* directly into your Chrome Javascript console prompt `>`.

## Brackets IDE

The **Brackets IDE** allows the Javascript developer to display instant changes to both your Javascript program (.js) and your View page (.html) through the Chrome browser window.

**Note**. The Javascript console may also be exposed through Chrome's developer tools.

```liquid
{% raw %}
Enjoy the successful output!
{% endraw %}
```

{% include sources-and-uses.md %}

### External Sources

- [What You Need To Know About Javascript](https://medmj.us/KnowJavaScript){:title="Click to download 'What You Need To Know About Javascript' by Gabriel Cánepa"}{:target="_blank"} by Gabriel Cánepa. Published by © 2017 [Packtpub.com](https://www.packtpub.com){:title="Click to Visit the Home Page of Packt Pub dot com"}{:target="_blank"}.

- The [Project Source Links](https://mminail.github.io/Javascript/Source-Javascript-Links.htm){:title="Click to Visit the Source Links page of the Javascript Lessons Project at GitHub pages"}{:target="_blank"} page of the Javascript Lessons Project. Published by © 2017 [Mminail.github.io](https://mminail.github.io/){:title="Click to Visit the Concept Library of the Medical Marijuana Initiative of North America - International Limited, an Arizona Benefit Corporation"}{:target="_blank"}.
