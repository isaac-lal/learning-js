const now = 2023;

// minus operator
const ageIsaac = 2023 - 2003;
console.log(ageIsaac);

const ageMaya = 2023 - 2003;
console.log(ageMaya);

console.log(ageIsaac, ageMaya);

const nowAgeIsaac = now - 2003;
const nowAgeMaya = now - 2003;
console.log(nowAgeIsaac, nowAgeMaya);

// multiply and divide
console.log(nowAgeIsaac * 2, nowAgeMaya / 2, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// plus operator can be used to concatenate strings
const firstName = "Isaac";
const lastName = "Lal";
console.log(firstName + " " + lastName); // use plus to combine strings (with a space too)

let x = 10 + 5; // equal is an operator, with + also
console.log(x); // 15

x += 10; // 15 + 10, this means to add 10 to current value of x 
console.log(x); // 25

x *= 4; // 25 * 4 = 100
console.log(x);

x++; // x = x + 1 increases the value by 1
console.log(x);

x-- // x = x - 1 decreases the value by 1 
console.log(x);

// Comparison operators
console.log(ageIsaac > ageMaya);
// Isaac's age is the same as Maya so it is false 
// >, <, >=, <=
console.log(ageIsaac >= 18); // true because Isaac is exactly 18
// If he was born in 2004 then it would be false since he is 17
// We would store these comparisons in a variable

// The browser has access to all the variables in the browser tab

const isFullAge = ageIsaac >= 18; // boolean to see if it's true
// finds out that it is a boolean if we compare
console.log(isFullAge);

console.log(now - 2003 > now - 2023);