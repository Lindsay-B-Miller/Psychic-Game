//variables
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var alreadyTried = [];

//computer needs to guess a letter
var computerLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(computerLetter)


//reset function when game over or player wins
var reset = function () {
    guessesLeft = 9;
    alreadyTried = [];
    computerLetter = letters[Math.floor(Math.random() * letters.length)];
}



//function for guesses=0
var noMoreGuess = function () {
    losses++;
    guessesLeft = 9;
    alreadyTried = [];
    computeerLetter = letters[Math.floor(Math.random() * letters.length)];
}

// //function for win
// function winner() {
//     win++;
//     reset();
// }

//user chooses a letter
document.onkeyup = function () {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess)

    //function for the number of guesses remaining and letters guessed already
    function numberGuessesRemain() {
        document.querySelector("#remaining-guesses").innerHTML = "Guesses Left: " + guessesLeft;
    }

    function guessesAlready() {
        document.querySelector("#already-tried").innerHTML = "Your guesses so far: " + alreadyTried + " ";
    }


    //comapre user and computer guess
    if (computerLetter === userGuess) {
        wins++;
        reset();
    }

    else if (alreadyTried.includes(userGuess)) {
        alert("You have already selected this letter. Please try a different letter")
    }

    else if (guessesLeft > 0) {
        guessesLeft--;
        alreadyTried.push(userGuess);
        numberGuessesRemain();
        guessesAlready();

    }
    else if (guessesLeft === 0) {
        noMoreGuess()
    }




    document.querySelector('#losses').innerHTML = "Losses: " + losses;
    document.querySelector('#wins').innerHTML = "Wins: " + wins;
    document.querySelector("#remaining-guesses").innerHTML = "Guesses Left: " + guessesLeft;
    document.querySelector("#already-tried").innerHTML = "Your guesses so far: " + alreadyTried;

}