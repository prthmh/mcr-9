import React from "react";
import "./VideoList.css";
import { useData } from "../../context/DataContext";
import { Link, useLocation } from "react-router-dom";

const VideoList = ({ list }) => {
  const {
    dataState: { watchList },
    isInWatchList,
    dataDispatch,
    deleteVidInPlaylist,
  } = useData();

  const location = useLocation();
  const currentPath = location.pathname;
  const pathAry = currentPath.split("/");
  const playlistId = pathAry[pathAry.length - 1];

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
      {list.length === 0 ? (
        <h3>No Videos</h3>
      ) : (
        <>
          {list?.map((video) => (
            <div className="vid_item" key={video._id}>
              <div
                className="watch_icon"
                onClick={() => handleWatchLater(video)}
              >
                {isInWatchList(video._id) ? (
                  <i className="fa-solid fa-clock"></i>
                ) : (
                  <i className="fa-regular fa-clock"></i>
                )}
              </div>
              <Link to={`/video/${video._id}`} className="navLink">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="vid_img"
                />

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
              </Link>
              {currentPath.includes("playlist") && (
                <button
                  onClick={() => deleteVidInPlaylist(video._id, playlistId)}
                  className="delete_vid"
                >
                  Delete
                </button>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default VideoList;
