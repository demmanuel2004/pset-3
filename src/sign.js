const readlineSync = require("readline-sync");
const NUM = Number(readlineSync.question("\nEnter a number: "));


if ( NUM > 0) {
  console.log("\npositive.\n");``
}

else if ( NUM == 0) {
  console.log("\nZero.\n");
}

else if (NUM < 0) {
  console.log("\nNegative.\n");
}

else if (Number.isNaN(NUM)){
  console.log("\nInvalid.\n");
}
