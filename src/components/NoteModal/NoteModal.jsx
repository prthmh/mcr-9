import React, { useState } from "react";
import "./NoteModal.css";
import { useData } from "../../context/DataContext";
import { v4 as uuidv4 } from "uuid";

const NoteModal = ({
  currentVid,
  setShowNoteModal,
  note,
  setShowEditNoteModal,
}) => {
  const {
    dataDispatch,
  } = useData();
  const [noteData, setNoteData] = useState(note ? note.noteContent : "");

  const handleNoteChange = (e) => setNoteData(e.target.value);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (note) {
      dataDispatch({
        type: "EDIT_NOTE",
        payload: {
          note: { ...note, noteContent: noteData },
          noteId: note.id,
          vidId: currentVid?._id,
        },
      });
    } else {
      dataDispatch({
        type: "ADD_NOTE",
        payload: {
          note: { id: uuidv4(), noteContent: noteData },
          vidId: currentVid?._id,
        },
      });
    }
    setShowNoteModal && setShowNoteModal(false);
    setShowEditNoteModal && setShowEditNoteModal(false);
    setNoteData("");
  };

  return (
    <div className="note_modal">
      <h2 style={{margin: "0"}} >Note</h2>
      <form onSubmit={handleSubmit} className="note_form" >
        {note ? "Edit note" : "Add Note"}
        <input type="text" className="note_input" value={noteData} onChange={handleNoteChange} />
        <button type="submit" className="save" >Save</button>
      </form>
      <button className="cancel_note"
        onClick={() => {
          setShowNoteModal && setShowNoteModal(false);
          setShowEditNoteModal && setShowEditNoteModal(false);
        }}
      >
        Cancel
      </button>
    </div>
  );
};

export default NoteModal;
