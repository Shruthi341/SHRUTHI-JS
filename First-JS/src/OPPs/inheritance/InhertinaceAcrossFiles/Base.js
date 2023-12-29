
class Base{
    baseProperty;
    constructor(){
        console.log("Base Constructor");
    }

    baseMethod(){
        this.baseProperty = "Base Property Value";
        console.log("Base Method");
    }
}

// Exporting the Base class
module.exports = Base;