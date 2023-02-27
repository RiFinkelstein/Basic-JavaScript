//objects
const myDog = {
  "name": "clifard",
  "legs": 4,
  "tails": 1,
  "friends": ["people, bones"]
};

//accessing object values using dot
// Setup
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};
const hatValue = testObj.hat;      
const shirtValue = testObj.shirt;   

//accessing object values using []
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};
const entreeValue = testObj["an entree"];  
const drinkValue = testObj["the drink"];   

//accessing object properties using variables
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

const playerNumber = 16;  
const player = testObj[playerNumber];  


//changing obejct variables
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog["name"] = "Happy Coder"

//adding properties objects
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "woof"

//deleting property objects
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

delete myDog.tails;


//using objects instead of elseif statements
function phoneticLookup(val) {
  var result = "";
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
  result = lookup[val];
  return result;
}
