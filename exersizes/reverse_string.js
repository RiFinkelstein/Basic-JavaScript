function reverseString(str) {
  // Convert the string to an array of characters, reverse it, and then join the characters back into a string
  let reversedStr = str.split("").reverse().join("");
  return reversedStr;
}

let str = "hello world"; // Input string
let reversedStr = reverseString(str); // Call the function to reverse the string
console.log(reversedStr); // Display the reversed string
