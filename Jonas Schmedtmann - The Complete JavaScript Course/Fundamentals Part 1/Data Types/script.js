// There is a value data types: object or primitive

// Primitive Data Types (MAIN)
// 1. Number: Floating point numbers -> used for decimals and integers // let age = 23;
// 2. String: sequnce of characters -> used for text // let firstName = "Jonas";
// 3. Boolean: logical type that can only be true or false -> used for taking decisions // let fullAge = true;

// Other Primitive Data Types
// 4. Undefined: value taken by a variable that is not yet defined ('empty value') let children;
// 5. Null: also means 'empty value'
// 6. Symbol (ES2015): Value that is unique and cannot be changed [Not useful for now]
// 7. BigInt (ES2020): Larger integers than the Number type can hold

/*
JavaScript has dynamic typing: We do not have to manually define the data type of the value stored in a variable. Instead, data types are determined automatically
*/

// value has a type and not the variable (let instead of int)

// this is a comment and JS ignores this comment

// console.log(40 + 8 + 23 - 10); // code is ignored

/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Isaac";
console.log(firstName); // camel case means the first word is lowercase and all the others are uppercase

let firstNamePerson;
let first_name_person; // JavaScript variables are going to be always in camelCase

// let 3years = 3; // variables cannot start with a numbrr
console.log(firstName);
console.log(firstName);

// let jonas&Matilda; // only _ is avaiable for variable names
// let new - 27; // variables cannot be named reserved keywords or functions
let $function = 28; // allowed

let first = "Jonas"; // this can still cause problems as it can be a reserved keyword

let Person = "Wow"; // while this is allowed, we should not use this convention of uppercasng variable names as it is a convention known for OOP
let person = "Wow"; // this is fine

let PI = 3.1415; // write this variable name as an uppercase since it is a constant 
// write constants in uppercase

// name variables based on the value it holds

let myFirstJob = "Programmer"; // more descriptive
let myCurrentJob = "Teacher";

let job1 = "Programmer"; // less descriptive
let job2 = "Teacher";

console.log(myFirstJob); 
*/

// booleans are only true or false
console.log(true);

let javascriptIsFun = true; // boolean
console.log(javascriptIsFun);

console.log(typeof true); // will return it as a boolean
console.log(typeof javascriptIsFun); // will return it as a boolean
console.log(typeof 23); // will return it as a number
console.log(typeof "Isaac"); // will return it as a string

javascriptIsFun = "YES!"; // reassigned from boolean to string
console.log(typeof javascriptIsFun);

// int, string, boolean
// undefined means an empty value
let year; // undefined

console.log(year);
console.log(typeof year);

year = 1991; // defined the variable

console.log(typeof null); // null displays as an object but it is not true at all