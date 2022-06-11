const fruits = ["mango", "apple", "watermelon", "grape", "banana", "apple"];

console.log(fruits.indexOf("apple"));

console.log(fruits.lastIndexOf("apple"));

console.log(fruits.findIndex((fruit) => fruit == "watermelon"));

const findFruit = (fruitName) => {
    return fruits.find(fruit => fruit==fruitName)?"Fruit is found":"Fruit is not found";
}

console.log(findFruit("winger"));

console.log(fruits.filter(fruit => fruit > "h"));
