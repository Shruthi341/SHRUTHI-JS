function bodyLoad(){
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
    .then(function(response){
        return response.json();
    })
    .then(function(marsObject){
        for(var item of marsObject.photos){
            var tr = document.createElement("tr");
            var tdId = document.createElement("td");
            var tdImage = document.createElement("td");
            var tdCamera = document.createElement("td");
            var tdRover =document.createElement("td");

            tdId.innerHTML = item.id;
            tdImage.innerHTML = `<img src=${item.img_src} width="200" height="200">`;
            tdCamera.innerHTML = item.camera.full_name;
            tdRover.innerHTML = item.rover.name;

            tr.appendChild(tdId);
            tr.appendChild(tdImage);
            tr.appendChild(tdCamera);
            tr.appendChild(tdRover);

            document.querySelector("tbody").appendChild(tr);
        }
    })
}