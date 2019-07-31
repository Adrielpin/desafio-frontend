/*
    Container and brains for the the displayed weather.
*/

import React from "react";
import { connect } from "react-redux";
import CurrentWeather from "./subComponents/CurrentWeather";
import WeatherDeck from "./subComponents/WeatherDeck";
import "./styles.scss";

const mapStateToProps = state => {
    return {
        weather: state.weather,
        activeLocation: state.activeLocation,
        locations: state.locations,
        loading: state.loading
    };
};

function conditionalRender({ weather = {}, locations, activeLocation, loading }) {
    if (loading) {
        return (
            <div className="jumbotron">
                <h3>Loading Weather...</h3>
            </div>
        );
    } else if (weather.title) {
        return (
            <div className="row">
                <div className="col-12 weather-title">
                    <h3>{weather.title}</h3>
                </div>
                <CurrentWeather
                    units={weather.units}
                    conditions={weather.item && weather.item.condition}
                    astronomy={weather.astronomy}
                    humidity={weather.atmosphere && weather.atmosphere.humidity}
                />
                <WeatherDeck
                    units={weather.units}
                    forecast={weather.item && weather.item.forecast}
                />
            </div>
        );
    } else if (activeLocation.length > 0) {
        return (
            <div className="jumbotron">
                <h3>Could not find weather for {activeLocation}.</h3>
            </div>
        );
    } else if (locations.length > 0) {
        return (
            <div className="jumbotron">
                <h3>Please select a location or enter a new one.</h3>
            </div>
        );
    } else {
        return (
            <div className="jumbotron">
                <h3>Please enter a location.</h3>
            </div>
        );
    }
}

// Calls Conditional Render to handle loading and unselected states
const ConnectedWeatherPane = (props) => (
    <div className="col-lg-9 col-md-8 weather-details">
        {conditionalRender(props)}
    </div>
);

const WeatherPane = connect(mapStateToProps)(ConnectedWeatherPane);

export default WeatherPane;