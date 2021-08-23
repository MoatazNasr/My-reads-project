import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Routes from './components/Routes'

class BooksApp extends React.Component {

  state = {

    books: [],

  }

  componentDidMount() {

    BooksAPI.getAll()
      .then((books) => {

        this.setState({ books })

      })

  }

  updateBooks = (book, event) => {

    const newShelf = event.target.value;
    
    BooksAPI.update(book, newShelf)

      .then(() => {

        BooksAPI.getAll()
          .then((books) => {

            this.setState({ books })

          })

      })

  }



  render() {
    return (

      <div>

        
        <Routes books={this.state.books} updateBooks={this.updateBooks}/>

      </div>
    )
  }
}

export default BooksApp
