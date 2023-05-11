"use strict";

// const ageOne = calcAgeOne(2003); // variable placed first and still works

function calcAgeOne(birthYear) {
  return 2037 - birthYear;
}
const ageOne = calcAgeOne(2003);
console.log(ageOne); // function declaration

const calcAgeTwo = function (birthYear) {
  // we can put functions into variables and store the value in a variable
  return 2037 - birthYear; // function expression
}; // if we can store a value then it can be stored in a variable

const ageTwo = calcAgeTwo(2003); // if the variable is placed before the function then it will not work properly
console.log(ageOne, ageTwo);
