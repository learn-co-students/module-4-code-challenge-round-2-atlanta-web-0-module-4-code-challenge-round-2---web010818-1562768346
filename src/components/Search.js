import React from 'react'

const Search = (props) => {
  console.log(props.handleChange)
  return (
    <div className="ui huge fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={event => props.handleChange(event.target.value)}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
