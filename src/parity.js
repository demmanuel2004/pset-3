const readlineSync = require("readline-sync");
const num = Number(readlineSync.question("\nEnter a number: "));

if (Number.isNaN(num)){
  console.log("\nInvalid.\n");
}

if ( num % 2 ==0) {
	console.log("\nEven.\n");
}
else{
  console.log("\nOdd.\n");
}
