function pushElement(){
    let fruits = ['apple', 'banana', 'orange'];
    fruits.push('grape')
    console.log(fruits);
}

function unShiftElement(){
    let fruits = ['apple', 'banana', 'orange'];
    fruits.unshift('grape');
    console.log(fruits);
}

function usingAssignmentIndex(){
    let fruits = ['apple', 'banana', 'orange'];
    // Add 'grape' at index 2
    fruits[2] = 'grape';
    console.log(fruits);
}

function spliceElement(){
    let fruits = ['apple', 'banana', 'orange'];
    // Add 'grape' at index 1
    fruits.splice(1, 0, 'grape');
    console.log(fruits);
}

function spreadOperatorAdd1(){
    let fruits = ['apple','banana','orange'];
    fruits = [...fruits,'grapes','kiwi'];
    console.log(fruits);
}

function spreadOperatorAdd2(){
    let fruits = ['apple','banana','orange'];
    let fruitsExtra = ['grapes','kiwi'];
    fruits = [...fruits,...fruitsExtra];
    console.log(fruits);
}

console.log("PUSH");
pushElement();

console.log("UNSHIFT");
unShiftElement();

console.log("AT ASSIGNMENT INDEX");
usingAssignmentIndex();

console.log("SPLICE- ADD");
spliceElement();

console.log("Using Spread Operator");
spreadOperatorAdd1();

console.log("Using Spread Operator");
spreadOperatorAdd2();

