

            // Things to completed //
        // 1) dont allow the user to guess the same letter more then once.
        
// possible options for the user to pick from
var letterOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "I", "j", "k", "l", "m",
                    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// all the keys in the game that can be used
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "I", "j", "k", "l", "m",
                "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// These are starting variables but will be changed when the user plays
var lettersGuessed = [];
var remaining = 9;
var wins = 0;
var losses = 0;

// Pulling the HTML id and assigning it a [variable] //
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var remainingText = document.getElementById("remainingGuess");
var guessesText = document.getElementById("guesses-already");

var randomLetter = Math.floor(Math.random() * letterOptions.length);
var randomOption = letterOptions[randomLetter];



// a function we will create that will reset the game as well as store the data that is needed for the game to run before the user
// touches a key
function startGame() {

randomLetter = Math.floor(Math.random() * letterOptions.length);
randomOption = letterOptions[randomLetter];

console.log(randomOption);

remaining = 9;
lettersGuessed = [];
randomLetter;



// the text that will display before the user takes their first guess
winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
remainingText.textContent = "Remaining: " + remaining;
}

startGame()
// the function that will run when the user lets their finger off a key
document.onkeyup = function(event) {

    // storing the key the user pressed to a variable (userGuess) && making the text change to lower case
    var userGuess = event.key.toLowerCase();

    // checking to see if the userGuess is stored in our alphabet array
   if (alphabet.includes(userGuess)) {

        // if the lettersGuesses includes the usersGuess make it false (we dont want the user to guess the same letter twice)
       if (lettersGuessed.includes(userGuess) === false) {

        // run the below code if the usersGuess is already been guessed
           lettersGuessed.push(userGuess)
       }

    
       if (randomOption.includes(userGuess)) {

           wins++;
            console.log("You Win");
            startGame();
        
       } else {
           remaining--;
           console.log("try again");
        }
      
        // this makes the losses go up after remaining hits 0
        if (remaining <= 0) {
        losses++;
        console.log("you lost");
        startGame();
        }
       
        winsText.textContent = "Wins: " + wins; 
        lossesText.textContent = "Losses: " + losses;
        remainingText.textContent = "Remaining: " + remaining;
        guessesText.textContent = "Your Guesses so far: " + lettersGuessed;
    }
}