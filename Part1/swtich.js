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
