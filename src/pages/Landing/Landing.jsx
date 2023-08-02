// import React from "react";
import "./Landing.css";
import { useData } from "../../context/DataContext";
import { Link } from "react-router-dom";

const Landing = () => {
  const {
    dataState: { vidCategories },
  } = useData();
  return (
    <div>
      <h2 style={{ marginTop: "0" }}>Categories</h2>
      <div className="categories">
        {vidCategories?.map((item) => (
          <div className="item" key={item._id}>
            <Link to={`/videos/${item.category}`} className="navLink">
              <img
                src={item.thumbnail}
                alt={item.category}
                className="category_img"
              />

              <p>{item.category}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landing;
