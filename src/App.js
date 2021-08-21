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
      .then(  (books) => {

         this.setState({books })

      })

  }

  updateBooks =  (book, newShelf) => {

     BooksAPI.update(book, newShelf)
     
       .then(  () => { 

        BooksAPI.getAll()
        .then(  (books) => {
  
           this.setState({ books })
  
        })

      })

  }



  render() {
    return (

      <div>

        <MainPage books={this.state.books}  updateBooks={this.updateBooks} />
        <SearchPage />
        
      </div>
    )
  }
}

export default BooksApp
