// Side menu parent for individual items

import React from "react";
import LocationItem from "./LocationItem";

const LocationMenu = ({ locations = [], handleDeleteClick, activeLocation, handleMenuSelect }) => (
    <div className="list-group">
        {locations.map((location, i) => (
            <LocationItem
                title={location.value}
                key={location.value + i}
                active={activeLocation === (location.value)}
                onClick={() => handleMenuSelect(location.value)}
                handleDeleteClick={(e) => handleDeleteClick(e, location.value)}
            />
        ))}
    </div>
);

export default LocationMenu;