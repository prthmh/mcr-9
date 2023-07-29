import React from "react";
import { useParams } from "react-router-dom";
import { useData } from "../../context/DataContext";
import { MdOutlineEditNote } from "react-icons/md";
import "./SingleVid.css";

const SingleVideo = () => {
  const { vidId } = useParams();
  const {
    dataState: { vids, watchList },
    isInWatchList,
    dataDispatch,
  } = useData();
  const findVid = vids.find((item) => item._id === Number(vidId));
  const handleWatchLater = (vid) => {
    console.log(vid);
    if (isInWatchList(vid._id)) {
      const newWatchList = watchList.filter((v) => v._id !== vid._id);
      dataDispatch({ type: "UPDATE_WATCHLIST", payload: newWatchList });
    } else {
      dataDispatch({ type: "UPDATE_WATCHLIST", payload: [...watchList, vid] });
    }
  };
  return (
    <div>
      <iframe
        width="853"
        height="480"
        src={findVid.src}
        // frameBorder="0"
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        // allowFullScreen
        title="Embedded youtube"
      />
      <div className="vid_info">
        <h3>{findVid.title}</h3>
        <div className="btns">
          <div
            onClick={() => handleWatchLater(findVid)}
            style={{ cursor: "pointer" }}
          >
            {isInWatchList(findVid._id) ? (
              <i className="fa-solid fa-clock"></i>
            ) : (
              <i className="fa-regular fa-clock"></i>
            )}
          </div>
          <div className="playlist_add_btn">
            <MdOutlineEditNote />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleVideo;
