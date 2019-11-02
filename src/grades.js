const readlineSync = require("readline-sync");
const x = Number(readlineSync.question("\nEnter a number: "));


if (x >= 90 && x <= 100 )  {
	console.log("\nYou recieved an A.\n");
}

else if (x >= 80 && x <= 89 )  {
	console.log("\nYou recieved an B.\n");
}

else if (x >= 70 && x <= 79 )  {
	console.log("\nYou recieved an C.\n");
}

else if (x >= 60 && x <= 69 )  {
	console.log("\nYou recieved an D.\n");
}

else if (x >= 0 && x <= 59 )  {
	console.log("\nYou recieved an F.\n");
}

else if (Number.isNaN(x)){
  console.log("\nInvalid.\n");
}
