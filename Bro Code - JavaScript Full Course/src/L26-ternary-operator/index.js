// ternary operator = Shortcut for an 'if/else statement'
//                    Takes 3 operands

//                 1. a condition with ?
//                 2. expression if True :
//                 3. expression if False

// condition ? exprIfTrue : exprIfFalse

/*
let adult = checkAge(21);
console.log(adult);

function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}
    becomes this below

function checkAge(age) {
    return age >= 18 ? true : false;
}
*/

checkWinner(false);

function checkWinner(win) {
    win ? console.log("you win!") : console.log("you lose :(")
}