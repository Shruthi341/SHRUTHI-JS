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

let keys = Object.keys(car);
let values = Object.values(car);
let entries = Object.entries(car);
console.log(keys, values, entries);
