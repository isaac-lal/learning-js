// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). 
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable "markHigherBMI" containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Mark weighss 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
TEST DATA 2: Mark weighs 95 kg and is 1.88 m tall. John weighs 85 kg and is 1.76 m tall.

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