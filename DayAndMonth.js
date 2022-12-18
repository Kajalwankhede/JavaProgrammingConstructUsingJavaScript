//2. Write a program that takes day and month from the command line and prints true if day of month is 
//between March 20 and June 20, false otherwise.

function dayAndMonth(date){
    if (date>=new Date("March 20") && date<=new Date("June 20")){
        console.log("True");
    }else{
        console.log("False");
    }
}
dayAndMonth(new Date("April 15"));
dayAndMonth(new Date("October 11"));


