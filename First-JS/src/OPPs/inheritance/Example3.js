class SuperClass{
    constructor(){
        console.log("Super class Constructor");
    }
}

class DerivedClass extends SuperClass{
    constructor(){
        console.log("Derived class Constructor");
    }
}

let obj = new DerivedClass();