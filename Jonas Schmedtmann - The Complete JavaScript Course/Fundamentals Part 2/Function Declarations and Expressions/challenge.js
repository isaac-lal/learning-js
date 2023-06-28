/*
1. The world population is 7900 million people (7.9 billion). Create a function declaration called 'percentageOfWorld1' which receives a 'population' value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population. 
2. To calculate the percentage, divide the given 'population' value by 7900 and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, store the results into variables, and log them to the console.
4. Create a function expression which does the exact same thing, called 'percentageOfWorld2', and also call it with 3 country populations (can be the same populations)

*/
"use strict";

const worldPopulation = 7900;

function percentageOfWorld1(population) {
  return (population / worldPopulation) * 100;
}

const chinaPopulationPercentage = percentageOfWorld1(1441);
const unitedStatesPopulationPercentage = percentageOfWorld1(330);
const indiaPopulationPercentage = percentageOfWorld1(1408);

console.log(chinaPopulationPercentage);
console.log(unitedStatesPopulationPercentage);
console.log(indiaPopulationPercentage);

const percentageOfWorld2 = function (population) {
  return (population / worldPopulation) * 100;
}

const twoChinaPopulationPercentage = percentageOfWorld2(1441);
const twoUnitedStatesPopulationPercentage = percentageOfWorld2(330);
const twoIndiaPopulationPercentage = percentageOfWorld2(1408);

console.log(twoChinaPopulationPercentage);
console.log(twoUnitedStatesPopulationPercentage);
console.log(twoIndiaPopulationPercentage);