const numbers = []; 
for (let i = 0; i < 100; i++) {
    numbers.push(i*i);
}

const run = (x) => {
    return numbers.forEach(function(val, idx) {
        numbers[idx] = val + x; 
    });
}
run(5);
const cpy = numbers.map(function(f) {
    return 0;
});

console.log(numbers);
console.log(cpy);

const func = () => {
    return cpy.forEach(function (val, idx) {
      if (idx % 2 == 0) {
        cpy[idx] = "|";
      } else {
        return;
      }
    });
}

const newCry = func();
console.log(cpy);

// ------------------------------------
let r = 3; 
let c = 3; 
let ss = "";

const board = (r, c) => { 
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            ss += "| X |";
        }
        console.log(ss);
        ss = "";
    }
}

board(r, c);