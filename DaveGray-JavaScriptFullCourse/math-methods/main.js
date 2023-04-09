// Math methods and Properties

console.log(Math.PI); // returns the value of PI
console.log(Math.trunc(Math.PI)); // removes all the decimals
console.log(Math.round(3.5)); // rounds up to 4
console.log(Math.round(3.1)); // rounds down
console.log(Math.round(3.7)); // rounds up
console.log(Math.ceil(3.4)); // ALWAYS rounds up (ceil means ceiling)
console.log(Math.floor(3.9)); // ALWAYS rounds down

// takes two arguments: the number and the exponent
console.log(Math.pow(2, 2));
console.log(Math.pow(2, 10));
console.log(Math.pow(5, 2)); // 5 to the power of 2

console.log(Math.min(2, 0.5, 9)); // returns the minimum number out of all of them
console.log(Math.max(2, 0.5, 9)); // returns the maximum number

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

// using random with something else: 1,10
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

// Use the floor method instead of ceil since Math.random() returns a range from 0 to 1 that includes 0 but not 1

// Math.ceil(Math.random() * 10) has a chance of resulting in zero
// Math.floor((Math.random() * 10) + 1) is the way to go!
