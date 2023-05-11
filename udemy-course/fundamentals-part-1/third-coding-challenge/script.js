// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. DOn't forget that there can be a draw, so test for that as well (draw means they have the same average score). 

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108, and 89. Koalas score 88, 91, 110.
TEST DATA BONUS 1: Dolphins score 97, 112, and 101. Koalas score 109, 95, and 123.
TEST DATA BONUS 2: Dolphins score 97, 112, and 101. Koalas score 109, 95, and 106.

GOOD LUCK 
*/

// TEST DATA

/*
const dolphinScoreOne = 96,
  dolphinScoreTwo = 108,
  dolphinScoreThree = 89,
  koalaScoreOne = 88,
  koalaScoreTwo = 91,
  koalaScoreThree = 110;

const dolphinAverage =
  (dolphinScoreOne + dolphinScoreTwo + dolphinScoreThree) / 3;
const koalaAverage = (koalaScoreOne + koalaScoreTwo + koalaScoreThree) / 3;

if (dolphinAverage > koalaAverage) {
  console.log(dolphinAverage);
  console.log("Dolphins win!");
} else if (koalaAverage > dolphinAverage) {
  console.log("Koalas win!");
  console.log(koalaAverage);
} else {
  console.log("It's a draw");
}
*/

// TEST DATA BONUS 1
/*
const dolphinScoreOne = 97,
  dolphinScoreTwo = 112,
  dolphinScoreThree = 101,
  koalaScoreOne = 109,
  koalaScoreTwo = 95,
  koalaScoreThree = 123;

const dolphinAverage =
  (dolphinScoreOne + dolphinScoreTwo + dolphinScoreThree) / 3;
const koalaAverage = (koalaScoreOne + koalaScoreTwo + koalaScoreThree) / 3;
const minimum = 100;

if (dolphinAverage >= minimum && dolphinAverage > koalaAverage) {
  console.log(dolphinAverage);
  console.log("Dolphins win!");
} else if (koalaAverage >= minimum && koalaAverage > dolphinAverage) {
  console.log("Koalas win!");
  console.log(koalaAverage);
} else {
  console.log("It's a draw");
}
*/

// TEST DATA BONUS 2
const dolphinScoreOne = 97,
  dolphinScoreTwo = 112,
  dolphinScoreThree = 101,
  koalaScoreOne = 109,
  koalaScoreTwo = 95,
  koalaScoreThree = 106;

const dolphinAverage =
  (dolphinScoreOne + dolphinScoreTwo + dolphinScoreThree) / 3;
const koalaAverage = (koalaScoreOne + koalaScoreTwo + koalaScoreThree) / 3;
const minimum = 100;

if (dolphinAverage >= minimum && dolphinAverage > koalaAverage) {
  console.log(dolphinAverage);
  console.log("Dolphins win! 🏆");
} else if (koalaAverage >= minimum && koalaAverage > dolphinAverage) {
  console.log("Koalas win! 🏆");
  console.log(koalaAverage);
} else if (koalaAverage >= minimum && dolphinAverage >= minimum && koalaAverage === dolphinAverage) {
  console.log("It's a draw...🔥");
}