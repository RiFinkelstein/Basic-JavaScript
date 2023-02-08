//reuasable function
function reusableFunction(){
  console.log("Hi World");
}

reusableFunction()

//parameters in funtions:
function functionWithArgs(x ,y){
  console.log(x/ y)
}
functionWithArgs(12 ,2)

//using return in functions
function timesFive(num) {
  return num * 5;
}
timesFive(5);
timesFive(2);
timesFive(0);

//gloabl scopes:
let myGlobal = 10

function fun1() {
  oopsGlobal = 5

}
function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

//local scopes:
function myLocalScope() {
  let myVar=3;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();
console.log('outside myLocalScope', myVar);

//local scope to overried gloabl scope:
const outerWear = "T-Shirt";
function myOutfit() {
  let outerWear = "sweater"
  return outerWear;
}
myOutfit();

//returning undefined value in function:
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}


function addFive(){
  sum = sum+ 5;
}

addThree();
addFive();


//assignments with a returned value:
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);
