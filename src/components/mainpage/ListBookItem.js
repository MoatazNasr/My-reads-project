import React from 'react'
import PropTypes from 'prop-types'
import BookItem from './BookItem';


const ListBookItem = (props) => {

    const {books,handleChangeEvent}=props

    return (


        <ul className="books-grid">

            {books.map(book => (

                <li key={book.id}>

                    <BookItem book={book} handleChangeEvent={handleChangeEvent} />
                </li>

            ))}
        </ul>

    )


}
ListBookItem.propTypes = {
    books: PropTypes.array.isRequired,
    handleChangeEvent: PropTypes.func.isRequired,
     }


export default ListBookItem;