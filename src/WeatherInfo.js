import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherCels from "./WeatherCels";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="overview">
        <h1 id="city">{props.data.city}</h1>
        <ul>
          <li>
            Last update:{" "}
            <span id="date">
              <FormattedDate date={props.data.date} />
            </span>
          </li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="bigemoji" id="icon" alt="">
            <WeatherIcon code={props.data.icon} />
          </div>
          <WeatherCels celsius={props.data.temperature} />
        </div>
        <div className="col-6">
          <div className="dhw">
            <ul>
              <li className="text-capitalize">
                Description:{props.data.description}{" "}
                <span id="description"></span>
              </li>
              <li>
                Humidity: {props.data.humidity} <span id="humidity"></span>%
              </li>
              <li>
                Wind:{props.data.wind} <span id="wind"></span>mph
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
