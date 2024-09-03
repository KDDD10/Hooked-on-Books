import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="logo-text">Hooked on Books</h2>
          <p>
            Your ultimate destination for book lovers. Discover, read, and share your passion for literature.
          </p>
          <div className="contact">
            <span><i className="fas fa-phone"></i> &nbsp; 123-456-789</span>
            <span><i className="fas fa-envelope"></i> &nbsp; info@hookedonbooks.com</span>
          </div>
          <div className="socials">
            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
          </div>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/books">Books</Link></li>
            <li><Link to="/authors">Authors</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section contact-form">
          <h2>Contact Us</h2>
          <form>
            <input type="email" name="email" className="text-input contact-input" placeholder="Your email address..." />
            <textarea name="message" className="text-input contact-input" placeholder="Your message..."></textarea>
            <button type="submit" className="btn btn-big contact-btn">
              <i className="fas fa-envelope"></i>
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Hooked on Books | Designed by YourName
      </div>
    </footer>
  );
}

export default Footer;