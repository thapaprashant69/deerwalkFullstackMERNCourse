let numberArray1 = [2, 43, 122, 677, 0],
  numberArray2 = [34, 4545, 656, 23434],
  numberArray3 = [343, 454, 3242, 65645, 47565];

let largestNumber = numberArray1[0];

for (number of numberArray1) {
  largestNumber = number > largestNumber ? number : largestNumber;
}

console.log(
  `Largest number from array [${numberArray1}] using 'for of' loop is ${largestNumber}.`
);

largestNumber = numberArray2[0];

numberArray2.forEach((number) => {
  largestNumber = number > largestNumber ? number : largestNumber;
});

console.log(
  `Largest number from array [${numberArray2}] using 'forEach' method is ${largestNumber}.`
);

largestNumber = numberArray3[0];

for (numIndex in numberArray3) {
  largestNumber = numberArray3[numIndex] > largestNumber ? numberArray3[numIndex] : largestNumber ;
}

console.log(
  `Largest number from array [${numberArray3}] using 'for in' loop is ${largestNumber}.`
);
