// Object 
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    greet: function() {
      console.log(`Hello, ${this.firstName} ${this.lastName}!`);
    }
  };
  
  // Accessing properties
  console.log(person.firstName); // Output: John
  person.greet(); // Output: Hello, John Doe!

  

  
  