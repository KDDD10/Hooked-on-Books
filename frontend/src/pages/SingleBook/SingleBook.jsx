import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Skeleton } from "antd";
import axios from "axios";
import "./SingleBook.css";

const SingleBook = () => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`https://hooked-on-books-39bd24fadd57.herokuapp.com/api/books/books/${id}`);
        setBook(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching book details:", error);
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  return (
    <div className="margin">
      <Row gutter={50}>
        <Col span={8}>
          <div className="book-image-container">
            {loading ? (
              <Skeleton.Image className="book-image" />
            ) : (
              <img
                src={book.cover_image_url}
                alt={book.title}
                className="book-image"
              />
            )}
          </div>
        </Col>
        <Col span={16}>
          <div className="book-description-container">
            {loading ? (
              <>
                <Skeleton.Input style={{ width: 200 }} active size="large" />
                <Skeleton paragraph={{ rows: 4 }} active />
              </>
            ) : (
              <>
                <h1 className="book-title">{book.title}</h1>
                <div className="book-meta">
                  <span className="book-genre">{book.genres.join(", ")}</span>
                  <span className="book-author">{book.author}</span>
                </div>
                <p className="book-description">{book.description}</p>
                <p className="book-publication-date">Published: {book.publication_date}</p>
                <a href={book.affiliate_link} target="_blank" rel="noopener noreferrer" className="book-affiliate-link">
                  Buy Now
                </a>
              </>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SingleBook;