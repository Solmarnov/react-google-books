import axios from 'axios';
require('dotenv').config();

export default {
  // Gets all books
  getGoogleBooks: function(query) {
    const apiKey = process.env.REACT_APP_API_KEY;
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`);
  },
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get(`/api/books/${id}`);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete(`/api/books/${id}`);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};