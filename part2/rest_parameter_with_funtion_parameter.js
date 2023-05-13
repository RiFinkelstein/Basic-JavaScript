//function sum using the rest parameter in such a way that the function sum is able to take any number of arguments and return their sum.
const sum = (...z) => {
    let total = 0;
   for (let i = 0; i < z.length; i++) {
    total += z[i];
  }
  return total;
}
console.log(sum(1, 2, 3)); // 6 
