// Navbar.js

import React, { useState } from "react";
import "./Navbar.scss";
import "./responsive.scss";
import img from "../assets/netflixmain.png";


function Navbar() {
  const [click, setClick] = useState(false);

  const clickMe = () => {
    setClick(!click);
  };
  return (
    <div className="navBar-container">
      <div className="left-section">
        {/* logo */}
        <a href="#">
          <img src={img} />
        </a>
        {/* navbar links section */}
        <nav className="navbar">
          <a href="#">Home</a>
          <a href="#">TV Shows</a>
          <a href="#">Movies</a>
          <a href="#">New & Popular</a>
          <a href="#">My List</a>
          <a href="#">Browse by Languages</a>
        </nav>

        {/* RESPONSIVE BOOTSTRAP FOR MOBILE */}

        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Browse more
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#" style={{ color: "white " }}>
                Home
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                TV Shows
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Movies
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                New & Popular
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                My List
              </a>
            </li>{" "}
            <li>
              <a className="dropdown-item" href="#">
                Browse By Languages
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* left section end */}
      <div className="right-section">
        <div className="r-navitems">
          <i className="bi bi-search" onClick={clickMe}></i>
          <input
            placeholder="Title, peoples , genres"
            style={{
              display: click ? "block" : "none",
            }}
            type="text"
          />
          <a href="#" style={{ textDecoration: "none", color: "unset" }}>
            Children
          </a>
          <i className="bi bi-bell"></i>

          <i className="bi bi-person-square"></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
