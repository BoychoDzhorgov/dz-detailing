import React, { useState } from "react"
import Hatchback from "../../images/icon-hatchback-car.svg";
import Suv from "../../images/icon-suv-car.svg";
import Station from "../../images/icon-station-car.svg";
import ArrowCollapse from "../../images/icon-collapse-arrow.png";
import ArrowExpand from "../../images/icon-expand-arrow.png";
import "./service.scss";

export default function Service ({ title, items}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="service-card">
      <div className="title-container" onClick={toggleExpand}>
        <h2 className="title-container__title">{title}</h2>
        <span className="title-container__arrow">
          {isExpanded ? (
            <img className="title-container__arrow__icon" src={ArrowCollapse} />
          ) : (
            <img className="title-container__arrow__icon" src={ArrowExpand} />
          )}
        </span>
      </div>
      {isExpanded && (
        <>
          <div className="car-types-container">
            <div className="car-types-container__item">
              <img className="car-types-container__item__icon" src={Hatchback} />
              <div className="car-types-container__item__price">50 лв</div>
            </div>
            <div className="car-types-container__item">
              <img className="car-types-container__item__icon" src={Station} />
              <div className="car-types-container__item__price">100 лв</div>
            </div>
            <div className="car-types-container__item">
              <img className="car-types-container__item__icon" src={Suv} />
              <div className="car-types-container__item__price">150 лв</div>
            </div>
          </div>
          <ul className="content">
            {Object.values(items).map((item, index) => (
              <li className="item" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}