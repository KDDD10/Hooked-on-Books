import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useAuth } from './path/to/AuthContext';
import './AddBooks.css';
import { useAuth } from '../../AuthProvider';
import { message } from 'antd';

const AddBookPage = () => {
  const [bookName, setBookName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [description, setDescription] = useState('');
  const [affiliateLink, setAffiliateLink] = useState('');
  const [coverImageUrl, setCoverImageUrl] = useState('');
  const [genres, setGenres] = useState([]);
  const [publicationDate, setPublicationDate] = useState('');
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      navigate('/auth');
      return;
    }

    const bookData = {
      title: bookName,
      author: authorName,
      description,
      cover_image_url: coverImageUrl,
      affiliate_link: affiliateLink,
      genres,
      publication_date: publicationDate,
    };

    try {
      const response = await fetch('https://hooked-on-books-39bd24fadd57.herokuapp.com/api/books/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`,
        },
        body: JSON.stringify(bookData),
      });

      if (response.ok) {
        message.success("Book added ")
        navigate('/');  // Redirect to home page after successful addition
      } else {
        // Handle error
        console.error('Failed to add book');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="add-book-container">
      <div className="add-book-form">
        <h2>Add a New Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="bookName">Book Title</label>
            <input type="text" id="bookName" value={bookName} onChange={(e) => setBookName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="authorName">Author Name</label>
            <input type="text" id="authorName" value={authorName} onChange={(e) => setAuthorName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="affiliateLink">Affiliate Link</label>
            <input type="url" id="affiliateLink" value={affiliateLink} onChange={(e) => setAffiliateLink(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="coverImageUrl">Cover Image URL</label>
            <input type="url" id="coverImageUrl" value={coverImageUrl} onChange={(e) => setCoverImageUrl(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="genres">Genres (comma-separated)</label>
            <input type="text" id="genres" value={genres.join(', ')} onChange={(e) => setGenres(e.target.value.split(',').map(genre => genre.trim()))} required />
          </div>
          <div className="form-group">
            <label htmlFor="publicationDate">Publication Date</label>
            <input type="date" id="publicationDate" value={publicationDate} onChange={(e) => setPublicationDate(e.target.value)} required />
          </div>
          <button type="submit">Add Book</button>
        </form>
      </div>
    </div>
  );
};

export default AddBookPage;