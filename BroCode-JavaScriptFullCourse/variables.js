// #2  (00:08:02) variables ❎

/*
A variable is a container for storing data
A variable behaves as if it was the value that it contains

Two steps:
1. Declaration (var, let, const)
2. Assignment ( = assignment operator)
*/

let age = 18; // numbers
age += 1; // 21 + 1 = 22
console.log(age);

let firstName = "Isaac"; // strings
console.log(firstName);
console.log("Hello", firstName);

let student = true; // booleans
console.log(student);

console.log("Enrolled: ", student);
console.log("Hello", firstName, "you are ", age, " years old");

// document.getElementById("p1").innerHTML = "Hello " + firstName;
// document.getElementById("p2").innerHTML = "You are " + age + " years old";
// document.getElementById("p3").innerHTML = "Enrolled: " + student;