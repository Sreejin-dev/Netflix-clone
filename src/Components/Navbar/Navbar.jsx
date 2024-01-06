// Navbar.js

import React, { useState } from "react";
import "./Navbar.scss";
import "./responsive.scss";

function Navbar() {
  const [click, setClick] = useState(false);

  const clickMe = () => {
    setClick(!click);
  };
  return (
    <div className="navBar-container" >
      <div className="left-section">
        {/* logo */}
        <a href="#">
          <img src="src/assets/netflixmain.png" alt="" srcset="" />
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

        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Browse more
          </button>
          <ul
            class="dropdown-menu"
           
          >
            <li>
              <a class="dropdown-item" href="#" style={{ color: "white " }}>
                Home
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                TV Shows
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Movies
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                New & Popular
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                My List
              </a>
            </li>{" "}
            <li>
              <a class="dropdown-item" href="#">
                Browse By Languages
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* left section end */}
      <div className="right-section">
        <div className="r-navitems">
          <i class="bi bi-search" onClick={clickMe}></i>
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
          <i class="bi bi-bell"></i>

          <i class="bi bi-person-square"></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
