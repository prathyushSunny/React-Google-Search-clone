import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, itemClicked} = props
  const {id} = suggestionItem
  const suggestionClicked = () => itemClicked(id)
  return (
    <li className="suggestion" onClick={suggestionClicked}>
      <p>{suggestionItem.suggestion}</p>
      <img
        className="arrow-logo"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow_logo"
        onClick={suggestionClicked}
      />
    </li>
  )
}

export default SuggestionItem
