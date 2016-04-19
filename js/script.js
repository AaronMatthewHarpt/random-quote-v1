// array containing quote objects

var Quotes = [

  {
   quote: "Giving is true having.",
   source: "Charles Spurgeon",
   citation: "brainyquote.com",
   tags: "Giving, True"
 },

  {
    quote: "We are all at times unconscious prophets.",
    source: "Charles Spurgeon",
    citation: "brainyquote.com",
    tags: "Prophets"
  },

  {
    quote: "Of two evils, choose neither.",
    source: "Charles Spurgeon",
    citation: "brainyquote.com",
    tags: "Choose, Evils, Neither"
  },

  {
    quote: "Fortune favors the prepared mind.",
    source: "Louis Pasteur",
    citation: "brainyquote.com",
    tags: "Brainy, Prepared"
  },

  {
    quote: "Prayer is where the action is.",
    source: "John Wesly",
    citation: "brainyquote.com",
    tags: "Prayer, Action"
  }
];



/*
   function which creates a random number between 0 and the length of the Quotes array
   get a random quote and then returns the randomly selected quote
*/

function getRandomQuote() {

var randomNumber = Math.floor(Math.random() * Quotes.length);

  for (var i = 0; i < Quotes.length; i += 1) {
    return Quotes[randomNumber];
  }
}

/*
   function that creates a random number between 0 and the length of the Quotes array
   creates a random color, and then returns it
*/

function getRandomColor() {
  var red = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);

  var randomBackground = RGB(red, green, blue);

  // document.getElementById('quote-box').innerHTML = randomBackground;
}

// getRandomColor();


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
  message += ', <span class="tags">' + randomQuote.tags + '</span>';

  // prints final HTML to the page
  document.getElementById('quote-box').innerHTML = message;

  // var showQuote = setInterval(printQuote(), 1000);
}


// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
