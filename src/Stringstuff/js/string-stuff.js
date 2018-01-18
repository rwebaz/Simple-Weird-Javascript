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

// Instantiate an actor from the class Actor
var actor = new Actor("Clint", "Eastwood", "Unforgiven", 2005, "Will Muny");

// Call function one
console.log(actor.funFact());

// Call function two
console.log(actor.decipherCharName());

// Execute the function with input
/* a("English Bob"); */

/* Execute the function without input
a(); */

/* Initialize the input variable
	x = "Little Bill"; */
