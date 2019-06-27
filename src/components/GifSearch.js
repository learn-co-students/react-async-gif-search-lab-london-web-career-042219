import React, { Component } from "react";

class GifSearch extends Component {
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Search"
            onChange={this.props.filterByUsersSearch}
          />
        </form>
      </div>
    );
  }
}
export default GifSearch;
