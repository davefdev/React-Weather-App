import React from "react";
import {getCurrentWeather} from "./../apis/open-weather.api";

//this is a class component
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
    };

    getCurrentWeather('New York').then({res} => {
        console.log('res ', res);
    })
  }

  onInputChange(e) {
    this.setState({
      location: e.target.value,
    });
  }

  onFormSubmit(e) {
    e.preventDefault();
  }
  //render function is triggered whenever updating the state using the setState function
  render() {
    const location = this.state.location;

    return (
      <form onSubmit={(e) => this.onFormSubmit(e)}>
        <button type="submit">Search</button>
        <input
          id="id"
          name="search"
          value={location}
          onChange={(e) => this.onInputChange(e)}
        ></input>
      </form>
    );
  }
}

export default SearchBar;
