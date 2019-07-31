// Displays Current Weather Data

import React from "react";

const CurrentWeather = ({ units = {}, conditions = {}, astronomy = {}, humidity = null }) => (
    <div className="col-lg-3">
        <div className="card-deck text-center current-weather">
            <div className="card box-shadow">
                <div className="card-header">
                    <h4 className="weather-header">Current</h4>
                </div>
                <div className="card-body">
                    <h5 className="card-title"><i className="wi wi-thermometer"></i> {conditions.temp}&deg;{units.temperature}</h5>
                    <p className="card-text">{conditions.text}</p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <i className="wi wi-sunrise"></i> {astronomy.sunrise}
                            <br />
                            <i className="wi wi-sunset"></i> {astronomy.sunset}
                        </li>
                        <li className="list-group-item">Humidity:<br /><i className="wi wi-humidity"></i> {humidity}%</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

export default CurrentWeather;