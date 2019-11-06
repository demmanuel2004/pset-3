const readlineSync = require("readline-sync");
const NUM = Number(readlineSync.question("\nEnter a number: "));

const MIN = Number.MIN_SAFE_INTEGER ;
const MAX = Number.MAX_SAFE_INTEGER ;


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
