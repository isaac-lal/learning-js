let age = 30;
age = 31; // we can change the value of age with let

const birthYear = 2003;
// birthYear = 2004; // const cannot be reassigned and are immutable

// const job; // const ALWAYS must be intialized

/*
FOR FUTURE NOTICE:

const should be the default variable declaration, with let being if we feel like we need to change it throughout the program
*/

// when we have a variable that is never supposed to change like pi, birthyear, graudation date, etc. then you use const

var job = "Programmer";
job = "Teacher"; // MUST BE AVOIDED AT ALL COST

// there are differences between let, var, and const

// let is block scoped and var is function scoped

// NEVER USE VAR

lastName = "Lal"; // there is no let which is not declared in ANY scope so it is a terrible idea
console.log(lastName);

// UNDERSTAND THE FUNDAMENTALS
