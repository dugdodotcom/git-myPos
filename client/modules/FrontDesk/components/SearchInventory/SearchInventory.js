import React from 'react'
import PropTypes from 'prop-types'

// Import Style
import styles from './SearchInventory.css';

function SearchInventory(props) {
  
  return (
    <form>
      <div className="form-group">
        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
    </form>
  )
}

SearchInventory.propTypes = {
}

export default SearchInventory
