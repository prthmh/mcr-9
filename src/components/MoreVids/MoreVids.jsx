import React from "react";
import "./MoreVids.css";
import { useData } from "../../context/DataContext";
import { Link } from "react-router-dom";

const MoreVids = () => {
  const {
    dataState: { vids },
  } = useData();
  return (
    <div>
      <h2 style={{ margin: "0", marginBottom: "0.3rem" }}>More Vidoes</h2>
      {vids?.map((vid) => (
        <Link to={`/video/${vid?._id}`} className="navLink" key={vid?._id}>
          <div className="more_vid">
            <div>
              <img src={vid?.thumbnail} alt="img" className="vid_thumbnail" />
            </div>
            <div className="vid_detail">
              <p style={{ marginTop: "0" }}>{vid?.title}</p>
              <p>{vid?.creator}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MoreVids;
