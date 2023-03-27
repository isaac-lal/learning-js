// freeCodeCamp.org - Learn JavaScript - Full Course for Beginners (Strings - 21:21)

var myFirstName = "Isaac";
var myLastName = "Lal";

var firstName = "Alan";
var lastName = "Turing";

var myStr = "I am a \"double quoted\" string inside double quotes";
console.log(myStr);

var str = 'This is "quoting" in a string without backslash'; //backticks do the same thing `
console.log(str);

/* CODE OUTPUT

\'      single quote
\"      double quote
\\      backslash
\n      new line
\r      carriage return
\t      tab
\b      backspace
\f      form feed

*/

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr);

var ourStr = "I come first. " + "I come second."; // concatenate strings

var thisStr = "This is the start. " + "This is the end.";
console.log(thisStr);

ourStr += " I come third."; // += adds to the string
console.log(ourStr);

var theirName = "freeCodeCamp";
var theirStr = "Hello, our name is " + theirName + ", how are you?";

var yesName = "Isaac";
var yesStr = "My name is " + yesName + " and I am well!";
console.log(yesStr);

var anAdjective = "awesome!";
var anStr = "freeCodeCamp is ";
anStr += anAdjective;

var someAdjective = "worthwhile";
var someStr = "Learning to code is ";
someStr += someAdjective;

// Length of a String
var firstNameLength = 0;
var aFirstName = "Ada";

firstNameLength = aFirstName.length;

var lastNameLength = 0;
var aLastName = "Lovelace";

lastNameLength = aLastName;
console.log(lastNameLength);

var firstLetterOfFirstName = aFirstName[0]; // this gets first letter of word (starts with 0)
                                            // first letter = 0, second letter = 1, last letter = -1, etc.
var lastLetterOfLastName = aLastName[-1];
console.log(firstLetterOfFirstName);
console.log(lastLetterOfLastName);

// String Immutability
var alterStr = "Jello World";
// alterStr[0] = "H"; DOESN'T WORK
alterStr = "Hello World";