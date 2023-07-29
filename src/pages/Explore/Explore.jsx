import React from "react";
import "./Explore.css";
import { useData } from "../../context/DataContext";
import VideoList from "../../components/VideoList/VideoList";

const Explore = () => {
  const {
    dataState: { vids },
  } = useData();
  return (
    <div>
      <h2 style={{ marginTop: "0" }}>Explore</h2>
      <VideoList list={vids} />
    </div>
  );
};

export default Explore;
