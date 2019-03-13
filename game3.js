const donuts = ["cake", "sugar", "cronut", "eclair", "sassy"];

const numTries = 10;
var wins=0;
var losses=0;

var start = false;
var end = false;

//var randomDonutIndex;

// reset the game
// function reset() {
//     if (guessesLeft = numTries) {
//     start = false;
// } else {
//     start = true;
//     };

//pick a random donut from the donuts array
var randomDonut = donuts[Math.floor(Math.random() * donuts.length)];
console.log(randomDonut);
console.log(randomDonut.length);

//reset all counts

var guessesLeft = 10;
document.getElementById("num-Guesses-Left").innerHTML = guessesLeft;
var lettersGuessed = [];
//var compareLetters = [];
var place = [];

//count and display the  number of blanks for the current random donut word
var blanksForLetters = [];
//make this a function to get called to be able to match user input into the word
function iterThruLetters (letters) {
for (i=0; i<randomDonut.length; i++) {
    blanksForLetters.push("_");
}
document.getElementById("word-To-Use").innerHTML = blanksForLetters.join(" ");
}
iterThruLetters(blanksForLetters);
//console.log(blanksForLetters.length);
//determine what position within the current randomDonut word the letter is located and then display that
function whereInWord(guess) {
    for (j=0; j < randomDonut.length; j++) {
        console.log(randomDonut[j]);
        if(randomDonut[j] == guess) {
            place.push(guess);
        }
        console.log(place);
        }
        document.getElementById("word-To-Use").innerHTML = place;
    }

//store user key pressed
document.onkeyup = function (event) {
    var guess = event.key;
console.log(guess);
}

function replaceWithLetter() {
    for(var k = 0; k<randomDonut.length; k++) {
        if (randomDonut[k] == guess)
        {
            lettersGuessed[k] = guess;
        }
    }
    guessesLeft--;
    document.getElementById("word-To-Use").innerHTML = guess.join(" ");
}



//}