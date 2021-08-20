import React from 'react'
import * as BooksAPI from '../../BooksAPI'
import '../../App.css'
import PropTypes from 'prop-types'

class MainPage extends React.Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
  }

  constructor(props) {

    super(props);

  }


  handleChangeEvent = (book,event) => {

    const shelf = event.target.value;

    this.props.updateBookState(book,shelf);

  }

  render() {

    const { books } = this.props;
    console.log(books);
    const currentlyReadingShelf = books.filter((book) => book.shelf === "currentlyReading");
    const ReadingShelf = books.filter((book) => book.shelf === "read");
    const wantToReadShelf = books.filter((book) => book.shelf === "wantToRead");
  

    return (

      <div className="app">

        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">

            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">

                  <ul className="books-grid">

                    {currentlyReadingShelf.map(book => (

                      <li key={book.id}>

                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                            <div className="book-shelf-changer">
                              <select onChange={ event => this.handleChangeEvent( book,event) }>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option selected value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors"> {book.authors.map((author, i) => (

                            <p key={i}>{author}</p>))}

                          </div>
                        </div>
                      </li>

                    ))}
                  </ul>

                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">


                  <ul className="books-grid">

                    {wantToReadShelf.map(book => (

                      <li key={book.id}>

                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                            <div className="book-shelf-changer">
                              <select  onChange={ event => this.handleChangeEvent(book,event) }>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option selected value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors"> {book.authors.map((author, i) => (

                            <p key={i}>{author}</p>))}

                          </div>
                        </div>
                      </li>

                    ))}
                  </ul>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">

                  <ul className="books-grid">

                    {ReadingShelf.map(book => (

                      <li key={book.id}>

                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                            <div className="book-shelf-changer">
                              <select onChange={ event => this.handleChangeEvent(book,event) }>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option selected value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors"> {book.authors.map((author, i) => (

                            <p key={i}>{author}</p>))}

                          </div>
                        </div>
                      </li>

                    ))}
                  </ul>
                </div>
              </div>
            </div>
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