let fruits = ["Mango", "Apple", "Banana", "Kiwi"];

// for(fruitIndex in fruits){
//     console.log(fruits[fruitIndex]);
// }

// for(fruit of fruits){
//     console.log(fruit);
// }

fruits.forEach((fruit, fruitIndex, fruitArray) => {
  console.log(fruitIndex, fruit, fruitArray);
});
