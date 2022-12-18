//5. Take a range from 0 – 100, find the digits that are repeated twice like 33, 77, etc and store them in
// an array

let repeatElement= new Array()
for(let number=0; number<=100; number++){
    if (number %11 ==0 && number !=0) {
       repeatElement.push(number);        
    }
}
console.log("The Repeated Numbers: "+repeatElement);