// #6  (00:30:11) const ⛔

// const = a variable that can't be changed

const PI = 3.14159; // can't change
let radius, circumference; // CAN be changed

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

// PI = 420.69 (can't change variable if its a constant)
circumference = 2 * PI * radius;

console.log("The circumference is: ", circumference);