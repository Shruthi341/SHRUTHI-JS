function bodyLoad() {
    fetch('products.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (products) {
            var productsContainer = document.getElementById("productsContainer");

            for (var product of products) {

                var divContainer = document.createElement("div");
                divContainer.style.display = "flex";

                var div1 = document.createElement("div");
                var image = document.createElement("img");
                image.src = product.photo;
                image.width = "150";
                image.height = "150";

                div1.appendChild(image);

                var div2 = document.createElement("div");

                var productTitle = document.createElement("h3");
                var productPrice = document.createElement("h6");

                productTitle.innerHTML = product.title; 
                productPrice.innerHTML = `&#8377; ${product.price}`; 

                div2.appendChild(productTitle);
                div2.appendChild(productPrice);

                divContainer.appendChild(div1);
                divContainer.appendChild(div2);

                productsContainer.appendChild(divContainer);
            }
        })
        .catch(function (error) {
            console.error('Error fetching products:', error);
        });
}
