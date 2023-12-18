let car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    color: 'Blue',
    isRunning: true,
    start: function() {
        console.log('Engine started!');
        this.isRunning = true;
    },
    stop: function() {
        console.log('Engine stopped.');
        this.isRunning = false;
    }
};

console.log("Object Iteration Using In :--")
//Object Iteration (in)
for(let key in car){
    console.log(key," - ",car[key]);
}


console.log("Object Iteration Using Of :--")
//Object Iteration (of)
let keys = Object.keys(car);
for(let key of keys){
    console.log(key," - ",car[key]);
}

let values = Object.values(car);
for(let value of values){
    console.log(value)
}


let entries = Object.entries(car);
for(let [key,value] of entries){
    console.log(`${key}: ${value}`);
}
