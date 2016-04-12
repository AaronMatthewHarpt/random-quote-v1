// array containing quote objects
var Quotes = [

  quote1 = {
   quote: "You only thing against fear is fear itself.",
   source: "Anonymous",
   citation: "Famous quotes",
   year: 1997
 },

  quote2 = {
    quote: "You only thing against fear is fear Hello.",
    source: "Anonymous",
    citation: "Famous quotes",
    year: 1997
  },

  quote3 = {
    quote: "You only thing against fear is fear itself.",
    source: "Anonymous",
    citation: "Famous quotes",
    year: 1997
  },

  quote4 = {
    quote: "You only thing against fear is fear itself.",
    source: "Anonymous",
    citation: "Famous quotes",
    year: 1997
  },

  quote5 = {
    quote: "Hello.",
    source: "Anonymous",
    citation: "Famous quotes",
    year: 1997
  }
];



// function which get a random quote and then returns the randomly selected quote

function getRandomQuote() {

  // for (var i = 0; i < Quotes.length; i += 1) {
  //   var randomQuote = (Quotes[randomNumber].quote);
  //   document.write(randomQuote);
  // }
var randomNumber = Math.floor(Math.random() * Quotes.length);

  for (var i = 0; i < Quotes.length; i += 1) {
    return Quotes[randomNumber];
  }

}
getRandomQuote();
/* calls "getRandomQuote" function, creates HTML template, and prints the final quote,
 source(if necessary), and citation(if necessary) to the web page
*/

function printQuote() {
  var randomQuote = getRandomQuote();
  var message = '<p class="quote">' + randomQuote.quote + '</p>';
  message += '<p class="source">' + randomQuote.source + '</p>';
  message += '<span class="citation">' + randomQuote.citation + '</span>';
  document.write(message);
}
printQuote();

// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
