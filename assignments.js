
// Feet to Mile Calculate
function feetToMile(feet) {
const mile = feet * 0.000189394;
return mile;

}
var mile = feetToMile(1000);
console.log(mile);


// Wood Calcultor
function woodCalculator(chair, table, bed) {
var chair = chair * 1;
var table = table * 3;
var bed = bed * 5;
var totalWood = chair + table + bed;
return totalWood;
}

console.log("You Need: " + woodCalculator(1, 1, 1) + " Cubic Feets");


// Brick Calculator
function brickCalculator(floor) {
var totalBrick,rest,FS,first,second,third;
if (floor > 0 && floor <= 10) {
totalBrick = floor * 15 * 1000;
return totalBrick;
}
else if (floor >= 11 && floor <= 20) {
first = 10 * 15 * 1000;
rest = floor - 10;
second = rest * 12 * 1000;
totalBrick = first + second;
return totalBrick;
}
else if (floor >= 21 ) {
FS = (10 * 15 * 1000)+(10 * 12 * 1000);
rest = floor - 20;
third = rest * 10 * 1000;
totalBrick = FS+third;
return totalBrick;
}
else {
  return "Invalid Value!";
}
}
console.log(brickCalculator(-1));

// Find TinyFriend

var friendName = ["Ria", "Arzu", "Mi", "Kader", "Rahat"];

function tinyFriend(friendName) {
  const asc = friendName.sort((a, b) => a.length - b.length);
  return asc[0];

}
console.log(tinyFriend(friendName));