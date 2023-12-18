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

//Access Properties
console.log(car.make); // Output: Toyota
console.log(car['make']); // Output: Toyota

//Add New Property
car.fuelType = 'Gasoline';
car['rating'] = 4.5;

//Modify Existing Property
car.color = 'black';

car.stop();


//Delete Property
delete car.rating;
console.log(car);


