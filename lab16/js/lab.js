// Comment block here
// Author: Ryan Hollenbach
// Date: June 6, 2024


var URL = "https://xkcd.com/info.0.json";


var URLpre = "https://xkcd.com/";
var URLpost = "info.0.json";



function make_safe(str) {
  return str.replace(/'/g, '&apos;').replace(/"/g, '&quot;');
}

function getComic(num) {
  if (typeof num === 'undefined') {
    numStr = "";
  } else {
    numStr = num.toString() + "/";
  }
  var ourURL = URLpre + numStr + URLpost;
  console.log("Our new URL:", ourURL);
  // get data via ajax
  
  $.ajax({
      // The URL for the request (ENDPOINT)
      url: ourURL,
      // Whether this is a POST or GET request
      type: "GET",
  })
  // If the request succeeds
  .done(function(data) {
      
      var imageUrl = data.img;
    
      var title = data.title;
      console.log("orig title:", title);
      title = make_safe(title);
      console.log("safe title:", title);
      var alt = data.alt;
      console.log("orig alt:", alt);
      alt = make_safe(alt);
      console.log("safe alt:", alt);
      var comicNum = data.num;
      var html = `<div id="imageblock">
          <h2>${title}</h2>
          <img src="${imageUrl}" title="${alt}"><br>
          <button id="prev">Previous</button><button id="next">Next</button>
        </div>`
      
      $("#output").html(html);

      // add event listener
      $("#prev").click(function(){
        getComic(comicNum - 1);
      });
      // add event listener 
      $("#next").click(function(){
        getComic(comicNum + 1);
      });
  })
  .fail(function(){
    console.log("Uhm something went wrong.");
    console.log("You cool or whatever <3");
  })

}


getComic();
