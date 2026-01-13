import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row gy-4">

        
          <div className="col-lg-3 col-md-6">
            <p className="footer-text">
              Office #304-B, Amna Plaza, Main<br />
              Peshawar Rd, Rawalpindi, Punjab
            </p>
            <p className="footer-text">(92) 337-7777860</p>
            <p className="footer-email">info@ezitech.org</p>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">Explore More</h5>
            <ul className="footer-list">
              <li>About Us</li>
              <li>Partners</li>
              <li>Portfolio</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>

       
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">Internships</h5>
            <ul className="footer-list">
              <li>Strategy</li>
              <li>eCommerce</li>
              <li>Digital Marketing</li>
              <li>Branding</li>
              <li>Design</li>
            </ul>
          </div>

        
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">Updates</h5>
            <p className="footer-text">
              Subscribe our newsletter to get the latest news & updates.
            </p>

            <div className="newsletter">
              <input type="email" placeholder="Enter email address" />
              <button>GO</button>
            </div>
          </div>

        </div>

        <hr />

      
        <div className="footer-bottom">
          <p>© 2024 Ezitech Institute. All rights reserved | Design & Develop by Ezitech Solutions</p>
          <div className="footer-links">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
      <a class="floatingwhatsapp" href="https://wa.me/03250610420" target="_blank" rel="noreferrer">💬</a>
    </footer>
  );
};

export default Footer;
