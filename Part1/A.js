//nest one array into another array
const myArray = [["RIVKA", 20], ["HENNA", 24]]; 

//choosing 1st item in array to print:
const myArray = [50, 60, 70];
const myData= myArray[0]
console.log(myData); 

//modify array with index:
const myArray = [18, 64, 99];
myArray[0]=45; 

//access multiple array:
const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];

//manipulate arrays with push method:
const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);

//manipulate arrays with pop method:
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
const removedFromMyArray= myArray.pop()
