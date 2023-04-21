function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
const myArray = [1, 2, 3, 4];
const result = sumArray(myArray);
console.log(result); // output: 10
