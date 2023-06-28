/*
1. Write a function called "describeCountry" which takes three parameters: "country", "population", and "capitalCity". Based on this input, the function returns a string with this format: "Finland has 6 million people and its capital city is Helsinki"
2. Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console
*/

"use strict";

function describeCountry(country, population, capitalCity) {
  const countryDescription = `${country} has ${population} million people and its capital city is ${capitalCity}`;

  return countryDescription;
}

console.log(describeCountry("United States", 330, "Washington D.C."));
console.log(describeCountry("Italy", 59.11, "Rome"));
console.log(describeCountry("Germany", 83.2, "Berlin"));
