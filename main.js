const ROCK = "rock"
const PAPER = "paper"
const SCISSORS = "scissors"

const choices = [ROCK, PAPER, SCISSORS]

const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () => playRound(ROCK));

const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", () => playRound(PAPER));

const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", () => playRound(SCISSORS));

const result = document.querySelector("#result");
const score = document.querySelector("#score");

function getComputerChoice(){
    return choices[Math.floor(Math.random() *3)];
    }

let playerScore = 0;
let computerScore = 0;

function endGame(){
    if (playerScore > computerScore){
        result.textContent = "You WON! Enjoy living forever";
    } else {
        result.textContent = "The computer wins! That means nothing changes";
    }

    score.textContent = "Final score: " + playerScore + " - " + computerScore + ". Click a button to start over";
    playerScore = 0;
    computerScore = 0;
}

function playRound(playerSelection){

    let computerSelection = getComputerChoice();



    const winMessage = "Point for you! You picked " + 
        playerSelection.toLowerCase() + 
        " and the computer picked " +
        computerSelection.toLowerCase() + 
        "!";
    
    const drawMessage = "It's a draw! You both picked " + 
        playerSelection.toLowerCase() + 
        "!";

    const loseMessage = "Point for the computer! You picked " + 
        playerSelection.toLowerCase() + 
        " and the computer picked " + 
        computerSelection.toLowerCase() + 
        "..";


    if (playerSelection == ROCK){
        if (computerSelection == ROCK){
            // DRAW
            draw();
        } else if (computerSelection == PAPER){
            // LOSE
            lose();
        } else if (computerSelection == SCISSORS){
            // WIN
            win();
        }}
        else if (playerSelection == PAPER){
            if (computerSelection == ROCK){
                // WIN
                win();
            } else if (computerSelection == PAPER){
                // DRAW
                draw();
            } else if (computerSelection == SCISSORS){
                // LOSE
                lose();
            }}
        else if (playerSelection == SCISSORS){
            if (computerSelection == ROCK){
                // LOSE
                lose();
            } else if (computerSelection == PAPER){
                // WIN
                win();
            } else if (computerSelection == SCISSORS){
                // DRAW
                draw();
            }}    

        function win(){
            result.textContent = winMessage;
            playerScore = playerScore +1;
        }
        function lose(){
            result.textContent = loseMessage
            computerScore = computerScore +1;
        }    
        function draw(){
            result.textContent = drawMessage
        }

        score.textContent = "Score: " + playerScore + " - " + computerScore;

        if (playerScore >= 5 || computerScore >= 5){
            endGame();
        }
    }