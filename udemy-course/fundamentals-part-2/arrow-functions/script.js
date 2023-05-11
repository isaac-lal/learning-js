// Arrows functions are function expressions that are easier to write

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear; // variable name = parameter => 2037 - parameter and will automatically be returned

const age = calcAge3(2003);
console.log(age);

const yearsUntilRetirement = birthYear => { // if multiple parameters, we need paratheses
  const age = 2037 - birthYear;
  const retirement = 65 - age;

  return retirement; // if we have a one liner function, we don't need to return anything but more than one line means return
}

console.log(yearsUntilRetirement(1991));

const descUntilRetirement = (birthYear, firstName) => { // if multiple parameters, we need paratheses
  const age = 2037 - birthYear;
  const retirement = 65 - age;

  return `${firstName} retires in ${retirement} years`; // if we have a one liner function, we don't need to return anything but more than one line means return
}

console.log(descUntilRetirement(1980, "Bob"));

// Arrow functions are more important but we will keep using regular function expressions