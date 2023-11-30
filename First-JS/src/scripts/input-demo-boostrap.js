function getRegisterForm(){
    document.getElementById("DetailsContainer").style.display = "none";
    document.getElementById("RegisterContainer").style.display = "block";
    document.getElementById("initialButton").style.display = "none";
}

function RegisterClick(){
    document.getElementById("DetailsContainer").style.display = "block";
    document.getElementById("RegisterContainer").style.display = "none";
    
    //Display Details
    document.getElementById("lblName").innerHTML = document.getElementById("Name").value;
    document.getElementById("lblPrice").innerHTML = document.getElementById("Price").value;
    document.getElementById("lblCity").innerHTML = document.getElementById("City").value;

    stockStatus = "";
    stockCheck = document.getElementById("Stock");
    if(stockCheck.checked){
        stockStatus ="Available";
        document.getElementById("lblStock").innerHTML = stockStatus;
    }
    else{
        stockStatus ="Out of Stock";
        document.getElementById("lblStock").innerHTML = stockStatus;
    }
}

function onEdit(){
    document.getElementById("RegisterContainer").style.display = "block";
    document.getElementById("DetailsContainer").style.display = "none";
}

