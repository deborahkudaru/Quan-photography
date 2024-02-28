import React from "react";
import "../styles/styles.css";
import Navbar from "./Navbar";
import Socials from "./Socials";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AnimatedArrow from "./AnimatedArrow";
import logo from '../logo.png';

const Body = () => {
  return (
    <div id="body">
      <Navbar />
      <img src={logo} alt="big-logo" className="b-logo" data-aos="zoom-out" />
      <Router>
        <Link
          to="/photocollection"
          style={{ textDecoration: " none", color: "rgb(204, 202, 202)" }}
          className="photo-collection"
        >
          Photo Collection
        </Link>
        <Routes>
          <Route path="/about" render ={() => <div>photo Page</div>}/>
        </Routes>
      </Router>
      <Socials />
      <AnimatedArrow />
    </div>
  );
};

export default Body;
