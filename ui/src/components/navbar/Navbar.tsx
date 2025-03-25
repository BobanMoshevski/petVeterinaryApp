import React from "react";
import { NavLink } from "react-router";
import "./NavbarStyle.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Home
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
