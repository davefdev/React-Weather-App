import React from "react";
import "./App.scss";

import logo from "./logo.svg";
import SearchBar from "./components/search-bar";
import CurrentWeather from "./components/current-weather";
import Forecast from "./components/forecast-weather";

import { getCurrentWeather, getForecast } from "./apis/open-weather.api";

//functional component
//returns a template, doesnt have too much config, or methods, or functions inside a class that is used to manipulate/create logic
//just returns a template )what is being rendered in the UI
//this is a class componennt
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "Manchester",
      temp: "",
      feelsLike: "",
      description: "",
      icon: "",
      hourlyForecast: [],
    };

    this.onFormSubmit();
  }

  onInputChange(e) {
    this.setState({
      location: e.target.value,
    });
  }

  async onFormSubmit() {
    const weatherRes = await getCurrentWeather(this.state.location);

    const lat = weatherRes.data.coord.lat;
    const lon = weatherRes.data.coord.lon;
    const forecastRes = await getForecast(lat, lon);

    this.setState({
      temp: weatherRes.data.main.temp,
      feelsLike: weatherRes.data.main.feels_like,
      description: weatherRes.data.weather[0].main,
      icon: weatherRes.data.weather[0].icon,
      hourlyForecast: forecastRes.data.hourly,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar
            location={this.state.location}
            onInputChange={(e) => this.onInputChange(e)}
            formSubmitted={() => this.onFormSubmit()}
          />
          <CurrentWeather
            currentTemperature={this.state.temp}
            feelsLike={this.state.feelsLike}
            description={this.state.description}
            icon={this.state.icon}
          />
          <Forecast forecast={this.state.hourlyForecast} />
        </header>
      </div>
    );
  }
}
export default App;
