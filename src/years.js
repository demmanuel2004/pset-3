const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;
const YEAR_INPUT = Number(readlineSync.question("\nEnter a year: "));


if (Number.isNaN(YEAR_INPUT)) {
    console.log("\nInvalid.");
}

else if (YEAR_INPUT < MIN || YEAR_INPUT > MAX) {
    console.log("\nInvalid.");
}
else if (YEAR_INPUT % 400 == 0) {
    console.log("\n" + YEAR_INPUT + " is a leap year.");
}
else if (YEAR_INPUT % 4 == 0 && YEAR_INPUT % 100 != 0) {
    console.log("\n" + YEAR_INPUT + " is a leap year.");
}
else {
    console.log("\n" + YEAR_INPUT + " is not a leap year.");
}
