function Outer(outerValue){
    return function Inner(innerValue){
        return `Outer - ${outerValue}, Inner - ${innerValue}`
    }
}

// Call Outer function will returns Inner Function
const outerFunction = Outer('Hello');

// Call Inner function (closure)
const result = outerFunction('World');

// Display the result
console.log(result);

console.log(Outer("Iam OUT")("Iam IN"));