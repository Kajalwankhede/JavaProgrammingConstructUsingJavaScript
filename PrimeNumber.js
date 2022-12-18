//3. Write a program that takes a input and determines if the number is a prime.

let number = 13
for (let i = 0 ; i <= number ; i++) 
{
    let numNotPrime = 0
    for (let count = 2; count <number ; count++) {
        if (number % count  == 0) {
            numNotPrime++
            break;
        }
    }
    if (numNotPrime) {
        console.log(number +" is not prime");
    } else {
        console.log(number +" is prime");
    }
   
}

