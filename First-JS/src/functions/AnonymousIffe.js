(function(){
    console.log("Function called");
})();

(function(name) {
    console.log('Hello, ' + name + '!');
})('John');
  // Outputs: Hello, John!
  
var result = (function(a, b) {
return a + b;
})(5, 7);
console.log(result); // Outputs: 12
  