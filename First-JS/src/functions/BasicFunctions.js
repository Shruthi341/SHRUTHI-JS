function add(a, b) {
    return a + b;
}

console.log(add(2,5));

//Function Expression
// Named Function Expression
var multiply = function multiplyNamedFunc(a, b) {
    return a * b;
  };
  
  // Anonymous Function Expression
  var divide = function(a, b) {
    return a / b;
  };


var multiply_result = multiply(2,5);
var divide_result = divide(10,5);
console.log(multiply_result,"-",divide_result);