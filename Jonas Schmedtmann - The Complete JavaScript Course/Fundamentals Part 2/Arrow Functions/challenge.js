/*
1. Recreate the last assignment, but this time create an arrow function called 'percentageOfWorld3"
*/

"use strict";

const worldPopulation = 7900;

const percentageOfWorld1 = population => (population / worldPopulation) * 100;

const chinaPopulationPercentage = percentageOfWorld1(1441);
const unitedStatesPopulationPercentage = percentageOfWorld1(330);
const indiaPopulationPercentage = percentageOfWorld1(1408);

console.log(chinaPopulationPercentage);
console.log(unitedStatesPopulationPercentage);
console.log(indiaPopulationPercentage);

const percentageOfWorld2 = population => (population / worldPopulation) * 100;

const twoChinaPopulationPercentage = percentageOfWorld2(1441);
const twoUnitedStatesPopulationPercentage = percentageOfWorld2(330);
const twoIndiaPopulationPercentage = percentageOfWorld2(1408);

console.log(twoChinaPopulationPercentage);
console.log(twoUnitedStatesPopulationPercentage);
console.log(twoIndiaPopulationPercentage);