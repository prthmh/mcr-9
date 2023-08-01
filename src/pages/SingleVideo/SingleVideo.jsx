import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useData } from "../../context/DataContext";
import { MdOutlineEditNote } from "react-icons/md";
import "./SingleVid.css";
import AddToPlaylistModal from "../../components/AddToPlaylistModal/AddToPlaylistModal";
import NoteModal from "../../components/NoteModal/NoteModal";
import MoreVids from "../../components/MoreVids/MoreVids";

const SingleVideo = () => {
  const { vidId } = useParams();
  const [showAddToPlaylistModal, setShowAddToPlaylistModal] = useState(false);
  const [showNoteModal, setShowNoteModal] = useState(false);
  const [showEditNoteModal, setShowEditNoteModal] = useState(false);

  const {
    dataState: { vids, watchList },
    isInWatchList,
    dataDispatch,
  } = useData();
  const findVid = vids.find((item) => item._id === Number(vidId));
  const handleWatchLater = (vid) => {
    if (isInWatchList(vid._id)) {
      const newWatchList = watchList.filter((v) => v._id !== vid._id);
      dataDispatch({ type: "UPDATE_WATCHLIST", payload: newWatchList });
    } else {
      dataDispatch({ type: "UPDATE_WATCHLIST", payload: [...watchList, vid] });
    }
  };

  return (
    <div className="single_vid_page">
      <div>
        <iframe
          width="853"
          height="480"
          src={findVid.src}
          // frameBorder="0"
          // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          // allowFullScreen
          title="Embedded youtube"
        />
        <div className="v_info">
          <h3>{findVid.title}</h3>
          <div className="btns">
            <div
              onClick={() => handleWatchLater(findVid)}
              style={{ cursor: "pointer" }}
            >
              {isInWatchList(findVid._id) ? (
                <i className="fa-solid fa-clock"></i>
              ) : (
                <i className="fa-regular fa-clock"></i>
              )}
            </div>
            <div
              className="playlist_add_btn"
              onClick={() => setShowAddToPlaylistModal(true)}
            >
              <span
                className="material-symbols-outlined"
                style={{ marginTop: "0.3rem" }}
              >
                add_notes
              </span>
            </div>
            <div
              className="playlist_add_btn"
              onClick={() => setShowNoteModal(true)}
            >
              <span
                className="material-symbols-outlined"
                style={{ marginTop: "0.3rem" }}
              >
                edit_note
              </span>
            </div>
          </div>
        </div>
        {findVid.notes && (
          <div className="note_list">
            <h3 style={{ margin: "0" }}>My Notes</h3>
            <div>
              {findVid?.notes.map((note) => (
                <div className="note_item" key={note.id}>
                  {note.noteContent}
                  <div className="note_action_btns">
                    <span
                      className="material-symbols-outlined"
                      onClick={() => setShowEditNoteModal(true)}
                    >
                      edit
                    </span>
                    <span
                      className="material-symbols-outlined"
                      onClick={() =>
                        dataDispatch({
                          type: "DELETE_NOTE",
                          payload: { findVid, note },
                        })
                      }
                    >
                      delete
                    </span>
                  </div>
                  {showEditNoteModal && (
                    <div className="modal">
                      <NoteModal
                        currentVid={findVid}
                        note={note}
                        setShowEditNoteModal={setShowEditNoteModal}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        {showAddToPlaylistModal && (
          <div className="modal">
            <AddToPlaylistModal
              currentVid={findVid}
              setShowAddToPlaylistModal={setShowAddToPlaylistModal}
            />
          </div>
        )}
        {showNoteModal && (
          <div className="modal">
            <NoteModal
              currentVid={findVid}
              setShowNoteModal={setShowNoteModal}
            />
          </div>
        )}
      </div>
      <MoreVids />
    </div>
  );
};

export default SingleVideo;
