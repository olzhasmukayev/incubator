// building the bitcoin mining-like visualization toolkit

/* 
    What we need? 
        1) the balance 
        2) the random address generator 
        3) in some X time, give the 'valid' balance 
        4) store the valid wallets in the object
*/

let balance = 0.00;
let validWallets = {};
let invalids = {};
const randArr = [1, 2, 3, 4, 5, 6, 7, 8, 10];
let counter = 0;

function generate() {
    let alpha = "abcdefghijklmnopqersuvwxyz12345667890"; 
    let resString = "0x";

    for (let i = 1; i <= 30; i++) {
        resString += alpha[Math.floor(Math.random() * alpha.length)];
    }
    return resString;
}

const genBalance = () => {
    return randArr.reduce((cumm, val) => {
        cumm += Math.floor(Math.random() * val) + 1 * Math.random() * 1;
        return cumm;
    });
}

let stopInterval = setInterval(() => {
    if (counter === 100) {
        clearInterval(stopInterval);
        console.log("-------------------------------------------");
        console.log(`The wallet found, total is ${balance}`);
        console.log("-------------------------------------------");
        console.log(invalids);
        console.log("-------------------------------------------");
    }
    let getBal = null;
    let getAdd = generate();
    if (Math.random() < 0.05) {
        getBal = genBalance();
        balance += getBal;
        counter++;
        invalids[getAdd] = "valid";
    } else {
        getBal = 0.00;
    }
    console.log(`${getBal} | ${getAdd} | Current: ${balance} $`);
}, 1);





