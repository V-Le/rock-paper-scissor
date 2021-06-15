// Paper Rock Scissor game

function createPlayerChoice() {
    // create VARIABLE to store player choice
    let playerSelection;
    // PROMPT player to choose rock paper scissors (convert to lowercase)
    playerSelection = prompt("Please type: 'Rock', 'Paper', or 'Scissor'").toLowerCase();

    return playerSelection;
}

function createComputerChoice() {
    // CREATE VARIABLE to store computer choice
    let computerSelection;
    // Computer picks at random between 3 choices, Math.floor(Math.random()*3), rock paper scissors
    switch (Math.floor(Math.random()*3)) {
        case 0:
            computerSelection = "rock";
            break;
        case 1:
            computerSelection = "paper";
            break;
        case 2:
            computerSelection = "scissor"
            break;
    }
    // return computer choice
    return computerSelection;
}

function comparePlayerComputerChoice(playerSelection, computerSelection) {
    let outcomeMessage;
    
// IF player choose rock
    if (playerSelection == "rock"){
        if (computerSelection == "rock") {
            outcomeMessage = "Both chose rock. Game is a tie";
        } else if (computerSelection == "paper") {
            outcomeMessage = "Player chose rock, computer chose paper. Computer wins.";
        } else if (computerSelection == "scissor"){
            outcomeMessage = "Player chose rock, computer chose scissor. Player wins.";
        }
    }

// IF player choose paper
    if (playerSelection == "paper"){
        if (computerSelection == "paper") {
            outcomeMessage = "Both chose paper. Game is a tie";
        } else if (computerSelection == "scissor") {
            outcomeMessage = "Player chose paper, computer chose scissor. Computer wins.";
        } else if (computerSelection == "rock"){
            outcomeMessage = "Player chose paper, computer chose rock. Player wins.";
        }
    }

// IF player choose scissor
    if (playerSelection == "scissor"){
        if (computerSelection == "scissor") {
            outcomeMessage = "Both chose scissor. Game is a tie";
        } else if (computerSelection == "rock") {
            outcomeMessage = "Player chose scissor, computer chose rock. Computer wins.";
        } else if (computerSelection == "paper"){
            outcomeMessage = "Player chose scissor, computer chose paper. Player wins.";
        }
    }

    return outcomeMessage;
}

function playRound(){
    let storePlayerChoice = createPlayerChoice();
    let storeComputerChoice = createComputerChoice();
    return comparePlayerComputerChoice(storePlayerChoice, storeComputerChoice);
}

function game() {
    return playRound();
}

game();