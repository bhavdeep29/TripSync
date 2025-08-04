// Footer.js
import React from "react";

function Footer({ isRegistered }) {
  return (
    <div className="footer">
      <div className="footer-mm">
        <div className="footer-link">
          <div className="footer-link-div">
            <h4>Footer</h4>
            <a href="/home">
              <p>Home</p>
            </a>
            <a href="/about">
              <p>About</p>
            </a>
            {isRegistered ? (
              <p>You are already registered.</p>
            ) : (
              <a href="/register">
                <p>Register</p>
              </a>
            )}
          </div>
          <div className="footer-link-div">
            <h4>Resource</h4>
            <a href="/home">
              <p>Employer</p>
            </a>
            <a href="/home">
              <p>Other</p>
            </a>
          </div>

          <div className="footer-link-div">
            <h4>Company</h4>
            <a href="/about">
              <p>About</p>
            </a>
            <a href="/home">
              <p>Career</p>
            </a>
            <a href="/contact">
              <p>Contact</p>
            </a>
          </div>


          <div className="footer-link-div">
            <h4>Social Media</h4>
            <div className="#">
              <a href="https://www.linkedin.com/in/bhavdeep2908/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://x.com/bhvdp22">
                <i className="fa-brands fa-square-twitter"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-square-instagram"></i>
              </a>
              <a href="https://github.com/bhavdeep29">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-below">
          <div className="copyright">
            <p>@{new Date().getFullYear()} TripSync all right reserved</p>
          </div>
          <div className="below-links">
            <a href="/terms">
              <div>
                <p>Terms & Conditions</p>
              </div>
            </a>
            <a href="/privacy">
              <div>
                <p>Privacy</p>
              </div>
            </a>
            <a href="/security">
              <div>
                <p>Security</p>
              </div>
            </a>
            <a href="/cookie">
              <div>
                <p>Cookie</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
