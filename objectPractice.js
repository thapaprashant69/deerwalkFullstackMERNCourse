let person ={
    personName : "Prashant",
    age : 24,
    describe : function(){
        return `${this.personName},${this.age} years old`;
    }
}

console.log(person.describe());