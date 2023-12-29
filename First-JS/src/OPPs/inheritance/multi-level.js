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

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is studying in ${this.grade} standard.`);
  }
}

class Education extends Student{
    constructor(name,age, grade, marks){
        super(name,age,grade);
        this.marks = marks;
    }

    percentage(){
        console.log(`${this.name} secured ${this.marks}%`);
    }
}

let education = new Education("John",16,7,95);
education.percentage();

