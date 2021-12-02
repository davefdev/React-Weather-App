import logo from "./logo.svg";
import "./App.scss";
import SearchBar from "./components/search-bar";
import CurrentWeather from "./components/current-weather";
import { getCurrentWeather } from "./apis/open-weather.api";
import React from "react";

//functional component
//returns a template, doesnt have too much config, or methods, or functions inside a class that is used to manipulate/create logic
//just returns a template )what is being rendered in the UI
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      temp: "",
      feelsLike: "",
      description: "",
      icon: "",
    };
  }

  onInputChange(e) {
    this.setState({
      location: e.target.value,
    });
  }

  onFormSubmit() {
    getCurrentWeather(this.state.location).then((res) => {
      this.setState({
        temp: res.data.main.temp,
        feelsLike: res.data.main.feels_like,
        description: res.data.weather[0].main,
        icon: res.data.weather[0].icon,
      });
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
        </header>
      </div>
    );
  }
}
export default App;
