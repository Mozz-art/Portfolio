import React from "react";
import "./menu.scss";
import { Link } from "react-router-dom";



function Menu() {
  return (
      <section>
         <div id="menu">
          <div id="left">
            <Link to="/about-me" className="text">About me</Link>
          </div>
          <div id="center">
            <div className="explainer">
              <span>Menu</span>
            </div>
            <Link to="/" className="text">Home</Link>
          </div>
          <div id="right">
          <Link to="/my-work" className="text">My Work</Link>
          </div>
        </div>
      </section>
  );
}

export default Menu;
