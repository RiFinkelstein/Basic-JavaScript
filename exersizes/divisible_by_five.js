const numbers = [10, 15, 7, 25, 30, 12, 8, 20];

const divisibleByFive = numbers.filter(num => num % 5 === 0);

console.log(divisibleByFive); // Output: [10, 15, 25, 30, 20]
