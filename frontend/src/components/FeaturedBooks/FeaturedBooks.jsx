// src/components/FeaturedBooks/FeaturedBooks.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Spin, Row, Col } from 'antd';
import axios from 'axios';
import "./FeaturedBooks.css";

const { Meta } = Card;

const FeaturedBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://hooked-on-books-39bd24fadd57.herokuapp.com/api/books/books');
        setBooks(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching books:', error);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <section className="featured-books" id="books">
      <h2>Featured Books</h2>
      <Row gutter={[16, 16]}>
        {books.map((book) => (
          <Col xs={24} sm={12} md={8} lg={6} xl={6} key={book.id}>
            <Link to={`/book/${book.id}`}>
              <Card
                className="book-item"
                hoverable
                cover={<img alt={book.title} src={book.cover_image_url} />}
              >
                <Meta title={book.title} description={book.author} />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default FeaturedBooks;
