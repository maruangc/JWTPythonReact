import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="d-flex justify-content-between container">
        <div className="">
          <Link to="/">
            <button className="btn btn-primary">Home</button>
          </Link>
        </div>
        <div className="">
          <Link to="/signup">
            <button className="btn btn-primary">Register</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
