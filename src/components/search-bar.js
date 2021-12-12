import React from "react";
import { getCurrentWeather } from "./../apis/open-weather.api";
import "./search-bar.scss";

//this is a class component
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  onInputChange(e) {
    this.props.inputChange(e);
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.formSubmitted();
  }
  //render function is triggered whenever updating the state using the setState function
  render() {
    const location = this.props.location;

    return (
      <div className="search-bar">
        <form
          className="search-bar__form"
          onSubmit={(e) => this.onFormSubmit(e)}
        >
          <button className="search-bar__button" type="submit">
            Search
          </button>
          <input
            id="id"
            name="search"
            value={location}
            className="search-bar__input"
            onChange={(e) => this.onInputChange(e)}
          ></input>
        </form>
      </div>
    );
  }
}

export default SearchBar;
