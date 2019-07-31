import React from "react";
import "./styles.scss";

const Header = () => (
    <section id="banner">
        <div className="container">
            <div className="row">
                <div className="col-6 image-container text-center">
                    <img alt="Clutch Technologies logo" className="logo-dark" src="/clutchlogo.png"></img>
                    <p className="logo-subtext">Weather Tracker</p>
                </div>
                <div className="col-6 created-by text-right">
                    <p>Created by Noah </p>
                </div>
            </div>
        </div>
    </section>
);

export default Header;