import React from "react";
import { NavLink } from "react-router";
import "./NavbarStyle.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
      <div className="container-fluid">
        <div className="d-flex">
          <NavLink className="navbar-link" to="/">
            Home
          </NavLink>
          <NavLink className="navbar-link" to="/owners">
            Owners
          </NavLink>
          <NavLink className="navbar-link" to="/pets">
            Pets
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
