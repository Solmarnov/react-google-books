import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import API from '../../utils/API';
import { Container } from '../../components/Grid';
import Jumbotron from '../../components/Jumbotron';
import Form from '../../components/Form';
import { FormGroup, FormBtn } from '../../components/FormGroup';
import { Input } from '../../components/FormGroupChildren';
// import { List, ListItem } from '../../components/List';
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
    console.log(process.env.REACT_APP_API_KEY);
    const { searchQuery } = formObject;
    if (formObject.searchQuery) {
      API.getGoogleBooks(searchQuery)
      .then(res =>{
        setBooks(res);
        setFormObject({});
      })
      .catch(err => console.log(`Get Google Books returned error:\n${err}`));
    }
  }

  // *  Consider how to pass action to Form

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
        {books.length ? (
          <Container />
        ) : (
          <h3>No results to display.</h3>
        )}
      </Container>
    </div>
  )
}

export default Search;