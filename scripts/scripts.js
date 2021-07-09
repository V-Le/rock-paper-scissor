// Paper Rock Scissor game
let playerScore = 0;
let computerScore = 0;
const container = document.querySelector('#container');
const resultsDiv = document.createElement('div');
const resultsScore = document.createElement('p');
const resultsText = document.createElement('p');
resultsDiv.appendChild(resultsScore);
resultsDiv.appendChild(resultsText);
container.appendChild(resultsDiv);

function createPlayerChoice(choice) {
    // create VARIABLE to store player choice
    switch (choice) {
        case "rock":
            return "rock";
        case "paper":
            return "paper";
        case "scissor":
            return "scissor";
    }
}

function createComputerChoice() {
    // CREATE VARIABLE to store computer choice
    let computerSelection = ['rock', 'paper', 'scissor']
    // Computer picks at random rock paper scissors and return computer choice
    return computerSelection[Math.floor(Math.random()*3)];
}

function comparePlayerComputerChoice(playerSelection, computerSelection) {
    let outcomeMessage;
    
    
// IF player choose rock
    if (playerSelection == "rock"){
        if (computerSelection == "rock") {
            outcomeMessage = "Both chose rock. Game is a tie";
        } else if (computerSelection == "paper") {
            computerScore += 1;
            outcomeMessage = "Player chose rock, computer chose paper. Computer wins.";
        } else if (computerSelection == "scissor"){
            playerScore += 1;
            outcomeMessage = "Player chose rock, computer chose scissor. Player wins.";
        }
    }

// IF player choose paper
    if (playerSelection == "paper"){
        if (computerSelection == "paper") {
            outcomeMessage = "Both chose paper. Game is a tie";
        } else if (computerSelection == "scissor") {
            computerScore += 1;
            outcomeMessage = "Player chose paper, computer chose scissor. Computer wins.";
        } else if (computerSelection == "rock"){
            playerScore += 1;
            outcomeMessage = "Player chose paper, computer chose rock. Player wins.";
        }
    }

// IF player choose scissor
    if (playerSelection == "scissor"){
        if (computerSelection == "scissor") {
            outcomeMessage = "Both chose scissor. Game is a tie";
        } else if (computerSelection == "rock") {
            computerScore += 1;
            outcomeMessage = "Player chose scissor, computer chose rock. Computer wins.";
        } else if (computerSelection == "paper"){
            playerScore += 1;
            outcomeMessage = "Player chose scissor, computer chose paper. Player wins.";
        }
    }
    resultsText.innerHTML = "player score: " + playerScore + "<br>" +
                            "computer score: " + computerScore + "<br>" +
                            outcomeMessage;
    
    
    return;
}

function playRound(choice){
    let storePlayerChoice = createPlayerChoice(choice);
    let storeComputerChoice = createComputerChoice();
    return comparePlayerComputerChoice(storePlayerChoice, storeComputerChoice);
}

function game(choice) {
    return playRound(choice);
}


const button = document.querySelectorAll('button');
button.forEach(button => button.addEventListener('click', () => game(button.value)));
