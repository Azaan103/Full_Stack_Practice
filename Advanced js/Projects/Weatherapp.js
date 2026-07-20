let cityname = document.querySelector("#cityInput")
let srchbtn = document.querySelector("#searchBtn")
const YOUR_API_KEY = "3f4e3402d687cb6a81a968ef9c74d626"

let temp = document.querySelector("#temp");
let condition = document.querySelector("#condition");
let city = document.querySelector("#cityName");
let humidity = document.querySelector("#humidity");
let wind = document.querySelector("#wind");

srchbtn.addEventListener('click',function(){
    getweather()
})

async function getweather()
{
    let city_name = cityname.value.trim()
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${YOUR_API_KEY}&units=metric`;    const response = await fetch(url);
    const data = await response.json();
        
    console.log(data)

    temp.innerHTML = data.main.temp
    humidity.innerHTML = data.main.humidity
    wind.innerHTML = data.wind.speed
    city.innerHTML = data.name
   

}

