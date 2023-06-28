function bouncer(arr) {
  let filteredArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (Boolean(arr[i])) {
      filteredArray.push(arr[i]);
    }
  }

  return filteredArray;
}


bouncer([7, "ate", "", false, 9]);
