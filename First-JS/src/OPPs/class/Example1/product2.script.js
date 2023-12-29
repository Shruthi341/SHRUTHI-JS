import { Product } from "./product2.module.js";

function DetailsClick(){
    var obj = new Product;
    obj.Name = prompt("Enter Name");
    obj.Price = prompt("Enter Price");
    obj.Stock = prompt("Enter Stock");

    document.querySelector("p").innerHTML = `
     Name = ${obj.Name} <br>
     Price = ${obj.Price} <br>
     Stock = ${obj.Stock}

    `
}
document.getElementById("btnDetails").addEventListener("click",DetailsClick);