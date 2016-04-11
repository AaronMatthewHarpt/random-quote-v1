// array containing quotes
var Quotes = [
  var quote1 {
  quote: "You only thing against fear is fear itself.",
  source: "Anonymous",
  citation: "1997",
};
  var quote2 {
    quote: "You only thing against fear is fear itself.",
    source: "Anonymous",
    citation: "1997",
  };
  var quote3 {
  quote: "You only thing against fear is fear itself.",
  source: "Anonymous",
  citation: "1997",
};
  var quote4 {
    quote: "You only thing against fear is fear itself.",
    source: "Anonymous",
    citation: "1997",
  };
  var quote5 {
    quote: "You only thing against fear is fear itself.",
    source: "Anonymous",
    citation: "1997",
  };
]

for (var i = 0; i < Quotes.length; i ++) {
  console.log()
}

// function which get a random quote and then returns the randomly selected quote

function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  return (Quotes[randomNumber]);
}
/* calls "getRandomQuote" function, creates HTML template, and prints the final quote,
 source(if necessary), and citation(if necessary) to the web page
*/

function printQuote() {
getRandomQuote();
}

// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
