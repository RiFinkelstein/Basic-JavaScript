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

