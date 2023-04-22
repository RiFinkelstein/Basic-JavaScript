let secretNumber = Math.floor(Math.random() * 100) + 1;
let guess;
let guessCount = 0;

while (guess !== secretNumber) {
  guess = parseInt(prompt("Guess a number between 1 and 100:"));
  guessCount++;
  
  if (isNaN(guess)) {
    alert("Please enter a valid number.");
  } else if (guess < 1 || guess > 100) {
    alert("Please enter a number between 1 and 100.");
  } else if (guess < secretNumber) {
    alert("Too low! Try again.");
  } else if (guess > secretNumber) {
    alert("Too high! Try again.");
  } else {
    alert("Congratulations! You guessed the secret number in " + guessCount + " guesses!");
  }
}
