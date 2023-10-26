const choices = ["rock", "paper", "scissors"]

function getComputerChoice(){
    return choices[Math.floor(Math.random() *3)];
    }

const playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
const computerSelection = getComputerChoice();

const winMessage = "You Win! You picked " + 
    playerSelection.toLowerCase() + 
    " and the computer picked " +
    computerSelection.toLowerCase() + 
    "!";
    
const drawMessage = "It's a draw! You both picked " + playerSelection.toLowerCase() + "!";
const loseMessage = "You lose! You picked " + playerSelection.toLowerCase() + " and the computer picked " + computerSelection.toLowerCase() + "..";

function playRound(playerSelection, computerSelection){
    console.log(playerSelection)
    console.log(computerSelection)
    if (playerSelection == "rock"){
        if (computerSelection == "rock"){
            console.log(drawMessage);
        } else if (computerSelection == "paper"){
            console.log(loseMessage);
        } else if (computerSelection == "scissors"){
            console.log(winMessage);
        }}
        else if (playerSelection == "paper"){
            if (computerSelection == "rock"){
                console.log(winMessage);
            } else if (computerSelection == "paper"){
                console.log(drawMessage);
            } else if (computerSelection == "scissors"){
                console.log(loseMessage);
            }}
        else if (playerSelection == "scissors"){
            if (computerSelection == "rock"){
                console.log(loseMessage);
            } else if (computerSelection == "paper"){
                console.log(winMessage);
            } else if (computerSelection == "scissors"){
                console.log(drawMessage);
            }}    
    }

playRound(playerSelection, computerSelection);