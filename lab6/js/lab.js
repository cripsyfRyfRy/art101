// index.js - purpose and description here
// Author: Ryan Hollenbach
// Date: April 25, 2024

// Define Variables
const myTransport = ["bus", "walk", "bike", "car", "plane"];

// create an object for main ride
var myMainRide = {
    make: "Kia",
    model: "Soul",
    color: "Green",
    year: 2010,
  age: function() {
      return 2024 - this.year;
  }
}

// output
function main() {
  console.log("Main function started.");
  // the code that makes everything happen
  document.writeln("I get around by: " + myTransport + "<br>");
  document.writeln("My main ride is: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
}

main();