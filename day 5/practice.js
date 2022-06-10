/*import { setTimeout } from "timers/promises";

function myFun() {
  let firstPlayer = Math.floor(Math.random() * 100) + 1;
  let secondPlayer = Math.floor(Math.random() * 100) + 1;
  console.log(`First Player: ${firstPlayer} | Second Player: ${secondPlayer}`);
  if (firstPlayer === secondPlayer) {
    console.log("Match!");
  }
}

while (true) {
  myFun();
  await setTimeout(50);
}
*/

// coin propobility for statistics 

function coinProb(times) {
    let face = 0; // 0 is the face
    let back = 0; // 1 is the back
    for (let i = 0; i < times; i++) {
        let flip = Math.floor(Math.random() * 2); //gives either 0 or 1
        if (flip) {
            back++; 
        } else {
            face++; 
        }
    }
    console.log(`Faces - ${face} | Backs - ${back}. The propobity for face - ${face / times * 100}% | for back - ${back / times * 100}%`)
}

coinProb(100000);

console.log("\n");

// card dealing game 

let cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
let suits = ["romb", "krest", "serdce", "cerv"];

function deal(numberOfPlayers) {
    for (let i = 1; i <= numberOfPlayers; i++) {
        let card = Math.floor(Math.random() * cards.length);
        let cardSuit = Math.floor(Math.random() * suits.length); 
        console.log(`The player ${i} got ${cards[card]} - ${suits[cardSuit]}\n`);
    }
}

deal(10);

// working with function more advanced concepts 
// making console STEPN for ROFL

// logic: 
/*
    1) there types of snekers 
    2) the power regenerates after some time 
    3) to earn money should run and spend time 
    4) save money to the wallet
*/

const sneakers = {
    "adidas" : 100, 
    "nike" : 200,
    "new balance" : 150, 
    "puma" : 50
}

const runners = ["adidas", "nike", "new balance", "puma"];

let wallet = 0;

function run(sneaker, powerLeft) {
    return function (dailyBonus) {
        return powerLeft + dailyBonus;
    }
} 
for (let i = 0; i < 10; i++) {
    console.log(`day ${i + 1} - `);
    for (let s of runners) {
        const dailyRun = run(s, sneakers.adidas);  
        console.log(`running with ${s}\n`)
        wallet += dailyRun(Math.floor(Math.random() * 100) + 1);
    }
}

console.log(wallet);