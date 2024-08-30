import React, { useState } from 'react';
import './AddBooks.css';

const AddBookPage = () => {
  const [bookName, setBookName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [description, setDescription] = useState('');
  const [affiliateLink, setAffiliateLink] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your book submission logic here
    console.log({ bookName, authorName, description, affiliateLink, coverImage });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setCoverImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  return (
    <div className="add-book-container">
      <div className="add-book-content">
        <h1>Add a New Book</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="bookName">Book Title</label>
            <input
              type="text"
              id="bookName"
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="authorName">Author Name</label>
            <input
              type="text"
              id="authorName"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="affiliateLink">Affiliate Link</label>
            <input
              type="url"
              id="affiliateLink"
              value={affiliateLink}
              onChange={(e) => setAffiliateLink(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="coverImage">Cover Image</label>
            <input
              type="file"
              id="coverImage"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
          </div>
          {previewImage && (
            <div className="image-preview">
              <img src={previewImage} alt="Book cover preview" />
            </div>
          )}
          <button type="submit">Add Book</button>
        </form>
      </div>
    </div>
  );
};

export default AddBookPage;