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
var userGuess = [];
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
            var userGuess = (event).toLowerCase();
            console.log(userGuess);

        }
    }
}
