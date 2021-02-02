class Parent{
    constructor(){
        this.fatherName = "Schwerznegger";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }

    // chaile function o lekha jabe
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child("Arnold");
const baby2 = new Child("Tom");

console.log(baby);
console.log(baby2);

//for function
console.log(baby.getFullName());
console.log(baby2.getFullName());

