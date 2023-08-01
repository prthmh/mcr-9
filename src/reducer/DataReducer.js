export const DataReducer = (dataState, { type, payload }) => {
  switch (type) {
    case "SET_STATE":
      dataState = payload;
      break;
    case "UPDATE_WATCHLIST":
      dataState = { ...dataState, watchList: payload };
      break;
    case "UPDATE_PLAYLIST":
      dataState = { ...dataState, playlists: payload };
      break;
    case "DELETE_VID": {
      const newPlaylists = dataState.playlists.filter(
        (item) => item.id !== payload.id
      );
      dataState = { ...dataState, playlists: [...newPlaylists, payload] };
      break;
    }
    case "ADD_NOTE":
      dataState = {
        ...dataState,
        vids: dataState?.vids.map((vid) =>
          vid._id === payload.vidId
            ? { ...vid, notes: [...vid.notes, payload.note] }
            : vid
        ),
      };
      break;
    case "EDIT_NOTE":
      dataState = {
        ...dataState,
        vids: dataState?.vids.map((vid) =>
          vid?._id === payload.vidId
            ? {
                ...vid,
                notes: vid?.notes?.map((note) =>
                  note?.id === payload?.noteId ? payload?.note : note
                ),
              }
            : vid
        ),
      };
    case "DELETE_NOTE":
      dataState = {
        ...dataState,
        vids: dataState?.vids.map((vid) =>
          vid?._id === payload?.findVid?._id
            ? {
                ...vid,
                notes: vid?.notes?.filter(
                  (note) => note?.id !== payload?.note?.id
                ),
              }
            : vid
        ),
      };
    default:
      break;
  }
  localStorage.setItem("mcr9", JSON.stringify(dataState));
  return dataState;
};
