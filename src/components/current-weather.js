import React from "react";

class CurrentWeather extends React.Component {
  render() {
    return (
      <div className="current-weather">
        <div className="current-weather__content">
          <p className="current-weather__temp">39.99</p>
          <p className="current-weather__description">Sunny</p>
        </div>
        <div></div>
      </div>
    );
  }
}
