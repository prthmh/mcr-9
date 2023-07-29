export const DataReducer = (dataState, { type, payload }) => {
  switch (type) {
    case "SET_STATE": {
      console.log("redu", payload);
      return payload;
    }
    case "UPDATE_WATCHLIST":
      return { ...dataState, watchList: payload };
    case "UPDATE_PLAYLIST":
      return { ...dataState, playlists: payload };
    case "DELETE_VID": {
      const newPlaylists = dataState.playlists.filter(
        (item) => item.id !== payload.id
      );
      return { ...dataState, playlists: [...newPlaylists, payload] };
    }
    default:
      return dataState;
  }
};
