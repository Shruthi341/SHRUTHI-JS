function indexOfElement(){
    const fruits = ['apple', 'banana', 'orange', 'grape'];
    const indexOfOrange = fruits.indexOf('orange');
    // Result: indexOfOrange = 2
    console.log(indexOfOrange);
}

function lastIndexOfElement(){
    const fruits = ['apple', 'banana', 'orange', 'grape','orange'];
    const lastIndexOfOrange = fruits.lastIndexOf('orange');
    // Result: lastindexOfOrange = 4
    console.log(lastIndexOfOrange);
}

function findIndexElement(){
    const fruits = ['apple', 'banana', 'orange', 'grape','orange'];
    const indexOfOrange = fruits.findIndex(fruit => fruit === 'orange');
    // Result: indexOfOrange = 2
    console.log(indexOfOrange);

//     const numbers = [10, 20, 30, 40, 50];
// const indexGreaterThan30 = numbers.findIndex(num => num > 30);
// Result: indexGreaterThan30 = 3
}

console.log("Index of Orange");
indexOfElement();

console.log("Last Index of Orange");
lastIndexOfElement();

console.log("Find Index of Orange");
findIndexElement();