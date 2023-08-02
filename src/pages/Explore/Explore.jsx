import { useState } from "react";
import "./Explore.css";
import { useData } from "../../context/DataContext";
import VideoList from "../../components/VideoList/VideoList";

const Explore = () => {
  const {
    dataState: { vids },
    getExplorePageVids,
  } = useData();
  const [search, setSearch] = useState("");
  const videoList = getExplorePageVids(search, vids);
  return (
    <div>
      <div className="header">
        <h2>Explore</h2>
        <div>
          <span className="material-symbols-outlined search_icon">search</span>
          <input
            type="text"
            placeholder="Search by video title"
            className="search_input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <VideoList list={videoList} />
    </div>
  );
};

export default Explore;
