import React from 'react'
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';
let URL = (test) => `http://api.giphy.com/v1/gifs/search?q=${test}&api_key=dc6zaTOxFJmzC&rating=g`
class GifListContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      threeGifs: []
    }
  }
  //In our app the <GifListContainer /> will be responsible for fetching the data from the giphy API, storing the first 3 gifs from the response
  fetchGifs = (search) => {
    return fetch(URL(search)).then(resp => resp.json())
  }
  //<GifListContainer /> should pass down a submit handler function to <GifSearch /> as a prop.
  handleSearchSubmit = (event, search) => {
    event.preventDefault()
    this.fetchGifs(search).then(results => this.updateGifsInState(results)
    )
  }

  updateGifsInState = (results) => {
    let threeGifs = []
    let indexes = [0, 1, 2]

    indexes.forEach((index) => { threeGifs = [...threeGifs, results.data[index].images.original.url] })
    this.setState({ threeGifs })
  }
  render() {
    return (
      <div>
        <GifSearch handleSearchSubmit={this.handleSearchSubmit} />
        <GifList threeGifs={this.state.threeGifs} />
      </div>
    )
  }
}
export default GifListContainer