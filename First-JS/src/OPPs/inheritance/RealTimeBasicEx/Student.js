const Person = require('./Person'); // Importing the Person class from Person.js

class Student extends Person{
    constructor(name, age, grade){
        super(name,age);
        this.grade = grade;
    }

    study() {
        console.log(`${this.name} is studying in ${this.grade} standard`);
      }
}

let student1 = new Student("John",25,10);
student1.study();

