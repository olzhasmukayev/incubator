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