import React from 'react'
import PropTypes from 'prop-types'

const SearchInput = (props) => {


    const {updateQuery,query}=props;

    return (
    <div className="search-books-input-wrapper">

        <input
            type="text"
            placeholder="Search by title or author"
            value={query}
            onChange={updateQuery}

        />

    </div>

    )
}

SearchInput.propTypes = {
    query: PropTypes.string.isRequired,
    updateQuery: PropTypes.func.isRequired,
     }

export default SearchInput;