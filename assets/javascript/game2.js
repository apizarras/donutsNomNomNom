//array for words to guess
const donuts = ["cake", "sugar", "cronut", "eclair", "chocolate", "iced"];

//Global Variables
var numTries = 10;
var wins=0;
var guessedLetters=[];
var blanksForLetters = [];
var correctGuesses=0;

//start game
// function reset() {
//     numTries = 0;
//     guessedLetters = [];
//     document.getElementById("you-won").style.visibility = "hidden";
// }
function start() {
    //reset();
    document.getElementById("num-Guesses-Left").innerHTML = numTries;
    console.log(numTries);

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
        document.getElementById("num-Guesses-Left").innerHTML = numTries;
        youLost();
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

//determine whether or not the user has guessed all the letters in the word and won the game
function wordComplete () {
    console.log(randomDonutLength);
    if (randomDonutLength == correctGuesses) {
    wins++;
    document.getElementById("you-won").innerHTML = "<h2>You've Won!!! There is a new word available. Type a letter to begin guessing.</h1>";
    document.getElementById("wins").innerHTML = wins;
    restart();
    }
}
function youLost() {
    if(numTries == 0) {
        document.getElementById("you-won").innerHTML = "<h2>Sorry, Game Over...There is a new word available. Type a letter to begin guessing.</h2>";
    }
}

function restart() {
    if(randomDonutLength == correctGuesses) {
    start();
    } else if(numTries <= 0) {
        start();
    }
}
}

start();
