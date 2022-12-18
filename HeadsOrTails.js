// 4. Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.

let toss=Math.floor(Math.random()* 10 %2)+1;
console.log(toss);
if(toss==1){
    console.log("Head");

}
else{
    console.log("Tail");
}