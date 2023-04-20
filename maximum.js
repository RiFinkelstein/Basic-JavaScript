function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

let arr1 = [1, 5, 2, 9, 3]; // Input array 1
let arr2 = [4, 2, 8, 1, 5]; // Input array 2
console.log(findMax(arr1)); // Display the maximum value of array 1
console.log(findMax(arr2)); // Display the maximum value of array 2
