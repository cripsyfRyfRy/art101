// index.js - purpose and description here
// Author: Ryan Hollenbach
// Date: May 12, 2024

// Constants

// Functions

// // add button to challenge section
// $("#challenge").append("<button id='button-challenge'>Make Special</button>");
$(".minor-section").append("<button class='button-special'>Make Special</button>");

$(".button-special").click(function(){
  $(this).parent().toggleClass("special");
});

// // add a click listener to the challenge button
// $("#button-challenge").click(function(){
//   // now add (or subtract) the "special" class to the section
//   $("#challenge").toggleClass("special");
// });

// // add button to problems section
// $("#problems").append("<button id='button-problems'>Make Special</button>");

// // add a click listener to the problems button
// $("#button-problems").click(function(){
//   // now add (or subtract) the "special" class to the section
//   $("#problems").toggleClass("special");
// });

// // add button to reflection section
// $("#reflection").append("<button id='button-reflection'>Make Special</button>");

// // add a click listener to the reflection button
// $("#button-reflection").click(function(){
//   // now add (or subtract) the "special" class to the section
//   $("#reflection").toggleClass("special");
// });

// // add button to results section
// $("#results").append("<button id='button-results'>Make Special</button>");

// // add a click listener to the results button
// $("#button-results").click(function(){
//   // now add (or subtract) the "special" class to the section
//   $("#results").toggleClass("special");
// });


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
