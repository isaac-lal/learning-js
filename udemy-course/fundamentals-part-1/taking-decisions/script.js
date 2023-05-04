const age = 19; // age for learners permit
const isOldEnough = age >= 16;

if(isOldEnough) { // if it's true then
  console.log("Isaac can start driving! 🥺");
}

const newAge = 12;

if (newAge >= 16) {
  console.log("Isaac can start driving!");
} else {
  const yearsLeft = 18 - newAge;
  console.log(`Isaac is too young. Wait another ${yearsLeft} years :)`)
}

// we take decisions with code all the time so this statement will help with our structure of the program

/*
if() {

} else {

}
*/ // called a control structure

const birthYear = 1991;
let century; // we define it outside because it won't read it outside in the if-else statements

if(birthYear <= 2000) {
  century = 20;
  console.log(`This person was born in the ${century}th century!`);
} else {
  century = 21;
  console.log(`This person was born in the ${century}th century!`);
}

console.log(century);

// we need a condition to execute the code within the curly brace if statements
// the else block is optional