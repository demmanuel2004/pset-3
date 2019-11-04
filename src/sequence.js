const readlineSync = require("readline-sync");

console.log("\nEnter three numbers" );

const INTEGER = Number(readlineSync.question("\n"));
const SECOND_INTEGER = Number(readlineSync.question(""));
const THIRD_INTEGER = Number(readlineSync.question(""));


if (Number.isNaN(INTEGER)) {
    console.log("\nInvalid.");
}

else if (INTEGER == SECOND_INTEGER && SECOND_INTEGER == THIRD_INTEGER) {
    console.log("\nEqual.");
}

else if (INTEGER - SECOND_INTEGER == SECOND_INTEGER - THIRD_INTEGER && THIRD_INTEGER > SECOND_INTEGER == SECOND_INTEGER > INTEGER) {
  console.log("\nStrictly increasing");
}

else if (INTEGER < SECOND_INTEGER && SECOND_INTEGER < THIRD_INTEGER) {
  console.log("\nIncreasing.");
}

else if (THIRD_INTEGER - SECOND_INTEGER == SECOND_INTEGER - INTEGER) {
  console.log("\nStrictly decreasing.");
  }

else if (INTEGER > SECOND_INTEGER && SECOND_INTEGER > THIRD_INTEGER) {
  console.log("\nDecreasing");
}

else {
 console.log("\nUnordered.");
}
