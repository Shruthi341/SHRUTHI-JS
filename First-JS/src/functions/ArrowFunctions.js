// Arrow function with parameters
const add = (a,b)=>{
    return a+b;
}
  
// Arrow function with a single parameter and implicit return
const square = x => x*x;
  
// Arrow function with no parameters
const greet = ()=>{
    console.log("Hello");
}

console.log(add(5,2));
console.log(square(5));
greet();
  