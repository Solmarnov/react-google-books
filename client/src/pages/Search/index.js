import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../../utils/API';
import { Container } from '../../components/Grid';
import Jumbotron from '../../components/Jumbotron';
import Form from '../../components/Form';
import { FormGroup, FormBtn } from '../../components/FormGroup';
import { Input } from '../../components/FormGroupChildren';
import { List, ListItem } from '../../components/List';
require('dotenv').config();

const Search = () => {
  const [books, setBooks] = useState([]);
  const [formObject, setFormObject] = useState({});

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormObject({ ...formObject, [name]: value });
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    event.target.setAttribute('disabled', true);
    const { searchQuery } = formObject;
    if (formObject.searchQuery) {
      API.getGoogleBooks(searchQuery)
      .then(({ data }) => {
        setBooks(data.items);
        setFormObject({});
      })
      .catch(err => console.log(`Get Google Books returned error:\n${err}`));
    }
  }

  const elipsify = str => {
    const maxLength = 300;
    if (!str) {
      return;
    } else {
      return str.length > maxLength ? `${str.substring(0, maxLength)}...` : str;
    }
  }

  const saveBook = ({ target }) => {
    const i = target.getAttribute('data-index');
    const book = books[i]
    API.saveBook({
      author: book.volumeInfo.title,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.infoLink,
      title: book.volumeInfo.title
    })
  }

  // *  Consider how to pass action to Form
  console.log(books);

  return (
    <div>
      <Jumbotron>
        <h1 className="text-center">(React) Google Books Search</h1>
        <p className="lead text-center">Search for and save books of interest</p>
      </Jumbotron>
      <Container id="book-search-form-container">
        <h2>Book search</h2>
        <Form id="google-books-search">
          <FormGroup>
            <Input type="text" name="searchQuery" id="book-search-input" placeholder="Search book of interest" onChange={handleInputChange} />
          </FormGroup>
          <FormBtn 
            type="submit"
            id="btn-search"
            disabled={!(formObject.searchQuery)}
            onClick={handleFormSubmit}
          >
            Search
          </FormBtn>
        </Form>
      </Container>
      <Container id="book-search-results-container">
        <h2>Search results</h2>
        {!books.length ? (
          <h3>No results to display.</h3>
        ) : (
          <List>
            {books.map((book, i) => (
              <ListItem key={i} book={book}>
                <div className="result-img">
                  <img src={book.volumeInfo.imageLinks.thumbnail} alt={`${book.volumeInfo.title} cover image`} className="pr-3" />
                </div>
                <div className="result-info">
                  <Link to={book.volumeInfo.infoLink}>
                    <h3 className="mb-0 pb-0">{book.volumeInfo.title}</h3>
                    <p className="mb-2">by <strong>{book.volumeInfo.authors[0]}</strong></p>
                  </Link>
                  <p>{elipsify(book.volumeInfo.description)}</p>
                  <button data-index={i} className="btn btn-secondary px-5" onClick={saveBook}>Save</button>
                </div>
              </ListItem>
            ))}
          </List>
        )}
      </Container>
    </div>
  )
}

export default Search;