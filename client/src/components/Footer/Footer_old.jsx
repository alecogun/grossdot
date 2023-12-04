import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Twitter } from "@mui/icons-material";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-item">
          <div>
            <img src="/img/logo.png" alt="Grossdot" className="footer-logo" />
          </div>
          <div className="footer-top-desc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
              autem.
            </p>
          </div>
          <div className="footer-social">
            <Link to="https://tiktok.com/grossdots">
              <img src="/img/tik.png" alt="Tiktok" className="social-icon" />
            </Link>
            <Link to="https://twitter.com/grossdots" target="_blank">
              <Twitter className="social-icon" />
            </Link>
            <Link to="https://instagram.com/grossdots" target="_blank">
              <Instagram className="social-icon" />
            </Link>
          </div>
        </div>
        <div className="footer-top-item">
          <h1>Categories</h1>
          <div className="footer-top-link">
            <Link to="/products/1" className="footer-link">
              Accessories
            </Link>
            <Link to="/products/1" className="footer-link">
              Babies
            </Link>
            <Link to="/products/1" className="footer-link">
              Cosmetics
            </Link>
            <Link to="/products/1" className="footer-link">
              Men
            </Link>
            <Link to="/products/1" className="footer-link">
              Woman
            </Link>
          </div>
        </div>
        <div className="footer-top-item">
          <h1>Customer Service</h1>
          <div className="footer-top-link">
            <Link to="#" className="footer-link">
              Chat with Us
            </Link>
            <Link to="#" className="footer-link">
              Contact Us
            </Link>
            <Link to="#" className="footer-link">
              Help Center
            </Link>
            <Link to="#" className="footer-link">
              Grossdot Payment Information Guideline
            </Link>
            <Link to="#" className="footer-link">
              Terms and Conditions
            </Link>
          </div>
        </div>
        <div className="footer-top-item">
          <h1>Useful Links</h1>
          <div className="footer-top-link">
            <Link to="#" className="footer-link">
              Discounts
            </Link>
            <Link to="#" className="footer-link">
              How to shop on Grossdot
            </Link>
            <Link to="#" className="footer-link">
              Delivery options and timelines
            </Link>
            <Link to="#" className="footer-link">
              Return Policy
            </Link>
            <Link to="#" className="footer-link">
              Corporate and bulk purchase
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        {/* <div>
          <img
            src="/img/logo.png"
            alt="Grossdot"
            className="footer-bottom-logo"
          />
        </div> */}
        <div className="copyright">
          <span>Copyright &copy; 2023 Grossdot. All rights reserve</span>
        </div>
        <div className="paystacks">
          <img
            src="/img/payment.png"
            alt="Payment option"
            className="
          footer-bottom-pay-option"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
