import { takeLatest, call, put } from "redux-saga/effects";
import { fetchWeatherAPI } from "../api";
import { 
    fetchWeather as fetchWeatherAction, 
    pickLocation as pickLocationAction 
} from "../actions";
import { 
    FETCH_WEATHER, 
    FETCH_WEATHER_SUCCESS, 
    FETCH_WEATHER_FAILED, 
    SELECT_LOCATION, 
    SELECT_LOCATION_SUCCESS, 
    ADD_LOCATION 
} from "../constants/action-types";

// Watches events to run sagas
export default function* sagas() {
    yield takeLatest(FETCH_WEATHER, fetchWeather);
    yield takeLatest(SELECT_LOCATION, pickLocation);
    yield takeLatest(ADD_LOCATION, addLocation);
}

export function* fetchWeather({ payload }) {
    try {
        const weather = yield call(fetchWeatherAPI, payload);
        yield put({ type: FETCH_WEATHER_SUCCESS, payload: weather });
    } catch (error) {
        yield put({ type: FETCH_WEATHER_FAILED, error });
    }
}

export function* pickLocation({ payload }) {
    yield [
        put(fetchWeatherAction(payload)),
        put({ type: SELECT_LOCATION_SUCCESS, payload }),
    ];
}

export function* addLocation({ payload }) {
    yield [
        put(pickLocationAction(payload)),
    ];
}