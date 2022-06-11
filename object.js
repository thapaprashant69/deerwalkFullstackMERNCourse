const person = {
  name: "Prashant",
  phone: ["9849748809", "9816591055"],
  address: "Manamaiju",
  greet: function () {
    let text = `Hello,My name is ${this.name}. I live in ${this.address}`;
    console.log(this);
    return text;
  },
};

console.log(person.greet());

// const greet=()=>{
//     console.log("We are in greet function outside object");
//     return (person["greet"]);
// }

console.log(person["greet"]());
