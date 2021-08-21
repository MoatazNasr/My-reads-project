import React, { Component } from 'react'
import BookItem from './BookItem';
import PropTypes from 'prop-types'
const Shelves = props => {


    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">  {props.shelfName}  </h2>
            <div className="bookshelf-books">

                <ul className="books-grid">
                    {props.books.map( book => (

                        <li key={book.id}>

                            <BookItem book={book} handleChangeEvent={props.handleChangeEvent} />
                        </li>

                    ))}
                </ul>

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