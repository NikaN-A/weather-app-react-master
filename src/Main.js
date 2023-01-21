import React from "react";
import "./Weather.css";

export default function Main() {
  let weatherData = {
    city: "Kyiv",
    temperature: 10,
    date: "Tuesday 15:51",
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10,
  };
  return (
    <div className="main">
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
          <img src={weatherData.imgUrl} className="bigemoji" id="icon" alt="" />
          <span id="temperature" className="temperature">
            {weatherData.temperature}
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
              <li>
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

        <div class="forecast" id="forecast">
          <div className="row">
            <div className="col-2">
              <div className="card-group">
                <div className="maincard">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Mon</h5>
                      <img
                        src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                        alt=""
                        className="emoji"
                        id="icon"
                        width="40px"
                      />
                      <div className="weather-forecast-temperatures">
                        <span className="weather-forecast-temperature-max">
                          {" "}
                          7°{" "}
                        </span>
                        <span className="weather-forecast-temperature-min">
                          {" "}
                          0°{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
