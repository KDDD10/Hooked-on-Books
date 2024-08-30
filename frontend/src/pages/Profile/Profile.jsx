import React, { useState, useEffect } from "react";
import "./Profile.css";
import coverImage from "../../assets/Images/profile-cover.jpg";
import bookImage from "../../assets/Images/cover.jpg";
import profileImage from "../../assets/Images/profile.jpg";
import { message, Button } from "antd";
import { useNavigate } from "react-router-dom";
const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [books, setBooks] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setUser({
      name: "Jane Doe",
      image: profileImage,
      bio: "Avid reader and book enthusiast. Always on the lookout for the next great story!",
      joinDate: "2023-01-15",
    });

    setBooks([
      {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        coverImage: bookImage,
        dateAdded: "2024-03-10",
      },
      {
        id: 2,
        title: "1984",
        author: "George Orwell",
        coverImage: coverImage,
        dateAdded: "2024-02-22",
      },
      {
        id: 3,
        title: "1984",
        author: "George Orwell",
        coverImage: bookImage,
        dateAdded: "2024-02-22",
      },
    ]);
  }, []);

  if (!user) {
    return <div className="loading">Loading...</div>;
  }

  const handleLogout = () => {
    setIsLoading(true);
    setTimeout(() => {
      localStorage.removeItem("token");
      message.success("Logged out successfully");
      setIsLoading(false);
      navigate("/auth");
    }, 500);
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
            Joined: {new Date(user.joinDate).toLocaleDateString()}
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
                  Added: {new Date(book.dateAdded).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
