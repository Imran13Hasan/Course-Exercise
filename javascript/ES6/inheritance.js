class Parent{
    constructor(){
        this.fathersName = "Potter";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fathersName;
    }
}

const baby = new Child("Arnold");
const baby2 = new Child("Tom");
console.log(baby.getFullName());
console.log(baby2);