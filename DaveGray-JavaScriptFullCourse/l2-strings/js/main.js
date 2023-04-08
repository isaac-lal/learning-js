// Strings

const myVariable = 'Mathematics';

// The length property
console.log(myVariable.length);

// Example
console.log('Every good boy does fine'.length);

// Tells us the index number of a character
console.log(myVariable.charAt(5)); // positions start at 0 instead of 1

// indexOf tells us when the string first starts
console.log(myVariable.indexOf('mat')); // position 5
console.log(myVariable.indexOf('Mat')); // position 0 at the start
console.log(myVariable.indexOf('at')); // position 1

// lastIndexOf provides the last occurence of the group of character (if there are multiple)
console.log(myVariable.lastIndexOf('at')); // last occurance of the group 'at'
console.log(myVariable.lastIndexOf('ath')); // starts before

// Slice returns the characters from start to end in the range
console.log(myVariable.slice(5, 2)); // first number must be less because it does from left to right
console.log(myVariable.slice(5, 6)); // returns m

// toUpperCase returns the sentence in uppercase and toLowerCase returns the sentence in lowercase
console.log(myVariable.toUpperCase());
console.log(myVariable.toLowerCase());

console.log(myVariable.split('e')); // splits the string from the letter e into arrays at their positions
console.log('John, Joe, David'.split(','));
console.log('Every good boy does fine'.split(' '));
