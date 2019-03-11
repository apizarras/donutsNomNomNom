//instructions to being the game


//define winning array values
const donuts = ["jelly", "crueller", "sugar","glazed", "buttermilk", "cake", "fritter", "cronut", "eclair"];

//randomly chosing a value from the donut array
var randomDonut = donuts[Math.floor(Math.random() * donuts.length)];
console.log(randomDonut);
//set the number of guesses the player can have
var numGuessesLeft = 15;
document.getElementById("num-Guesses-Left").innerHTML = numGuessesLeft;
var resetGuesses = " ";

//alert("Are you ready to start the game?");
//count the number of times the user has guessed the word correctly

//declare variables for wins and losses
var wins = 0;
var losses = 0;
var userLetterGuess = document.getElementById("userLetterGuess");
var numWins = document.getElementById("wins");
var numLosses = document.getElementById("losses");
var wrandomDonut = document.getElementById("word-to-use");
var currentWord = [];

console.log (randomDonut.length);
//looping through the current word and counting the number of letters in the word to show blanks for each letter
for (i=0; i<randomDonut.length; i++) {
    currentWord.push("_");
}    
document.getElementById("word-To-Use").innerHTML = currentWord.join(" ");


//recognize and store value of user input
var userLetter = [];
document.onkeyup = function(event) {
    var userLetter = event.key;
}
document.getElementById("userLetterGuess").innerHTML = userLetter;

//compare to randomly generated word and identify where that letter falls in the word
//does the letter exist within the randomDonut word?
//if it does, where in the word is it?
//display matching letter in correct space within the word
function whereLetter (letter) {
    var letterSelected = 0;
for (var j = 0; j <randomDonut.length; j++) {
    if (randomDonut[j].selected) {
        letterSelected++;
    }
}
return letterSelected.charAt[j];
}


//deal with letter that is guessed incorrectly


//determine if user won or lost

//update stats on user wins and losses

//reset game