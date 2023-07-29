import React, { useState } from "react";
import "./NewPlayListModal.css";
import { useData } from "../../context/DataContext";

const NewPlayListModal = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    dataDispatch({ type: "UPDATE_PLAYLIST", payload: [...playlists, data] });
    setShowAddPlaylistModal(false)
  };

  return (
    <div className="add_playlist_modal" >
      <h3>Add a playlist</h3>
      <form className="playlist_form" onSubmit={handleSubmit}>
        <label className="form_label">
          Add Playlist name
          <input
            type="text"
            value={data.name}
            name="name"
            onChange={handleChange}
          />
        </label>
        <label className="form_label">
          Add Playlist description
          <input
            type="text"
            value={data.description}
            name="description"
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add</button>
        <button onClick={() => setShowAddPlaylistModal(false)}>Cancel</button>
      </form>
    </div>
  );
};

export default NewPlayListModal;
