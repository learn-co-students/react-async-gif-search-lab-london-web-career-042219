import React, { Component } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

export default class GifListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        search:"", 
        gifs:[] }; // Store the fetched data
  }

  componentDidMount() {
    // Do my fetch stuff here
    const url =
      `http://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=dc6zaTOxFJmzC&rating=g`;

    fetch(url)
      .then(data => data.json())
      .then(data => this.setState({ gifs: data.data.slice(0, 3) })); //Get the 1st 3
      //.then(() => console.log(this.state.gifs[0].images.original.url)); //Log it out
  }

  gifsearch = (e,searchText) => {
      e.preventDefault();
      this.setState({ search:searchText});
      const url =
      `http://api.giphy.com/v1/gifs/search?q=${searchText}&api_key=dc6zaTOxFJmzC&rating=g`;

    fetch(url)
      .then(data => data.json())
      .then(data => this.setState({ gifs: data.data.slice(0, 3) })); //Get the 1st 3

  }

  render() {
    return (
      <div>
        <GifSearch gifsearch={this.gifsearch}/>
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}
