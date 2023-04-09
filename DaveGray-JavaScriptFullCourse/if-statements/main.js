// Conditionals: if statements

// syntax
/*
if(condition is true) {
  // run the code
} else {
  // run other code
}

*/

let soup = "chicken noodle soup";
let reply;
let crackers = true;
let customerIsBanned = false;

if (customerIsBanned) {
  reply = "No soup or crackers for you!";
} else if (soup && crackers) {
  reply = "We have both soup and crackers! :)";
} else if (soup) {
  reply = "Here's your order of ${soup}";
} else {
  reply = "Sorry we're out of soup";
}
console.log(reply);

// Test Scores! - Example

let testScore = 59;
let grade;
let collegeStudent = true;

if (testScore >= 90) {
  grade = "A";
  console.log(grade);
} else if (testScore >= 80) {
  grade = "B";
  console.log(grade);
} else if (testScore >= 70) {
  grade = "C";
  console.log(grade);
} else if (testScore >= 60) {
  grade = "D";
  console.log(grade);
} else {
  grade = "F";
  console.log(grade);
  if (collegeStudent) {
    grade = "U";
  } else {
    grade = "F";
  }
}

// Decision tree!
let player = "scissors";
let computer = "rock";

if (player === computer) {
  console.log("Tie");
} else if (player === "rock") {
  if (computer === "paper") {
    console.log("They won");
  } else {
    console.log("You won");
  }
} else if (player === "scissors") {
  if (computer === "rock") {
    console.log("They won");
  } else {
    console.log("You won");
  }
} else if (player === "paper") {
  if (computer === "scissors") {
    console.log("They won");
  } else {
    console.log("You won");
  }
}
