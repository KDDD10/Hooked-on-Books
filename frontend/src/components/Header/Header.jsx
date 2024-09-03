import React from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/Images/logo.png";
import { useAuth } from "../../AuthProvider";

const Header = () => {
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
};
const handleLogout = () => {
  logout();
  navigate('/');
};

if (loading) {
  return <div>Loading...</div>; // Or any loading indicator you prefer
}

  return (
    <header className="header">
      <Link to="/" className="logo">
        <img alt="logo" src={logo} />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/" >HOME</Link>
          </li>
          {/* <li>
            <a href="#inspiration" onClick={(e) => { e.preventDefault(); scrollToSection('inspiration'); }}>INSPIRATION</a>
          </li> */}
          <li>
            <a href="#books" onClick={(e) => { e.preventDefault(); scrollToSection('books'); }}>BOOKS</a>
          </li>
         <li>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>CONTACT</a>
          </li>
        
          {user ? (
          <>
          <li>

            <Link to="/add-book">ADD BOOKS</Link>
          </li>
          <li>

            <Link to="/profile">PROFILE</Link>
          </li>
            {/* <button onClick={handleLogout}>LOGOUT</button> */}
          </>
        ) : (
          <li>


          <Link to="/auth">LOGIN/SIGNUP</Link>
          </li>
        )
          }
        </ul>
      </nav>
    </header>
  );
};

export default Header;