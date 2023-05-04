// 1. If your country split in half, and each half would contain half the population, then how many people would live in each half?
// 2. Increase the population of your country by 1 and log the result to the console
// 3. Finland has a population of 6 million. Does your country have more people than Finland?
// 4. The average population of a country is 33 million people. Does your country have less people than the average country?
// 5. Based on the variables you created, create a new variable 'description' which contains a string with this format: "Portugal is in Europe, and its 11 million people speak Portuguese"

// Task 1
const americaPopulation = 331.9;
const halfAmericaPopulation = americaPopulation / 2;

console.log("The amount of people in each half would be " + halfAmericaPopulation + " million");

// Task 2 
const incrementAmericaPopulation = americaPopulation + 1;
console.log(incrementAmericaPopulation);

// Task 3
const finlandPopulation = 6;
console.log(americaPopulation > finlandPopulation);

// Task 4
const averagePopulation = 33;
console.log(americaPopulation < averagePopulation);

// Task 5
const description = "Portugal is in Europe, and its 11 million people speak Portuguese";
console.log(description);