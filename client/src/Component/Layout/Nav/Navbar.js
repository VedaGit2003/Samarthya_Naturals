import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import { IoClose, IoMenu } from "react-icons/io5";
import Hamburger from "./Hamburger";
import { FaRegHeart } from "react-icons/fa";
import { PiHandbagBold } from "react-icons/pi";
import "./Navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          Samarthya Naturals
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <button type="button" class="position-relative btn btn-light p-0" style={{ lineHeight: '35px' }}>
                <FaRegHeart fontSize={22}/>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                  2
                  <span class="visually-hidden">unread messages</span>
                </span>
              </button>
            </li>
            <li style={{marginRight:20}}>
              <button type="button" class="position-relative btn btn-light p-0" style={{ lineHeight: '35px' }}>
                <PiHandbagBold fontSize={22}/>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                  2
                  <span class="visually-hidden">unread messages</span>
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;