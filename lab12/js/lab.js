// index.js - purpose and description here
// Author: Ryan Hollenbach
// Date: May 23, 2024

// Constants

// Functions
function sortingHat(str) {
  length = str.length;
  mod = length % 4;
  if (mod == 0) {
    return "Gryffindor"
  } else if (mod == 1) {
    return "Ravenclaw";
  } else if (mod == 2) {
    return "Slytherin";
  } else if (mod == 3) {
    return "Hufflepuff";
  }
}

function description(str) {
  if (str == "Gryffindor") {
    return "Those in this house are well known for their bravery and courage. Their house animal is the lion and their house colors are scarlet and gold. Gryffindors never back down from a fight or doing what they believe is right.";
  } 
  else if (str == "Ravenclaw") {
    return "prized learning, wisdom, wit, and intellect in its members. Thus, many Ravenclaws tended to be academically motivated and talented students. They also prided themselves on being original in their ideas, and methods.";
  }
  else if (str == "Slytherin") {
    return "known for being ambitious, cunning, and resourceful. Slytherins are also sometimes regarded as being evil thanks to the fact that many of the most sinister witches and wizards have been associated with this house.";
  }
  else if (str == "Hufflepuff") {
    return "characteristics include a strong sense of justice, loyalty, patience, and a propensity for hard work. Hufflepuffs are also seen as nice, almost to a fault. Hogwarts houses have moved beyond the realm of fiction and into the real world.";
  }
}

$("#button").click(function() {
  var name = $("#input").val();
  house = sortingHat(name);
  console.log(house);
  $("#output").append("<p>The Sorting Hat has sorted you into " + house + "</p>");
  $("#output").append("<p>" + description(house) + "</p>");
})


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
