
var cities = ['Delhi', 'Hyd', 'Mumbai'];
function loadCities() {
  console.log('Cities Loaded', cities);
  document.getElementById("listCities").innerHTML = "";
  for (var city of cities){
    var option = document.createElement("option");
    option.text = city;
    option.value = city;

    document.getElementById('listCities').appendChild(option);
  }

  document.getElementById("lblCount").innerHTML = `Total Cities ${cities.length}`;
}

function bodyLoad(){
    console.log("body loaded")
    loadCities();
}

function addNewCity(){
    var newCity = document.getElementById("newCity").value;
    if(cities.indexOf(newCity) == -1){  
    cities.push(newCity);
    loadCities();
    }else{
      alert(`${newCity}  already Exists`)
    }
}

function removeAllCities(){
  cities = [];
  loadCities();
}

function removeSelectedCity(){
  var selectedCity = document.getElementById("listCities").value;
  console.log("Selected City",selectedCity);
  var selectedIndex = cities.indexOf(selectedCity);
  if(selectedCity != -1){
    cities.splice(selectedIndex,1);
    loadCities()
  }
}
function citiesAscOrder(){
  cities.sort()
  loadCities()
}
function citiesDescOrder(){
  cities.sort()
  cities.reverse()
  loadCities()
}

