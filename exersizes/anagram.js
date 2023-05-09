function isAnagram(str1, str2) {
  // Remove any non-alphanumeric characters and convert to lowercase
  str1 = str1.replace(/[^\w]/g, "").toLowerCase();
  str2 = str2.replace(/[^\w]/g, "").toLowerCase();

  // Sort the characters of the strings
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

// Example usage
const word1 = "listen";
const word2 = "silent";
console.log(isAnagram(word1, word2)); // Output: true

const word3 = "hello";
const word4 = "world";
console.log(isAnagram(word3, word4)); // Output: false
