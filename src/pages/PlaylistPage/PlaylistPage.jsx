// import React from "react";
import "./PlaylistP.css";
import { useData } from "../../context/DataContext";
import { Link } from "react-router-dom";

const PlaylistPage = () => {
  const {
    dataState: { playlists },
    deletePlayList,
    setShowAddPlaylistModal,
  } = useData();

  const handleDelete = (playListId) => {
    deletePlayList(playListId);
  };

  return (
    <div>
      <h2 style={{ marginTop: "0" }}>Playlists</h2>
      {playlists.length === 0 ? (
        <h3>No Playlists</h3>
      ) : (
        <div className="play_list">
          {playlists.map((item) => (
            <div className="playlist" key={item.id}>
              <Link to={`/playlist/${item.id}`} className="navLink">
                <img
                  src={item.thumbnail}
                  alt={item.name}
                  className="playlist_pic"
                />
                <h3 style={{ margin: "0" }}>{item.name}</h3>
                {item.description}
              </Link>
              <div className="cancel" onClick={() => handleDelete(item.id)}>
                <i className="fa-regular fa-circle-xmark"></i>
              </div>
            </div>
          ))}
          <div
            className="add_playlist"
            onClick={() => setShowAddPlaylistModal(true)}
          >
            <i className="fa-solid fa-circle-plus"></i>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlaylistPage;
