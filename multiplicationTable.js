//Anonymous function with default argument 
//Default argument is the concept implemented in ES6

const multiplicationTable = function(multiplicant=5){
    for(let multiplier = 1;multiplier<=10;multiplier++){
        console.log(`${multiplicant} * ${multiplier} = ${multiplicant*multiplier}`);
    }
}

multiplicationTable(12);