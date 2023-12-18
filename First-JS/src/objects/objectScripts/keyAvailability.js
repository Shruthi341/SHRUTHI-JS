// Sample object
let myObject = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
  };
  
  // Check if key exists
  const keyToCheck = 'key2';
  
  if (myObject.hasOwnProperty(keyToCheck)) {
    // Key exists, delete it
    delete myObject[keyToCheck];
    console.log(`Key '${keyToCheck}' deleted. Updated object:`, myObject);
  } else {
    console.log(`Key '${keyToCheck}' does not exist.`);
  }