import React from "react";
import "./Weather.css";

export default function Main() {
  return (
    <div className="main">
      <div className="forecast" id="forecast">
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
  );
}
