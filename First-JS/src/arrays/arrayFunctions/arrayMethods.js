let fruits = ['apple', 'banana', 'orange', 'grape'];

// 11. Checking if any element satisfies a condition
let hasBanana = fruits.some(fruit => fruit === 'banana'); // Returns true

// 12. Checking if all elements satisfy a condition
let allAreStrings = fruits.every(fruit => typeof fruit === 'string'); // Returns true

// 13. Sorting elements
//fruits.sort(); // Sorts the array alphabetically
// Result: fruits = [ 'apple', 'banana', 'grape', 'orange' ]


// 14. Reversing elements
// fruits.reverse(); // Reverses the order of elements

// Result: fruits = [ 'grape', 'orange', 'banana', 'apple' ]

// 15. Joining elements into a string
let fruitString = fruits.join(', '); // Joins elements with ', '
// Result: fruitString = apple, banana, orange, grape
console.log(fruitString);