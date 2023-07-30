import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { categories, playlistsData, videos } from "../data";
import { DataReducer } from "../reducer/DataReducer";
import { toast } from "react-toastify";

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const initialState = {
    vidCategories: categories,
    vids: videos,
    watchList: [],
    playlists: playlistsData,
  };
  const [dataState, dataDispatch] = useReducer(DataReducer, initialState);

  const [showAddPlaylistModal, setShowAddPlaylistModal] = useState(false);

  const isInWatchList = (vidId) => {
    const findVid = dataState?.watchList.find((item) => item._id === vidId);
    return Boolean(findVid);
  };

  const deletePlayList = (playListId) => {
    const newPlayList = dataState?.playlists.filter(
      (item) => item.id !== playListId
    );
    dataDispatch({ type: "UPDATE_PLAYLIST", payload: newPlayList });
    toast.success("Deleted a Playlist");
  };

  const deleteVidInPlaylist = (vidId, playlistId) => {
    const targetPlaylist = dataState.playlists.find(
      (item) => item.id === Number(playlistId)
    );
    const newVidList = targetPlaylist.vids.filter((item) => item._id !== vidId);
    const newPlaylist = { ...targetPlaylist, vids: newVidList };
    dataDispatch({ type: "DELETE_VID", payload: newPlaylist });
  };

  useEffect(() => {
    const stateInStorage = JSON.parse(localStorage.getItem("mcr9"));
    if (stateInStorage) {
      dataDispatch({ type: "SET_STATE", payload: stateInStorage });
    } else {
      dataDispatch({ type: "SET_STATE", payload: dataState });
    }
  }, []);

  return (
    <DataContext.Provider
      value={{
        dataState,
        dataDispatch,
        isInWatchList,
        deletePlayList,
        showAddPlaylistModal,
        setShowAddPlaylistModal,
        deleteVidInPlaylist,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
