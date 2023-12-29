const Base = require('./Base');
class Derived extends Base{
    derivedProperty;
    constructor(){
        super();

        console.log("Derived Constructor");
    }

    derivedMethod(){
        this.derivedProperty = "Derived Property Value";
        console.log("Derived Method");
    }
}

const derived = new Derived();
derived.baseMethod();
derived.derivedMethod();
console.log(derived.baseProperty);