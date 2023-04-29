// Function to generate a random number between 1 and 6 (inclusive)
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// Prompt the user to roll the dice
let userInput = prompt("Press enter to roll the dice.");

// Roll two dice and calculate the total
let dice1 = rollDice();
let dice2 = rollDice();
let total = dice1 + dice2;

// Display the results
alert("You rolled a " + dice1 + " and a " + dice2 + ", for a total of " + total + ".");
if (total === 7 || total === 11) {
  alert("You win!");
} else if (total === 2 || total === 3 || total === 12) {
  alert("You lose!");
} else {
  // Roll again until the user rolls the point (total) or a 7
  let point = total;
  alert("Your point is " + point + ". Roll again to try to match it, or roll a 7 to lose.");
  while (true) {
    userInput = prompt("Press enter to roll the dice again.");
    dice1 = rollDice();
    dice2 = rollDice();
    total = dice1 + dice2;
    alert("You rolled a " + dice1 + " and a " + dice2 + ", for a total of " + total + ".");
    if (total === point) {
      alert("You win!");
      break;
    } else if (total === 7) {
      alert("You lose!");
      break;
    }
  }
}
