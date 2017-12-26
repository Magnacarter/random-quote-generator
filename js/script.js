// array of quote objects
var quotes = [
    one = {
        quote: "Ask not what your country can do for you, but what you can do for your country.",
        source: "JFK",
        citation: "Inagural Address",
        data: "January 20, 1961"
    },

    two = {
        quote: "Give me six hours to chop down a tree and I will spend the first four sharpening the axe.",
        source: "Abe Lincoln",
        citation: "A old western saloon.",
        data: ""
    },

    three = {
        quote: "Love is the only force capable of turning an enemy into a friend.",
        source: "MLK",
        citation: "A church",
        data: ""
    },

    four = {
        quote: "The future rewards those who press on. I don't have time to feel sorry for myself. I don't have time to complain. I'm going to press on.",
        source: "Barack Obama",
        citation: "",
        data: "Decemeber 21, 2010"
    },

    five = {
        quote: "When you come to the end of your rope, tie a knot and hang on.",
        source: "FDR",
        citation: "",
        data: ""
    },

    six = {
        quote: "Happiness is when what you think, what you say, and what you do are in harmony.",
        source: "Gandhi",
        citation: "",
        data: ""
    },

    seven = {
        quote: "Blessed are the merciful, for they will be shown mercy.",
        source: "Jesus",
        citation: "Matthew 5:7",
        data: "32"
    },

    eight = {
        quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        source: "Mother Teresa",
        citation: "",
        data: "1950"
    },
];

// generate a random number between 0 and the length of our "quotes" array.
// keeping this function outside of get_random quotes seems more modular
function getRandomNumber() {
    var randomNum = Math.floor( Math.random() * quotes.length );
    return randomNum;
}

// build a random hexidecimal value
function setRandomColor() {
    return "#" + Math.random().toString(16).slice(2, 8);
}

// get a random quote from the "quotes" array.
function getRandomQuote() {
    return quotes[getRandomNumber()];
}

// look at the properties of randQuote, if they're not empty
// add them to the html variable.
function printQuote() {
    var randQuote = getRandomQuote(),
        quoteBox  = document.getElementById('quote-box'),
        html      = "";

    html += '<p class="quote">';
    html += randQuote.quote;
    html += '</p>';
    html += '<p class="source">';
    html += randQuote.source;

    if ( randQuote.citation !== "" ) {
        html += ', ';
        html += '<span class="citation">';
        html += randQuote.citation;
        html += '</span>';
    }

    if ( randQuote.data !== "" ) {
        html += ', ';
        html += '<span class="year">';
        html += randQuote.data;
        html += '</span>';
    }

    html += '</p>';

    quoteBox.innerHTML = html;
}

// load a random quote when the page is (re)loaded
window.onload = printQuote();

// load a new quote and change the body's background color 
// every 8 seconds
setInterval(function() {
    var body      = document.getElementsByTagName("body"), 
        randColor = setRandomColor();

    body[0].setAttribute("style","background-color:" + randColor);
    printQuote();
}, 8000);

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
