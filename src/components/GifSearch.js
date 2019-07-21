import React, { Component } from 'react';
class GifSearch extends Component {
  state = {
    search: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
        return(
      <div>
        <form onSubmit={(event) => this.props.handleSearchSubmit(event, this.state.search)}>
      <input
        type="text"
        value={this.state.search}
        name="search"
        placeholder="Search for a GIF"
        onChange={this.handleChange}
      ></input>
      <input type="submit" value="Search"></input>
      </form>
      </div >
    );
  }
}

export default GifSearch;