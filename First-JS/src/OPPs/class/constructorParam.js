class Person{
    name;
    age;

    constructor(name, age){
        console.log("Initailly..")
        this.name = name;
        this.age = age;
    }
    print(){
        console.log(`Name : ${this.name}`);
        console.log(`Age : ${this.age}`);
    }
}

var p1 = new Person("John",23);

p1.print();


  
