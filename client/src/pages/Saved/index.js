import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
// import { Link } from 'react-router-dom';

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
}

export default Saved;