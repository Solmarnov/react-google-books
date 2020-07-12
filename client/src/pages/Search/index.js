import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import API from '../../utils/API';
import { Container } from '../../components/Grid';
import Jumbotron from '../../components/Jumbotron';
import Form from '../../components/Form';
import { FormGroup, FormBtn } from '../../components/FormGroup';
import { Input, Label } from '../../components/FormGroupChildren';

const Search = () => {
  const [books, setBooks] = useState([]);
  const [formObject, setFormObject] = useState({});

  // useEffect(() => {
  //   loadBooks();
  // }, []);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormObject({ ...formObject, [name]: value });
  }

  // *  Consider how to pass action to Form

  return (
    <div>
      <Jumbotron>
        <h1 className="text-center">(React) Google Books Search</h1>
        <p className="lead text-center">Search for and save books of interest</p>
      </Jumbotron>
      <Container>
        <Form action="" method="get" id="google-books-search">
          <FormGroup>
            <Label htmlFor="search-book">Search book</Label>
            <Input type="text" name="search-book" id="search-book" placeholder="Search book of interest" onChange={handleInputChange} />
          </FormGroup>
          <FormBtn float="float-right" id="btn-search">Search</FormBtn>
        </Form>
      </Container>
    </div>
  )
}

export default Search;