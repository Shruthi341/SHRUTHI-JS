class Person{
    role(){
        console.log("I'm a Person");
    }
}

class Home extends Person{
    role(){
        console.log("I'm a Father at Home");
    }
}

class Office extends Person{
    role(){
        console.log("I'm an Employee at office");
    }
}

let roles = new Array(new Home(), new Office());

for(let r of roles){
    r.role();
}