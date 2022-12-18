//1. Write a program that reads 5 Random 3 Digit values and then outputs the minimum and the maximum value

let num1=Math.floor(Math.random() * 900+100);
let num2=Math.floor(Math.random() * 900+100);
let num3=Math.floor(Math.random() * 900+100);
let num4=Math.floor(Math.random() * 900+100);
let num5=Math.floor(Math.random() * 900+100);

console.log(num1,num2,num3,num4,num5); 
let maxNumber=num1;
let minNumber=num1;

if(maxNumber<num2){
    maxNumber=num2;
}
if(maxNumber<num3){
    maxNumber=num3;
}
if(maxNumber<num4){
    maxNumber=num4;
}
if(maxNumber<num5){
    maxNumber=num5;
}
if(minNumber>num2){
    minNumber=num2;
}
if(minNumber>num3){
    minNumber=num3;
}
if(minNumber>num4){
    minNumber=num4;
}
if(minNumber>num5){
    minNumber=num5;
}

console.log("Maximum Number is:" +maxNumber);
console.log("Minimum Number is: "+minNumber);