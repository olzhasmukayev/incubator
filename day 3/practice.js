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


