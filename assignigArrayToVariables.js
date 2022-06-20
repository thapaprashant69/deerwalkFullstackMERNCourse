//Destructing function as ES6
const fruits =['apple','banana','orange','grape','strawberry','mango'];
let fruit1,fruit2,fruit3,fruit4,fruit5,fruit6;

fruit1=fruits[0];
fruit2=fruits[1];
fruit3=fruits[2];
fruit4=fruits[3];
fruit5=fruits[4];
fruit6=fruits[5];

[fruti1,fruit2,fruit3,fruit4,fruit5,fruit6]=fruits;
console.log(fruti1,fruit2,fruit3,fruit4,fruit5,fruit6);

let[f1,f2,f3,...remaining]=fruits;
console.log(f1,f2,f3,...remaining);

const person ={
    name:"Prashant",
    phone:["9849748809,9816591055"],
    address:"Manamaiju"
};

const {phone,name:firstName,address}= person;
console.log(phone,firstName,address);

const {name:fname,...remainingValues} = person;
console.log(fname,remainingValues);