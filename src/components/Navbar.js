import React, { useState } from "react";
import logo from "../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isToggleOpen, setisToggleOpen] = useState(false);

  const handleToggle = () => {
    setisToggleOpen(!isToggleOpen);
  };
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="Beach Resort" />
          </Link>

          <button className="nav-btn" type="button" onClick={handleToggle}>
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <div>
          <ul
            className={`${isToggleOpen ? "nav-links show-nav" : "nav-links"}`}
          >
            <li>
              <Link to="/" onClick={handleToggle}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/rooms" onClick={handleToggle}>
                Rooms
              </Link>
            </li>
            <li>
              {/* <button
                type="button"
                className={`${
                  isToggleOpen ? "signupToggleOpen" : "btn btn-primary signup"
                }`}
              > */}
              <Link to="/signup" onClick={handleToggle}>
                sign up
              </Link>
              {/* </button> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
