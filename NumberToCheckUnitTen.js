// Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...

function unitNumberCheck(number){
    if(number == 1)
    { 
        console.log("Unit");
     }
    else if(number == 10) 
    {
        console.log("Ten");
    }
    else if(number == 100) 
    {
        console.log("Hundred");
    }
    else if(number == 1000)
     {
        console.log("Thousand");
    }
    else if(number == 10000) 
    {
        console.log("Ten Thousand");
    }
    else 
    {
        console.log("Required Valid Number");
    }
}
unitNumberCheck(100);
unitNumberCheck(1000);