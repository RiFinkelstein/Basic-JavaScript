function cowsAndBulls(secretWord, guessWord) {
  let cows = 0;
  let bulls = 0;

  // Convert both words to lowercase
  secretWord = secretWord.toLowerCase();
  guessWord = guessWord.toLowerCase();

  // Iterate over the characters of the guess word
  for (let i = 0; i < guessWord.length; i++) {
    const guessChar = guessWord[i];

    // Check if the character exists in the secret word
    if (secretWord.includes(guessChar)) {
      // If the character is in the correct position, it's a bull
      if (secretWord[i] === guessChar) {
        bulls++;
      } else {
        // Otherwise, it's a cow
        cows++;
      }
    }
  }

  return { cows, bulls };
}

// Example usage
const secret = "hello";
const guess = "hills";
const result = cowsAndBulls(secret, guess);
console.log(`Cows: ${result.cows}, Bulls: ${result.bulls}`);
