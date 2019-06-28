import React, {Component} from 'react';

export default class GifSearch extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchText:""
        }
    }

    searchChange = (e) => {
        this.setState({searchText:e.target.value});
    }

    render() {
        return(
            <div>
            <form onSubmit={(e) => this.props.gifsearch(e,this.state.searchText)}>
                <input type='text' name='searchText' value={this.state.searchText} onChange={this.searchChange}></input>
                <button type='Submit'>Find Gifs</button>
            </form>
            </div>
        )
    }
}