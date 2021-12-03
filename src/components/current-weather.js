import React from "react";

class CurrentWeather extends React.Component {
  render() {
    return (
      <div className="current-weather">
        <div className="current-weather__content">
          <p className="current-weather__temp">
            {this.props.currentTemperature}
          </p>
          <p className="current-weather__description">
            {this.props.description}
          </p>
          <img className="current-weather__icon" url="" />
        </div>
        <div>
          <p className="current-weather__feels-like">
            Feels Like{this.props.feelsLike}
          </p>
        </div>
      </div>
    );
  }
}

export default CurrentWeather;
