// #4  (00:21:14) user input 🧮

/*
How to accept user input

EASY WAY with a window prompt

DIFFICULT WAY HTML textbox
*/

// let username = window.prompt("What's your name?");

let username;

document.getElementById("myButton").onclick = function() {
    username = document.getElementById("myText").value;
    console.log(username);
    // document.getElementById("myLabel").innerHTML = "Hello " + username;
}