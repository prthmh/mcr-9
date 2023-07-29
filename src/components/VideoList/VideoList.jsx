import React from "react";
import "./VideoList.css";
import { useData } from "../../context/DataContext";

const VideoList = ({ list }) => {
  const {
    dataState: { watchList },
    isInWatchList,
    dataDispatch,
  } = useData();

  const handleWatchLater = (vid) => {
    if (isInWatchList(vid._id)) {
      const newWatchList = watchList.filter((v) => v._id !== vid._id);
      dataDispatch({ type: "UPDATE_WATCHLIST", payload: newWatchList });
    } else {
      dataDispatch({ type: "UPDATE_WATCHLIST", payload: [...watchList, vid] });
    }
  };

  return (
    <div className="vid_list">
      {list?.map((video) => (
        <div className="vid_item" key={video._id}>
          <img src={video.thumbnail} alt={video.title} className="vid_img" />
          <div className="watch_icon" onClick={() => handleWatchLater(video)}>
            {isInWatchList(video._id) ? (
              <i className="fa-solid fa-clock"></i>
            ) : (
              <i className="fa-regular fa-clock"></i>
            )}
          </div>
          <div className="vid_info">
            <div className="vid_pic">
              <img src=" https://picsum.photos/40/40" alt="pic" />
            </div>
            <div className="vid_title">
              <b>{video.title}</b>
              <br />
              <b>{video.category}</b>
              <br />
              <span>
                {video.views} | {video.creator}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
