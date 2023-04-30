// Define the game variables
let playerScore = 0;
let computerScore = 0;
let totalScore = playerScore + computerScore
let round = 1;

// Define the function to roll the dice
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Define the function to play a round of the game
function playRound() {
    console.log(`Round ${round}:`);

    // Roll the dice for the player and the computer
    const playerRoll = rollDice();
    const computerRoll = rollDice();

    // Determine the winner of the round
    if (playerRoll > computerRoll) {
        playerScore++;
        console.log(`You won the round! Your roll: ${playerRoll}, Computer's roll: ${computerRoll}`);
    } else if (playerRoll < computerRoll) {
        computerScore++;
        console.log(`You lost the round. Your roll: ${playerRoll}, Computer's roll: ${computerRoll}`);
    } else {
        console.log(`It's a tie! Your roll: ${playerRoll}, Computer's roll: ${computerRoll}`);
    }

    // Print the current scores
    console.log(`Current score: You: ${playerScore}, Computer: ${computerScore}`);

    // Increase the round counter
    round++;
}

// Play the game
console.log("Let's play a dice game!");
while (playerScore < 3 && computerScore < 3) {
    playRound();
}

// Determine the winner of the game
if (playerScore > computerScore) {
    console.log("You won the game!");
} else {
    console.log("You lost the game.");
}
