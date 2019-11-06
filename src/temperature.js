const readlineSync = require("readline-sync");
const TEMP = Number(readlineSync.question("\nEnter a temperature: "));
const SCALE = String(readlineSync.question("\nEnter a scale: "));

if (TEMP >= 32 && TEMP < 212 && SCALE == "F")  {
	console.log("\nLiquid.\n");
}

else if (TEMP >= 212 && SCALE == "F" )  {
	console.log("\nGas.\n");
}

else if (TEMP <= 32 && SCALE == "F" )  {
	console.log("\nSolid.\n");
}

if (TEMP >= 273 && TEMP < 373 && SCALE == "K")  {
	console.log("\nLiquid.\n");
}

else if (TEMP >= 373 && SCALE == "K" )  {
	console.log("\nGas.\n");
}

else if (TEMP <= 273 && SCALE == "K" )  {
	console.log("\nSolid.\n");
}

if (TEMP >= 0 && TEMP < 100 && SCALE == "C")  {
	console.log("\nLiquid.\n");
}

else if (TEMP >= 100 && SCALE == "C" )  {
	console.log("\nGas.\n");
}

else if (TEMP <= 0 && SCALE == "C" )  {
	console.log("\nSolid.\n");
}

else if (Number.isNaN(TEMP)){
  console.log("\nInvalid.\n");
}

else if (String.isNaN(SCALE)){
  console.log("\nInvalid.\n");
}
