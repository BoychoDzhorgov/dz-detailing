import React, { useState } from "react"
import "./faq.scss";

export default function Faq ({ title, text}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="faq-card">
      <div className="title-container" onClick={toggleExpand}>
        <h2 className="title">{title}</h2>
        <span className={`arrow ${isExpanded ? "expanded" : ""}`}>
          {isExpanded ? "▼" : "►"}
        </span>
      </div>
      {isExpanded && (
        <p>{text}</p>
      )}
    </div>
  );
}