import React, { useState } from "react"
import ArrowExpand from "../../images/icon-expand-arrow.png";
import ArrowCollapse from "../../images/icon-collapse-arrow.png";
import "./faq.scss";

export default function Faq ({ title, text}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="faq-card">
      <div className="faq-card__title-container" onClick={toggleExpand}>
        <h2 className="faq-card__title-container__title">{title}</h2>
        <span className="faq-card__title-container__arrow">
          {isExpanded ? (
            <img className="faq-card__title-container__arrow__icon" src={ArrowCollapse} />
          ) : (
            <img className="faq-card__title-container__arrow__icon" src={ArrowExpand} />
          )}
        </span>
      </div>
      {isExpanded && (
        <p>{text}</p>
      )}
    </div>
  );
}