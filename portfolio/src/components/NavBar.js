import React from "react";
import { Route, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <h1>York Cook</h1>

      <div className="navLinks">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default NavBar;
