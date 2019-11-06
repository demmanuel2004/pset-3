const readlineSync = require("readline-sync");
const LETTER = String(readlineSync.question("\nEnter a letter grade: "));

if (LETTER == "F" || LETTER == "f")  {
 console.log("\nYour GPA 0.00.\n");
}

else if (LETTER == "A+" || LETTER == "a+")  {
 console.log("\nYour GPA is 4.00.\n");
}

else if (LETTER == "A" || LETTER == "a")  {
  console.log("\nYour GPA is 4.00.\n");
}

else if (LETTER == "A-" || LETTER == "a-") {
  console.log("\nYour GPA is 3.67.\n");
}

else if (LETTER == "B+" || LETTER == "b+")  {
 console.log("\nYour GPA is 3.33.\n");
}

else if (LETTER == "B-" || LETTER == "b-")  {
 console.log("\nYour GPA is 2.67.\n");
}

else if (LETTER == "B" || LETTER == "b") {
	console.log("\nYour GPA is 3.00")
}

else if (LETTER == "C" || LETTER == "c")  {
 console.log("\nYour GPA is 2.00.\n");
}

else if (LETTER == "C+" || LETTER == "c+")  {
 console.log("\nYour GPA is 2.33.\n");
}

else if (LETTER == "C-" || LETTER == "c-")  {
 console.log("\nYour GPA is 1.67.\n");
}

else if (LETTER == "D" || LETTER == "d")  {
 console.log("\nYour GPA is 1.00.\n");
}

else if (LETTER == "D+" || LETTER == "d+")  {
 console.log("\nYour GPA is 1.33.\n");
}

else if (LETTER == "D-" || LETTER == "d-")  {
 console.log("\nYour GPA is 0.67.\n");
}

else {
 console.log("\nInvalid.\n");
}
