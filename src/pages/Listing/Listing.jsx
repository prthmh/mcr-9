// import React from "react";
import { useParams } from "react-router-dom";
import { useData } from "../../context/DataContext";
import VideoList from "../../components/VideoList/VideoList";

const Listing = () => {
  const { categoryName } = useParams();
  const {
    dataState: { vids },
  } = useData();
  const findCategoryVids = vids?.filter((v) => v.category === categoryName);
  return (
    <div>
      <h2 style={{ marginTop: "0" }}>{categoryName}</h2>
      <VideoList list={findCategoryVids} />
    </div>
  );
};

export default Listing;
