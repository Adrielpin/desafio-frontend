// Menu item

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const LocationItem = ({ title, handleDeleteClick, active, onClick }) => (
    <li
        onClick={onClick}
        className={`list-group-item ${(active) ? "active" : ""}`}
    >
        {handleDeleteClick ? (
            <span
                className="delete"
                onClick={handleDeleteClick}
            >
                <FontAwesomeIcon icon={faTimesCircle} />
            </span>
        ) : (null)}
        {title}
    </li>
);

export default LocationItem;