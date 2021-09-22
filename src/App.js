import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Routes from './components/Routes'

class BooksApp extends React.Component {

  state = {

    books: [],

  }

  async componentDidMount() {

    const books = await BooksAPI.getAll();

    this.setState({ books })


  }

  updateBooks = async (book, event) => {

    const newShelf = event.target.value;
    
    await BooksAPI.update(book, newShelf)

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
