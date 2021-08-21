import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger'
import PropTypes from 'prop-types'

const BookItem = props => {


    const {book,handleChangeEvent} = props;

    return (


                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                        <ShelfChanger book={book} handleChangeEvent={handleChangeEvent}/>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors"> {book.authors.map((author, i) => (

                        <p key={i}>{author}</p>))}

                    </div>
                </div>

        
           

    )
}

BookItem.propTypes = {
    book: PropTypes.object.isRequired,
    handleChangeEvent: PropTypes.func.isRequired,
     }

export default BookItem;