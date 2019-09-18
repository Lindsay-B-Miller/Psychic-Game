//variables
var wins = 0;
var losses = 0;
var ties = 0;

//computer needs to guess a letter
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var computerLetter = Math.floor(Math.random * [letters.length]);
console.log(computerLetter)

//user chooses a letter
document.onkeyup = function () {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess)

    //comapre user and computer guess
    if (computerLetter === userGuess) {
        console.log("you win!");
    }
    else {
        console.log("you lose!")
    }

    var html = "<p>Guess what letter I'm thinking of</p>" +
        "<p>Wins: " + wins + "</p" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Ties: " + ties + "</p>";
}
