import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import MainPage from './components/mainpage/MainPage'
import SearchPage from './components/searchpage/SearchPage'

class BooksApp extends React.Component {

  state = {
  
    books: [],

  }

  render() {
    return (
     
      <div></div>
    )
  }
}

export default BooksApp
