//apprach to challenge

/*
variables needed:
1) array of alphabet letters needed
2) wins
3) losses
4) event clicker for when user types
*/

/*
Computer picks letter and stores in memory
User makes selection on keypad
Computer recognizes the letter as part of the alphabet, or a valid entry or associates the entry as invalid
Computer then matches if the entereed letter matches that stored in memory
If not matched, then it gives the user another try and decreases the ticker
After guesses left ticker reacher 0 then, enter a loss
Reset here
If the entry matches the variable stored in memory then add one to the win variable
Reset here

*/

//declaring necessary variables
var wins = 0;
var losses = 0;
var userChoice = []; //array to capture the user responses
var guessesRemainding = 9;
var computerSelection;


//code for the game starts here
//calling the function that creates the game
game();

function game() {
    console.log("Initiating game") //test to make sure function is working

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    var randomSelection = alphabet[Math.floor(Math.random() * alphabet.length)];
    var computerSelection = randomSelection;

    console.log(randomSelection); //testing random selection

    checkAnswer();
    //
    function checkAnswer() {

        document.onkeyup = function (event) {
            //using the keyCode property to return user selection 
            var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); //what the user inputs

            console.log(userGuess);

            if (userChoice.indexOf(userGuess) >= 0) {
                alert("Looks like you already guessed that!")
            }

            else if (!(alphabet.includes(userGuess))) {
                alert("That was an invalid entry. Choose a letter from the alphabet.")

            }

            else if (userGuess === computerSelection) {
                alert("You did it! YOU WIN!")
                wins = wins + 1;
                console.log("wins " + wins)
                document.getElementById("wins").innerHTML = wins;

                gameReset();
            }

            else {
                guessesRemainding--;
                document.getElementById("guesses-left").innerHTML = guessesRemainding; //display guesses left
                userChoice.push(userGuess); //appending guesses to array

                console.log("These are the user guesses so far " + userGuess);//test the recorded guesses

                document.getElementById("your-guesses").innerHTML = userChoice;

                console.log("The user has the following guesses left " + guessesRemainding)

                outofGuesses();
            }

        }
    }

    function outofGuesses() {
        if (guessesRemainding == 0) {
            alert("I'm sorry,but it looks like you've lost.")
            losses = losses + 1;
            document.getElementById("losses").innerHTML = losses;

            gameReset();

        }
        else {
            checkAnswer();
        }
    }

    function gameReset() {
        alert("Let's play again. We'll keep track of the scores.")
        guessesRemainding = 9;
        userChoice = [];
        document.getElementById("guesses-left").innerHTML = guessesRemainding;
        document.getElementById("your-guesses").innerHTML = userChoice;

        game();

    }
}
