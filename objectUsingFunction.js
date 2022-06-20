function Person(firstName,phone,address){
    this.firstName = firstName;
    this.phone = phone;
    this.address = address;
    this.greet = function(){
        return `Hello, my name is ${this.name}. I live in ${this.address}`;
    }
}

Person.prototype.sayBye = function(){
    return `Goodbye ${this.firstName}`;
}

const person = new Person("Prashant",["9849748809","9816591055"],"Manamaiju");

console.log(person);
console.log(person.sayBye());