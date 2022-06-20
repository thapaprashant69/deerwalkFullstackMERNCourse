const addAnyNumberOfParameters = (...anyNumberOfParameters) =>{
    return(anyNumberOfParameters.reduce((prevValue,curValue)=>prevValue+Number(curValue)));
}


console.log(addAnyNumberOfParameters(1,2,3,'4'));

let array = [1,2,3,4,5,6];
console.log(addAnyNumberOfParameters(array));

console.log(this);