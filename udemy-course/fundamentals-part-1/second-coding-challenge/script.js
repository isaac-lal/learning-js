// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template string to include the BMI values is the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if-else statement

GOOD LUCK
*/

// Test Data 1 Solution
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

console.log("Mark's BMI is " + markBMI);
console.log("John's BMI is " + johnBMI);

const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

// Test Data 2 Solution
const oMarkMass = 95;
const oMarkHeight = 1.88;
const oJohnMass = 85;
const oJohnHeight = 1.76;

const oMarkBMI = oMarkMass / oMarkHeight ** 2;
const oJohnBMI = oJohnMass / oJohnHeight ** 2;

console.log("Mark's BMI is " + oMarkBMI);
console.log("John's BMI is " + oJohnBMI);

const oMarkHigherBMI = oMarkBMI > oJohnBMI;
console.log(oMarkHigherBMI);

// Challenge #2 Code
if(markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})! `);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})! `);
}

if(oMarkBMI > oJohnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})! `);
} else {
  console.log(`John's BMI (${oJohnBMI}) is higher than Mark's (${oMarkBMI})! `);
}