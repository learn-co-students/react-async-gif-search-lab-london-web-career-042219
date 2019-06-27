import React, { Component } from "react";
import GifSearch from "../components/GifSearch";
import GifList from "../components/GifList";

class GifListContainer extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
      search: ""
    };
  }

  getGifsFromServer = (query = "cats") => {
    fetch(
      `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`
    )
      .then(response => response.json())
      .then(({ data }) => {
        this.setState({
          gifs: data.map(gif => ({ url: gif.images.original.url }))
        });
      });
  };

  componentDidMount() {
    this.getGifsFromServer();
  }

  renderGifsData = () => {
    return this.state.gifs.map(gif => <GifList gif={gif} key={gif.url} />);
  };

  filterByUsersSearch = e => {
    e.preventDefault();
    // let originalUsersSearch = e.target.value;
    // let updatedUsersSearch = originalUsersSearch.split(" ").join("_");
    this.setState({ search: e.target.value });
    this.getGifsFromServer(this.state.search);
  };

  render() {
    return (
      <div>
        <h1> Hello World </h1>
        <GifSearch filterByUsersSearch={this.filterByUsersSearch} />
        {this.renderGifsData()}
      </div>
    );
  }
}

export default GifListContainer;
