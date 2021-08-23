import React from 'react'
import ListBookItem from '../mainpage/ListBookItem';
import PropTypes from 'prop-types'



const ResultsOfSearch = (props) => {

    const { searchedBooks, query ,handleChangeEvent} = props;

    return (
        
        <div>
            {query !== '' ? (

                <div className="search-books-results">

                    <ListBookItem books={searchedBooks} handleChangeEvent={handleChangeEvent}/>

                </div>


            ) : (
                
                <h3> Search for books</h3>)

            }


        </div>

    )

}

ResultsOfSearch.propTypes = {
    query: PropTypes.string.isRequired,
    handleChangeEvent: PropTypes.func.isRequired,
    searchedBooks:PropTypes.array.isRequired
     }
export default ResultsOfSearch;