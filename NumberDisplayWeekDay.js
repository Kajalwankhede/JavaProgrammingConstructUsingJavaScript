// 2. Read a Number and Display the week day (Sunday, Monday,...)
let number = Math.floor((Math.random() * (10) )% 7);
console.log("Random Number: "+number);
let day;
if( number == 0) {
    day = 'Sunday';
} else if (number == 1) {
    day = 'Monday';
}else if (number == 2) {
    day ='Tuesday';
}else if (number == 3) {
    day ='Wednesday';
}else if (number == 4) {
    day ='Thursday';
}else if (number == 5) {
    day ='Friday';
}else if (number == 6) {
    day ='Saturday';
}

console.log('The day is :'+ day)
