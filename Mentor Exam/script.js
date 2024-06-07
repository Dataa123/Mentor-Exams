const form = document.querySelector("#myForm");
const myBtn = document.querySelector("#submit");
const text = document.querySelector("#text");
const photo = document.querySelector("#photo")
let result = '';

myBtn.addEventListener('click', function(){
    result = form.elements.formInput.value;
    form.elements.formInput.value = "";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${result}&appid=8005e0a1974f974d81c999400dd12dc9`).then(response => response.json()).then(jsonData => {
        if (jsonData.name == result){
            let weather = jsonData.weather
            console.dir(weather)
            if (weather[0].main == "Clouds"){
                text.innerHTML = "Clouds";
                photo.src = "./Images/Cloud-PNG-12.png";
            } else if (weather[0].main == "Clear"){
                text.innerHTML = "Clear";
                photo.src = "./Images/clearsky.png";
            }
        } else {
            console.log("else")
        }
    }).catch(error => {
        console.error(error)
    })
});