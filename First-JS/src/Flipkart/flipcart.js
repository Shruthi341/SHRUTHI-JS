function bodyLoad(){
    console.log("On Body Load");
    fetch("flipkart.json")
    .then(
        function(response){
            return response.json();
        }
    ).then(
        function(product){
            document.getElementById('productImage').src=product.photo;
            document.getElementById('productTitle').innerHTML = product.title;
            document.getElementById('productRate').innerHTML = product.rating.rate;
            document.getElementById('productReviews').innerHTML = `Ratings ${product.rating.noOfRatings} & Reviwes ${product.rating.reviews}`;
            document.getElementById('productPrice').innerHTML = `&#8377; ${product.price}`;

            for(var offer of product.offers){
                var li = document.createElement("li");
                li.innerHTML=`<span class="bi bi-tag-fill text-success" ></span> ${offer}`;
                document.querySelector("ul").appendChild(li);
            }
        }
    )
}
