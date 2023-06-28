/*
1. Create a function called "describePopulation". Use the function type you like the most. This function takes in two arguments: "country" and "population", and return a string like this: "China has 1441 million people, which is about 18.2% of the world."
2. To calculate the percentage, "describePopulation" call the "percentageOfWorld1" you created earlier
3. Call "describePopulation" with data for 3 countries of your choice

*/

const worldPopulation = 7900;

function percentageOfWorld1(population) {
  return (population / worldPopulation) * 100;
}

const describePopulation = (country, population) => `${country} has ${population} people, which is about ${percentageOfWorld1(population)} of the world.`;

console.log(describePopulation("China", 1441));