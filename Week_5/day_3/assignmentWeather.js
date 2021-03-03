// WEATHER BY CITY

var cityNameTextBox = document.getElementById("cityNameTextBox")
var searchButton = document.getElementById("searchButton")
var weatherUL = document.getElementById("weatherUL")
var latLongUL = document.getElementById("latLongUL")


searchButton.addEventListener('click', function(){

    let city = cityNameTextBox.value
    
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d19d629f689bf144eebc7b0b3aee7004&units=imperial`)
    .then(function (response){
        return response.json()
    }).then(function(result) {
        let weatherResult = 
        `<li>
            <b> City: ${result.name}</b>
            <p> Min Temp: ${result.main.temp_min}°F</p>
            <p> Max Temp: ${result.main.temp_max}°F</p>
            <p> Pressure: ${result.main.pressure} mbar</p>
        </li>
        `

        weatherUL.innerHTML = weatherResult
    })

})

// WEATHER BY LAT/LONG


const successfulLookup = function(position){

    const {latitude,longitude} = position.coords;
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=d19d629f689bf144eebc7b0b3aee7004&units=imperial`)
    .then(function(response){
        return response.json()
    })
    .then(function(result){
        let weatherResultByCoordinates = 
        `<li>
            <b> Current Location: ${result.name}</b>
            <p> Min Temp: ${result.main.temp_min}°F</p>
            <p> Max Temp: ${result.main.temp_max}°F</p>
            <p> Pressure: ${result.main.pressure} mbar</p>
        </li>
        `

        latLongUL.innerHTML = weatherResultByCoordinates
    })
}

console.log((navigator.geolocation.getCurrentPosition(successfulLookup,console.log)))