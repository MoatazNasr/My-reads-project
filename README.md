# My Reads Project

This is a single-page app (navigation happens without the need to refresh pages), and it represents a virtual bookcase to store your books and track what you're reading. MyReads lets you manage your digital bookshelf. It supports three shelves :

* Currently Reading
* Want to Read
* Read

Additionally you can search and add books to any shelf.

live demo https://myreads11.herokuapp.com/

## Getting Starteed

* You might use npm to start and install dependencies 
* You might use yarn to start and install dependencies 
## Installing

To download the project  on your local machine

```
git clone https://github.com/MoatazNasr/My-reads-project.git
cd My-reads-project 

```

To install dependencies and run the project with npm:

```
* install all project dependencies with `npm install`
* start the development server with `npm start`

```
To install dependencies and run the project with yarn:

```
* install all project dependencies with `yarn install`
* start the development server with `yarn start`

```

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.


## Author

###### Moataz Nasr
