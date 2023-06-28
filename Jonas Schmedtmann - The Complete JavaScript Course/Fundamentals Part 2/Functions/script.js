"use strict";

function logger() {
  // everything inside the curly braces is the function body

  console.log("My name is Isaac");
}

// calling -> running -> invoking function
logger();
logger();
logger();
logger();
logger();
logger();
logger(); // omg im learning wow say hi
logger(); // im also testing out the smooth type animation and wow it's nice

function fruitProcessor(apples, bananas) {
  // function names should always be descriptive and the parameters are variable names for the function
  console.log(apples, bananas);
  const juice = `Juice with ${apples} apples and ${bananas} bananas`;

  return juice;
}

const appleJuice = fruitProcessor(5, 0); // the numbers display in order so 5 apples and 0 oranges
console.log(appleJuice); // the result of the function is assigned to appleJuice
console.log(fruitProcessor(5, 0));

const appleBananaJuice = fruitProcessor(2, 4); // the values of apples and oranges can be accessed at any point
console.log(appleBananaJuice); // DRY: Don't Repeat Yourself

Number('23'); // Number is a built in function that takes 23 as a parameter

const num = Number("23");