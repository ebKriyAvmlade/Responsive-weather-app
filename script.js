const triple = document.getElementById('nona');
const totalContentWidth = 990; 
let triplePosition = 0;
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const apiKey = "a9f830dbdb7595bd879db437e2cbe315";
const search = document.querySelector('.inp')
const buttonss = document.querySelector('.searchs')
const sun = document.querySelector('.sun')
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data)

    document.querySelector('.loc').innerHTML = data.name
    document.querySelector('.temp').innerHTML = data.main.temp + " °C"
    document.querySelector('.per').innerHTML = data.main.humidity + "%"
    document.querySelector('.km').innerHTML = data.wind.speed + " km/h"

    if(data.weather[0].main = "Clouds"){
        sun.src="image/cloudy_weather_icon_151782.png"
    } else if(data.weather[0].main = "Clear") {
        sun.src="image/weather-icon-png-11067.png"
    } else if(data.weather[0].main = "Rain") {
        sun.src="image/pngkey.com-rain-png-transparent-408064.png"
    } else if(data.weather[0].main = "Drizzle") {
        sun.src="image/drizzle.png"
    } else if(data.weather[0].main = "Mist") {
        sun.src="image/cloud.dark.fog.png"
    }
}



buttonss.addEventListener("click", () => {
    checkWeather(search.value)
})


function button() {
    if (triplePosition > -totalContentWidth + 330) {
        triplePosition -= 330;
        create();
    }
    
}


function buttons() {
    if (triplePosition < 0) {
        triplePosition += 330;
        create();
    }
}



function create() {
    triple.style.transform = `translateX(${triplePosition}px)`;
}

