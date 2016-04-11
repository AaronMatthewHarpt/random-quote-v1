// array containing quote objects
var Quotes = [

  {
   quote: "You only thing against fear is fear itself.",
   source: "Anonymous",
   citation: "1997"
 },

   {
    quote: "You only thing against fear is fear Hello.",
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
    quote: "Hello.",
    source: "Anonymous",
    citation: "1997"
  }
];



// function which get a random quote and then returns the randomly selected quote

function getRandomQuote() {

  // for (var i = 0; i < Quotes.length; i += 1) {
  //   var randomQuote = (Quotes[randomNumber].quote);
  //   document.write(randomQuote);
  // }
var randomNumber = Math.floor(Math.random() * 6);
  for (var i = 0; i < Quotes.length; i += 1) {
    var randomQuote = Quotes[randomNumber].quote;
    document.write(randomQuote);
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
