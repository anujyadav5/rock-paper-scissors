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

let playerWin
let computerWin

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    playerWin = false;
    computerWin = false;

    if (playerSelection == "rock") {
        switch (computerSelection) {
            case "rock":
                return "It's a tie! Two rocks collide";
            case "paper":
                computerWin = true;
                return "You loose! Paper envelops rock";
            case "scissors":
                playerWin = true;
                return "You win! Rock crushes scissors";
        }
    } else if (playerSelection == "paper") {
        switch (computerSelection) {
            case "rock":
                playerWin = true;
                return "You win! Paper envelops rock";
            case "paper":
                return "It's a tie! Two papers slide apart";
            case "scissors":
                computerWin = true;
                return "You loose! scissors cut through paper";
        }
    } else if (playerSelection == "scissors") {
        switch (computerSelection) {
            case "rock":
                computerWin = true;
                return "You loose! Rock crushes scissors";
            case "paper":
                playerWin = true;
                return "You win! Scissors cut through paper";
            case "scissors":
                return "Its a tie! Two scissors interlock";
        }
    } else {
        return "Error, please enter a valid choice";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; ((i<5) || (playerScore == computerScore));i++) {
        playRound(prompt("Choose your weapon - rock, paper or scissors: "), computerPlay());
        if (playerWin) {
            playerScore++;
        } else if (computerWin) {
            computerScore++;
        }
        console.log(playerScore, computerScore)
    }

    return ((playerScore > computerScore) ? 
    `You win! Final score was ${playerScore} : ${computerScore}` :
    `You loose! Final score was ${playerScore} : ${computerScore}`);
}