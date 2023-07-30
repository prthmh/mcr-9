import React from "react";
import "./PageNavSec.css";
import { NavLink } from "react-router-dom";
import { useData } from "../../context/DataContext";
import NewPlayListModal from "../NewPlayListModal/NewPlayListModal";

const PageNavSec = () => {
  const { showAddPlaylistModal, setShowAddPlaylistModal } = useData();

  const onActive = ({ isActive }) => ({
    backgroundColor: isActive && "#183153",
    color: isActive && "white",
    padding: isActive && "0.6rem",
    borderRadius: isActive && "0.5rem",
  });

  return (
    <div className="page_nav">
      <div className="nav_element">
        <NavLink to="/" className="navLink" style={onActive}>
          <i className="fa-solid fa-house"></i> Home
        </NavLink>
      </div>
      <div className="nav_element">
        <NavLink to="/explore" className="navLink" style={onActive}>
          <i className="fa-solid fa-compass"></i> Explore
        </NavLink>
      </div>
      <div className="nav_element">
        <NavLink to="/playlist" className="navLink" style={onActive}>
          <i className="fa-solid fa-list-ul"></i> Playlist
        </NavLink>
      </div>
      <div className="nav_element">
        <NavLink to="/watchLater" className="navLink" style={onActive}>
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
