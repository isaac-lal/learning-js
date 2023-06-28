const age = 19;
age >= 19
  ? console.log("I like to drink wine 🍷")
  : console.log("I like to drink water 💧");

// ? means if and : means else (MANDATORY)

// 3 parts: conditional => the if part => the else part

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;

if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
// wouldn't replace if else statements but can compare for quick decisions
// REALLY IMPORTANT