const readlineSync = require("readline-sync");
const month = String(readlineSync.question("\nEnter a month: "));

if (month == "jan" || month == "Jan" || month == "JAN")  {
 console.log("\n31 days.\n");
}

else if (month == "feb" || month == "Feb" || month == "FEB")  {
 console.log("\n28 or 29 days.\n");
}

else if (month == "mar" || month == "Mar" || month == "MAR")  {
  console.log("\n31 days.\n");
}

else if (month == "apr" || month == "Apr" || month == "APR")  {
 console.log("\n30 days.\n");
}

else if (month == "may" || month == "May" || month == "MAY")  {
 console.log("\n31 days.\n");
}

else if (month == "jun" || month == "Jun" || month == "JUN") {
	console.log("\n30 days")
}

else if (month == "jul" || month == "Jul" || month == "JUL")  {
 console.log("\n31 days.\n");
}

else if (month == "aug" || month == "Aug" || month == "AUG")  {
 console.log("\n31 days.\n");
}

else if (month == "sept" || month == "Sept" || month == "SEPT")  {
 console.log("\n30 days.\n");
}

else if (month == "oct" || month == "Oct" || month == "OCT")  {
 console.log("\n31 days.\n");
}

else if (month == "nov" || month == "Nov" || month == "NOV")  {
 console.log("\n30 days.\n");
}

else if (month == "dec" || month == "Dec" || month == "DEC")  {
 console.log("\n31 days.\n");
}

else {
 console.log("\nInvalid.\n");
}
