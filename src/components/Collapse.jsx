import React from "react";
import { useState } from "react";

import arrowCollapse from "../assets/Vector-1.png";

const Collapse = ({ title, content }) => {

  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <div className="collapse ">
      <button type="button" className="collapse__button" onClick={() => setIsOpen(false)}>
        {title}
        <img src={arrowCollapse} alt="arrow" className="collapse__arrow rotate" />
      </button>
      <div className="collapse__content show">
        {Array.isArray(content) ? (
          <ul className="collapse__list">
            {content.map((equipment, index) => (
              <li key={index} className="collapse__list-element">
                {equipment}
              </li>
            ))}
          </ul>
        ) : (
          <p className="collapse__text">{content}</p>
        )}
      </div>
    </div>
  ) : (
    <div className="collapse ">
      <button type="button" className="collapse__button" onClick={() => setIsOpen(true)}>
        {title}
        <img src={arrowCollapse} alt="arrow" className="collapse__arrow" />
      </button>
    </div>
  )

};

export default Collapse;
