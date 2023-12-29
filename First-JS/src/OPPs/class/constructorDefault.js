class Person{
    name;
    age;

    constructor(){
        console.log("Initailly..")
    }
    print(){
        console.log(`Name : ${this.name}`);
        console.log(`Age : ${this.age}`);
    }
}

var p1 = new Person();
p1.name = "John";
p1.age = 23;

p1.print();
