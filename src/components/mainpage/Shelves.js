import React from 'react'
import PropTypes from 'prop-types'
import ListBookItem from './ListBookItem';
const Shelves = props => {

    const {shelfName,books,handleChangeEvent}=props

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">  {shelfName}  </h2>
            <div className="bookshelf-books">

               <ListBookItem books={books}  handleChangeEvent={handleChangeEvent}/>

            </div>
        </div>

    )
}

Shelves.propTypes = {
    books: PropTypes.array.isRequired,
    handleChangeEvent: PropTypes.func.isRequired,
    shelfName:PropTypes.string.isRequired,
     }

export default Shelves;