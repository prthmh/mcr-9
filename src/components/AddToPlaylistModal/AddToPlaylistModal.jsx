import React from "react";
import "./AddToPlaylistModal.css";
import NewPlayListModal from "../NewPlayListModal/NewPlayListModal";
import { useData } from "../../context/DataContext";
import { toast } from "react-toastify";

const AddToPlaylistModal = ({ currentVid, setShowAddToPlaylistModal }) => {
  const {
    dataState: { playlists },
    dataDispatch,
  } = useData();

  const handleAddToPlayL = (playL_name) => {
    const newPlayList = playlists?.map((item) =>
      item.name === playL_name
        ? { ...item, vids: [...item.vids, currentVid] }
        : item
    );
    dataDispatch({ type: "UPDATE_PLAYLIST", payload: newPlayList });
    toast.success(`${currentVid.title} added to ${playL_name}`, {
      autoClose: 5000,
    });
  };

  const handleDeletePlayL = (playL_name) => {
    const newPlayList = playlists?.filter((item) => item.name !== playL_name);
    dataDispatch({ type: "UPDATE_PLAYLIST", payload: newPlayList });
    toast.success(`${playL_name} deleted`);
  };

  return (
    <div className="add_playL_modal">
      <h4 style={{ margin: "0", color: "#183153" }}>
        Add to Existing playlist or Create a playlist
      </h4>
      <NewPlayListModal
        currentVid={currentVid}
        setShowAddToPlaylistModal={setShowAddToPlaylistModal}
      />
      <div>
        <hr className="line" />
      </div>
      <h4 style={{ margin: "0", color: "#183153" }}>Existing Playlists</h4>
      {playlists.map((item) => (
        <div className="playL" key={item.id}>
          <div
            className="playL_name"
            onClick={() => handleAddToPlayL(item.name)}
          >
            {item.name}
          </div>
          <div
            className="delete_playL"
            onClick={() => handleDeletePlayL(item.name)}
          >
            Delete
          </div>
        </div>
      ))}
      <button
        onClick={() => setShowAddToPlaylistModal(false)}
        className="close_playl_modal"
      >
        Close
      </button>
    </div>
  );
};

export default AddToPlaylistModal;
