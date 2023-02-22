import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="Navbar-content">
        <div className="Navbar-logo">
          <NavLink exact to="/">
            Yodlr
          </NavLink>
        </div>
        <div className="Navbar-links">
          <NavLink to="/admin">Admin</NavLink>
          <NavLink exact to="/signup">
            Signup
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
