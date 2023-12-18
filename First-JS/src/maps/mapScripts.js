let myMap = new Map();

//Setting Values
myMap.set(1,"Hello");
myMap.set('name',"Shruthi");
myMap.set(0.1,"Float Value");
console.log(myMap);

//Getting Values
console.log(myMap.get(1));
console.log(myMap.get("name"));

//Checking if a Key Exists:
console.log("Existance Key :",myMap.has(0.1));
console.log("Non-Existance Key :",myMap.has('car'));

//delete a key
myMap.delete(0.1);
console.log(myMap);

// Iterating over keys and values
for(let [key,value] of myMap){
    console.log(key,"-",value);
}

// Iterating over keys only
for(let key of myMap.keys()){
    console.log(key)
}

// Iterating over values only
for (let value of myMap.values()) {
    console.log(value);
}

//size
console.log(myMap.size); // Output: 2 (number of key-value pairs)

//clear the Map
myMap.clear(); 

console.log(myMap.size); // Output: 0 
