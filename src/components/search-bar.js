import React from "react";
import { getCurrentWeather } from "./../apis/open-weather.api";

//this is a class component
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      temp: "",
    };
  }

  onInputChange(e) {
    this.setState({
      location: e.target.value,
    });
  }

  onFormSubmit(e) {
    e.preventDefault();

    getCurrentWeather(this.state.location).then((res) => {
      this.setState({
        temp: res.data.main.temp,
      });
    });
  }
  //render function is triggered whenever updating the state using the setState function
  render() {
    const location = this.state.location;
    const temp = this.state.temp;
    return (
      <div>
        <form onSubmit={(e) => this.onFormSubmit(e)}>
          <button type="submit">Search</button>
          <input
            id="id"
            name="search"
            value={location}
            onChange={(e) => this.onInputChange(e)}
          ></input>
        </form>
        <p>{temp}</p>
      </div>
    );
  }
}

export default SearchBar;
