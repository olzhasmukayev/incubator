// making the shop 
let shopName = "Magnum"; 
let shopOpenHours = "09:00 - 23:00";
let numberOfWorkers = 100000;
let avarageSalary = 145500.5; 

let customer = "Olzhas"; 
let visitHour = "11:45";

console.log(`${customer} visits the ${shopName} at ${visitHour}. He asks, why the workers work at ${shopName} for ${avarageSalary} from ${shopOpenHours} \n`);

console.log("Olzhas now wants to open his own shop called " + customer + "'s new " + shopName + "\n");

console.log("He sets the working ours randomly and the product prices random \n");

let newCustomer = "Anelya";

console.log(`${newCustomer} comes to the shop called ${customer + "'s " + shopName} and buys the apple for ${Math.floor(Math.random() * 10) + 1} \n`);

let newPhone = null; 

console.log("Olzhas at this moment doesn't have a phone. \n Now he has a phone");

newPhone = "Iphone 13";
console.log(`${customer.toUpperCase()} has a new phone which is ${newPhone}`);


console.log("\n\n");

let currentWeather = "sunny"; 
let itemWithMe = "glasses";

if (currentWeather === "sunny" && itemWithMe === "glasses") {
    console.log(`You are good to go, because the weather is ${currentWeather}, but make sure that you have taken ${itemWithMe}\n`);
} else if (currentWeather === "sunny" && itemWithMe !== "glasses") {
    console.log(`You can go outside, but u dont have glasses, so your eyes will heart\n`);
} else {
    console.log(`Wheather is not good, it's ${currentWeather}, please stay home \n`);
}

let balance = 10000;
let salary = 5000; 
let workDone = false; 

if (workDone) {
    balance += salary;
} else {
    console.log(`you should do your work`);
}

// using arrays for the practice
// the dish-washer (by hand)

let washer = []; // initially the dish washing place is empty 
washer.push("dish");
washer.unshift("dish"); 
washer.unshift("plate");
washer.unshift("cup");
washer.unshift("fork");

console.log(washer);
console.log("---------washing the dishes----------\n");

washer.shift();
console.log(washer);
washer.shift();
console.log(washer);
washer.shift();
console.log(washer);
washer.shift();
console.log(washer);
washer.shift();
console.log(washer);
console.log("---------dishes have been washed----------\n");

let dishPlace = ["fork", "spoon", "plate"];
let extraDishPlace = ["plate", "dish", "spoon"];

let newDishPlace = dishPlace.concat(extraDishPlace);
console.log(newDishPlace);

let asked = "fork";

console.log(`Olzhas please give me ${asked}\n`);
if (newDishPlace.includes(asked)) {
    console.log(`Hear is the ${asked}`);
} else {
    console.log(`we dont have ${asked}`);
}

let newPrintDish = newDishPlace.join("|");
console.log(newPrintDish);

console.log("we want to copy some of the dishes to the new dish place\n");

let dishingPlace = newDishPlace.slice(0, 3);
console.log(dishPlace);

console.log("insert dish to the list\n");
dishingPlace.splice(3, 0, "dish");
console.log(dishingPlace);

const arr = ["this is the correct array using const"];
console.log(arr);