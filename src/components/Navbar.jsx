import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "../images/logo1.png";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <Router>
      <nav>
        <div>
          <Link to="/" style={{ textDecoration: "none" }}>
            {" "}
            <img src={logo} alt="logo" className="q-logo" />
          </Link>
        </div>

        <div className="navigation">
          <Link
            to="/album"
            style={{ textDecoration: "none", color: "white" }}
            className="link"
          >
            ALBUM
          </Link>

          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "white" }}
            className="link"
          >
            CONTACT
          </Link>
        </div>
      </nav>
      <Routes>
        <Route exact path="/" render={() => <div>Home Page</div>} />
        <Route path="/about" render={() => <div>About Page</div>} />
        <Route path="/contact" render={() => <div>Contact Page</div>} />
      </Routes>
    </Router>
  );
};

export default Navbar;
