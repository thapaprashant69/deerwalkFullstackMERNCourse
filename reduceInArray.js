const number = [1,2,3,4,5,6];

let result=number.reduce(((preValue,currentValue)=>preValue+currentValue),3); //3 in last is passed as preValue which will be first argument in first reduce function call
console.log(result);