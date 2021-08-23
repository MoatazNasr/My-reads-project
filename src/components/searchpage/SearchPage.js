import React from 'react'
import * as BooksAPI from '../../BooksAPI'
import '../../App.css'
import { Link } from 'react-router-dom'
import SearchInput from './SearchInput'
import ResultsOfSearch from './ResultsOfSearch'
import {searchValidBooks ,commonShelvesOptions} from '../../utils/methods'

export default class SearchPage extends React.Component {


  constructor(props) {
    super(props)


    this.state = {

      query: '',
      searchedBooks: [],
      errorMessage: ''
    }

  }

  searchQuery = (query) => {

    if (query !== '') {

      BooksAPI.search(query)
        .then(books => {

          const validBooks = searchValidBooks(books);
          const commonBooksShelves= commonShelvesOptions(validBooks , this.props.books)

          this.setState({ searchedBooks: commonBooksShelves })
          this.setState({ errorMessage: '' })

        })
        .catch( error => {
          this.setState({ errorMessage: 'Invalid Query No Books Found' })
          this.setState({ searchedBooks: [] })

        })
    }

    else {
      this.setState({ searchedBooks: [] })

    }

  }


  updateQuery = (event) => {

    const query = event.target.value;

    this.setState({ query: query })

    this.searchQuery(query);
  }


  render() {

    const { query, searchedBooks, errorMessage } = this.state;
      

    return (



      <div className="search-books">
        <div className="search-books-bar">

          <Link to="/" className="close-search" />

          <SearchInput query={query} updateQuery={this.updateQuery} />

        </div>

        <ResultsOfSearch query={query} searchedBooks={searchedBooks} handleChangeEvent={this.props.updateBooks} />
        
        {errorMessage && <h3>{errorMessage}</h3>}

      </div>



    )

  }

}