// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions
$("#activate").click(function() {
  var pokeId = Math.floor(Math.random() * (1025 - 1 + 1)) + 1;
  $.ajax({
    // The URL for the request (from the api docs)
    url: "https://icanhazdadjoke.com/",
    // The data to send (will be converted to a query string)
    // data: { 
    //         // here is where any data required by the api 
    //         //   goes (check the api docs)
    //       },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        const joke = data.joke;
        $("#output").html(joke);
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) { 
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
  })
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
