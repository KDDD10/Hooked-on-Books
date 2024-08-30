// src/components/InspirationDetail/InspirationDetail.js
import React, { useEffect, useState } from 'react';
import './InspirationDetail.css';
import { useParams } from 'react-router-dom';

const InspirationDetail = ( ) => {
    const { id } = useParams();
    const [inspiration, setInspiration] = useState(null);
    useEffect(() => {
        // Fetch inspiration data based on id
        // This is where you'd make an API call in a real application
        // For now, we'll use mock data
        setInspiration({
          id: id,
          name: "Alexandria Ocasia-Cortez",
          profileImageUrl: "https://media.istockphoto.com/id/2129875225/photo/a-smiling-adult-man-walked-out-of-the-office-building-after-finishing-work.webp?b=1&s=612x612&w=0&k=20&c=BawL-9fWpFmhJx658SuLBxoYjiiKnnc7ZjLzFd9o-OI=",
          books: [
            {
              title: "Hope in the Dark: Untold Histories, Wild Possibilities",
              author: "Rebecca Solnit",
              imageUrl: "https://media.istockphoto.com/id/2129875225/photo/a-smiling-adult-man-walked-out-of-the-office-building-after-finishing-work.webp?b=1&s=612x612&w=0&k=20&c=BawL-9fWpFmhJx658SuLBxoYjiiKnnc7ZjLzFd9o-OI=",
              category: "HISTORY"
            },
            // Add more books here
          ]
        });
      }, [id]);
  return (
    <div className="inspiration-detail">
      <div className="hero-section">
        <h1>{inspiration?.name}</h1>
        <div className="profile-image">
          <img src={inspiration?.profileImageUrl} alt={inspiration?.name} />
        </div>
      </div>
      <div className="book-recommendations">
        {inspiration?.books.map((book, index) => (
          <div key={index} className="book-item">
            <div className="book-image">
              <img src={book.imageUrl} alt={book.title} />
              <span className="book-category">{book.category}</span>
            </div>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InspirationDetail;