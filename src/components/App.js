import React, {useState, useEffect} from "react"
import Square from "./Square";
import Map from "./Map";

export default function App() {
    let city = document.getElementById("city")
    let weather = document.getElementById("weather")
    // let weatherData = [];

    let APIKey = "be3112e22b86a420cb07128eb575df03";
    let latCoords = 48.3069;
    let lonCoords = 14.2858;

    let step = 0.2;
    let stepIncremennt = step / 2;
    let lowerBoundsLat = latCoords - step
    let upperBoundsLat = latCoords + step
    let lowerBoundsLon = lonCoords - step
    let upperBoundsLon = lonCoords + step
    let currLat = upperBoundsLat;
    let currLon = lowerBoundsLon;

    const [weatherData, setWeatherData] = useState([]);

    function getWeatherWithCoords(lat, lon) {
        // console.log("called with:" + lat + " and: " + lon)
        fetch("https://api.openweathermap.org/data/2.5/weather?appid=" + APIKey + "&lat=" + lat + "&lon=" + lon + "&units=metric")
            .then(response => response.json())
            .then(data => {
                updateWeather(data);
            });
    }

    function updateWeather(data) {
        setWeatherData(weatherData => {
            return [...weatherData, {name: data.name, temp: data.main.temp}]
        });
    }

    function updateCoords() {
        if (currLat < lowerBoundsLat) {
            console.log("Nope finished stop")
            return;
        }

        getWeatherWithCoords(currLat, currLon)

        if (currLon >= upperBoundsLon) {
            currLat -= stepIncremennt;
            currLon = lowerBoundsLon;
        } else {
            currLon += stepIncremennt;
        }

    }

    useEffect(() => {
        const interval = setInterval(() => {
            updateCoords()

        }, 1000);

        return () => clearInterval(interval);
    }, [])

    let maxTempIndex = 0;

    for (let i = 1; i < weatherData.length; i++) {
        if (weatherData[i].temp > weatherData[maxTempIndex].temp){
            maxTempIndex = i
        }
    }

    let squares = weatherData.map((item, index) => {
        let color = index === maxTempIndex ? "red" : "blue";
        return <Square key={index} temp={item.temp} color={color}/>
    });

    return (
        <div>
            <div id="overlay-grid">
                {squares}
            </div>
            <Map/>
        </div>
    );
}
