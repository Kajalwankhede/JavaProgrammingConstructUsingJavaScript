//1. Read a single digit number and write the number in word

let number = Math.floor(Math.random() * 10);
console.log("Randomly getting number: "+number);
let word;
if( number == 0) {
    word = 'zero';
} else if (number == 1) {
    word = 'one';
}else if (number == 2) {
    word ='two';
}else if (number == 3) {
    word ='three';
}else if (number == 4) {
    word ='four';
}else if (number == 5) {
    word ='five';
}else if (number == 6) {
    word ='six';
}else if (number == 7) {
    word ='seven';
}else if (number == 8) {
    dwordy ='eight';
}else if (number == 9) {
    word ='nine';
}

console.log("Word: "+word);