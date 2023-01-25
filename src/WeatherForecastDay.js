import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div className="card-group">
      <div className="maincard">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{day()}</h5>
            <WeatherIcon code={props.data.weather[0].icon} size={35} />
            <div className="weather-forecast-temperatures">
              <span className="weather-forecast-temperature-max">
                {maxTemperature()}
              </span>
              <span className="weather-forecast-temperature-min">
                {minTemperature()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
