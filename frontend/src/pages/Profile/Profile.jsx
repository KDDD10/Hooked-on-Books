import React, { useState, useEffect } from "react";
import "./Profile.css";
import coverImage from "../../assets/Images/profile-cover.jpg";
import bookImage from "../../assets/Images/cover.jpg";
import profileImage from "../../assets/Images/profile.jpg";
import { message, Button, Popconfirm } from "antd";
import { DeleteOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthProvider";
import moment from "moment";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [books, setBooks] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { logout, user: authUser } = useAuth();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://hooked-on-books-39bd24fadd57.herokuapp.com/api/auth/profile`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        if (response.ok) {
          const userData = await response.json();
          setUser({
            name: userData.username,
            image: userData.profilePicture || profileImage,
            bio: userData.bio || "Avid reader and book enthusiast. Always on the lookout for the next great story!",
            joinDate: userData.createdAt,
          });
        } else {
          throw new Error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        message.error('Failed to load user data');
      }
    };

    const fetchUserBooks = async () => {
      try {
        const response = await fetch(`https://hooked-on-books-39bd24fadd57.herokuapp.com/api/books/books/user/${authUser.id}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        if (response.ok) {
          const userBooks = await response.json();
          setBooks(userBooks.map(book => ({
            id: book.id,
            title: book.title,
            author: book.author,
            coverImage: book.cover_image_url || bookImage,
            dateAdded: book.createdAt,
          })));
        } else {
          throw new Error('Failed to fetch user books');
        }
      } catch (error) {
        console.error('Error fetching user books:', error);
        message.error('Failed to load user books');
      }
    };

    if (authUser) {
      fetchUserData();
      fetchUserBooks();
    }
  }, [authUser]);

  const handleDeleteBook = async (bookId) => {
    try {
      const response = await fetch(`https://hooked-on-books-39bd24fadd57.herokuapp.com/api/books/books/${bookId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      if (response.ok) {
        setBooks(books.filter(book => book.id !== bookId));
        message.success('Book deleted successfully');
      } else {
        throw new Error('Failed to delete book');
      }
    } catch (error) {
      console.error('Error deleting book:', error);
      message.error('Failed to delete book');
    }
  };

  if (!user) {
    return <div className="loading">Loading...</div>;
  }

  const handleLogout = () => {
    setIsLoading(true);
    logout();
    message.success("Logged out successfully");
    setIsLoading(false);
    navigate("/auth");
  };

  return (
    <div className="profile-page">
      <header className="profile-header">
        <div className="cover-image-container">
          <img src={coverImage} alt="Profile Cover" className="cover-image" />
        </div>
        <div className="profile-info">
          <div>
            <img src={user.image} alt={user.name} className="profile-image" />
          </div>
        </div>
        <div className="profile-text">
          <h1>{user.name}</h1>
          <p className="bio">{user.bio}</p>
          <p className="join-date">
            Joined: {moment(user.joinDate).format('DD-MM-YYYY')}
          </p>
          <div>
            <Button
              loading={loading}
              className="logout-button"
              onClick={handleLogout}
              type="primary"
            >
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="book-collection">
        <h2>My Book Collection</h2>
        <div className="book-grid">
          {books.map((book) => (
            <div key={book.id} className="book-card">
              <img
                src={book.coverImage}
                alt={book.title}
                className="book-cover"
              />
              <div className="book-info">
                <h3>{book.title}</h3>
                <p className="author">by {book.author}</p>
                <p className="date-added">
                  Added: {moment(book.dateAdded).format('DD-MM-YYYY')}
                </p>
                <Popconfirm
                  title="Are you sure you want to delete this book?"
                  onConfirm={() => handleDeleteBook(book.id)}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button icon={<DeleteOutlined />} danger />
                </Popconfirm>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;