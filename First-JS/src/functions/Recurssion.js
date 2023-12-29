function factorial(n) {
    // Base case: stop the recursion
    if (n === 0 || n === 1) {
      return 1;
    } else {
      // Recursive case: call the function with a smaller argument
      return n * factorial(n - 1);
    }
  }
  
  // Example usage
  console.log(factorial(5)); // Outputs: 120
  