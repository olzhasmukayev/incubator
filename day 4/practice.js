let planeSerialNumbers = ["N887WM", "N236MJ", "N898TS", "N162JC", "N707JT"];
let planeCopyArray = planeSerialNumbers.slice();
let initialLength = planeSerialNumbers.length;

for (let i = 0; i < planeSerialNumbers.length; i++) {
    console.log(planeSerialNumbers[i]);
}

console.log(planeSerialNumbers);

for (let i = 0; i < initialLength; i++) {
    planeSerialNumbers.pop();
}

