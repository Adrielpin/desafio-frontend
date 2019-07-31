import { ADD_LOCATION, FETCH_WEATHER, SELECT_LOCATION, DELETE_LOCATION } from "../constants/action-types";

export const addLocation = location => ({ type: ADD_LOCATION, payload: location });

export const deleteLocation = location => ({ type: DELETE_LOCATION, payload: location });

export const pickLocation = location => ({ type: SELECT_LOCATION, payload: location });

export const fetchWeather = payload => ({ type: FETCH_WEATHER, payload });