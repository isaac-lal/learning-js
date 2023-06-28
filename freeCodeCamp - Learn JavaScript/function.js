// freeCodeCamp.org - Learn JavaScript - Full Course for Beginners (Functions - 51:41)

function reusableFunction() {
    console.log("Heyya, World");
}

reusableFunction();
reusableFunction();
reusableFunction();

// Functions with arguments in parameters
function functionWithArgs(a, b) {
    console.log(a - b);
}

functionWithArgs(10, 5);

// Global Scope

var global = 10; // global scope, used throughout program

function fun1() {
    oopsGlobal = 5; // no var keyword in function = no global scope outside function
}

function fun2() {
    var output = "";

    if (typeof global != "undefined") {
        output += "global: " + global;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

fun1();
fun2();

// Local Scope
function localScope() {
    var myVar = 5;
    console.log(myVar);
}
localScope();

// Global Scope vs Local Scope

var outerWear = "T-Shirt";

function myOutfit() {
    var outerWear = "sweater"; // replaces var outerWear value
    return outerWear;
}

console.log(myOutfit()); // return function edited var
console.log(outerWear); // return global var 

// Return a value
function minusSeven(num) {
    return num - 7;
}

console.log(minusSeven(10)); // 10 - 7 = 3

function timesFive(num) {
    return num * 5;
}

console.log(timesFive(5));

// Undefined return value
var sum = 0;
function addThree() {
    sum = sum + 3;
}

function addFive() {
    sum += 5;
}

// Assign return value
var changed = 0;
function change(num) {
    return (num + 5) / 3;
}
changed = change(10); // returns 5 (10 + 5 = 15 / 3 = 5)

var processed = 0;
function processArg(num) {
    return (num + 3) / 5;
}
processed = processArg(7); // returns 2 (7 + 3 = 10 / 5 = 2)

// Stand in Line
function nextInLine(arr, item) {

    arr.push(item);
    return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));