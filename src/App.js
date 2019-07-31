import React from "react";
import LeftMenu from "./components/LeftMenu";
import "./styles.scss";
import WeatherPane from "./components/WeatherPane";
import Header from "./components/Header";

/* Main Container For the Application */

const App = () => (
    <div id="app">
        <Header />
        <section id="weather-wrapper">
            <div className="container">
                <div className="row">
                    <LeftMenu />
                    <WeatherPane />
                </div>
            </div>
        </section>
    </div>
);

export default App;