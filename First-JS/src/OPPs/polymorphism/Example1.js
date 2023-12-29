class Employee{
    FirstName;
    LastName;
    Designation;

    Print(){
        console.log(`${this.FirstName} ${this.LastName} - ${this.Designation}`)
    }
}

class Developer extends Employee{
    FirstName = "Raj";
    LastName = "Kumar";
    Designation = "Associate Engineer";
    Role = "Developer";

    print(){
        super.Print();
        console.log(this.Role);
    }
}

class Tester extends Employee{
    FirstName = "Tom";
    LastName = "Hanks";
    Designation = "Engineer";
    Role = "Testing";

    print(){
        super.Print();
        console.log(this.Role);
    } 
}

let employees = new Array(new Developer(), new Tester());
for(const emp of employees){
    emp.print();
}