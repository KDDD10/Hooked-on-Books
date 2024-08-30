import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img alt="logo" src={logo} />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/">INSPIRATION</Link>
          </li>
          <li>
            <Link to="/">BOOKS</Link>
          </li>
          <li>
            <Link to="/">ABOUT</Link>
          </li>
          <li>
            <Link to="/">CONTACT</Link>
          </li>
          <li>
            <Link to="add-book">ADD BOOKS</Link>
          </li>
          <li>
            <Link to="Profile">PROFILE</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
