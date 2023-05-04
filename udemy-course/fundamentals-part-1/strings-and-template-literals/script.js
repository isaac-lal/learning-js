const firstName = "Isaac";
const job = "Web Developer";

const birthYear = 2003;
const currentYear = 2023;
const age = 2023 - 2003;

const isaac = "I'm " + firstName + ", a " + age + " year old " + job + "!";
console.log(isaac);
// template literal can assemble multiple pieces into one single string

// These are template strings and used for ES6 
const isaacNew = `I'm ${firstName}, a ${currentYear - birthYear} year old ${job}!`;
console.log(isaacNew);
// backticks ` are used to write template literals

console.log(`Just a regular string...`);

console.log('String with \n\multiple \n\
lines');

console.log(`String
multiple
lines`)

// multi line strings should always use template literals instead of regular strings