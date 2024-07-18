let button = document.getElementById("search");
let input = document.getElementById("city");
let cityName= document.getElementById("cityName");
let Country= document.getElementById("Country");
let cityRegion= document.getElementById("cityRegion");
let cityTime = document.getElementById("cityTime");
let celcius = document.getElementById("celcius");
let ferinhite = document.getElementById("ferinhite");


async function getData(cityName) {

    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=6823dc6b173f4bd8aee91020241707&q=${cityName}&aqi=yes`)

    return await promise.json();
}
button.addEventListener("click", async () => {

    if (input.value === "" ) {
        alert("Please enter a city name");
        return; 
    }

    let city = input.value;

    let result = await getData(city);

    console.log(result);

    cityName.innerHTML = "";
    cityRegion.innerHTML = "";
    Country.innerHTML = "";
    celcius.innerHTML = "";
    ferinhite.innerHTML = "";
    cityTime.innerHTML = "";

    cityTime.innerHTML += `Time :-${result.current.last_updated}`;

    cityName.innerHTML += `City Name :-${result.location.name}` ;
    cityRegion.innerHTML += `City Region :-${result.location.region}`
    Country.innerHTML += `Country :-${result.location.country}` ;
    celcius.innerHTML += `Temp. :-${result.current.temp_c}c` ;
    ferinhite.innerHTML += `Temp. :-${result.current.temp_f}f` ;
})
