

                    // Steps to complete the game //
// the point of this game is to guess the letter that is randomly placed into the console.
    // if the letter that is in the console gets guessed, let the player know they won by
    // changing the value of "wins" to 1 and so forth.
        // else, if the player did not get the correct letter, drop letters guessed by 1
        // until the remaining has hit 0 and then tell the user that they lost by changing
        // losses to 1 //

// 1 - we need to start by creating an array of letters that can be picked  // Done!

// 2 - we need to do a math.random to pull the letter // Done!

// 3 - when the user guesses .onKeyUp push the event into lettersGuessed 


// List of all the Variables //
var letterOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "I", "j", "k", "l", "m",
                    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "I", "j", "k", "l", "m",
                "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var lettersGuessed = [];
var remaining = 9;
var wins = 0;
var losses = 0;

// Pulling the HTML id and assigning it a [variable] //
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var remainingText = document.getElementById("remainingGuess");
var guessesText = document.getElementById("guesses-already");

// Getting a random Letter from LetterOptions [Array] //
var randomLetter = Math.floor(Math.random() * letterOptions.length);

// storing the random letter in randomOption //
var randomOption = letterOptions[randomLetter];
// console.log(randomOption);


document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();

   if (alphabet.includes(userGuess)) {
       if (lettersGuessed.includes(userGuess) === false) {
           lettersGuessed.push(userGuess)
       }
       // Wins goes up if you guess it correctly
       if (randomOption.includes(userGuess)) {
           wins ++;
            // console.log("You Win");

       } else {
           remaining --;
        //    console.log("try again");
       }
   }



        winsText.textContent = "Wins: " + wins; 
        lossesText.textContent = "Losses: " + losses;
        remainingText.textContent = "Remaining: " + remaining;
        guessesText.textContent = "Your Guesses so far: " + lettersGuessed;

}

