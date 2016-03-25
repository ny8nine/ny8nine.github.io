//array of quotes
var quoteArr = [
  "Never mistake motion for action.<br><br> – Ernest Hemingway",
  "You will never find time for anything. If you want time, you must make it.<br><br> – Charles Buxton",
  "Yesterday’s home runs don’t win today’s games.<br><br> – Babe Ruth",
  "Self-made or never made!<br><br> – Orison Swett Maden",
  "Freedom lies in being bold.<br><br> – Robert Frost",
  "Show up. <br>Be Seen. <br>Live Brave.<br><br> – Brene Brown"
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