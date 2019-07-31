import {
    ADD_LOCATION,
    SELECT_LOCATION_SUCCESS,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER,
    DELETE_LOCATION
} from "../constants/action-types";

const rootReducer = (state, action) => {
    switch (action.type) {
        case ADD_LOCATION:
            return {
                ...state,
                locations: [
                    ...state.locations,
                    action.payload
                ]
            };
        case DELETE_LOCATION:
            return {
                ...state,
                ...deleteLocation(state, action)
            };
        case SELECT_LOCATION_SUCCESS:
            return {
                ...state,
                activeLocation: action.payload && action.payload.value
            };
        case FETCH_WEATHER:
            return {
                ...state,
                loading: true
            };
        case FETCH_WEATHER_SUCCESS:
            if (action.payload && action.payload.channel) {
                return {
                    ...state,
                    weather: action.payload.channel,
                    loading: false
                };
            }
            return {
                ...state,
                weather: {},
                loading: false
            };
        default:
            return state;
    }
};

// Parent Function for deleting a location from the state
function deleteLocation(state, action) {
    return {
        ...state,
        locations: remove(state.locations, action.payload),
        ...setNewActive(state, action)
    };
}

// Sets the new active location in the state, and clears weather if necessary
function setNewActive(state, action) {
    if (state.activeLocation === action.payload.value) {
        return {
            activeLocation: "",
            weather: {}
        };
    } else {
        return {};
    }
}

// Removes element from an array
function remove(array, element) {
    return array.filter(el => el.value !== element.value);
}

export default rootReducer;