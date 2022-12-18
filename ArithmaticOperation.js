//4. Enter 3 Numbers do following arithmetic operation and find the one that is maximum and minimum
//1. a + b * c 3. c + a / b
//2. a % b + c 4. a * b + c

let a= Math.floor(Math.random() * 10)+1;
let b= Math.floor(Math.random() * 10)+1
let c= Math.floor(Math.random() * 10)+1;

console.log(a,b,c);

first = a+b*c ;
second = c+a/b ;
third= a%b+c ;
fourth= a*b+c ;

console.log("First Operation: "+first)
console.log("Second Operation: "+second);
console.log("third Operation: "+third)
console.log("Fourth Operation: "+fourth);


if(first<second && first<third && first<fourth){
    min=first;
}
else if(second<third && second<fourth){
    min=second;
}
else if(third<fourth){
    min=third;
}
else{
    min=fourth;
}
if(first>second && first>third && first>fourth){
    max=first;
}
else if(second>third && second>fourth){
    max=second;
}
else if(third>fourth){
    max=third;
}
else{
    max=fourth;
}

console.log("Maximum value: "+max);
console.log("Minimum value: "+min);
