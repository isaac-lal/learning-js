// There are 5 falsy values in JS
// 0, '', undefined, null, NaN

// everything else are truthy values

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Isaac"));
console.log(Boolean({}));
console.log(Boolean(""));
// We never use the Boolean function ever
// JS does type coersion automatically behind the scenes

const money = 0;

if(money) {
  console.log("Don't spend it all! :)");
} else {
  console.log("You should get a job!");
}
// because money is 0 and it is a falsy value, it will convert into a false boolean
// if an if statement has only one variable in it, it will refer to a boolean which is false

const newMoney = 100;

if(newMoney) {
  console.log("Don't spend it all! :)");
} else {
  console.log("You should get a job!");
}

let height;

if(height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}

height = 0;

if(height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}

height = 100;

if(height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}