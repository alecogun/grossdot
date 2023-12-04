import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowDropDown,
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
  PersonOutline,
  MenuOutlined,
} from "@mui/icons-material";
import "./navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="navbar-top">
          <div className="navbar-top-left">
            <img src="/img/logo.png" alt="" className="logo" />
          </div>
          <div className="navbar-top-center">
            <span className="navbar-top-center-drop">
              All
              <ArrowDropDown />
            </span>
            <form method="GET" action="">
              <input
                type="text"
                id="nav-search"
                placeholder="apple watch brand..."
                className="nav-search"
              />
              <input
                type="submit"
                value="Search"
                id="nav-search-submit"
                className="nav-search-submit"
              />
            </form>
          </div>
          <div className="navbar-top-right">
            <span className="navbar-top-right-item">
              <FavoriteBorderOutlined />
              Wish List
            </span>
            <span className="navbar-top-right-item">
              <ShoppingCartOutlined />
              Cart
              <span className="nav-cart-count">0</span>
            </span>
            <span className="navbar-top-right-item">
              <PersonOutline />
              Account
            </span>
          </div>
        </div>

        <div className="navbar-bottom">
          <div className="navbar-bottom-left">
            <MenuOutlined />
            <span className="navbar-bottom-link-group">
              <Link to="/" className="navbar-bottom-left-item">
                All Category
              </Link>
              <Link to="/" className="navbar-bottom-left-item">
                Today's Deals
              </Link>
              <Link to="/" className="navbar-bottom-left-item">
                Hot Offers
              </Link>
              <Link to="/" className="navbar-bottom-left-item">
                Gift Cards
              </Link>
              <Link to="/" className="navbar-bottom-left-item">
                Menu Items
              </Link>
              <Link to="/" className="navbar-bottom-left-item">
                Help
              </Link>
            </span>
          </div>

          <div className="navbar-bottom-right">
            <span className="navbar-bottom-right-item">
              EN
              <ArrowDropDown />
            </span>
            <span className="navbar-bottom-right-item">
              Ship to
              <img src="/img/nig.png" alt="" className="nig" />
              <ArrowDropDown />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
