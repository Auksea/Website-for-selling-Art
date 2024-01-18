import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer1.css';

const Footer1 = () => {
  return (
    <footer className="footer-container">
      <div className="contact-info">
        <h5>Contact Us</h5>
        <p>Email: 29spalvos@gmail.com</p>
      </div>
      <div className="social-icons">
        <a href="https://www.facebook.com/egle.tarnapaviciute">
          <FontAwesomeIcon icon={faFacebook} className="icon facebook-icon" />
        </a>
        <a href="https://www.instagram.com/art.blue.ete/?fbclid=IwAR0y7w2zT92_QaJX92uyzx_ej6ZlPvEwZ7PHXdeS_B_uAXDDzREjR9yWShk">
          <FontAwesomeIcon icon={faInstagram} className="icon instagram-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer1;


