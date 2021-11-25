import * from "axios";

const API_KEY = 'd58acef2c7c1f7087fea6d6039ed10a';

function getCurrentWeather(location) {
    axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`

);
}