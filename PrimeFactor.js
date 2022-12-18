//3. Extend the Prime Factorization Program to store all the Prime Factors of anumber n into an 
//array and finally display the output.

let number = 20;
let factorArray = new Array()
for (let factor = 2; factor <= number; factor++) {
  let isPrime = 1;
  
  for (let count = 2; count < factor; count++) {
    let remainder = factor % count;
    if (remainder == 0) {
      isPrime--;
      break;
    }
  }
  if (isPrime) {// if the divisor is prime, divide integer with the factor and store it in the array
   
    while (number % factor == 0) {
      factorArray.push(factor)
      number = number / factor;
    }
  }
}
console.log("The factors are "+factorArray);

