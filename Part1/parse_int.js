//convert string into integer
function convertToInteger(str) {
  return parseInt(str);
}
convertToInteger("56");

//Use the parseInt Function with a Radix
function convertToInteger(str) {
  return parseInt(str, 2)
}

convertToInteger("10011");
