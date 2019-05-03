import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          The Clicky Game
        </Link>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* <h5>You guessed correctly!</h5> */}
            </li>
       
            <li className="nav-item">
              {/* <h5>Score: 6 | Top Score: 6</h5> */}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  