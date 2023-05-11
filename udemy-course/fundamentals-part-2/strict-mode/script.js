"use strict";

// strict mode will create errors for us to let us know that we made mistakes
// JS won't show errors if we don't put strict mode on

let hasDriversLicense = false;
const passTest = true; // pass means true

if (passTest) hasDriversLicense = true;

if (hasDriversLicense) console.log("I can drive :D"); // gives us an error if there is a bug rather than silently not work

// const interface = "Audio"; // interface is a reserved word for the future

// const private = 534; // won't work due to reserved word for classes
// const if = 23; // cannot be named if because of if statements