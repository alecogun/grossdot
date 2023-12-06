import { Link } from "react-router-dom";
import { Twitter, Instagram } from "@mui/icons-material";
import "./footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-column">
          <h3 className="footer-top-title">Shopping with Us</h3>
          <Link to="#" className="footer-top-link">
            Making payment
          </Link>
          <Link to="#" className="footer-top-link">
            Delivery options
          </Link>
          <Link to="#" className="footer-top-link">
            Buyer's protection
          </Link>
          <Link to="#" className="footer-top-link">
            Corporate and bulk purchase
          </Link>
          <Link to="#" className="footer-top-link">
            Refund policy
          </Link>
        </div>

        <div className="footer-top-column">
          <h3 className="footer-top-title">Customer Service</h3>
          <Link to="#" className="footer-top-link">
            Help Center
          </Link>
          <Link to="#" className="footer-top-link">
            Terms and Conditions
          </Link>
          <Link to="#" className="footer-top-link">
            Consumers(Transactions)
          </Link>
          <Link to="#" className="footer-top-link">
            Take our Feedback survey
          </Link>
          <Link to="#" className="footer-top-link">
            Transaction Services Agreement
          </Link>
        </div>

        <div className="footer-top-column">
          <h3 className="footer-top-title">Collaborate with us</h3>
          <Link to="#" className="footer-top-link">
            Partnership
          </Link>
          <Link to="#" className="footer-top-link">
            Affiliate program
          </Link>
          <Link to="#" className="footer-top-link">
            DS Center
          </Link>
          <Link to="#" className="footer-top-link">
            Refer and get discounts
          </Link>
          <Link to="#" className="footer-top-link">
            Be our Ambassador
          </Link>
        </div>

        <div className="footer-top-column">
          <h3 className="footer-top-title">Download our App</h3>
          <img
            src="/img/app.png"
            alt="Download our App"
            className="footer-app-icon"
          />
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-social">
          <Link to="https://twitter.com/grossdots" className="social-link">
            <Twitter className="footer-icon" />
          </Link>
          <Link to="https://instagram.com/grossdots" className="social-link">
            <Instagram className="footer-icon" />
          </Link>
          <Link to="https://tiktok.com/grossdot" className="social-link">
            <img src="/img/tik.png" alt="" className="footer-icon" />
          </Link>
        </div>

        <div className="copyright">
          <div className="footer-border"></div>
          <span>
            Copyright &copy;2023 Grossdot E-commerce. All Rights Reserved
          </span>
        </div>

        <div className="footer-payment">
          <img
            src="/img/payment.png"
            alt="Payments We Accept"
            className="footer-payment-img"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
