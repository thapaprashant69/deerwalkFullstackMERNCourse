let year = 2400;

if(year%4 === 0){
    if(year%100 === 0){
        if(year%400 === 0)
            {
                console.log(year," is leap year");
            }
        else{
            console.log(year, "is not a leap year");
        }
    }
    else{
        console.log(year,"is a leap year");
    }
}
else{
    console.log(year, "is not a leap year");
}