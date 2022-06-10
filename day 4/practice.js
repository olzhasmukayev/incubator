console.log("Health tracker console app\n");

const tracker = {
    totalSteps : null, 
    yourWeight : null,
    sleepTime : null, 
    overallHealth : null,
    habbits : {
        smoking : null,
        drinking : null
    }
}

let users = [];

console.log("Inserting new user to the database\n");

let userId = 20201234; 

if (userId !== null) {
    users.push(userId);
}

console.log("Setting the health info for the user with id - " + userId + "\n")

tracker.totalSteps = 23500;
tracker.yourWeight = "53.5kg";
tracker.sleepTime = "8:54";
tracker.overallHealth = 8.9; 
tracker.habbits.smoking = "no";
tracker.habbits.drinking = "no";

console.log(`User health information with id - ${userId}\n`);
console.log(tracker);

// working with for loops

console.log("Playing the game, randomizer from 1 to 100\n");

let targetNumber = 69; 
console.log("Target Value is " + targetNumber + "\n");

let guess = Math.floor(Math.random() * 10000) + 1;
while (guess !== targetNumber) {
    guess = Math.floor(Math.random() * 10000) + 1;
    console.log(`Target -> ${targetNumber} | Guess -> ${guess}\n`);
}

console.log(`Complete!`)