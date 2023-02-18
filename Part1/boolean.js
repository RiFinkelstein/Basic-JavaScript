// intro to boolean
function welcomeToBooleans() {
  return true 
}


function trueOrFalse(wasThatTrue) {
    if (wasThatTrue){
      return "Yes, that was true"
    }
    return "No, that was false"
}

// == 
function testEqual(val) {
  if (val== 12) {
    return "Equal";
  }
  return "Not Equal";
}
testEqual(10);

//===
function testStrict(val) {
  if (val===7) { 
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);
