import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
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
      date: "Tuesday 15:51",
    });
  }
  if (weatherData.ready) {
    return (
      <div className="searchpart">
        <form id="searchform">
          <input
            type="text"
            id="city-input"
            placeholder="    🔍Enter your city"
            autofocus="on"
          />
          <input type="submit" value="Search" id="search" />
          <input type="button" value="Current City" id="cityButton" />
        </form>
        <div className="overview">
          <h1 id="city">{weatherData.city}</h1>
          <ul>
            <li>
              Last update: <span id="date">{weatherData.date}</span>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <img
              src={weatherData.iconUrl}
              className="bigemoji"
              id="icon"
              alt=""
            />
            <span id="temperature" className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="units">
              <a href="/" id="°c">
                {" "}
                °C{" "}
              </a>{" "}
              |{" "}
              <a href="/" id="°f">
                {" "}
                °F{" "}
              </a>
            </span>
          </div>
          <div className="col-6">
            <div className="dhw">
              <ul>
                <li className="text-capitalize">
                  Description:{weatherData.description}{" "}
                  <span id="description"></span>
                </li>
                <li>
                  Humidity: {weatherData.humidity} <span id="humidity"></span>%
                </li>
                <li>
                  Wind:{weatherData.wind} <span id="wind"></span>mph
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "236fa1446f45cbfd447cb59b9ec5d8a4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
