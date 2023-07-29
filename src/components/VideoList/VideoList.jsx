import React from "react";
import "./VideoList.css";
import { useData } from "../../context/DataContext";

const VideoList = ({ list }) => {
  const { isInWatchList } = useData();
  return (
    <div className="vid_list">
      {list?.map((video) => (
        <div className="vid_item" key={video._id}>
          <img src={video.thumbnail} alt={video.title} className="vid_img" />
          <div className="watch_icon">
            {isInWatchList ? (
              <i className="fa-solid fa-clock"></i>
            ) : (
              <i className="fa-solid fa-clock"></i>
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
