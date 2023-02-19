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

//!=
// Setup
function testNotEqual(val) {
  if (val!=99) {
    return "Not Equal";
  }
  return "Equal";
}
testNotEqual(10);

//!==
// Setup
function testStrictNotEqual(val) {
  if (val!==17) { 
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);


//>
function testGreaterThan(val) {
  if (val>100) {  
    return "Over 100";
  }

  if (val>10) {  
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

//>=
function testGreaterOrEqual(val) {
  if (val>=20) {  
    return "20 or Over";
  }

  if (val>=10) { 
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

//<less then
function testLessThan(val) {
  if (val<25) {  
    return "Under 25";
  }

  if (val<55) {  
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);
