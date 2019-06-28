import React, { Component } from "react";

export default class GifList extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <ul>
        {this.props.gifs.map( gif => (
        <li key={gif.id}>
          <img src={gif.images.original.url}/>
        </li>
        ))}
      </ul>
    );
  }
}
