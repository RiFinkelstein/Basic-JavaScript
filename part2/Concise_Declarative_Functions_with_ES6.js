//const bicycle = {
  //gear: 2,
  //setGear: function(newGear) {
    //this.gear = newGear;
  //}
//};
//bicycle.setGear(3);
//console.log(bicycle.gear);

//above is same as below
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(3);
console.log(bicycle.gear);
