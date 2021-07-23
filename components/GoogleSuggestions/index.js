import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  searchEntered = e => {
    this.setState({searchInput: e.target.value})
  }

  itemClicked = id => {
    const {suggestionsList} = this.props
    this.setState({searchInput: suggestionsList[id - 1].suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchInputLowerCase = searchInput.toLowerCase()
    const filteredSuggestionsList = suggestionsList.filter(item =>
      item.suggestion.toLowerCase().includes(searchInputLowerCase),
    )
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google_logo"
          className="google-logo"
        />
        <div className="search-box-container">
          <div className="searchbox">
            <img
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search_icon"
            />
            <input
              type="search"
              className="input-element"
              placeholder="Search Google"
              value={searchInput}
              onChange={this.searchEntered}
            />
          </div>
          <ul className="list-of-suggestions">
            {filteredSuggestionsList.map(suggestionItem => (
              <SuggestionItem
                suggestionItem={suggestionItem}
                itemClicked={this.itemClicked}
                key={suggestionItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
