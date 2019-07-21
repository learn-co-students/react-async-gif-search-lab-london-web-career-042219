import React, { Component } from 'react';
class GifList extends Component {
  render() {
    return (
      <div>
        I am the child of GifListContainer
        <ul>
 {this.props.threeGifs.map(gif => <li> <img src={gif}></img></li>)}

        </ul>
      </div>
    );
  }
}

export default GifList;