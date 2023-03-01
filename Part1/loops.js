//while loops
const myArray = [];

let i = 5;
while (i >= 0) {
    myArray.push(i);
    i--;
}

//for loop
const myArray = [];

for (let i=1; i<=5; i++){
  myArray.push(i);
}

//odd numbwer for loop
// Setup
const myArray = [];
  for (let i = 1; i < 11; i += 2) {
  myArray.push(i);
}

//backwords for loop
const myArray = [];
for (let i = 9; i > 0; i -= 2) {
  myArray.push(i);
}

//iterating through for loops 
const myArr = [2, 3, 4, 5, 6];
let total=0
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
