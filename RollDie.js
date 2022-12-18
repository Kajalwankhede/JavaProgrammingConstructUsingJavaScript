//Write a program in the following stepsa. Roll a die and find the number between 1 to 6
//b. Repeat the Die roll and find the result each timec. Store the result in a dictionary
//d. Repeat till any one of the number has reached 10 timese. Find the number that reached maximum times and the one that was forminimum times


let rolls=new Map();//initializing map
let diceNumber;

for(let i=1;i<7;i++){
    rolls.set(i,0);
}

do {
    diceNumber=Math.floor(Math.random()*6)+1;
    rolls.set(diceNumber,rolls.get(diceNumber)+1);
} while(rolls.get(diceNumber)!=10);

console.log("Printing roll map")//Map Traversal
for(let entry of rolls){
    console.log(entry);
}

for(let key of rolls.keys())
{
    if (rolls.get(key)  == 10) {
        console.log(rolls)
        console.log("Maximum time repeated number: " +key);
    }
} 

min = 10
for (let key of rolls.keys())
{
if (rolls.get(key) < min)
{
    min = rolls.get(key)
    var minTime = key
}
}
console.log("Minimum time repeated number: "+minTime);

