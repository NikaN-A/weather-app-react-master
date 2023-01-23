import React from "react";
import FormattedDate from "./FormattedDate";

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
          <img src={props.data.iconUrl} className="bigemoji" id="icon" alt="" />
          <span id="temperature" className="temperature">
            {Math.round(props.data.temperature)}
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
