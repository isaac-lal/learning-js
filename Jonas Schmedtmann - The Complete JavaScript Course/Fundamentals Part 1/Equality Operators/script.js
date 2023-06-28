const age = 18;

if (age === 18) console.log("You just became an adult :D (strict)"); // doesn't execute because it is not 18 (STRICT)

const newAge = 18;
if (newAge == 18) console.log("You just became an adult :D (loose)"); // executes because it is EXACTLY 18 (loose)

console.log("18" == 18); // converts string to number
console.log("18" == 18); // converts string to number
// == is loosely equal
// loose means that the string is the same as a number since it's converted
// strict means that it has to become a number or else it is false

// ALWAYS USE STRICT EQUALITY

const favorite = prompt("What's your favorite number?");
console.log(favorite); // returns a string
console.log(typeof favorite);

if (favorite == 8) {
  console.log(`Cool! ${favorite} is an amazing number!`);
}

if (favorite === 8) {
  // doesn't execute because prompt is a string
  console.log(`Cool! ${favorite} is an amazing number!`);
}

const newFavorite = Number(prompt("What's your favorite number?"));
console.log(newFavorite); // returns a string
console.log(typeof favorite);

if (newFavorite == 8) {
  console.log(`Cool! ${newFavorite} is an amazing number!`);
}

if (newFavorite === 8) {
  // executes because prompt is a number
  console.log(`Cool! ${newFavorite} is an amazing number!`);
} else if (favorite === 7) {
  console.log(`${favorite} is also a cool number`);
} else if (favorite === 9) {
  console.log(`${favorite} is also a cool number`);
} else if (favorite === 1) {
  console.log(`${favorite} is also a cool number`);
} else if (favorite === 3) {
  console.log(`${favorite} is also a cool number`);
} else {
  console.log("Whatever number you like is cool....");
} // we can do else if over and over

// There is an operator for different

if (favorite !== 23) console.log("Why not 23?");