/*
Paper Rock Scissor game

create VARIABLE to store player choice
PROMPT player to choose rock paper scissors (convert to lowercase)
store player choice

CREATE VARIABLE to store computer choice
Computer picks at random between 3 choices, Math.floor(Math.random()*3), rock paper scissors
0 Rock
1 Paper
2 Scissors
store computer choice

compare player choice VARIABLE with computer choice VARIABLE
IF player choose rock
    IF computer chose 0 rock
        "Both chose rock. Game is a tie"
    ELSEIF computer choose 1 paper
        "Player chose rock, computer chose paper. Computer wins."
    ELSEIF computer choose 2 scissor
        "Player chose rock, computer chose scissor. Player wins."

IF player choose paper
    IF computer chose 1 paper
        "Both chose paper. Game is a tie"
    ELSEIF computer choose 2 scissor
        "Player chose paper, computer chose scissor. Computer wins."
    ELSEIF computer choose 0 rock
        "Player chose paper, computer chose rock. Player wins."

IF player choose scissor
    IF computer chose 2 scissor
        "Both chose scissor. Game is a tie"
    ELSEIF computer choose 0 rock
        "Player chose scissor, computer chose rock. Computer wins."
    ELSEIF computer choose 1 paper
        "Player chose scissor, computer chose paper. Player wins."

Play 5 times

*/
