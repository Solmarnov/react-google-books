import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import { Container } from '../../components/Grid';
import Jumbotron from '../../components/Jumbotron';
import { List, ListItem } from '../../components/List';

function Saved() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, [])

  const loadBooks = () => {
    API.getBooks()
    .then(res => setBooks(res.data))
    .catch(err => console.log(`Get Books encountered an error:\n${err}`));
  }

  const deleteBook = (id) => {
    API.deleteBook(id)
    .then(res => loadBooks())
    .catch(err => console.log(err));
  }

  console.log(books);

  return (
    <div>
      <Jumbotron>
        <h1 className="text-center">(React) Google Books Search</h1>
        <p className="lead text-center">Search for and save books of interest</p>
      </Jumbotron>
      <Container id="saved-books-container">
        <h2>Saved books</h2>
        {!books.length ? (
          <h3>There are no saved books to display.</h3>
        ) : (
          <List>
            {books.map((book, i) => (
              <ListItem key={book._id}>
                <div className="result-img">
                  <a href={book.link} target="_blank" rel="noopener noreferrer">
                    <img src={book.image} alt={`${book.title} book cover`} className="pr-3" />
                  </a>
                </div>
                <div className="result-info">
                  <a href={book.link} target="_blank" rel="noopener noreferrer">
                    <h3 className="mb-0 pb-0">{book.title}</h3>
                    <p className="mb-2">by <strong>{book.author}</strong></p>
                  </a>
                  <p>{book.description}</p>
                  <button data-index={i} className="btn btn-danger px-5" onClick={() => deleteBook(book._id)}>Delete</button>
                </div>
              </ListItem>
            ))}
          </List>
        )}
      </Container>
    </div>
  )
}

export default Saved;