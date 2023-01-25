import React, { useState } from "react";
import "./Weather.css";

import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Main(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="main">
        <div className="forecast" id="forecast">
          <div className="row">
            {forecast.map(function (dailyForecast, index) {
              if (index < 6) {
                return (
                  <div className="col" key={index}>
                    <WeatherForecastDay data={dailyForecast} />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "894a2e7aa7f46eeca5d8778f6faa5a5b";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
