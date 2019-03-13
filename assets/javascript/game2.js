//array for words to guess
const donuts = ["cake", "sugar", "cronut", "eclair", "jelly", "fritter", "crueller"];

//Global Variables
var numTries = 10;
var wins=0;
var guessedLetters=[];
var blanksForLetters = [];
var correctGuesses=0;

//start game, commented out for testing functions
function start() {
wordComplete();
//pick a random donut from the donuts array
var randomDonut = donuts[Math.floor(Math.random() * donuts.length)];
console.log(randomDonut);
var randomDonutLength = randomDonut.length;
console.log(randomDonutLength);

//display the  number of blanks for the current random donut word
var blanksForLetters = [];

function emptyLetters (letters) {
for (i=0; i<randomDonut.length; i++) {
    blanksForLetters.push("_");
}
document.getElementById("word-To-Use").innerHTML = blanksForLetters.join(" ");
}

emptyLetters(randomDonut);

//display stats
document.getElementById("wins").innerHTML = wins;
document.getElementById("num-Guesses-Left").innteHTML = numTries;
document.getElementById("lettersGuessed").innerHTML = guessedLetters;

//store user key pressed
document.onkeyup = function (event) {
    var guess = event.key;
console.log(guess);
//determine what position within the current randomDonut word the letter is located and then display that

   if(randomDonut.indexOf(guess) == -1 && numTries>0) {
        guessedLetters.push(guess);
        document.getElementById("lettersGuessed").innerHTML = guessedLetters;
        console.log(guessedLetters);
        numTries--;
        console.log(numTries);
        document.getElementById("num-Guesses-Left").innerHTL = numTries;
        restart();
   }

   if (randomDonut.includes(guess) && numTries>0) {
       var index = randomDonut.indexOf(guess);
       blanksForLetters.splice(index, 1, guess);
       document.getElementById("word-To-Use").innerHTML=blanksForLetters.join(" ");
        numTries--;
        correctGuesses++;
        console.log(correctGuesses);
        wordComplete();
   }
};

function wordComplete () {
    console.log(randomDonutLength);
    if (randomDonutLength == correctGuesses) {
    wins++;
    document.getElementById("you-won").innerHTML = "<h2>You've Won!!!</h1>";
    }
}
function restart() {
    if(numTries <=0) {
        wins++;
        document.getElementById("you-won").innerHTML.textContent = "You've Won!!!";
    document.getElementById("wins").innerHTML = wins;
    start();
    } else if (numTries < 0) {
        start();
    }
    }

}

start();
