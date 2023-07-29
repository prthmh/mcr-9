import { createContext, useContext, useReducer } from "react";
import { categories, videos } from "../data";
import { DataReducer } from "../reducer/DataReducer";

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const initialState = {
    vidCategories: categories,
    vids: videos,
    watchList: [],
  };
  const [dataState, dataDispatch] = useReducer(DataReducer, initialState);

  const isInWatchList = (vidId) => {
    const findVid = dataState?.watchList.find((item) => item._id === vidId);
    return Boolean(findVid);
  };

  return (
    <DataContext.Provider value={{ dataState, dataDispatch, isInWatchList }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
