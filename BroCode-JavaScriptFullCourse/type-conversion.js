// #5  (00:25:41) type conversion 💱

/*
Type Conversion = change the datatype of a value to another
(strings, numbers, booleans)
*/

/*
let age = window.prompt("How old are you?");

console.log(typeof age);
age = Number(age); // converts the string into a number
console.log(typeof age);
age += 1;

console.log("Happy Birthday! You are" , age, "years old");
*/

let x, y, z;

x = Number("3.14"); // if you don't put a number down, it will result in NaN (not a number)
y = String(3.14); // converts 3.14 into a string
z = Boolean("pizza"); // displays true or false

console.log(x, typeof x); // 'number'
console.log(y, typeof y); // string
console.log(z, typeof z); // boolean ("pizza" is true, "" (empty string) is false)