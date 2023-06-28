const now = 2023;
const ageIsaac = now - 2001;
const ageMaya = now - 2003;
console.log(now - 2001 > now - 2003); // the calculations are done before the precedence
// operator precedence is the order in which operations are calculated

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

// grouping has the highest level of precedence and the table from the link above explains it well

// have a general idea on which operators are executed first
// ** is executed right to left while all the others are executed left to right
// This is due to PEMDAS for precedence
console.log(25 - 10 - 5); // left to right rather than right to left 5 - 10 - 25

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y); // both are 10 because it will see the minus operators and calculate them
// x = y = 10 so then y = 10 and then x = y which is x = 10

// Parantheses are executed first
const averageAge = ageIsaac + ageMaya / 2; // maya / 2 + isaac
console.log(ageIsaac, ageMaya, averageAge);

const newAverageAge = (ageIsaac + ageMaya) / 2; // with parantheses, it is executed first
console.log(ageIsaac, ageMaya, newAverageAge);
