function sayMyName(){
    var name = prompt('Your name?');	
    $("#title").html("Hello " + name);
  }
  
  $("#my-button").click(sayMyName);