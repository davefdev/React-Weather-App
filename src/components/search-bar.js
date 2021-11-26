import React from "react";

//this is a class component
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
    };

    console.log("my key", process.env.REACT_APP_API_KEY);
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
