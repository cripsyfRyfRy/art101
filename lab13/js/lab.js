// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions
function fizzBuzzBoom() {
  for (var num = 1; num<=200; num++) {
    var outputStr = "";
    if (num % 3 == 0) {
      outputStr += "Fizz";
    }
    if (num % 5 == 0) {
      outputStr += "Buzz";
    }
    if (num % 7 == 0) {
      outputStr += "Boom";
    }
    if (outputStr == "") {
      $("#output").append("<p>" + num + "</p>");
    } else {
      $("#output").append("<p>" + outputStr + "</p>");
    }
  }
}

fizzBuzzBoom();

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
