//3. Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...

function unitNumberCheck(number){
    switch(number){
        case 1: 
                console.log("Unit"); 
                break;
        case 10:
                console.log("Ten"); 
                break;
        case 100:
                console.log("Hundred"); 
                break;
        case 1000: 
                console.log("Thousand"); 
                break;
        case 10000: 
                console.log("Ten Thousand"); 
                break;
        default: 
                 console.log("Invalid Number");
    }
}
unitNumberCheck(1000);
unitNumberCheck(100);
unitNumberCheck(10);