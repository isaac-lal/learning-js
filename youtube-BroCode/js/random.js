// #10 (00:46:52) random number generator 🎲

/*
let x = Math.floor(Math.random() * 6) + 1; // generates a number that starts at 0 since computers start with 0 and offset by 1
let y = Math.floor(Math.random() * 6) + 1;
let z = Math.floor(Math.random() * 6) + 1;
*/       

document.getElementById("rollButton").onclick = function() {
    let x = Math.floor(Math.random() * 6) + 1; // generates a number that starts at 0 since computers start with 0 and offset by 1
    let y = Math.floor(Math.random() * 6) + 1;
    let z = Math.floor(Math.random() * 6) + 1;
         
    document.getElementById("xLabel").innerHTML = x; 
    document.getElementById("yLabel").innerHTML = y;
    document.getElementById("zLabel").innerHTML = z;
} // when we press rollButton, we generate 3 random numbers and roll 3 dice

// console.log(x);
// console.log(y);
// console.log(z);