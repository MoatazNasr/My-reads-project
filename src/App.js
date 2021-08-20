import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import MainPage from './components/mainpage/MainPage'
import SearchPage from './components/searchpage/SearchPage'

class BooksApp extends React.Component {

  state = {

    books: [],

  }

  componentDidMount() {

    BooksAPI.getAll()
      .then((books) => {

        this.setState(() => ({

          books

        }))

      })

  }

  updateBookState = (book, shelf) => {

    BooksAPI.update(book, shelf)
      .then(() => {

        const newBooks = this.state.books.filter(oldBook => oldBook.id !== book.id);

        this.setState((prevState) => ({

          books: [...newBooks, book]

        }))

      })


  }



  render() {
    return (

      <div>

        <MainPage books={this.state.books} updateBookState={this.updateBookState} />

      </div>
    )
  }
}

export default BooksApp
