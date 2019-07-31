/*
    Creates the store for the application.
    Sets the initial state from localStorage if it exists.
    Subscribes to locations to add to localStorage.
*/


import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import createSagaMiddleware from "redux-saga";
import sagas from "../sagas";

// Inits Saga
const sagaMiddleware = createSagaMiddleware();

let initialLocations;
let activeLocation = "";

// Sets locations from localStorage
if (localStorage.getItem("locations")) {
    initialLocations = JSON.parse(localStorage.getItem("locations"));
    if (initialLocations[0] && initialLocations[0].value) {
        activeLocation = initialLocations[0].value;
    }
}

// Ensures initialLocations is array
if (typeof(initialLocations) !== typeof([])) {
    initialLocations = [];
}

const initialState = {
    locations: initialLocations,
    activeLocation,
    weather: {}
};

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sagas);

// subscribes localStorage to locations
store.subscribe(() => {
    const { locations } = store.getState();
    localStorage.setItem("locations", JSON.stringify(locations));
});

export default store;