// freeCodeCamp.org - Learn JavaScript - Full Course for Beginners (Operators - 1:11:53)

// Equality 
function testEqual(val) {
    if (val == 12) { // == checks IF it's equal, = assigns value
        return "Equal";
    }
    return "Not Equal";
}
console.log(testEqual(10));

// STRICT Equality (triple ===)
/*
3 === 3 true (must be EXACTLY the same)
3 === '3' false (not equal to string)
*/

// Review
function compareEquality(a, b) {
    if (a == b) { // equals with == but not ===
        return "Equal";
    }
    return "Not Equal";
}
console.log(compareEquality(10, "10"));

// Inequality Operator 
function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}
console.log(testNotEqual(10));

// STRICT Inequality Operator
function testStrictNotEqual(val) {
    if (val !== 10) {
        return "Not Equal";
    }
    return "Equal";
}
console.log(testStrictNotEqual(10));

// Greater Than 
function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }

    if (val > 10) {
        return "Over 10";
    }

    return "10 or Under";
}
console.log(testGreaterThan(10));

// Greater Than Or Equal To
function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or Over";
    }

    if (val >= 10) {
        return "10 or Over";
    }

    return "Less than 10";
}
console.log(testGreaterOrEqual(10));

// Less Than
function testLessThan(val) {
    if (val < 25) {
        return "Under 25";
    }

    if (val < 55) {
        return "Under 55";
    }

    return "55 or Over";
}
console.log(testLessThan(10));

// Less Than Or Equal To
function testLessOrEqual(val) {
    if (val <= 12) {
        return "Smaller Than Or Equal To 12";
    }

    if (val <= 24) {
        return "Smaller Than or Equal to 24";
    }
    
    return "More Than 24";
}
console.log(testLessOrEqual(10));

// And Operator &&
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";
}
testLogicalAnd(10);

// Or Operator ||
function testLogicalOr(val) {
    if (val < 10 || val > 20) {
        return "Outside";
    }

    return "Inside";
}
testLogicalOr(15);

