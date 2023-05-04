/*
LECTURE: Equality Operators: == vs. ===

1. Declare a variable 'numNeighbors' based on a prompt input like this: prompt("How many neighbor countries does your country have?");
2. If there is only 1 neighbor, log to the console "Only 1 border!" (use loose equality == for now) 
3. Use an else-if block to log "More than 1 border in case 'numNeighbors' is greater than 1
4. Use an else block to log "No borders" (this block will be executed when 'numNeighbors' is 0 or any other value)
5. Test the code with different values of 'numNeighbors', including 1 and 0.
6. Change == to ===, and test the code again, with the same values of 'numNeighbors'. Notice what happens where there is exactly 1 border! Why is this happening?
7. Finally, convert 'numNeighbors' to a number, and watch what happens now when you input 1
8. Reflect on why we should use the === operator and type conversion in this situation

*/

const numNeighbors = Number(prompt("How many neighbor countries does your country have?"));

if (numNeighbors === 1) {
  console.log("Only 1 border!");
} else if (numNeighbors >= 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}

// we use === as strict equality and then convert the type into a number to get the most accurate representation on solving the problem at hand