import React from "react";
import { Link } from "react-router-dom";
import {
  KeyboardArrowDown,
  Search,
  PersonOutline,
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-wrapper">
        {/* top navbar starts here */}
        <div className="top-nav">
          <div className="topnav-left">
            <Link to="/">
              <img src="/img/logo.png" alt="Grossdot" className="logo" />
            </Link>
          </div>

          <div className="topnav-center">
            <form method="GET" action="">
              <div className="form-wrapper">
                <span to="/" className="searchLink">
                  <Search />
                </span>
                <input
                  type="text"
                  id="search"
                  className="search"
                  placeholder="Search your products, brand, categories..."
                />
              </div>
              <input
                type="submit"
                value="search"
                id="search-btn"
                className="search-btn"
              />
            </form>
          </div>

          <div className="topnav-right">
            <span className="lang">
              <img src="/img/en.png" alt="en" className="en" />
              <KeyboardArrowDown className="topnav-right-icons" />
            </span>

            <span className="topnav-right-favorite">
              <FavoriteBorderOutlined className="topnav-right-icons" />
              <span>0</span>
            </span>

            <span className="topnav-right-cart">
              <ShoppingCartOutlined className="topnav-right-icons" />
              <span>0</span>
            </span>

            <span className="topnav-right-account">
              <PersonOutline className="topnav-right-icons" />
              <span>Account</span>
            </span>
          </div>
        </div>
        {/* top navbar ends here */}

        {/* bottom navbar starts here */}
        <div className="bottom-nav">
          <Link to="/products/1" className="bottom-nav-link">
            All Products
          </Link>
          <Link to="/products/2" className="bottom-nav-link">
            Accessories
          </Link>
          <Link to="/products/3" className="bottom-nav-link">
            Babies
          </Link>
          <Link to="/products/4" className="bottom-nav-link">
            Cosmetics
          </Link>
          <Link to="/products/5" className="bottom-nav-link">
            Men
          </Link>
          <Link to="/products/6" className="bottom-nav-link">
            Woman
          </Link>
          <Link to="/products/7" className="bottom-nav-link">
            Corporates
          </Link>
          <Link to="/products/8" className="bottom-nav-link">
            Casuals
          </Link>
        </div>
        {/* bottom navbar ends here */}
      </div>
    </div>
  );
};

export default Navbar;
