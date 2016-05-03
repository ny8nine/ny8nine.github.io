//array of quotes
var quoteArr = [
	"Why did the scarecrow win the Nobel Prize? <br><br>Because he was out standing in his field!",
  "What's the difference between ignorance and apathy?<br><br> I don't konw and I don't care.",
  "Where did George Washington keep his armies?<br><br>In his sleevies!",
  "What do you get when you cross a joke with a rhetorical question?",
  "What do you get when you put root beer in a square glass? <br><br>Beer",
];

var randnum = 0;
var twitter = "";

//pick random number between 0 and max
//used for picking a randrom element of the quote array
function picker(max) {
  return Math.floor(Math.random() * max);
};

//generate link for tweet button
function tweet(text) {
  //regualar expression to remove <br> from the tweets
  text = text.replace(/<br>/gi, '');
  return "http://twitter.com/home/?status=" + text
};

//on page load pick random quote
$(function() {
  randnum = picker(quoteArr.length);
  twitter = tweet(quoteArr[randnum]);
  $(".random").html(quoteArr[randnum]);

  //click "Another One" to get new quote
  $("#more").on("click", function() {
    randnum = picker(quoteArr.length);
    twitter = tweet(quoteArr[randnum]);
    $(".random").html(quoteArr[randnum]);
  });

  //click "Tweet this" to tweet the quote in the 'twitter' variable 
  $("#tweet").on("click", function() {
    window.open(twitter, "Tweet this!", "width=500, height=260");
  });
});