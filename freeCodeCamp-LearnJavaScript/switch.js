// freeCodeCamp.org - Learn JavaScript - Full Course for Beginners (Switch Statements - 1:32:17)

function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = "alpha";
            break;
        case 2: 
            answer = "beta";
            break;
        case 3: 
            answer = "gamma";
            break;
        case 4: 
            answer = "delta";
            break;
    }
    return answer;
}
console.log(caseInSwitch(3));

// Default Option
function switchOfStuff(val) {
    var answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        case "d":
            answer = "game";
            break;
        default:
            answer = "Not applicable";
    }
    return answer;
}
console.log(switchOfStuff(5));

// Multiple Identical Options (1:37:24)