import React, { useState } from "react"
import "./service.scss";

export default function Service ({ title, items}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="service-card">
      <div className="title-container" onClick={toggleExpand}>
        <h2 className="title">{title}</h2>
        <span className={`arrow ${isExpanded ? "expanded" : ""}`}>
          {isExpanded ? "▼" : "►"}
        </span>
      </div>
      {isExpanded && (
        <ul className="content">
          {Object.values(items).map((item, index) => (
            <li className="item" key={index}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}