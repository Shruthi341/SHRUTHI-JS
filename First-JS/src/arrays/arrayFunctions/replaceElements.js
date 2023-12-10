
function replaceElement(){
    let fruits = ['apple', 'banana', 'orange', 'banana', 'grape'];
    fruits.splice(1, 1, 'pear'); // Replaces 1 element at index 1 with 'pear'
// Result: fruits = [ 'apple', 'pear', 'orange', 'banana', 'grape' ]
    console.log(fruits);
}

function replaceUsingIndex(){
    let fruits = ['apple', 'banana', 'orange', 'banana', 'grape'];
    fruits[1] = 'pear';
    // Result: fruits = [ 'apple', 'pear', 'orange', 'banana', 'grape' ]
    console.log(fruits);
}

function replaceUsingMap(){
    let fruits = ['apple', 'banana', 'orange', 'banana', 'grape']; 
    fruits = fruits.map(fruit => fruit === 'banana'?'pear':fruit);
    console.log(fruits);
    //Result: [ 'apple', 'pear', 'orange', 'pear', 'grape' ]
}

console.log("Replace Using Index Assignment");
replaceUsingIndex();

console.log("Replace Using Splice");
replaceElement();

console.log("Replace Elements with Map")
replaceUsingMap();
