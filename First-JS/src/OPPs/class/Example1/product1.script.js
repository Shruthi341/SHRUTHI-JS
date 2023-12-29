import { Product } from "./product.module.js";
var obj = new Product;
obj.userName = prompt("Enter UserName");
obj.role = prompt("Enter Role");
obj.ProductName = prompt("Enter Product Name");
if(obj.ProductName){
    document.querySelector("p").innerHTML = `Product Name ${obj.ProductName}`;
}else{
    document.querySelector("p").innerHTML = obj.err;
}