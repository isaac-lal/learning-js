// freeCodeCamp.org - Learn JavaScript - Full Course for Beginners (If Statements - 1:09:24)

function isTrueOrFalse(isitTrue) {
    if (isitTrue) { // if the condition is met, then it will execute code
        return "Yes, it's true";
    }
    return "No, it's false";
}

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
}

console.log(trueOrFalse(true));

// Else Statements
function testElse(val) {
    var result = "";

    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }
    return result;
}

// Else If
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}
testElseIf(7);

// Order Else If
function orderMyLogic(val) {
    if (val < 5) { // order matters, if the first condition is met, then it doesn't check for the rest
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}
console.log(orderMyLogic(3));

// Chain If Else
function chainIfElse(num) {
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "Large";
    } else {
        return "Huge";
    }
}
console.log(chainIfElse(19));