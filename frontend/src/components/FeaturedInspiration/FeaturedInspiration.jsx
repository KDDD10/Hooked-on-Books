// src/components/FeaturedInspiration/FeaturedInspiration.js
import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedInspiration.css';

const FeaturedInspiration = ({ inspirations }) => {
  return (
    <section className="featured-inspiration"id="inspiration">
      <h2>Featured Inspiration</h2>
      <div className="inspiration-grid">
        {inspirations.map((inspiration, index) => (
          <Link key={index} to={`/inspiration/${inspiration.id}`} className="inspiration-item">
            <img src={inspiration.imageUrl} alt={inspiration.name} />
            <div className="name-tag">{inspiration.name}</div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedInspiration;