import React from 'react'
import PropTypes from 'prop-types'



 const ShelfChanger = (props) => {

    const {book , handleChangeEvent}=props;


    return (

        <div className="book-shelf-changer">
            <select
                defaultValue={book.shelf}
                onChange={event => handleChangeEvent(book, event)}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )


}

ShelfChanger.propTypes = {
    book: PropTypes.object.isRequired,
    handleChangeEvent: PropTypes.func.isRequired,
     }


export default ShelfChanger;