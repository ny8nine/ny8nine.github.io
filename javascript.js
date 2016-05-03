//document.getElementById("paintbrush").onclick = 'alert("clicked")';
var highlight = ["#67D5B5", "#EE7785", "#C89EC4", "#84B1ED"];

//pick random number between 0 and max
function picker(max) {
  return Math.floor(Math.random() * max);
}



function myFunction() {
	var i = picker(highlight.length);
	var color = highlight[i]; 
	
  var text = document.getElementsByClassName("color");
  for (var i=0; i<text.length; i++){
  	text[i].style.color= color;
  }
  var link = document.getElementsByTagName("a");
  for(var i=0; i<link.length; i++){
  	link[i].style.color=color;
  }

  var image = document.getElementsByClassName("image");
  for(var i=0; i<image.length; i++){
  	image[i].style.fill=color;
  }
}
