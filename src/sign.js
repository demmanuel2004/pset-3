const readlineSync = require("readline-sync");
const num = Number(readlineSync.question("\nEnter a number: "));


if ( num > 0) {
	console.log("\npositive.\n");``
}

else if ( num == 0) {
  console.log("\nZero.\n");
}

else if (num < 0) {
  console.log("\nNegative.\n");
}

else if (Number.isNaN(num) || Number.isSafeInteger(number) != true){
  console.log("\nInvalid.");
}
