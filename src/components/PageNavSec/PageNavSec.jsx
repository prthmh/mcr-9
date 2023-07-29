import React from "react";
import "./PageNavSec.css";
import { NavLink } from "react-router-dom";
import { useData } from "../../context/DataContext";
import NewPlayListModal from "../NewPlayListModal/NewPlayListModal";

const PageNavSec = () => {
  const { showAddPlaylistModal, setShowAddPlaylistModal } = useData();
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
        <NavLink to="/playlist" className="navLink">
          <i className="fa-solid fa-list-ul"></i> Playlist
        </NavLink>
      </div>
      <div className="nav_element">
        <NavLink to="/watchLater" className="navLink">
          <i className="fa-solid fa-clock"></i> Watch later
        </NavLink>
      </div>
      {showAddPlaylistModal && (
        <div className="modal">
          {" "}
          <NewPlayListModal />
        </div>
      )}
    </div>
  );
};

export default PageNavSec;
