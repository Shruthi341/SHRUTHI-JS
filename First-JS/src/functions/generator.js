function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

// Create a generator object
const generator = numberGenerator();

// Call the generator and retrieve values
console.log(generator.next().value); // Outputs: 1
console.log(generator.next().value); // Outputs: 2
console.log(generator.next().value); // Outputs: 3
console.log(generator.next().value); // Outputs: undefined
