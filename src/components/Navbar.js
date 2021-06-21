import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-info px-1 px-md-5">
        <Link to="/">
          <h2 className="navbar-brand text-light ml-0 ml-md-5">Career</h2>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <Link to="/">
              <li className="nav-item active mx-md-4 mx-0">
                <a className="nav-link text-light font-weight-bold" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
            </Link>
            <Link to="/allJobs">
              <li className="nav-item mx-md-4 mx-0">
                <a className="nav-link text-light font-weight-bold" href="#">
                  All Jobs
                </a>
              </li>
            </Link>
            <Link to="/login">
              <li className="nav-item mx-md-4 mx-0">
                <a className="nav-link text-light font-weight-bold" href="#">
                  Login
                </a>
              </li>
            </Link>
            <Link to="/signup">
              <li className="nav-item mx-md-4 mx-0">
                <a className="nav-link text-light font-weight-bold" href="#">
                  Sign up
                </a>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
