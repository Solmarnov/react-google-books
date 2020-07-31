const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  author: { type: String, required: true },
  description: { type: String, },
  image: { type: String },
  link: { type: String },
  title: { type: String, required: true }
}, { /* Schema options */
  // Add createdAt and updatedAt timestamps by deafult
  timestamps: true 
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
