import { createContext, useContext, useEffect, useReducer } from "react";
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

    // useEffect(() => {
    //   const stateInStorage = JSON.parse(localStorage.getItem("mcr9"));
    //   console.log("b",stateInStorage);
    //   if (stateInStorage) {
    //     dataDispatch({ type: "SET_STATE", payload: stateInStorage });
    //   } else {
    //     localStorage.setItem("mcr9", JSON.stringify(dataState));
    //     dataDispatch({ type: "SET_STATE", payload: dataState });
    //   }
    // }, []);
//   useEffect(() => {
//     const stateInStorage = JSON.parse(localStorage.getItem("mcr9"));
//     console.log("l", stateInStorage);
//     dataDispatch({ type: "SET_STATE", payload: stateInStorage });
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("mcr9", JSON.stringify(dataState));
//     console.log(1)
//   });

  return (
    <DataContext.Provider value={{ dataState, dataDispatch, isInWatchList }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
