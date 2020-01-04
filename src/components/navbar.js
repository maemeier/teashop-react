import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div>
      <span className="nav-btn" id="nav-btn">
        <FontAwesomeIcon icon={faBars} />
      </span>

      <nav className="navbar" id="navbar">
        <div className="navbar-header">
          <span className="nav-close" id="nav-close">
            {" "}
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </div>
        <ul className="nav-items">
          <li>
            <a href="#" className="nav-link">
              {" "}
              Home
            </a>
          </li>

          <li>
            <a href="#" className="nav-link">
              {" "}
              About
            </a>
          </li>

          <li>
            <a href="#" className="nav-link">
              {" "}
              Products
            </a>
          </li>

          <li>
            <a href="#" className="nav-link">
              {" "}
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
