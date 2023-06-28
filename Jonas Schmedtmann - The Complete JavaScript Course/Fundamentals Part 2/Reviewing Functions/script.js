"use strict";

const calcAge =  function(birthYear) {
  return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;


  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired!!! 🎉`); // if the return is before the code, it won't execute what's after the return. Code must be before return
    return -1; // exits the function 
  }

  return `${firstName} retires in ${retirement} years`; // doesn't execute because of if statement
};

console.log(yearsUntilRetirement(2003, "Isaac"));
console.log(yearsUntilRetirement(2002, "Dorothea"));

// Function declaration
function calcAgeDec(birthYearExample) {
  return 2037 - birthYear;
}

const calcAgeExp = function (birthYear) {
  return 2037 - birthYear;
}

const calcAgeArrow = birthYear => 2037 - birthYear; // open parentheses is there are multiple lines of code

// first is the function name
// then it's the parameters
// then its the body of the function where the code executes
// then its the return statement 
// then we store return in a variable and give it parameter values
// then we display it to the console 