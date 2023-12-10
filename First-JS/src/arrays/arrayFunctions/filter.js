
// Filter even numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);
// Result: evenNumbers = [2, 4, 6, 8, 10]


// Filter fruits with length greater than 5
const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
const longFruits = fruits.filter(fruit => fruit.length > 5);
console.log(longFruits)
// Result: longFruits = ['banana', 'orange']

//Combining filter() with map():
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenSqaures = arr1.filter(i => i % 2===0).map(ele => ele*ele);
console.log(evenSqaures);
//Result: [ 4, 16, 36, 64, 100 ]