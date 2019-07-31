// Distributes forecast data into WeatherCards

import React from "react";
import WeatherCard from "./WeatherCard";

const WeatherDeck = ({ forecast, units }) => (
    <div className="col-lg-9">
        <div className="card-header-custom text-center box-shadow">
            <h4 className="weather-header">Next 3 Days</h4>
        </div>
        <div className="card-group text-center box-shadow mobile-disable-shadow">
            {forecast && forecast.map((theForecast, i) => {
                if (i < 3) {
                    return (
                        <WeatherCard
                            forecast={theForecast}
                            units={units}
                            key={theForecast.day}
                        />
                    );
                }
                return (null);
            })}
        </div>
    </div>
);

export default WeatherDeck;