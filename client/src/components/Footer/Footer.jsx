import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-column">
          <h1>Shopping with Us</h1>
          <Link className="footer-top-link">Making Payment</Link>
        </div>
      </div>
      <div className="footer-bottom"></div>
    </div>
  );
}

export default Footer;
