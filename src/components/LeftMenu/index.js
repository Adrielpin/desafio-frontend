/*
    Container and brains for the the selection menu and search.
*/

import React, { Component } from "react";
import { connect } from "react-redux";
import LocationSearch from "./subComponents/LocationSearch";
import LocationMenu from "./subComponents/LocationMenu";
import { fetchWeather, addLocation, pickLocation, deleteLocation } from "../../actions";
import "./styles.scss";

class ConnectedLeftMenu extends Component {

    constructor() {
        super();

        this.state = {
            location: "",
            menuStatus: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleMenuSelect = this.handleMenuSelect.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    componentDidMount() {
        if (this.props.activeLocation && this.props.activeLocation !== "") {
            this.props.fetchWeather({value: this.props.activeLocation});
        }
    }

    // Handles input changes
    handleChange(event) { 
        this.setState({ [event.target.id]: event.target.value });
    }

    // Handles search form submition
    handleSubmit(event) { 
        event.preventDefault();
        const { location } = this.state;
        if (!location || location.length <= 1) {
            alert("Invalid location");
            return;
        }
        this.props.addLocation({ value: location });
        this.setState({ location: "" });
    }

    // Handles a new selection, and also handles the locations dropdown
    handleMenuSelect(key) {
        if (key === "locations-expand") {
            this.setState({
                menuStatus: !this.state.menuStatus
            });
        } else {
            this.setState({
                menuStatus: false
            });
            this.props.pickLocation({ value: key });
        }
    }

    // Deletes an element from the menu
    handleDeleteClick(e, key) {
        e.stopPropagation();
        this.props.deleteLocation({ value: key });
    }

    render() {
        const { menuStatus } = this.state;
        return (
            <div className={`col-lg-3 col-md-4 menu-container text-center ${menuStatus ? "menu-open" : "menu-close"}`}>
                <LocationSearch
                    location={this.state.location}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    handleMenuSelect={this.handleMenuSelect}
                    locations={this.props.locations}
                />
                <LocationMenu 
                    locations={this.props.locations}
                    activeLocation={this.props.activeLocation}
                    handleMenuSelect={this.handleMenuSelect}
                    handleDeleteClick={this.handleDeleteClick}
                />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchWeather: (location) => dispatch(fetchWeather(location)),
        addLocation: location => dispatch(addLocation(location)),
        pickLocation: location => dispatch(pickLocation(location)),
        deleteLocation: location => dispatch(deleteLocation(location))
    };
};

const mapStateToProps = state => {
    return { 
        activeLocation: state.activeLocation,
        locations: state.locations,
    };
};

const LeftMenu = connect(mapStateToProps, mapDispatchToProps)(ConnectedLeftMenu);

export default LeftMenu;