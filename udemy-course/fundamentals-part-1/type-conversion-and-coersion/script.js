// type conversion
const inputYear = "1991";
console.log(inputYear + 18); // "1991" + 18 = 199118 because it adds 18 to the end of the string

console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

// console.log(Number("Isaac")); // we can NaN which means that it is an invalid number (string)
console.log(typeof NaN); // we get this when the operation fails to convert into a number

console.log(String(23)); // converts to "23"
console.log(String(23), 23);

// type coercion
// JS automatically coerses types for us
console.log("I am " + 23 + " years old");
console.log("I am " + String(23) + " years old");

console.log("23" - "10" - 3); // JS automatically converted these strings into numbers after seeing the operation -

console.log("23" + "10" + 3); // the plus concatenates the strings, instead (use Number())

console.log("23" * "2"); // the multiplier operator works
console.log("23" / "2"); // the divider operator works

let n = "1" + 1;
n = n - 1;
console.log(n);

console.log(2 + 3 + 4 + "5");
// 2 + 3 + 4 = 9 then adds 5 to the end
console.log("10" - "4" - "3" - 2 + "5"); // converts into 15
// EMBRACE IT IN YOUR CODE

// wow