// array containing quote objects

var Quotes = [

  {
   quote: "The more I study nature, the more I stand amazed at the work of the Creator.",
   source: "Louis Pasteur",
   citation: "Louis Pasteur-Founder of Modern Medicine, pg. 75",
   tags: "Science"
 },

  {
    quote: "Anxiety does not empty tomorrow of its sorrows, but only empties today of its strength.",
    source: "Charles Spurgeon",
    tags: "Religion"
  },

  {
    quote: "It takes a great man to give sound advice tactfully, but a greater to accept it graciously.",
    source: "Logan Pearsall Smith",
    tags: "Accepting Advice"
  },

  {
    quote: "It is not how much we have, but how much we enjoy, that makes happiness.",
    source: "Charles Spurgeon",
    tags: "Happiness"
  },

  {
    quote: "A lie can travel half way around the world while the truth is putting on its shoes.",
    source: "Charles Spurgeon",
    tags: "Religion"
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
  message += '<p class ="source">' + randomQuote.source;
  if (! randomQuote.citation) {
  } else {
    message += '<span class ="citation">' + randomQuote.citation + '</span>';
  }
  if (! randomQuote.year) {
  } else {
    message += '<span class ="year">' + randomQuote.year + '</span>';
  }
  // document.write(message);
  message += ', <span class="tags">' + randomQuote.tags + '</span>';

  // prints final HTML to the page
  document.getElementById('quote-box').innerHTML = message;

  // var refreshQuote = setInterval(document.getElementById('quote-box').innerHTML = message, 100);
}


// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
