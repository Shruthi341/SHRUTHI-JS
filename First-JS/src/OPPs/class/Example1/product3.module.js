export class Product{
    Name = "";
    Price = 0;
    Stock = false;
    Rating = {
        "CustomerRating" :{
            "Rate": 4.2, 
            "Count": 71781
        },
        "VendorRating" :{
            "Rate": 3.9,
            "Count": 28900
        }
    }

    get getCustomerRating(){
        return this.Rating.CustomerRating.Rate;
    }

    totalRatingCount(){
        return this.Rating.CustomerRating.Count + this.Rating.VendorRating.Count;
    }

    print(){
        return this.totalRatingCount();
    }
}