function showNumbers(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
  }
}

showNumbers(3);
