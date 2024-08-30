// src/components/FeaturedBooks/FeaturedBooks.js
import React from "react";
import "./FeaturedBooks.css";
import { Link } from "react-router-dom";
const FeaturedBooks = ({ books }) => {
  return (
    <section className="featured-books">
      <h2>Featured Books</h2>
      <div className="books-grid">
        {books.map((book, index) => (
          <Link to={`/book/${index}`} key={index} className="book-item">
            <img src={book.imageUrl} alt={book.title} />

            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedBooks;
