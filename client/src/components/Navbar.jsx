import React from "react";

function Navbar({ scrollToHero, scrollToAbout }) {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
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
      </div>
    </nav>
  );
}

export default Navbar;
