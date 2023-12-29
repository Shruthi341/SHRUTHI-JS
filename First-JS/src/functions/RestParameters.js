function logAll(...values) {
    values.forEach(value => console.log(value));
  }
  
logAll(1, 'hello', true);


function productDetails(...details){
    var [id,name,price] = details;
    console.log("ID :",id);
    console.log("Name :",name);
    console.log("Price :",price);
    console.log(details[3]);
}

//productDetails(101,"Mobile","20000");
productDetails(201,"TV","700000",true);

