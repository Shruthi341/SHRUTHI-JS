class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

class Student extends Person{
    constructor(name, age, grade){
        super(name,age);
        this.grade = grade;
    }

    study() {
        console.log(`${this.name} is studying in ${this.grade} standard.`);
      }
}


class Employee extends Person{
    constructor(name,age,salary){
        super(name,age);
        this.salary = salary;
    }

    job(){
        console.log(`${this.name} is earning ${this.salary} per month.`);
    }
}


let student1 = new Student("John",25,10);
student1.greet();
student1.study();

let employee1 = new Employee("David",30,70000);
employee1.job();