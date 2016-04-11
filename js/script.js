// array containing quotes
var Quotes = {
  quote1: "You only thing against fear is fear itself.",
	source1: "Anonymous",
	citation1: "1997",
	quote2: "You only thing against fear is fear itself.",
  source2: "Anonymous",
	citation2: "1997",
	quote3: "You only thing against fear is fear itself.",
  source3: "Anonymous",
	citation3: "1997",
	quote4: "You only thing against fear is fear itself.",
  source4: "Anonymous",
	citation4: "1997",
	quote5: "You only thing against fear is fear itself.",
  source5: "Anonymous",
	citation5: "1997"
};

for (var i = 0; i < Quotes.length; i ++) {
  console.log()
}

// function which get a random quote and then returns the randomly selected quote

function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  console.log(Quotes[randomNumber]);
}
getRandomQuote();

// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
