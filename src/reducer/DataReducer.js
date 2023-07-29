export const DataReducer = (dataState, { type, payload }) => {
  switch (type) {
    case "SET_STATE":{
      console.log("redu",payload)
      return payload;
    }
    case "UPDATE_WATCHLIST":
      return { ...dataState, watchList: payload };
    default:
      return dataState;
  }
};
