import { Product } from "./product3.module.js";

function DetailsClick(){
    var obj = new Product;
    obj.Name = document.getElementById("Name").value;
    obj.Price = document.getElementById("Price").value;
    obj.Stock = document.getElementById("Stock").checked;

    document.querySelector("p").innerHTML = `
     Name = ${obj.Name} <br>
     Price = ${obj.Price} <br>
     Stock = ${obj.Stock} <br>
     Customer Rating  = ${obj.getCustomerRating} <br>
     Total = ${obj.print()};

    `
}
document.getElementById("btnDetails").addEventListener("click",DetailsClick);