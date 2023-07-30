export const DataReducer = (dataState, { type, payload }) => {
  switch (type) {
    case "SET_STATE": {
      console.log("redu", payload);
      dataState = payload;
      break;
    }
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
    default:
      break;
  }
  localStorage.setItem("mcr9", JSON.stringify(dataState));
  return dataState;
};
