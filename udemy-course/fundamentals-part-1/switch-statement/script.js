const day = "Wednesday";

switch(day) {
  case "Monday": // day === "Monday"
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break; // if you don't have a break, the code executes down the cases until there is a break
  case "Tuesday": // day === "Tuesday"
    console.log("Prepare theory videos");
    break;
  case "Wednesday": // day === "Wednesday"
  case "Thursday": // day === "Thursday"
    console.log("Write code examples");
    break;
  case "Friday": // day === "Friday"
    console.log("Record videos");
    break;
  case "Saturday": // day === "Saturday"
  case "Sunday": // day === "Sunday"
    console.log("Enjoy the weekend :D");
    break;
  default: // If the day isn't an option
    console.log("Not a valid day!");
    break;
}

const ifDay = "Monday";

if (ifDay === "Monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (ifDay === "Tuesday") {
  console.log("Prepare theory videos");
} else if (ifDay === "Wednesday" || ifDay === "Thursday") {
  console.log("Write code examples");
} else if (ifDay === "Friday") {
  console.log("Record videos");
} else if (ifDay === "Saturday" === ifDay === "Sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
}