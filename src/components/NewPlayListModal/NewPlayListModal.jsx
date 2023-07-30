import React, { useEffect, useState } from "react";
import "./NewPlayListModal.css";
import { useData } from "../../context/DataContext";

const NewPlayListModal = ({ currentVid, setShowAddToPlaylistModal }) => {
  const {
    dataState: { playlists },
    setShowAddPlaylistModal,
    dataDispatch,
  } = useData();
  const [data, setData] = useState({
    id: playlists.length + 1,
    name: "",
    description: "",
    thumbnail: "https://picsum.photos/308/174",
    vids: [],
  });
  const handleChange = (e) => {
    setData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };
  useEffect(() => {
    if (currentVid) {
      setData((prevState) => ({
        ...prevState,
        vids: [...data.vids, currentVid],
      }));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dataDispatch({ type: "UPDATE_PLAYLIST", payload: [...playlists, data] });
    setShowAddPlaylistModal(false);
    if (setShowAddToPlaylistModal) {
      setShowAddToPlaylistModal(false);
    }
  };

  return (
    <div className="add_playlist_modal">
      <h3 style={{ margin: "0" }}>Create a playlist</h3>
      <form className="playlist_form" onSubmit={handleSubmit}>
        <label className="form_label">
          Add Playlist name
          <input
            type="text"
            className="new_playL_input"
            placeholder="Enter name"
            value={data.name}
            name="name"
            onChange={handleChange}
          />
        </label>
        <label className="form_label">
          Add Playlist description
          <input
            type="text"
            className="new_playL_input"
            placeholder="Enter description"
            value={data.description}
            name="description"
            onChange={handleChange}
          />
        </label>
        <button type="submit" className="add_new_playL">
          Add
        </button>
        {!currentVid && (
          <button
            onClick={() => setShowAddPlaylistModal(false)}
            className="close_new_playL"
          >
            Cancel
          </button>
        )}
      </form>
    </div>
  );
};

export default NewPlayListModal;
