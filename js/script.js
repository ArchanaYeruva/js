/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
***/
let quotes=[{
  "quote": "You are the shuckiest shuck faced shuck in the world!",
  "source": "James Dashner",
 "citation": "The Maze Runner",
  "year": 2009,
  }, {
    
      "quote": "I'm about as intimidating as a butterfly.",
      "source": "Dan Howell",
  },
  {
    "quote": "Act first, explain later.",
    "source": "Dan Brown",
    "citation": "Digital Fortress",
    "year": 1998,
  }, {
    "quote": "Seeing is believing.",
    "source": "Alyson Noel",
    "citation": "Blue Moon",
  },
  {
    "quote": "Entropy is just a fancy way of saying: things fall apart.",
    "source": "Dan Brown",
    "year": 2017,
  }
]



/***
 * `getRandomQuote` function
***/
function getRandomQuote() {

var random_index = Math.floor(Math.random() *5);
var obj = quotes[random_index];
return obj;
}

/***
 * `printQuote` function
***/
function printQuote(){
  let RandomQuote = getRandomQuote(); //calling the above function and storing it in a variable
  let PtoHTML1 = "<p class='quote'>" + RandomQuote.quote + "</p class='quote'>" +"<p class='source'>"+ RandomQuote.source;


  if ('citation' in RandomQuote==true) {
    PtoHTML1=PtoHTML1+"<span class='citation'>" + RandomQuote.citation+ "</span class='citation'>"  ;

  }//if condition to check whether citation is present or not


  if ('year' in RandomQuote==true ) {
    PtoHTML1=PtoHTML1+"<span class='year'>"+ RandomQuote.year + "</span class='year'>"  ;

  }//if condition to check whether year property is present or not

  PtoHTML1=PtoHTML1 + "</p>";


  document.getElementById('quote-box').innerHTML = PtoHTML1;



}
printQuote();
//function call



/***
 * click event listener for the print quote buttn
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
