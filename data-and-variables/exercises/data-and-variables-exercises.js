// Declare and assign the variables below
let nameofShuttle = "Determination";
let shuttleSpeedMPH = 17500;
let distancetoMarsKMH = 225000000;
let distancetoMoonKMH = 38400;
const milesperKM = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof(nameofShuttle));
console.log(typeof(shuttleSpeedMPH));
console.log(typeof(distancetoMarsKMH));
console.log(typeof(distancetoMoonKMH));
console.log(typeof(milesperKM));

// Calculate a space mission below
let milestoMars = distancetoMarsKMH *  milesperKM;
let hours = milestoMars / shuttleSpeedMPH;
let daystoMars = hours / 24;


// Print the results of the space mission calculations below

console.log(nameofShuttle + ' will take ' + daystoMars + " days to reach Mars.");

// Calculate a trip to the moon below

let milestoMoon = distancetoMoonKMH * milesperKM;
let hourstoMoon = milestoMoon / shuttleSpeedMPH;
let daystoMoon = hours/24;

// Print the results of the trip to the moon below

console.log(nameofShuttle + " will take "  +   daystoMoon + " days to reach the Moon.");
