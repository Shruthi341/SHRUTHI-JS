function spliceDelete() {
    let fruits = ['apple', 'banana', 'orange', 'grape'];
    // Remove 1 element starting from index 1
    fruits.splice(1, 1);
    console.log(fruits);
    // Result: fruits = ['apple', 'orange', 'grape']

}

function removeUsingFilter(){
    let fruits = ['apple', 'banana', 'orange', 'grape'];
    // Remove the element 'banana'

    fruits = fruits.filter(fruit => fruit !== 'banana');

    // Result: fruits = ['apple', 'orange', 'grape']
    console.log(fruits);

}

function removeLastElement(){
    let fruits = ['apple', 'banana', 'orange', 'grape'];
    fruits.pop();
    //Result: [ 'apple', 'banana', 'orange' ]
    console.log(fruits);
}

function removeFirstElement(){
    let fruits = ['apple', 'banana', 'orange', 'grape'];
    fruits.shift();
    //Result: [ 'banana', 'orange', 'grape' ]
    console.log(fruits);
}


console.log("Splice Delete");
spliceDelete();

console.log("Remove using Filter");
removeUsingFilter();

console.log("Remove Last Element Using pop()");
removeLastElement();

console.log("Remove First Element Using shift()");
removeFirstElement();

