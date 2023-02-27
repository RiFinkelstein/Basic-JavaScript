//switch case
function caseInSwitch(val) {
  let answer = "";
  switch (val) { 
  case 1:
      answer = "alpha";
      break;
  case 2:
      answer = "beta";
      break;
  case 3:
      answer = "gamma";
      break;
  case 4:
      answer = "delta";
      break;

  }
  return answer;
}

caseInSwitch(1);

//default
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
  // Only change code below this line
  switch (val) { 
  case "a":
      answer = "apple";
      break;
  case "b":
      answer = "bird";
      break;
  case "c":
      answer = "cat";
      break;
  default:
      answer = "stuff";
      break;

  }

  // Only change code above this line
  return answer;
}

switchOfStuff(1);

//multiple identical options
function sequentialSizes(val) {
  let answer = "";
  switch(val){
  case 1:
  case 2:
  case 3:
    answer="low"
    break
  case 4:
  case 5:
  case 6:
    answer="mid"
    break
  case 7:
  case 8:
  case 9:
    answer="high"
    break


  }
  return answer;
}

sequentialSizes(1);

//from if statment to swithc statement
function chainToSwitch(val) {
  let answer = "";
  switch(val){
  case "bob":
    answer = "Marley";
    break;
  case 42:
    answer = "The Answer";
    break;
  case 1:
    answer = "There is no #1";
    break;
  case 99:
    answer = "Missed me by this much!";
    break
  case 7:
    answer = "Ate Nine";
    break
  }
  return answer;
}

chainToSwitch(7);

//from if/else to function
function isLess(a, b) {
  return a<b;
}
isLess(10, 15);

// after terun code doesnt cont
function abTest(a, b) {
  if (a<0 || b<0){
    return undefined
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);
