import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    const apiKey = "236fa1446f45cbfd447cb59b9ec5d8a4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="searchpart">
        <form id="searchform" onSubmit={handleSubmit}>
          <input
            type="text"
            id="city-input"
            placeholder="    🔍Enter your city"
            autoFocus="on"
            onChange={handleCityChange}
          />
          <input type="submit" value="Search" id="search" />
          <input type="button" value="Current City" id="cityButton" />
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
