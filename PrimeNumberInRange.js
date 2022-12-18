//4. Extend the program to take a range of number as input and output the Prime Numbers in that range.

let num = 33
for (var i = 3; i < num; i++) {
    let primeFlag=true;
    for (var j = 2; j < i; j++){ // looping through 2 to user input number
        if (i % j == 0) {
            primeFlag=false;
            break;
        }
    }
    if(primeFlag) console.log(i+" is a Prime Number");
}