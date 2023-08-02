// import React from "react";
import { useData } from "../../context/DataContext";
import VideoList from "../../components/VideoList/VideoList";

const WatchLater = () => {
  const {
    dataState: { watchList },
  } = useData();
  return (
    <div>
      <h2 style={{ marginTop: "0" }}>Watch Later</h2>
      <VideoList list={watchList} />
    </div>
  );
};

export default WatchLater;
