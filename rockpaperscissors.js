// NOTE: Only works on https://repl.it/languages/javascript_web version of repl.it
// NOTE: Asks for all picks before displaying in console. help from #wdi-fundamentals seemed to suggest this is normal for this assignment

////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    if(move === undefined || move === null){
        var x = getInput();
        console.log('you play ' + x);
        return x;
    } else {
        return move;
    }
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    if (move === undefined || move === null) {
        var y = randomPlay();
        console.log('computer plays ' + y)
        return y;
    } else {
        return move;
    }
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.

    while (winner === undefined) {
        console.log('winner is undefined')
        // Resolve tie and break instantly
        if (playerMove == computerMove){
            winner = "tie";
        }
        // Player plays rock
        else if (playerMove == 'rock') {
            if (computerMove == 'scissors') { winner = "player"; }
            else { winner = "computer"; }}
        else if (playerMove == 'paper') {
            if (computerMove == 'rock') { winner = "player"; }
            else { winner = "computer"; }}
        else if (playerMove == 'scissors') {
            if (computerMove == 'paper') { winner = "player"; }
            else { winner = "computer"; }}
        }
        return winner;
}

var playerWins = 0;
var computerWins = 0;
    
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var winner = getWinner(getPlayerMove(getInput()), getComputerMove());
    console.log(winner + 'Wins!')
    
    
    if (winner == "computer"){
    	computerWins = computerWins + 1;
    } else if (winner == 'player') {
    	playerWins = playerWins + 1;
    }
}

while(playerWins < 5 && computerWins < 5){
	console.log(playerWins);
	console.log(computerWins);
	playToFive();
}

console.log("Score – player: " + playerWins + " computer: " + computerWins);