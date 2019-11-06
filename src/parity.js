const readlineSync = require("readline-sync");
const NUM = Number(readlineSync.question("\nEnter a number: "));

const MIN = Number.MIN_SAFE_INTEGER ;
const MAX = Number.MAX_SAFE_INTEGER ;

if ( NUM % 2 ==0) {
	console.log("\nEven.\n");
}

else if (Number.isNaN(NUM)){
  console.log("\nInvalid.\n");
}

else{
  console.log("\nOdd.\n");
}
