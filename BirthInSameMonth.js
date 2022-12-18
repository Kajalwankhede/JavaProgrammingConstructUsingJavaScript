// Program to generate the birthday month of 50 individuals

let birthMonthMap = new Map()
for(month = 1 ; month<=12 ; month++ )
{
    birthMonthMap.set(month,0)
}

let personCount  = 0
while(personCount<=50)
{
    let month = (Math.floor(Math.random()*100) % 12 )+1 
    let year = "199" + Math.floor(Math.random()*10)% 10  
    if (year == "1992" || year == "1993") 
    {
        birthMonthMap.set(month,birthMonthMap.get(month)+1)    
        personCount++
    }
}
console.log(birthMonthMap)
console.log("Peoples having birthday in same month");
for(key of birthMonthMap.keys())
{
    console.log(key+" : "+birthMonthMap.get(key))
}
