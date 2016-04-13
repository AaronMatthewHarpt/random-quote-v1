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
    citation: "Famous quotes"
  }
];



/* function which creates a random number between 0 and the length of the Quotes array
   get a random quote and then returns the randomly selected quote
*/

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

// getRandomQuote();

/* calls "getRandomQuote" function, creates HTML template, and prints the final quote,
 source, and citation (if necessary), and year (if necessary) to the web page
*/

function printQuote() {
  var randomQuote = getRandomQuote();
  var message = '<p class ="quote">' + randomQuote.quote + '</p>';
  message += '<p class ="source">' + randomQuote.source + '</p>';
  if (randomQuote.citation === "") {
    message += '<span class ="citation">' + randomQuote.citation + '</span>';
  } else {
  }
  if (randomQuote.year === "") {
      message += '<span class ="year">' + randomQuote.year + '</span>';
  } else {
  }
  // document.write(message);
  
  // prints final HTML to the page
  document.getElementById('quote-box').innerHTML = message;
}


// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
