import React from "react";
import "./footer.css";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-segment">
          <h4>About Us</h4>
          <p>
            Your Skill-Swap is a platform that connects learners and mentors
            to share knowledge and skills effectively.
          </p>
        </div>
        <div className="footer-segment">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>
        <div className="footer-segment">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <AiFillFacebook />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <AiFillTwitterSquare />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <AiFillInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; 2024 Your Skill-Swap. All rights reserved. <br /> Made with ❤️ by <a href="">Team Charly</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
