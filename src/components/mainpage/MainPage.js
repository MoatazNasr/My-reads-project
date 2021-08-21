import React, { Component } from 'react'
import '../../App.css'
import PropTypes from 'prop-types'
import Shelves from './Shelves'

class MainPage extends Component {


  static propTypes = {
    books: PropTypes.array.isRequired,
    updateBooks: PropTypes.func.isRequired,

  }

  constructor(props) {

    super(props)

  }

  handleChangeEvent = (book, event) => {

    const newShelf = event.target.value;

    this.props.updateBooks(book, newShelf);

  }


  render() {

    const { books } = this.props;


    return (

      <div className="app">

        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">

            <Shelves books={books.filter((book) => book.shelf === "currentlyReading")} handleChangeEvent={this.handleChangeEvent} shelfName='CurrentlyReading' />
            <Shelves books={books.filter((book) => book.shelf === "wantToRead")} handleChangeEvent={this.handleChangeEvent} shelfName='WantToRead' />
            <Shelves books={books.filter((book) => book.shelf === "read")} handleChangeEvent={this.handleChangeEvent} shelfName='Read' />

          </div>
          
          <div className="open-search">
            <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
          </div>
        </div>

      </div >

    )

  }

}

export default MainPage;