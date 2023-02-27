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
