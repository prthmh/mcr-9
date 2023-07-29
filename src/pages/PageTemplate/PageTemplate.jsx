import React from "react";
import "./PageTemplate.css";

const PageTemplate = ({ children }) => {
  return (
    <div className="template">
      <div className="nav_section"></div>
      <div className="page_content">{children}</div>
    </div>
  );
};

export default PageTemplate;
