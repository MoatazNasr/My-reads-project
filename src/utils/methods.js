export function searchValidBooks(books) {

    return books.filter(book => (book.authors && book.imageLinks && book.imageLinks.thumbnail )

    )
  }

 export function commonShelvesOptions  (validSearchedBooks,mainPageBooks){

     return validSearchedBooks.map( book =>{

      book.shelf='none';

      mainPageBooks.forEach( element => {
        
          if ( book.id === element.id ){

            book.shelf = element.shelf;
            
          }

      });

      return book;

      } )
        
         
  }