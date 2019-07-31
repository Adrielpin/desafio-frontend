import axios from "axios";
const API_URL = "https://query.yahooapis.com/v1/public/yql";

// Fetches Weather from Yahoo API
export const fetchWeatherAPI = (location) => {
    return axios.get(buildQueryURL(location.value)).then(response => {
        return (response.data && response.data.query && response.data.query.results) || {};
    }).catch(err => {
        return err;
    });
};

// Adds details to Yahoo's YQL query
function buildQueryURL(location) {
    return `${API_URL}?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${location}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`;
}