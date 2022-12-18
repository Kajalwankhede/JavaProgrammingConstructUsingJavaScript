//1. Write a program in the following steps
//a. Generates 10 Random 3 Digit number. b. Store this random numbers into a array.
//c. Then find the 2nd largest and the 2nd smallest element without sorting the array.

let arr = new Array(10);
let firstMax = 0,firstMin = 1000;
for(let i = 0; i < 10; i++) {
    arr[i] = Math.floor(Math.random() * (900) + 100); // 10 random 3 digit number
    firstMax = Math.max(arr[i], firstMax);
    firstMin = Math.min(arr[i], firstMin);
}

console.log("Maximum number : "+firstMax+ "\nMinimum Number : "+ firstMin);    // gives the maximum and minimum elements
console.log(arr);   // gives the array of the randon elements

let secondMax = 0;
let secondMin = 1000;
for(let i = 0; i < 10; i++) {
    if(arr[i] < firstMax ) {
        secondMax = Math.max(arr[i], secondMax);
    }
    if(arr[i] > firstMin ) {
        secondMin = Math.min(arr[i], secondMin);
    }
}

console.log('Second Maximum Element in the Array is '+ secondMax);
console.log('Second Minimum Element in the Array is '+ secondMin);