import React, { Component } from 'react'
import '../../App.css'
import PropTypes from 'prop-types'
import Shelves from './Shelves'
import { Link } from 'react-router-dom'

class MainPage extends Component {


  static propTypes = {
    books: PropTypes.array.isRequired,
    updateBooks: PropTypes.func.isRequired,

  }

 

  render() {

    const { books,updateBooks } = this.props;


    return (

      <div className="app">

        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">

            <Shelves books={books.filter((book) => book.shelf === "currentlyReading")} handleChangeEvent={updateBooks} shelfName='CurrentlyReading' />
            <Shelves books={books.filter((book) => book.shelf === "wantToRead")} handleChangeEvent={updateBooks} shelfName='WantToRead' />
            <Shelves books={books.filter((book) => book.shelf === "read")} handleChangeEvent={updateBooks} shelfName='Read' />

          </div>
          
          <div className="open-search">
            <Link to="/search" className=".open-search"/>
          </div>

        </div>

      </div >

    )

  }

}

export default MainPage;