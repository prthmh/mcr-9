import React from "react";
import "./PageTemplate.css";
import PageNavSec from "../../components/PageNavSec/PageNavSec";

const PageTemplate = ({ children }) => {
  return (
    <div className="template">
      <div className="nav_section">
        <PageNavSec />
      </div>
      <div className="page_content">{children}</div>
    </div>
  );
};

export default PageTemplate;
