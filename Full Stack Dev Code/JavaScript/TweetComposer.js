/* When given a tweet, the code will inform you of how many characters you've written and how many you have left 
   If you've gone over the character limit it will delete anything after your limit*/

var tweet = prompt("Type your tweet here : "); 
var tweetCurrent = tweet.length;
var tweetRemaining = 280 - tweetCurrent;
var tweetSlice = tweet.slice(0, 280);
alert("You have written " + tweetCurrent + " characters, you have " + tweetRemaining + " characters left");
alert(tweetSlice);