// array containing quote objects

var quotes = [

  {
   quote: "quote 1",
   source: "source 1",
   citation: "citation 1",
   tags: "tag 1"
 },

  {
    quote: "quote 2",
    source: "source 2",
    citation: "citation 2",
    tags: "tag 2"
  },

  {
    quote: "quote 3",
    source: "source 3",
    citation: "citation 3",
    tags: "tag 3"
  },

  {
    quote: "quote 4",
    source: "source 4",
    citation: "citation 4",
    tags: "tag 4"
  },

  {
    quote: "quote 5",
    source: "source 5",
    citation: "citation 5",
    tags: "tag 5"
  }
];

/*
   function which creates a random number between 0 and the length of the Quotes array
   get a random quote and then returns the randomly selected quote
*/

function getRandomQuote() {

var randomNumber = Math.floor(Math.random() * quotes.length);

  for (var i = 0; i < quotes.length; i += 1) {
    return quotes[randomNumber];
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
  return 'rgb(' + red + ',' + green + ',' + blue + ')';

}

/* calls "getRandomQuote" function, creates HTML template, and prints the final quote,
 source, and citation (if applicable), and year (if applicable) and tags (if applicable) to the web page
*/

function printQuote() {
// random quote
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
  message += ', <span class="tags">' + randomQuote.tags + '</span></p>';



  // prints final HTML to the page
  document.getElementById('quote-box').innerHTML = message;

  // random color
     var randomColor = getRandomColor();
    // prints final HTML to the page
     document.body.style.background=randomColor;

}

// run random quote and random color after 30 seconds
   setInterval(printQuote, 30000);

// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
