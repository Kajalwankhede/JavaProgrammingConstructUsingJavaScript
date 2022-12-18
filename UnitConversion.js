let inches =42;
let inchesInFeet= (inches/12);
console.log(" 42 inches in feet : " +inchesInFeet);


console.log("\nRectangular Plot of 60 feet * 40 feet in meters:");
console.log("Converting area in meter square");
let rectangularArea= 60*40;
console.log("Rectagular plot in feet:"+rectangularArea);


console.log("\nArea of plots in meter square:");
let rectangularAreaInMeter=rectangularArea*0.3048;
console.log(rectangularAreaInMeter);

let totalAreaInFeet=rectangularArea*25;
console.log("\nCalculating Area of 25 plot in feet: "+totalAreaInFeet);

let totalAreaInMeters=rectangularAreaInMeter*25;
console.log("\nArea of 25 plot in meter square: "+totalAreaInMeters)