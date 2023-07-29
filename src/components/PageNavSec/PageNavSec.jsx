import React from "react";
import "./PageNavSec.css";
import { NavLink } from "react-router-dom";

const PageNavSec = () => {
  return (
    <div className="page_nav">
      <div className="nav_element">
        <NavLink to="/" className="navLink">
          <i className="fa-solid fa-house"></i> Home
        </NavLink>
      </div>
      <div className="nav_element">
        <NavLink to="/explore" className="navLink">
          <i className="fa-solid fa-compass"></i> Explore
        </NavLink>
      </div>
      <div className="nav_element">
        {" "}
        <i className="fa-solid fa-list-ul"></i> Playlist
      </div>
      <div className="nav_element">
        {" "}
        <i className="fa-solid fa-clock"></i> Watch later
      </div>
    </div>
  );
};

export default PageNavSec;
