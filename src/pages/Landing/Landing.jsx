import React from "react";
import "./Landing.css";
import { useData } from "../../context/DataContext";

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
            <img
              src={item.thumbnail}
              alt={item.category}
              className="category_img"
            />

            <p>{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landing;
