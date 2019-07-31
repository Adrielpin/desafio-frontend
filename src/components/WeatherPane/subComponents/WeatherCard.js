// Displays Forecasted Data

import React from "react";

const WeatherCard = ({ forecast, units }) => (
    <div className="card box-shadow mobile-enable-shadow">
        <div className="card-body">
            <p className="card-text">{forecast.day}</p>
            <h5 className="card-title"><i className="wi wi-thermometer"></i> H: {forecast.high}&deg;{units.temperature}</h5>
            <h5 className="card-title"><i className="wi wi-thermometer"></i> L: {forecast.low}&deg;{units.temperature}</h5>
            <p className="card-text">{forecast.text}</p>
        </div>
    </div>
);

export default WeatherCard;