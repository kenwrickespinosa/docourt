import React from "react";
import { Link } from "react-router-dom";

function Navbar({ scrollToHero, scrollToAbout }) {
  return (
    <nav className="bg-white shadow-md">
      <div>
        <div>Docourt</div>
        <ul>
          <li>
            <button onClick={scrollToHero} className="cursor-pointer">
              Home
            </button>
          </li>
          <li>
            <button onClick={scrollToAbout} className="cursor-pointer">
              About
            </button>
          </li>
        </ul>
        <div>
            <Link to="/login">Log In</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
