// Numbers

// An integer is a whole Number
const myNumber = 42;
console.log(myNumber);

// A number with a decimal point is a float which references the 'floating point'
const myFloat = 42.01;
const myString = '42';
const mySecondString = '42.123abc';

console.log(myString); // Prints out string
console.log(myNumber === myString); // FALSE

// Adds the number to the end of the string
console.log(myString + 3);

console.log(Number(myString) + 3); // the value becomes 45

console.log(Number(myString) === myNumber); // this becomes true
console.log(Number('Dave')); // NaN because it is a string
console.log(Number(false)); // returns 0
console.log(Number(true)); // returns 1

// The Number.isInteger() method determines whether the passed value is an integer.
console.log(Number.isInteger(myString));

// The Number.parseFloat() method parses an argument and returns a floating point number
// If a number cannot be parsed from the argument, it returns NaN.
console.log(Number.parseFloat(myString));
console.log(Number.parseFloat(myFloat));
console.log(Number.parseFloat(myNumber));
console.log(Number.parseFloat(mySecondString));

// The toFixed() method formats a number according to how many decimal pooints you provide as the paramter.
console.log(Number.parseFloat(myString).toFixed(2)); // rounds up

// The Number.parseInt() method parses a string argument and returns an integer
console.log(Number.parseInt(myFloat)); 

// The toString() method returns a string representing the number
console.log(typeof myFloat.toString()); // returns a string

// chaining = using several methods chained together
console.log(Number.parseFloat(mySecondString).toFixed(2).toString());

// NaN = not a number
// The NUmber.isNaN() method describes whether the passed value is a NaN or not.
console.log(Number('Dave')); // returns NaN
console.log(Number.isNaN('Dave')); // returns if it's true or false of being a number

// THe global isNaN() function determines whether a value is NaN or not.
console.log(isNaN('Dave'));