const readlineSync = require("readline-sync");
const letter = Number(readlineSync.question("\nEnter a letter grade: "));





if (letter = A+)  {

	console.log("\nYour GPA is a 0.00.\n");

}

else if (x >= 80 && x <= 89 )  {

	console.log("\nYour GPA is a .\n");

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
