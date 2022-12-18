//2. Extend the above program to sort the array and then find the 2nd largest and the 2nd smallest element.

let numArray = new Array();
for(let i = 0; i < 10; i++) {
    numArray.push(Math.floor(Math.random() * (900) + 100)); 
}

numArray.sort();
console.log("Number sorted in array: "+numArray);   // Sorted Array
console.log('Second Maximum Element in the Array: '+ numArray[numArray.length -2]);
console.log('Second Minimum Element in the Array: '+ numArray[1]);
