

export class Product{
    userName;
    role;
    _productName;   //_ represents this name requires further implementation
    err;

    get ProductName(){
        console.log("get..");
        return this._productName;
    }

    set ProductName(newProductName){
        console.log("set..",newProductName);
        if(this.role == "admin"){
            this._productName = newProductName;
        }else{
            this.err = `Not authorized`;
        }
    }

}