// 3. Write a program that takes a year as input and outputs the Year is a Leap Year or nota Leap Year. 
//A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless divisible by 400.
function leapyear(year)
{
return (year % 100 == 0) ? (year % 400 == 0) : (year % 4 == 0);
}
console.log(leapyear(2021));
console.log(leapyear(2024));

