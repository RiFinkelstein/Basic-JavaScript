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

//<=
function testLessOrEqual(val) {
  if (val<=12) {  
    return "Smaller Than or Equal to 12";
  }

  if (val<=24) {  
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);

//&&
function testLogicalAnd(val) {
    if (val<=50 && val>=25) {
      return "Yes";
    }
    return "No";
}
testLogicalAnd(10);

//||
function testLogicalOr(val) {
  if (val<10 || val>20) {
    return "Outside";
  }
  return "Inside";
}

testLogicalOr(15);

//if/else
function testElse(val) {
  let result = "";
  if (val > 5) {
    result = "Bigger than 5";
  }
  else{
    result = "5 or Smaller";
  }
  return result;
}
testElse(4);

//elseif
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else if (val < 5) {
    return "Smaller than 5";
  }

  else{ return "Between 5 and 10";}
}

testElseIf(7);

//order of if statement
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  }
  if (val < 10) {
    return "Less than 10";
  } 
  else if (val < 10) {
    return "Less than 10";
  } 
  else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);


//elseif/else/if
function testSize(num) {
  if (num < 5) {
  return "Tiny"}
  else if (num < 10) {
  return "Small"
} else if (num<15) {
  return "Medium"}
 else if(num<20){
   return "Large"
 }
else {
  return "Huge"

testSize(7);
