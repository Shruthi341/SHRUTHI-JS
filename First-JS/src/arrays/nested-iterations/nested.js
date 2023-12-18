
var data = [
    {
        Category:"Electronics",
        Products:["Telivisions","Mobiles"]
    },
    {
        Category:"Footware",
        Products:["Casuals","Boots","Shoes"]
    }
]

function bodyLoad(){

    var baseOl = document.querySelector("ol");

    for(var item of data){
        var baseLi = document.createElement("li");
        baseLi.innerHTML = item.Category;

        var childUl = document.createElement("ul");
        for(var product of item.Products){
            console.log("Products :",product);
            var productLi = document.createElement("li");
            productLi.innerHTML = product;
            childUl.appendChild(productLi);
        }

        baseLi.appendChild(childUl);
        baseOl.appendChild(baseLi);
    }
    
}