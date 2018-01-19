// Donorconstructor
/// @title Donor Constructor = Donorconstructor
// - A simple program written in Javascript that ...
// Copyright (c) 2000 - 2018 Robert Weber FBO Javascript Lessons Project
// C=> https://rwebaz.github.io/Javascript-Lessons-Project/pages/Donor-Constructor.html

"use strict";
// JsHint: As of ES7 the Global use of the strict string pragma is recommended

//Create the class
class Donor {
    constructor(firstName, lastName, eMailHandle, eMailDomain, eMotiCon) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.eMailHandle = eMailHandle;
        this.eMailDomain = eMailDomain;
        this.eMotiCon = eMotiCon;
        this.displayback = function() {
        return `The console will now reveal a message via the alert box ...

        Given. The key to a proper donor record is the capture of a valid electronic mail address.
        
        Dialoque

        A valid email address is comprised of a valid handle, such as '${this.eMailHandle}' and
        a valid domain, such as '${this.eMailDomain}'.
        
        Though the importance of the capture of the donor's first name, for example ... 
        '${this.firstName}' and the capture of the donor's last name, for example ... '${this.lastName}' 
        is readily apparant ...
        
        The concatenation of the donor's email address including the email handle '${this.eMailHandle}'
        plus the 'at' character, or "@" plus the domain name '${this.eMailDomain}' is of critical importance 
        to the donation puzzle.
        
        How else to broadcast the monthly newsletter without a set of valid, opt-in email addresses?

        ${this.eMotiCon}
        
        The Management`;
        };
    }
}
//Instantiate an instance of the Donor class
var author = new Donor("Adam", "Webber", "cannabuds", "live.com", "\u{1F600}");
//Execute the subject method
window.alert(author.displayback());