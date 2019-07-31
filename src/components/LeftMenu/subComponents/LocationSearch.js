// Displays search form and mobile location dropdown

import React from "react";
import LocationItem from "./LocationItem";

const LocationSearch = ({ location, locations = [], handleChange, handleSubmit, handleMenuSelect }) => (
    <div id="location-search-wrap">
        <form 
            className={`location-search-form form-group ${(locations.length > 0) ? "" : "full-radius"}`} 
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                className="location-search form-control"
                placeholder="Add a Location"
                id="location"
                value={location}
                onChange={handleChange}
                autoComplete="off"
            />
            <button type="submit" className="add-location-btn btn">+</button>
        </form>
        {(locations && locations.length > 0) ? (
            <LocationItem
                title={<span>Saved Locations</span>}
                active={false}
                onClick={() => handleMenuSelect("locations-expand")}
            />
        ) : (null)}
    </div>
);

export default LocationSearch;
