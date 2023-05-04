// freeCodeCamp.org - Learn JavaScript - Full Course for Beginners (Arrays - 40:44)

var ourArray = ["John", 23];

var myArray = ["Quincy", 1];

var multiArray = [["the universe", 42], ["everything", 101010]] // this is a multi array

var thisArray = [50, 60, 70];
var thisData = thisArray[0];
console.log(thisData);
thisArray[1] = 55; // new array is [50, 55, 70]

// multi-dimensional arrays

var dimArray = [[1, 2, 3], [4, 5, 6],[7, 8, 9], [[10, 11, 12], 13, 14]]; // three layer deep array at 10
var dimData = dimArray[2][1]; // first element gets data of first array
                              // second element gets data of second array, etc.
console.log(dimData);

// push(): adds an element to end of array
var pushArray = ["Stimpson", "J", "cat"];
pushArray.push(["happy", "joy"]);
console.log(pushArray);

// pop(): removes final element from array
var popArray = [1, 2, 3];
var popFromOurArray = popArray.pop();
console.log(popFromOurArray); // will be 3 because it removed 3 from array

// shift(): removes first element from array
var shiftArray = ["Stimpson", "J", ["cat"]];
var shiftFromOurArray = shiftArray.shift();
console.log(shiftFromOurArray); // variables = Stimpson

// unshift(): adds an element to beginning of array
var unshiftArray = ["Stimpson", "J", "cat"];
unshiftArray.shift();
unshiftArray.unshift("Happy");
console.log(unshiftArray);

// Shopping List
var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 5]];