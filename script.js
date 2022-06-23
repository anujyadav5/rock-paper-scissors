function computerPlay() {
    rand = Math.floor(Math.random() * 3);
    switch (rand) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

let playerScore=0;
let computerScore=0;

function playRound(playerSelection, computerSelection) {
    results.textContent = '';

    if (playerSelection == "rock") {
        switch (computerSelection) {
            case "rock":
                results.textContent += "It's a tie! Two rocks collide";
                break;
            case "paper":
                results.textContent += "You loose! Paper envelops rock";
                computerScore += 1;
                break;
            case "scissors":
                results.textContent += "You win! Rock crushes scissors";
                playerScore += 1;
        }
    } else if (playerSelection == "paper") {
        switch (computerSelection) {
            case "rock":
                results.textContent += "You win! Paper envelops rock";
                playerScore += 1;
                break;
            case "paper":
                results.textContent += "It's a tie! Two papers slide apart";
                break;
            case "scissors":
                results.textContent += "You loose! scissors cut through paper";
                computerScore += 1;
        }
    } else if (playerSelection == "scissors") {
        switch (computerSelection) {
            case "rock":
                results.textContent += "You loose! Rock crushes scissors";
                computerScore += 1;
                break;
            case "paper":
                results.textContent += "You win! Scissors cut through paper";
                playerScore += 1;
                break;
            case "scissors":
                results.textContent += "Its a tie! Two scissors interlock";
        }
    } else {
        return "Error, please enter a valid choice";
    }

    scoreBox.textContent = `You ${playerScore} : ${computerScore} Computer`;

    if (playerScore == 5) {
        results.textContent = `Game oer, you win!`;
        playerScore = computerScore = 0;
    } else if (computerScore == 5) {
        results.textContent = `Game over, you loose...`;
        playerScore = computerScore = 0;
    }
}


const results = document.getElementById('results');
const scoreBox = document.getElementById('score');
scoreBox.textContent = `You ${playerScore} : ${computerScore} Computer`;

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

rockButton.addEventListener('click', () => {playRound('rock', computerPlay())});
paperButton.addEventListener('click', () => {playRound('paper', computerPlay())});
scissorsButton.addEventListener('click', () => {playRound('scissors', computerPlay())});
