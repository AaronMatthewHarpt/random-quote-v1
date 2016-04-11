// array containing quote objects
var Quotes = [

  {
   quote: "You only thing against fear is fear itself.",
   source: "Anonymous",
   citation: "1997"
 },

   {
    quote: "You only thing against fear is fear itself.",
    source: "Anonymous",
    citation: "1997"
  },

  {
    quote: "You only thing against fear is fear itself.",
    source: "Anonymous",
    citation: "1997"
  },

  {
    quote: "You only thing against fear is fear itself.",
    source: "Anonymous",
    citation: "1997"
  },

  {
    quote: "You only thing against fear is fear itself.",
    source: "Anonymous",
    citation: "1997"
  }
];



// function which get a random quote and then returns the randomly selected quote

function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  for (var i = 0; i < Quotes.length; i++) {
    document.write((Quotes[randomNumber].Quotes));
  }

}
getRandomQuote();
/* calls "getRandomQuote" function, creates HTML template, and prints the final quote,
 source(if necessary), and citation(if necessary) to the web page
*/

function printQuote() {
  getRandomQuote();
}

// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
