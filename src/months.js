const readlineSync = require("readline-sync");
const MONTH = String(readlineSync.question("\nEnter a MONTH: "));


if (MONTH == "jan" || MONTH == "Jan" || MONTH == "JAN")  {
 console.log("\n31 days.\n");
}


else if (MONTH == "feb" || MONTH == "Feb" || MONTH == "FEB")  {
 console.log("\n28 or 29 days.\n");
}


else if (MONTH == "mar" || MONTH == "Mar" || MONTH == "MAR")  {
  console.log("\n31 days.\n");
}


else if (MONTH == "apr" || MONTH == "Apr" || MONTH == "APR")  {
 console.log("\n30 days.\n");
}


else if (MONTH == "may" || MONTH == "May" || MONTH == "MAY")  {
 console.log("\n31 days.\n");
}


else if (MONTH == "jun" || MONTH == "Jun" || MONTH == "JUN") {
	console.log("\n30 days")
}


else if (MONTH == "jul" || MONTH == "Jul" || MONTH == "JUL")  {
 console.log("\n31 days.\n");
}


else if (MONTH == "aug" || MONTH == "Aug" || MONTH == "AUG")  {
 console.log("\n31 days.\n");
}


else if (MONTH == "sept" || MONTH == "Sept" || MONTH == "SEPT")  {
 console.log("\n30 days.\n");
}


else if (MONTH == "oct" || MONTH == "Oct" || MONTH == "OCT")  {
 console.log("\n31 days.\n");
}


else if (MONTH == "nov" || MONTH == "Nov" || MONTH == "NOV")  {
 console.log("\n30 days.\n");
}


else if (MONTH == "dec" || MONTH == "Dec" || MONTH == "DEC")  {
 console.log("\n31 days.\n");
}


else {
 console.log("\nInvalid.\n");
}
