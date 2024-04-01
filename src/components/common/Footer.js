import React from 'react';
import './Footer.css'; 

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <h3>Contact Us</h3>
        <form className="contact-form">
          <label htmlFor="contact-email">Email:</label>
          <input type="email" id="contact-email" name="email" placeholder="raezaansari700@gmail.com" required />
          <label htmlFor="contact-message">Message:</label>
          <textarea id="contact-message" name="message" placeholder="Hey, Please dont hesitate to contact us" required></textarea>
          <button type="submit">Send</button>
        </form>
        <div className="social-links">
          <h3>Follow Us</h3>
          <a href="https://www.facebook.com/profile.php?id=100086981832070" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.instagram.com/sanamre7608?igsh=cWJ5YjgxYnpza3l6" target="_blank" rel="noopener noreferrer">Instagram</a>
          {/* Will add more social links as needed */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
