const hasDriversLicense = true; // A
const hasGoodVision = false; // B

console.log(hasDriversLicense && hasGoodVision); // true and true is TRUE
// true and false is false

console.log(hasDriversLicense || hasGoodVision); // true or false is TRUE
console.log(!hasDriversLicense); // not true is false

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
  console.log("Sarah is able to drive!"); 
} else {
  console.log("Someone else should drive...");
}

if (hasDriversLicense && hasGoodVision) {
  console.log("Sarah is able to drive!"); 
} else {
  console.log("Someone else should drive...");
}

const isTired = true; // C
console.log(hasDriversLicense || hasGoodVision || isTired); // true
console.log(hasDriversLicense && hasGoodVision && isTired); // false

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}