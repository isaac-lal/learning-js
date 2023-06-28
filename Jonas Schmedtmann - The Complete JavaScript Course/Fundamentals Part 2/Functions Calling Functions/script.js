"use strict";

function cutFruitPieces(fruit) {
  return fruit * 4;
}
function fruitProcessor(apples, oranges) {

  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;

  return juice;
}

console.log(fruitProcessor(2, 3)); // apples is 2 and oranges is 3... then 2 is put into cutFruitPieces and 2 * 4 = 8 for apples then 4 * 3 = 12 for oranges

// very common for one function to repeat another function, and then the function makes it so that DRY code exists