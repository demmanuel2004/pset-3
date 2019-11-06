const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

const QUARTERS = 0.25
const DIMES = .10
const NICKELS = .05

let numberOfQuarters = 0;
let numberOfDimes = 0;
let numberOfNickels = 0;
let numberOfPennys = 0;


let amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(amount)) {
  console.log("\nInvalid.");

} else if (amount < MIN || amount > MAX) {
    console.log("\nInvalid")
} else

while (amount >= QUARTERS) {
amount = amount - QUARTERS;
numberOfQuarters++;
}

while (amount >= DIMES) {
  amount = amount - DIMES;
  numberOfDimes++;
}

while (amount >= NICKELS) {
  amount = amount - NICKELS;
  numberOfNickels++;
}

while (amount >= 0) {
  amount = amount - 0.01;
  numberOfPennys++;
}

console.log("\n" + numberOfQuarters + " quarters, " + numberOfDimes + " dimes, " + numberOfNickels + " nickels, and " + numberOfPennys + " pennies.")
